<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kapsiar.sk traffic</title>
    <link rel="stylesheet" href="css/traffic.css" type="text/css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js" defer></script>
    <script src="scripts/traffic.js" type="module"></script>
</head>

<body>
    <main class="traffic">
        <header>
            <h1>kapsiar.sk traffic</h1>
            <p>Aggregated web-server request statistics, split by client class (human, bot, scanner, internal, unknown).</p>
            <p class="meta">Data range: <span id="range">…</span></p>
            <p class="meta">Generated at: <span id="generated">…</span></p>
            <p id="banner" class="note" role="status" hidden></p>
        </header>

        <p id="error" class="error" role="alert" hidden></p>

        <section class="controls">
            <div id="rangeButtons" role="group" aria-label="Date range">
                <button type="button" data-range="7" aria-pressed="false">7 days</button>
                <button type="button" data-range="30" aria-pressed="false">30 days</button>
                <button type="button" data-range="all" aria-pressed="true">All</button>
            </div>
            <p class="hint">Click a legend entry to hide or show that class or status. Top paths cover the whole period, not the selected range.</p>
        </section>
        <section class="tiles" aria-label="Headline numbers">
            <div class="tile"><span class="label">Total requests</span><span class="value" id="tileTotal">…</span></div>
            <div class="tile"><span class="label">Scanner + bot</span><span class="value" id="tileAuto">…</span></div>
            <div class="tile"><span class="label">Human</span><span class="value" id="tileHuman">…</span></div>
            <div class="tile"><span class="label">4xx + 5xx</span><span class="value" id="tileErr">…</span></div>
        </section>

        <section class="chart-card wide">
            <h2>Requests per day</h2>
            <div class="chart-box"><canvas id="chartDaily" aria-label="Requests per day by client class"></canvas></div>
        </section>
        <section class="chart-card">
            <h2>Share by client class</h2>
            <div class="chart-box"><canvas id="chartTotals" aria-label="Share of requests by client class"></canvas></div>
        </section>
        <section class="chart-card">
            <h2>HTTP status share per day</h2>
            <div class="chart-box"><canvas id="chartStatus" aria-label="Status class share per day"></canvas></div>
        </section>
        <section class="chart-card wide">
            <h2>Top 10 paths (whole period)</h2>
            <div class="chart-box tall"><canvas id="chartPaths" aria-label="Top 10 requested paths"></canvas></div>
        </section>
    </main>
</body>

</html>
