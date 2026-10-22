const COLORS = {
  human: "#2a78d6",
  bot: "#eb6834",
  scanner: "#1baf7a",
  unknown: "#eda100",
  internal: "#e87ba4",
};
const CLASSES = Object.keys(COLORS);
// Status palette (separate from the class colours): green / blue / amber-orange / red, all readable on black.
const STATUS_COLORS = { "2xx": "#4cc38a", "3xx": "#5aa9ff", "4xx": "#ff9f43", "5xx": "#ff4d5e" };
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

const charts = {};
const state = { data: null, range: "all" };

function pct(part, whole) {
  return whole > 0 ? `${((part / whole) * 100).toFixed(1)}%` : "n/a";
}

// Days kept for the selected range, counted back from the last day in the data.
function selectedDays(data) {
  const all = sortedUnique(data.daily.map((r) => r.period));
  if (state.range === "all") return all;
  return all.slice(-Number(state.range));
}

function dailyFor(data, days) {
  const set = new Set(days);
  return data.daily.filter((r) => set.has(r.period));
}

function dailyDatasets(data, days) {
  return CLASSES.map((c) => ({
    label: c,
    backgroundColor: COLORS[c],
    data: days.map((d) =>
      data.daily.filter((r) => r.period === d && r.client_class === c).reduce((s, r) => s + r.requests, 0)
    ),
  }));
}

function statusDatasets(data, days) {
  const classes = sortedUnique(data.status_daily.map((r) => r.status_class));
  return classes.map((s) => ({
    label: s,
    backgroundColor: STATUS_COLORS[s] || "#888",
    data: days.map((d) => {
      const row = data.status_daily.find((r) => r.period === d && r.status_class === s);
      return row ? Math.round(row.share * 1000) / 10 : 0;
    }),
  }));
}

function totalsFor(rows) {
  return CLASSES.map((c) => rows.filter((r) => r.client_class === c).reduce((s, r) => s + r.requests, 0));
}

function renderHeadline(data, days) {
  const rows = dailyFor(data, days);
  const total = rows.reduce((s, r) => s + r.requests, 0);
  const byClass = (c) => rows.filter((r) => r.client_class === c).reduce((s, r) => s + r.requests, 0);
  // Error requests = status share x that day's total requests.
  const perDay = {};
  rows.forEach((r) => (perDay[r.period] = (perDay[r.period] || 0) + r.requests));
  const set = new Set(days);
  const errors = data.status_daily
    .filter((r) => set.has(r.period) && (r.status_class === "4xx" || r.status_class === "5xx"))
    .reduce((s, r) => s + r.share * (perDay[r.period] || 0), 0);
  setText("tileTotal", total.toLocaleString("en-GB"));
  setText("tileAuto", pct(byClass("scanner") + byClass("bot"), total));
  setText("tileHuman", pct(byClass("human"), total));
  setText("tileErr", pct(errors, total));
}

function renderRanged() {
  const data = state.data;
  const days = selectedDays(data);
  const { daily, totals, status } = charts;
  daily.data.labels = days;
  daily.data.datasets.forEach((ds, i) => (ds.data = dailyDatasets(data, days)[i].data));
  daily.update();
  totals.data.datasets[0].data = totalsFor(dailyFor(data, days));
  totals.update();
  status.data.labels = days;
  status.data.datasets.forEach((ds, i) => (ds.data = statusDatasets(data, days)[i].data));
  status.update();
  renderHeadline(data, days);
  document.querySelectorAll("#rangeButtons button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.range === state.range));
  });
}

function buildCharts(data) {
  const days = selectedDays(data);
  charts.daily = new Chart(document.getElementById("chartDaily"), {
    type: "bar",
    data: { labels: days, datasets: dailyDatasets(data, days) },
    options: baseOptions({ scales: stackedScales("requests") }),
  });
  charts.totals = new Chart(document.getElementById("chartTotals"), {
    type: "doughnut",
    data: {
      labels: CLASSES,
      datasets: [
        { data: totalsFor(dailyFor(data, days)), backgroundColor: CLASSES.map((c) => COLORS[c]), borderColor: "#000" },
      ],
    },
    options: baseOptions(),
  });
  charts.status = new Chart(document.getElementById("chartStatus"), {
    type: "bar",
    data: { labels: days, datasets: statusDatasets(data, days) },
    options: baseOptions({ scales: stackedScales("share of requests (%)", 100) }),
  });
  pathsChart(data);
}

function truncate(s, n = 40) {
  return s.length > n ? `${s.slice(0, n - 1)}…` : s;
}

// Top paths over the whole period, merged across classes, stacked by class.
function pathsChart(data) {
  const sums = new Map();
  for (const r of data.top_paths) {
    const e = sums.get(r.value) || { total: 0 };
    e.total += r.requests;
    e[r.client_class] = (e[r.client_class] || 0) + r.requests;
    sums.set(r.value, e);
  }
  const top = [...sums.entries()].sort((a, b) => b[1].total - a[1].total).slice(0, 10);
  const full = top.map(([v]) => v);
  charts.paths = new Chart(document.getElementById("chartPaths"), {
    type: "bar",
    data: {
      labels: full.map((v) => truncate(v)),
      datasets: CLASSES.map((c) => ({
        label: c,
        backgroundColor: COLORS[c],
        data: top.map(([, e]) => e[c] || 0),
      })),
    },
    options: baseOptions({
      indexAxis: "y",
      plugins: {
        legend: { labels: { color: TEXT } },
        tooltip: { callbacks: { title: (items) => full[items[0].dataIndex] } },
      },
      scales: {
        x: { stacked: true, ticks: { color: TEXT }, grid: { color: GRID } },
        y: { stacked: true, ticks: { color: TEXT, font: { size: 10 } }, grid: { color: GRID } },
      },
    }),
  });
}

async function main() {
  let data;
  let demo = new URLSearchParams(location.search).get("demo") === "1";
  if (!demo) {
    try {
      const res = await fetch("json/traffic.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      data = await res.json();
    } catch (e) {
      demo = true; // 404 or unparsable: fall back to the committed sample
    }
  }
  if (demo) {
    try {
      const res = await fetch("json/traffic.sample.json");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      data = await res.json();
    } catch (e) {
      showError(`Could not load traffic data (${e.message}).`);
      return;
    }
  }
  const banner = document.getElementById("banner");
  banner.textContent = demo
    ? "Demo data: anonymised 2,000-request sample"
    : `Live data (generated ${data.generated_at})`;
  banner.classList.add(demo ? "demo" : "live");
  banner.hidden = false;
  if (typeof Chart === "undefined") {
    showError("Could not load the Chart.js library.");
    return;
  }
  setText("range", `${data.from} → ${data.to}`);
  setText("generated", data.generated_at);
  state.data = data;
  const r = new URLSearchParams(location.search).get("range");
  if (r === "7" || r === "30") state.range = r;
  buildCharts(data);
  renderRanged();
  document.querySelectorAll("#rangeButtons button").forEach((b) =>
    b.addEventListener("click", () => {
      state.range = b.dataset.range;
      renderRanged();
    })
  );
}

// Chart.js is loaded with `defer`; wait until the document (and deferred scripts) are ready.
if (document.readyState === "complete") main();
else window.addEventListener("load", main);
