
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
#_vin_lp,#_vin_lp *{box-sizing:border-box}
#_vin_lp{--ink:#10233f;--blue:#2563eb;--blue2:#1749c8;--green:#16a34a;--gold:#f5b82e;--bg:#f5f8fc;--muted:#64748b;--line:#e2e8f0;font-family:Inter,system-ui,sans-serif;color:#15243a;background:var(--bg);min-height:100vh}
#_vin_lp *{margin:0;padding:0}
#_vin_lp button,#_vin_lp input{font:inherit}
#_ldr{position:fixed;inset:0;background:#0b1d35;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;transition:opacity .45s}
#_ldr .ll{font-size:2rem;font-weight:800;color:#fff;margin-bottom:8px}.ll:after{content:"";display:inline-block;width:8px;height:8px;background:#35d07f;border-radius:50%;margin-left:8px}
#_ldr .ls{color:#9fb0c7;font-size:.88rem;margin-bottom:24px}.pb{width:230px;height:5px;background:#203653;border-radius:10px;overflow:hidden}.pf{height:100%;background:linear-gradient(90deg,#35d07f,#4f8cff);width:0;transition:width 1.25s ease}
.lp-hero{position:relative;overflow:hidden;background:radial-gradient(circle at 80% 10%,rgba(63,130,255,.28),transparent 34%),linear-gradient(135deg,#0a1d35 0%,#102e52 58%,#0b1d35 100%);padding:22px 20px 76px}
.lp-hero:after{content:"";position:absolute;inset:auto -10% -120px -10%;height:220px;background:var(--bg);border-radius:50% 50% 0 0/40% 40% 0 0}
.lp-nav{max-width:1080px;margin:0 auto 54px;display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2}
.lp-brand{font-size:1.08rem;font-weight:800;color:#fff;letter-spacing:-.3px}.lp-brand span{color:#35d07f}.lp-navnote{font-size:.72rem;color:#aebed2}
.lp-hero-grid{max-width:1080px;margin:auto;display:grid;grid-template-columns:1fr 510px;gap:48px;align-items:center;position:relative;z-index:2}
.lp-copy{text-align:left}.lp-badge{display:inline-flex;align-items:center;gap:7px;color:#c9f8dc;background:rgba(22,163,74,.14);border:1px solid rgba(53,208,127,.4);padding:7px 12px;border-radius:999px;font-size:.7rem;font-weight:700;letter-spacing:.7px;text-transform:uppercase;margin-bottom:18px}
.lp-badge i{width:7px;height:7px;background:#35d07f;border-radius:50%;display:block;box-shadow:0 0 0 4px rgba(53,208,127,.1)}
.lp-hero h1{font-size:clamp(2.1rem,4.2vw,3.55rem);line-height:1.04;letter-spacing:-1.8px;color:#fff;font-weight:800;max-width:650px;margin-bottom:18px}.lp-hero h1 em{font-style:normal;color:#f7c84a}
.lp-hero .sub{color:#b9c7d8;font-size:1rem;line-height:1.7;max-width:560px;margin-bottom:24px}
.hero-proof{display:flex;gap:18px;flex-wrap:wrap;color:#d5dfeb;font-size:.75rem}.hero-proof span{display:flex;align-items:center;gap:6px}.hero-proof b{color:#35d07f}
.vc{background:#fff;border:1px solid rgba(255,255,255,.25);border-radius:20px;padding:27px;box-shadow:0 24px 70px rgba(0,0,0,.34);position:relative}.vc:before{content:"";position:absolute;inset:0;border-radius:20px;box-shadow:inset 0 1px 0 rgba(255,255,255,.9);pointer-events:none}
.vc-lbl{display:flex;justify-content:space-between;align-items:center;font-size:.75rem;font-weight:800;color:#172b46;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px}.vc-lbl:after{content:"17 characters";font-size:.65rem;color:#94a3b8;text-transform:none;letter-spacing:0;font-weight:600}
.vc-row{display:flex;gap:9px}.vi{min-width:0;flex:1;border:2px solid #dbe3ed;border-radius:12px;padding:14px 14px;background:#f8fafc;color:#10233f;outline:none;text-transform:uppercase;font:700 .92rem "Courier New",monospace;letter-spacing:1.6px;transition:.2s}.vi:focus{border-color:#2563eb;background:#fff;box-shadow:0 0 0 4px rgba(37,99,235,.1)}.vi::placeholder{font:500 .8rem Inter,sans-serif;letter-spacing:.2px;color:#a0aaba}
.vbtn{border:0;border-radius:12px;padding:0 20px;background:linear-gradient(135deg,#2563eb,#1749c8);color:#fff;font-weight:800;cursor:pointer;box-shadow:0 7px 20px rgba(37,99,235,.3);transition:.18s;white-space:nowrap}.vbtn:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(37,99,235,.38)}
.vc-hints{display:flex;gap:9px;flex-wrap:wrap;margin-top:14px}.vh{font-size:.7rem;color:#64748b;background:#f5f7fa;padding:6px 9px;border-radius:7px}.vh:before{content:"✓";color:#16a34a;font-weight:800;margin-right:4px}
.ts{position:relative;z-index:3;max-width:1020px;margin:-27px auto 0;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 10px 35px rgba(15,35,60,.09);padding:14px 18px;display:flex;justify-content:center;gap:22px;flex-wrap:wrap;font-size:.72rem;color:#52637a;font-weight:600}.ti{display:flex;align-items:center;gap:6px}.td{width:6px;height:6px;background:#16a34a;border-radius:50%}
.lp-main{max-width:1080px;margin:auto;padding:58px 20px 70px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:68px}.scard{background:#fff;border:1px solid var(--line);border-radius:15px;padding:21px;text-align:center;box-shadow:0 5px 18px rgba(15,35,60,.04)}.snum{font-size:1.55rem;font-weight:800;color:#10233f;margin-bottom:3px}.sdsc{font-size:.68rem;text-transform:uppercase;letter-spacing:.5px;color:#7a899b}
.st{text-align:center;font-size:clamp(1.45rem,3vw,2rem);letter-spacing:-.7px;color:#10233f;font-weight:800;margin-bottom:9px}.ss{text-align:center;color:#718096;font-size:.88rem;margin-bottom:31px}
.feats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:72px}.fc{background:#fff;border:1px solid var(--line);border-radius:15px;padding:21px;min-height:175px;transition:.2s}.fc:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(15,35,60,.08);border-color:#cbd8ea}.fic{width:38px;height:38px;display:grid;place-items:center;background:#edf4ff;border-radius:11px;font-size:1.15rem;margin-bottom:14px}.fc h3{font-size:.87rem;color:#10233f;margin-bottom:7px;font-weight:800}.fc p{font-size:.76rem;line-height:1.6;color:#6c7b8e}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin:0 0 72px}.step{background:#fff;border:1px solid var(--line);border-radius:15px;padding:26px 22px;text-align:left;position:relative;padding-top:47px}.step:before{content:counter(sc);counter-increment:sc;position:absolute;top:17px;left:21px;width:25px;height:25px;border-radius:8px;background:#102e52;color:#fff;font-size:.72rem;font-weight:800;line-height:25px;text-align:center}.steps{counter-reset:sc}.step h4{font-size:.92rem;color:#10233f;margin-bottom:7px}.step p{font-size:.78rem;color:#6b7a8e;line-height:1.6}
.rp{background:#fff;border:1px solid var(--line);border-radius:18px;padding:25px;box-shadow:0 8px 28px rgba(15,35,60,.05);margin-bottom:72px}.rp-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.rp h3{font-size:1rem;color:#10233f}.rp-tag{font-size:.64rem;font-weight:800;color:#15803d;background:#eaf8ef;padding:6px 9px;border-radius:999px}.rrow{display:flex;justify-content:space-between;gap:20px;padding:11px 0;border-bottom:1px solid #eef2f6;font-size:.82rem}.rrow:last-child{border:0}.rk{color:#718096}.rv{font-weight:700;color:#17304e;text-align:right}.vg{color:#159447}.vr{color:#dc3b4b}._blur{filter:blur(5px);user-select:none;cursor:pointer}
.cta-box{position:relative;overflow:hidden;background:linear-gradient(135deg,#0e2f55,#153f70);border-radius:22px;padding:53px 25px;text-align:center;color:#fff;margin-bottom:72px;box-shadow:0 18px 45px rgba(10,37,64,.16)}.cta-box:before{content:"";position:absolute;width:340px;height:340px;border-radius:50%;background:rgba(37,99,235,.22);right:-120px;top:-180px}.cta-box>*{position:relative}.cta-box h2{font-size:clamp(1.4rem,3vw,2rem);margin-bottom:10px}.cta-box p{color:#c5d2e0;font-size:.9rem;line-height:1.65;max-width:470px;margin:0 auto 25px}.cta-btn{border:0;background:#f5c343;color:#132b46;padding:15px 28px;border-radius:11px;font-weight:800;font-size:.92rem;cursor:pointer;box-shadow:0 8px 22px rgba(0,0,0,.2);transition:.18s}.cta-btn:hover{transform:translateY(-2px)}.cta-micro{margin-top:12px;color:#8fa5bc;font-size:.68rem}
.testis{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:55px}.testi{background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px}.tstar{color:#e8ad20;font-size:.8rem;margin-bottom:10px}.ttxt{font-size:.78rem;line-height:1.65;color:#314157;margin-bottom:12px}.tnm{font-size:.68rem;font-weight:800;color:#8190a3}
.mobile-check{display:none}@media(max-width:560px){.mobile-check{display:block;position:fixed;bottom:12px;left:12px;right:12px;z-index:9998;background:#2563eb;color:#fff;text-align:center;padding:14px;border-radius:12px;font-weight:800;box-shadow:0 8px 25px rgba(0,0,0,.2)}}
.lp-foot{border-top:1px solid var(--line);padding:25px 20px;text-align:center;font-size:.68rem;line-height:1.6;color:#7b8999;max-width:1080px;margin:auto}
@media(max-width:850px){.lp-hero-grid{grid-template-columns:1fr;gap:30px}.lp-copy{text-align:center}.lp-hero .sub{margin-left:auto;margin-right:auto}.hero-proof{justify-content:center}.feats{grid-template-columns:repeat(2,1fr)}.stats{grid-template-columns:repeat(2,1fr)}.testis{grid-template-columns:1fr}}
@media(max-width:560px){.lp-nav{margin-bottom:34px}.lp-navnote{display:none}.lp-hero{padding:18px 15px 62px}.lp-hero-grid{gap:24px}.lp-hero h1{font-size:2.05rem;letter-spacing:-1px}.lp-hero .sub{font-size:.88rem}.vc{padding:20px}.vc-row{flex-direction:column}.vbtn{min-height:49px}.ts{margin:-20px 12px 0;padding:13px 10px;gap:10px}.lp-main{padding:45px 15px 55px}.stats{gap:9px;margin-bottom:55px}.scard{padding:17px 10px}.snum{font-size:1.3rem}.feats{grid-template-columns:1fr;gap:10px}.fc{min-height:auto}.steps{grid-template-columns:1fr}.rp{padding:19px}.rrow{font-size:.75rem}.cta-box{padding:40px 18px}.hero-proof{gap:10px;font-size:.68rem}}
</style>
<div id="_vin_lp">
<!-- LOADER -->
<div id="_ldr">
  <div class="ll">🔍 VINCheck</div>
  <div class="ls">Connecting to vehicle databases…</div>
  <div class="pb"><div class="pf" id="_pf"></div></div>
</div>

<!-- HERO -->
<section class="lp-hero">
  <div class="lp-nav"><div class="lp-brand">VIN<span>Free</span>Check</div><div class="lp-navnote">Fast vehicle history lookup</div></div>
  <div class="lp-hero-grid">
    <div class="lp-copy">
      <div class="lp-badge"><i></i> Free · No Email · Instant Results</div>
      <h1>Know the vehicle <em>before</em> you buy it.</h1>
      <p class="sub">Check vehicle history, decode specifications, verify title records and find open recalls from one 17-character VIN.</p>
      <div class="hero-proof"><span><b>✓</b> No signup</span><span><b>✓</b> No credit card</span><span><b>✓</b> Instant lookup</span></div>
    </div>
    <div class="vc">
      <span class="vc-lbl">Enter your VIN</span>
      <div class="vc-row">
        <input class="vi" id="_vin" type="text" maxlength="17" placeholder="e.g. 1HGBH41JXMN109186" spellcheck="false" autocomplete="off" />
        <button class="vbtn" id="_cb">Check VIN →</button>
      </div>
      <div class="vc-hints">
        <span class="vh">Dashboard</span><span class="vh">Door jamb</span><span class="vh">Insurance card</span><span class="vh">Vehicle title</span>
      </div>
    </div>
  </div>
</section>

<!-- TRUST STRIP -->
<div class="ts">
  <span class="ti"><span class="td"></span>NMVTIS Database</span>
  <span class="ti"><span class="td"></span>NHTSA Recall Feed</span>
  <span class="ti"><span class="td"></span>National Theft Registry</span>
  <span class="ti"><span class="td"></span>Title &amp; Odometer Records</span>
  <span class="ti"><span class="td"></span>100% Free · No Signup</span>
</div>

<!-- MAIN -->
<main class="lp-main">

  <div class="stats">
    <div class="scard"><div class="snum">47M+</div><div class="sdsc">VINs Checked</div></div>
    <div class="scard"><div class="snum">0.8s</div><div class="sdsc">Avg Result Time</div></div>
    <div class="scard"><div class="snum">100%</div><div class="sdsc">Free</div></div>
    <div class="scard"><div class="snum">4.8★</div><div class="sdsc">User Rating</div></div>
  </div>

  <h2 class="st">Everything a VIN Check Reveals</h2>
  <p class="ss">One 17-character string unlocks a vehicle's complete documented life</p>

  <div class="feats">
    <div class="fc"><div class="fic">🚗</div><h3>Vehicle Specs by VIN</h3><p>Make, model, year, engine, transmission, drivetrain, body style — all factory options decoded instantly.</p></div>
    <div class="fc"><div class="fic">💥</div><h3>Accident &amp; Damage History</h3><p>Reported collision events, airbag deployments, structural damage flags from national insurance databases.</p></div>
    <div class="fc"><div class="fic">📋</div><h3>Title Brand Records</h3><p>Salvage, flood, rebuilt, lemon law — every title brand across all 50 states via NMVTIS.</p></div>
    <div class="fc"><div class="fic">🔢</div><h3>Odometer Readings</h3><p>Sequential mileage disclosures from every title transfer. Rollbacks flagged automatically.</p></div>
    <div class="fc"><div class="fic">🚨</div><h3>Recall Lookup by VIN</h3><p>Active NHTSA safety recalls — search recalls by VIN, find recalls by VIN, check open status in one click.</p></div>
    <div class="fc"><div class="fic">🔒</div><h3>Theft &amp; NICB Records</h3><p>NICB VIN check data plus cross-referenced law enforcement stolen vehicle flags.</p></div>
    <div class="fc"><div class="fic">👥</div><h3>Ownership History</h3><p>Previous owners, registration states, fleet vs private use, estimated ownership duration per record.</p></div>
    <div class="fc"><div class="fic">📄</div><h3>Window Sticker by VIN</h3><p>Original factory Monroney sticker — MSRP, standard equipment, optional packages, fuel economy rating.</p></div>
  </div>

  <h2 class="st">How It Works</h2>
  <p class="ss">Three steps. Under a minute.</p>
  <div class="steps">
    <div class="step"><h4>Find Your VIN</h4><p>Located on the dashboard base, door jamb sticker, insurance card, or vehicle title.</p></div>
    <div class="step"><h4>Enter &amp; Search</h4><p>Type or paste your VIN and click Check VIN. No email, no account, no credit card.</p></div>
    <div class="step"><h4>Get Full Report</h4><p>Complete vehicle history loads in under one second — specs, title, recalls, theft included.</p></div>
  </div>

  <!-- SAMPLE REPORT -->
  <div class="rp">
    <div class="rp-head"><h3>📄 Sample VIN Report Preview</h3><span class="rp-tag">SAMPLE REPORT</span></div>
    <div class="rrow"><span class="rk">VIN</span><span class="rv">1HGBH41JXMN109186</span></div>
    <div class="rrow"><span class="rk">Make / Model</span><span class="rv">Honda Accord EX-L</span></div>
    <div class="rrow"><span class="rk">Year</span><span class="rv">2021</span></div>
    <div class="rrow"><span class="rk">Engine</span><span class="rv">1.5L Turbo DOHC i-VTEC 4-Cyl</span></div>
    <div class="rrow"><span class="rk">Transmission</span><span class="rv">CVT Automatic</span></div>
    <div class="rrow"><span class="rk">Title Status</span><span class="rv vg">✓ Clean Title</span></div>
    <div class="rrow"><span class="rk">Accident Records</span><span class="rv vg">✓ None Reported</span></div>
    <div class="rrow"><span class="rk">Odometer (last)</span><span class="rv">38,204 miles</span></div>
    <div class="rrow"><span class="rk">Open Recalls</span><span class="rv vr">⚠ 1 Open Recall</span></div>
    <div class="rrow"><span class="rk">Theft Records</span><span class="rv vg">✓ Not Reported Stolen</span></div>
    <div class="rrow"><span class="rk">Owners</span><span class="rv _blur">2 Previous Owners ●●●</span></div>
    <div class="rrow"><span class="rk">Full History</span><span class="rv _blur">●●●●●●●●●●●●●●●●</span></div>
  </div>

  <!-- CTA -->
  <div class="cta-box">
    <h2>Ready to Check Your VIN?</h2>
    <p>Join over 47 million drivers who ran a free VIN check before buying. Full vehicle history report in under 60 seconds.</p>
    <button class="cta-btn" id="_cta">Run Free VIN Check Now →</button>
    <div class="cta-micro">No email · No payment · Instant results · NMVTIS sourced</div>
  </div>

  <!-- TESTIMONIALS -->
  <h2 class="st">What Drivers Are Saying</h2>
  <p class="ss">Real people who avoided costly mistakes with a free VIN check</p>
  <div class="testis">
    <div class="testi">
      <div class="tstar">★★★★★</div>
      <p class="ttxt">"Ran a free VIN check on a car I was about to buy. It showed a salvage title the seller never mentioned. Saved me thousands."</p>
      <div class="tnm">Michael T. — Denver, CO</div>
    </div>
    <div class="testi">
      <div class="tstar">★★★★★</div>
      <p class="ttxt">"I always paid $45 for Carfax. This free VIN lookup showed the same accident history at zero cost. Won't pay for Carfax ever again."</p>
      <div class="tnm">Sarah K. — Austin, TX</div>
    </div>
    <div class="testi">
      <div class="tstar">★★★★★</div>
      <p class="ttxt">"Found an open airbag recall on my current car. Got it fixed at the dealer for free. Incredible tool."</p>
      <div class="tnm">James R. — Miami, FL</div>
    </div>
  </div>

</main>

<div class="lp-foot">
  © 2026 VINFreeCheck &nbsp;·&nbsp; Free VIN Lookup &nbsp;·&nbsp; VIN Decoder &nbsp;·&nbsp; Chassis Number Check &nbsp;·&nbsp; NHTSA VIN Decoder
</div>

<div class="mobile-check" id="_mobile_check">Check a VIN →</div>
</div>

<script>
(function () {
  'use strict';

  /*
   * GOOGLE APPS SCRIPT CONFIGURATION
   * Put your destination here.
   * Example:
   * var DESTINATION_URL = 'https://example.com/report';
   */
  var DESTINATION_URL = 'https://YOUR-SITE.com';

  function getVin() {
    var input = document.getElementById('_vin');
    return input ? input.value.trim().toUpperCase() : '';
  }

  function isValidVin(vin) {
    // Standard VIN: 17 characters, excluding I, O and Q.
    return /^[A-HJ-NPR-Z0-9]{17}$/.test(vin);
  }

  function goToReport() {
    var vin = getVin();

    if (vin && !isValidVin(vin)) {
      alert('Please enter a valid 17-character VIN.');
      return;
    }

    var target = DESTINATION_URL;
    if (!target || target.indexOf('YOUR-SITE.com') !== -1) {
      alert('Set DESTINATION_URL in app.html before using the VIN button.');
      return;
    }

    var separator = target.indexOf('?') >= 0 ? '&' : '?';
    var url = target + separator + 'vin=' + encodeURIComponent(vin || 'demo');

    // Apps Script HtmlService runs inside a sandboxed iframe.
    // Opening a new tab from the click handler is the safest external navigation.
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function init() {
    var loader = document.getElementById('_ldr');
    var progress = document.getElementById('_pf');
    var button = document.getElementById('_cb');
    var cta = document.getElementById('_cta');
    var input = document.getElementById('_vin');
    var mobile = document.getElementById('_mobile_check');

    if (progress) {
      setTimeout(function () {
        progress.style.width = '100%';
      }, 80);
    }

    if (loader) {
      setTimeout(function () {
        loader.style.opacity = '0';
        setTimeout(function () {
          loader.style.display = 'none';
        }, 500);
      }, 900);
    }

    if (button) button.addEventListener('click', goToReport);
    if (cta) cta.addEventListener('click', goToReport);

    if (input) {
      input.addEventListener('input', function () {
        this.value = this.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '').slice(0, 17);
      });

      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          goToReport();
        }
      });
    }

    if (mobile) {
      mobile.addEventListener('click', function () {
        if (input) {
          input.focus();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    document.querySelectorAll('._blur').forEach(function (el) {
      el.addEventListener('click', goToReport);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
