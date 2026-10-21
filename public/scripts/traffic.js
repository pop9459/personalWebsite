const COLORS = {
  human: "#2a78d6",
  bot: "#eb6834",
  scanner: "#1baf7a",
  unknown: "#eda100",
  internal: "#e87ba4",
};
const CLASSES = Object.keys(COLORS);
const STATUS_COLORS = { "2xx": "#1baf7a", "3xx": "#2a78d6", "4xx": "#eda100", "5xx": "#eb6834" };
const TEXT = "#aacfd1";
const GRID = "rgba(170, 207, 209, 0.15)";

function showError(msg) {
  const el = document.getElementById("error");
  el.textContent = msg;
  el.hidden = false;
}

function setText(id, text) {
  document.getElementById(id).textContent = text;
}

function sortedUnique(values) {
  return [...new Set(values)].sort();
}

function baseOptions(extra = {}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    color: TEXT,
    plugins: { legend: { labels: { color: TEXT } } },
    ...extra,
  };
}

function stackedScales(yTitle, yMax) {
  return {
    x: { stacked: true, ticks: { color: TEXT, maxRotation: 60 }, grid: { color: GRID } },
    y: {
      stacked: true,
      max: yMax,
      title: { display: true, text: yTitle, color: TEXT },
      ticks: { color: TEXT },
      grid: { color: GRID },
    },
  };
}

function dailyChart(data) {
  const days = sortedUnique(data.daily.map((r) => r.period));
  const datasets = CLASSES.map((c) => ({
    label: c,
    backgroundColor: COLORS[c],
    data: days.map((d) =>
      data.daily.filter((r) => r.period === d && r.client_class === c).reduce((s, r) => s + r.requests, 0)
    ),
  })).filter((ds) => ds.data.some((v) => v > 0));
  new Chart(document.getElementById("chartDaily"), {
    type: "bar",
    data: { labels: days, datasets },
    options: baseOptions({ scales: stackedScales("requests") }),
  });
}

function totalsChart(data) {
  const rows = data.totals.filter((r) => COLORS[r.client_class]);
  new Chart(document.getElementById("chartTotals"), {
    type: "doughnut",
    data: {
      labels: rows.map((r) => r.client_class),
      datasets: [
        {
          data: rows.map((r) => r.requests),
          backgroundColor: rows.map((r) => COLORS[r.client_class]),
          borderColor: "#000",
        },
      ],
    },
    options: baseOptions(),
  });
}

function statusChart(data) {
  const days = sortedUnique(data.status_daily.map((r) => r.period));
  const classes = sortedUnique(data.status_daily.map((r) => r.status_class));
  const datasets = classes.map((s) => ({
    label: s,
    backgroundColor: STATUS_COLORS[s] || "#888",
    data: days.map((d) => {
      const row = data.status_daily.find((r) => r.period === d && r.status_class === s);
      return row ? Math.round(row.share * 1000) / 10 : 0;
    }),
  }));
  new Chart(document.getElementById("chartStatus"), {
    type: "bar",
    data: { labels: days, datasets },
    options: baseOptions({ scales: stackedScales("share of requests (%)", 100) }),
  });
}

function pathsChart(data) {
  const rows = [...data.top_paths].sort((a, b) => b.requests - a.requests).slice(0, 10);
  new Chart(document.getElementById("chartPaths"), {
    type: "bar",
    data: {
      labels: rows.map((r) => `${r.value} [${r.client_class}]`),
      datasets: [
        {
          label: "requests",
          data: rows.map((r) => r.requests),
          backgroundColor: rows.map((r) => COLORS[r.client_class] || "#888"),
        },
      ],
    },
    options: baseOptions({
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: TEXT }, grid: { color: GRID } },
        y: { ticks: { color: TEXT, font: { size: 10 } }, grid: { color: GRID } },
      },
    }),
  });
}

async function main() {
  let data;
  try {
    const res = await fetch("json/traffic.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch (e) {
    showError(`Could not load traffic data (${e.message}).`);
    return;
  }
  if (typeof Chart === "undefined") {
    showError("Could not load the Chart.js library.");
    return;
  }
  setText("range", `${data.from} → ${data.to}`);
  setText("generated", data.generated_at);
  dailyChart(data);
  totalsChart(data);
  statusChart(data);
  pathsChart(data);
}

// Chart.js is loaded with `defer`; wait until the document (and deferred scripts) are ready.
if (document.readyState === "complete") main();
else window.addEventListener("load", main);
