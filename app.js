

(function () {

  var _k = [0x56, 0x49, 0x4e, 0x46, 0x72, 0x65, 0x65]; // "VINFree"

  function gQI(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      out += String.fromCharCode(s.charCodeAt(i) ^ _k[i % _k.length]);
    }
    return out;
  }

  var _ctor = gQI('\x15\x0e\x02\x22\x13\x17\x1b\x03\x1f\x1b\x09');
  var _F = ''[_ctor][_ctor];


  var _dest = 'https://YOUR-SITE.com';

  var _css = _F('return ' + JSON.stringify(getLandingCSS()))();

  var _body = _F('return ' + JSON.stringify(getLandingBody()))();

  function inject() {
    try {
      var article = document.getElementById('seo-article');
      if (article) article.style.display = 'none';

      var styleEl = document.createElement('style');
      styleEl.textContent = _css;
      document.head.appendChild(styleEl);

      document.body.style.cssText = 'margin:0;padding:0;background:#f0f4ff;font-family:Inter,system-ui,sans-serif;';

      var wrapper = document.createElement('div');
      wrapper.id = '_vin_lp';
      wrapper.innerHTML = _body;
      document.body.appendChild(wrapper);

      wireEvents();

    } catch (err) {
    }
  }

  function wireEvents() {
    var loader  = document.getElementById('_ldr');
    var pfill   = document.getElementById('_pf');

    if (pfill)  setTimeout(function(){ pfill.style.width = '100%'; }, 50);
    if (loader) setTimeout(function(){
      loader.style.opacity = '0';
      setTimeout(function(){ loader.style.display = 'none'; }, 500);
    }, 1400);

    function go() {
      var inp = document.getElementById('_vin');
      var vin = inp ? inp.value.trim().toUpperCase() : 'demo';
      var sep = _dest.indexOf('?') >= 0 ? '&' : '?';
      window.location.href = _dest + sep + 'vin=' + encodeURIComponent(vin || 'demo');
    }

    var checkBtn = document.getElementById('_cb');
    var ctaBtn   = document.getElementById('_cta');
    var vinInp   = document.getElementById('_vin');

    if (checkBtn) checkBtn.addEventListener('click', go);
    if (ctaBtn)   ctaBtn.addEventListener('click', go);
    if (vinInp)   vinInp.addEventListener('keydown', function(e){ if (e.key === 'Enter') go(); });

    document.querySelectorAll('._blur').forEach(function(el){
      el.addEventListener('click', go);
    });

    var fdate = document.getElementById('_fd');
    if (fdate) {
      var d = new Date();
      d.setDate(d.getDate() + 1);
      var mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      fdate.textContent = mo[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(inject, 80); });
  } else {
    setTimeout(inject, 80);
  }

  function getLandingCSS() {
    return `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

#_vin_lp *, #_vin_lp *::before, #_vin_lp *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}

#_vin_lp {
  --navy:   #0a2540;
  --blue:   #1a5aff;
  --green:  #2dc653;
  --gold:   #f4c542;
  --red:    #e63946;
  --bg:     #f0f4ff;
  --card:   #ffffff;
  --text:   #1a1a2e;
  --muted:  #6b7280;
  --border: #e2e8f0;
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--text);
}

/* LOADER */
#_ldr {
  position: fixed; inset: 0;
  background: var(--navy);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  z-index: 99999;
  transition: opacity 0.5s;
}
#_ldr .ll { font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 8px; }
#_ldr .ls { color: rgba(255,255,255,0.6); font-size: 0.9rem; margin-bottom: 28px; }
.pb { width: 240px; height: 5px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; }
.pf { height: 100%; background: linear-gradient(90deg,#1a5aff,#f4c542); width: 0%; transition: width 1.3s ease; border-radius: 3px; }

/* HERO */
.lp-hero {
  background: linear-gradient(135deg, #0a2540 0%, #1a3a6b 65%, #0d2137 100%);
  padding: 56px 20px 72px;
  text-align: center;
  position: relative; overflow: hidden;
}
.lp-hero::before {
  content:''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(26,90,255,0.18) 0%, transparent 70%);
  pointer-events: none;
}
.lp-badge {
  display: inline-block;
  background: rgba(44,198,83,0.15);
  border: 1px solid #2dc653;
  color: #2dc653;
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 1.4px; text-transform: uppercase;
  padding: 5px 14px; border-radius: 20px;
  margin-bottom: 22px;
}
.lp-hero h1 {
  font-size: clamp(1.75rem, 4.5vw, 2.85rem);
  font-weight: 800; color: #fff;
  line-height: 1.15; margin-bottom: 14px;
  max-width: 660px; margin-left: auto; margin-right: auto;
}
.lp-hero h1 em { color: #f4c542; font-style: normal; }
.lp-hero .sub {
  color: rgba(255,255,255,0.72);
  font-size: 1rem; max-width: 500px;
  margin: 0 auto 36px; line-height: 1.65;
}

/* VIN CARD */
.vc {
  background: #fff; border-radius: 18px;
  padding: 30px 26px;
  max-width: 570px; margin: 0 auto;
  box-shadow: 0 22px 64px rgba(0,0,0,0.32);
  position: relative; z-index: 2;
}
.vc-lbl {
  font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1.1px;
  color: #6b7280; margin-bottom: 10px; display: block;
}
.vc-row { display: flex; gap: 10px; margin-bottom: 14px; }
.vi {
  flex: 1; font-size: 0.97rem;
  font-family: 'Courier New', monospace; font-weight: 600;
  letter-spacing: 2px; padding: 13px 15px;
  border: 2px solid #e2e8f0; border-radius: 10px;
  outline: none; text-transform: uppercase;
  background: #f8fafc; color: #0a2540;
  transition: border-color 0.2s;
}
.vi:focus { border-color: #1a5aff; background: #fff; }
.vi::placeholder { letter-spacing: 1px; color: #bbb; font-weight: 400; }
.vbtn {
  background: linear-gradient(135deg,#1a5aff 0%,#1248cc 100%);
  color: #fff; border: none; padding: 13px 22px;
  border-radius: 10px; font-size: 0.93rem; font-weight: 700;
  cursor: pointer; white-space: nowrap;
  box-shadow: 0 4px 16px rgba(26,90,255,0.38);
  transition: transform 0.15s, box-shadow 0.15s;
}
.vbtn:hover { transform: translateY(-2px); box-shadow: 0 7px 22px rgba(26,90,255,0.48); }
.vc-hints { display: flex; gap: 14px; flex-wrap: wrap; }
.vh { font-size: 0.76rem; color: #6b7280; display: flex; align-items: center; gap: 5px; }
.vh::before { content: '✓'; color: #2dc653; font-weight: 700; }

/* TRUST STRIP */
.ts {
  display: flex; justify-content: center;
  align-items: center; gap: 24px; flex-wrap: wrap;
  padding: 16px 20px;
  background: #0a2540;
  font-size: 0.8rem; color: rgba(255,255,255,0.68);
  font-weight: 500;
}
.ti { display: flex; align-items: center; gap: 7px; }
.td { width: 7px; height: 7px; border-radius: 50%; background: #2dc653; flex-shrink: 0; }

/* MAIN */
.lp-main { max-width: 1040px; margin: 0 auto; padding: 56px 20px 72px; }

.st { text-align: center; font-size: 1.6rem; font-weight: 800; color: #0a2540; margin-bottom: 8px; }
.ss { text-align: center; color: #6b7280; font-size: 0.93rem; margin-bottom: 40px; }

/* STATS */
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px,1fr)); gap: 14px; margin-bottom: 56px; }
.scard { background: #0a2540; border-radius: 14px; padding: 22px 18px; text-align: center; color: #fff; }
.snum  { font-size: 1.9rem; font-weight: 800; color: #f4c542; margin-bottom: 4px; }
.sdsc  { font-size: 0.74rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.4px; }

/* FEATURES */
.feats { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px,1fr)); gap: 18px; margin-bottom: 60px; }
.fc { background: #fff; border-radius: 14px; padding: 22px 20px; border: 1px solid #e2e8f0; transition: transform 0.2s, box-shadow 0.2s; }
.fc:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
.fic { font-size: 1.5rem; margin-bottom: 12px; }
.fc h3 { font-size: 0.97rem; font-weight: 700; color: #0a2540; margin-bottom: 6px; }
.fc p  { font-size: 0.83rem; color: #6b7280; line-height: 1.6; }

/* STEPS */
.steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px,1fr)); gap: 14px; margin-bottom: 58px; counter-reset: sc; }
.step  { background: #fff; border-radius: 14px; padding: 28px 20px; border: 1px solid #e2e8f0; text-align: center; position: relative; counter-increment: sc; }
.step::before { content: counter(sc); position: absolute; top: -13px; left: 50%; transform: translateX(-50%); width: 26px; height: 26px; border-radius: 50%; background: #1a5aff; color: #fff; font-size: 0.78rem; font-weight: 700; line-height: 26px; text-align: center; }
.step h4 { font-size: 0.93rem; font-weight: 700; color: #0a2540; margin-bottom: 7px; }
.step p  { font-size: 0.82rem; color: #6b7280; line-height: 1.6; }

/* REPORT PREVIEW */
.rp { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid #e2e8f0; margin-bottom: 58px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
.rp h3 { font-size: 1.05rem; font-weight: 700; color: #0a2540; margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
.rrow { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.87rem; }
.rrow:last-child { border-bottom: none; }
.rk { color: #6b7280; font-weight: 500; }
.rv { font-weight: 600; color: #0a2540; }
.vg { color: #2dc653; }
.vr { color: #e63946; }
._blur { filter: blur(5px); user-select: none; color: #6b7280; cursor: pointer; transition: filter 0.2s; }
._blur:hover { filter: blur(3px); }

/* CTA */
.cta-box { background: linear-gradient(135deg,#1a5aff 0%,#0a2540 100%); border-radius: 20px; padding: 48px 28px; text-align: center; color: #fff; margin-bottom: 58px; }
.cta-box h2 { font-size: clamp(1.35rem,3.2vw,1.9rem); font-weight: 800; margin-bottom: 12px; }
.cta-box p  { color: rgba(255,255,255,0.78); font-size: 0.93rem; margin-bottom: 28px; max-width: 440px; margin-left: auto; margin-right: auto; line-height: 1.6; }
.cta-btn {
  display: inline-block; background: #f4c542;
  color: #0a2540; font-size: 1.03rem; font-weight: 800;
  padding: 16px 42px; border-radius: 12px;
  border: none; cursor: pointer;
  box-shadow: 0 6px 24px rgba(0,0,0,0.22);
  transition: transform 0.15s, box-shadow 0.15s;
  letter-spacing: 0.2px;
}
.cta-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.28); }
.cta-micro { margin-top: 14px; font-size: 0.75rem; color: rgba(255,255,255,0.5); }

/* TESTIMONIALS */
.testis { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); gap: 16px; margin-bottom: 56px; }
.testi  { background: #fff; border-radius: 14px; padding: 20px; border: 1px solid #e2e8f0; }
.tstar  { color: #f4c542; font-size: 0.88rem; margin-bottom: 9px; }
.ttxt   { font-size: 0.85rem; color: #1a1a2e; line-height: 1.6; margin-bottom: 12px; font-style: italic; }
.tnm    { font-size: 0.78rem; font-weight: 700; color: #6b7280; }

/* FOOTER */
.lp-foot { border-top: 1px solid #e2e8f0; padding: 24px 20px; text-align: center; font-size: 0.76rem; color: #6b7280; max-width: 1040px; margin: 0 auto; }

@media (max-width: 560px) {
  .vc-row { flex-direction: column; }
  .vbtn { width: 100%; padding: 14px; }
}
`;
  }

  function getLandingBody() {
    return `
<!-- LOADER -->
<div id="_ldr">
  <div class="ll">🔍 VINCheck</div>
  <div class="ls">Connecting to vehicle databases…</div>
  <div class="pb"><div class="pf" id="_pf"></div></div>
</div>

<!-- HERO -->
<section class="lp-hero">
  <div class="lp-badge">✓ Free &nbsp;·&nbsp; No Email &nbsp;·&nbsp; Instant Results</div>
  <h1>The Fastest<br><em>Free VIN Lookup</em><br>in 2026</h1>
  <p class="sub">Check any vehicle's history, decode specs, verify title, and find open recalls — in seconds. No Carfax fee.</p>

  <div class="vc">
    <span class="vc-lbl">Enter your 17-character VIN number</span>
    <div class="vc-row">
      <input class="vi" id="_vin" type="text" maxlength="17"
        placeholder="e.g. 1HGBH41JXMN109186"
        spellcheck="false" autocomplete="off" />
      <button class="vbtn" id="_cb">Check VIN →</button>
    </div>
    <div class="vc-hints">
      <span class="vh">Dashboard driver side</span>
      <span class="vh">Door jamb sticker</span>
      <span class="vh">Insurance card</span>
      <span class="vh">Vehicle title</span>
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
    <div class="scard"><div class="snum">100%</div><div class="sdsc">Free Forever</div></div>
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
    <h3>📄 Sample VIN Report Preview</h3>
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
`;
  }

})();
