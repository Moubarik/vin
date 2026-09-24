/* app.js — simple Google Apps Script HtmlService version */
(function () {
  'use strict';

  // CHANGE THIS TO YOUR REAL DESTINATION
  var DESTINATION_URL = 'https://YOUR-SITE.com';

  var css = `
    * { box-sizing: border-box; }

    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
      font-family: Arial, Helvetica, sans-serif;
      background: #f4f7fb;
      color: #172033;
    }

    body {
      overflow-x: hidden;
    }

    .vin-page {
      width: 100%;
      min-height: 100vh;
      padding: 20px 14px 35px;
    }

    .vin-wrap {
      width: 100%;
      max-width: 760px;
      margin: 0 auto;
    }

    .vin-header {
      text-align: center;
      padding: 18px 10px 16px;
    }

    .vin-logo {
      font-size: 25px;
      font-weight: 800;
      color: #15365f;
      margin-bottom: 6px;
    }

    .vin-logo span {
      color: #20a05a;
    }

    .vin-header p {
      margin: 0;
      color: #68758a;
      font-size: 14px;
    }

    .vin-card {
      background: #ffffff;
      border: 1px solid #dfe6ef;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 8px 28px rgba(22, 45, 75, 0.08);
    }

    .vin-title {
      margin: 0 0 8px;
      text-align: center;
      font-size: clamp(25px, 6vw, 38px);
      line-height: 1.15;
      color: #132b4b;
    }

    .vin-title span {
      color: #2563eb;
    }

    .vin-subtitle {
      margin: 0 auto 22px;
      max-width: 560px;
      text-align: center;
      line-height: 1.6;
      color: #68758a;
      font-size: 14px;
    }

    .vin-label {
      display: block;
      margin-bottom: 7px;
      font-size: 13px;
      font-weight: 700;
      color: #31445e;
    }

    .vin-row {
      display: flex;
      gap: 10px;
      width: 100%;
    }

    .vin-input {
      flex: 1 1 auto;
      min-width: 0;
      width: 100%;
      height: 50px;
      padding: 0 14px;
      border: 2px solid #d7e0eb;
      border-radius: 10px;
      outline: none;
      background: #f9fbfd;
      color: #10233f;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }

    .vin-input:focus {
      border-color: #2563eb;
      background: #fff;
    }

    .vin-button {
      flex: 0 0 auto;
      height: 50px;
      padding: 0 19px;
      border: 0;
      border-radius: 10px;
      background: #2563eb;
      color: #fff;
      font-size: 14px;
      font-weight: 800;
      cursor: pointer;
      white-space: nowrap;
    }

    .vin-button:hover {
      background: #1d4ed8;
    }

    .vin-button:active {
      transform: translateY(1px);
    }

    .vin-help {
      margin-top: 9px;
      color: #7a8798;
      font-size: 12px;
      line-height: 1.5;
    }

    .vin-points {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 20px;
    }

    .vin-point {
      padding: 12px 10px;
      border-radius: 10px;
      background: #f6f8fb;
      text-align: center;
      color: #53647a;
      font-size: 12px;
      line-height: 1.4;
    }

    .vin-point b {
      display: block;
      margin-bottom: 3px;
      color: #16385f;
      font-size: 13px;
    }

    .vin-notice {
      display: none;
      margin-top: 12px;
      padding: 10px 12px;
      border-radius: 9px;
      background: #fff3f3;
      color: #b4232d;
      font-size: 12px;
      line-height: 1.45;
    }

    .vin-footer {
      padding: 18px 10px 0;
      text-align: center;
      color: #8793a3;
      font-size: 11px;
      line-height: 1.5;
    }

    @media (max-width: 600px) {
      .vin-page {
        padding: 10px 10px 25px;
      }

      .vin-card {
        padding: 18px 15px;
        border-radius: 13px;
      }

      .vin-logo {
        font-size: 22px;
      }

      .vin-header p {
        font-size: 13px;
      }

      .vin-row {
        flex-direction: column;
      }

      .vin-input,
      .vin-button {
        width: 100%;
        height: 48px;
      }

      .vin-button {
        padding: 0 14px;
      }

      .vin-points {
        grid-template-columns: 1fr;
      }

      .vin-point {
        text-align: left;
        padding: 10px 12px;
      }

      .vin-point b {
        display: inline;
        margin-right: 4px;
      }
    }
  `;

  var html = `
    <div class="vin-page">
      <div class="vin-wrap">

        <header class="vin-header">
          <div class="vin-logo">VIN<span>Free</span>Check</div>
          <p>Simple vehicle history lookup</p>
        </header>

        <main class="vin-card">
          <h1 class="vin-title">Check a VIN <span>before you buy</span></h1>

          <p class="vin-subtitle">
            Enter the vehicle's 17-character VIN to continue to the vehicle
            history and specification lookup.
          </p>

          <label class="vin-label" for="vinInput">Vehicle VIN</label>

          <div class="vin-row">
            <input
              id="vinInput"
              class="vin-input"
              type="text"
              maxlength="17"
              autocomplete="off"
              autocapitalize="characters"
              spellcheck="false"
              placeholder="Enter 17-character VIN"
              aria-label="Vehicle VIN"
            >
            <button id="vinButton" class="vin-button" type="button">
              Check VIN
            </button>
          </div>

          <div class="vin-help">
            VINs are normally found on the dashboard, driver's door jamb,
            insurance card, or vehicle title.
          </div>

          <div id="vinNotice" class="vin-notice"></div>

          <div class="vin-points">
            <div class="vin-point">
              <b>17 characters</b> Standard VIN format
            </div>
            <div class="vin-point">
              <b>No signup</b> Keep the page simple
            </div>
            <div class="vin-point">
              <b>Mobile ready</b> Responsive on phones
            </div>
          </div>
        </main>

        <footer class="vin-footer">
          VINFreeCheck &nbsp;·&nbsp; Vehicle VIN Lookup
        </footer>

      </div>
    </div>
  `;

  function showError(message) {
    var box = document.getElementById('vinNotice');
    if (!box) return;
    box.textContent = message;
    box.style.display = 'block';
  }

  function hideError() {
    var box = document.getElementById('vinNotice');
    if (!box) return;
    box.textContent = '';
    box.style.display = 'none';
  }

  function getVin() {
    var input = document.getElementById('vinInput');
    return input ? input.value.trim().toUpperCase() : '';
  }

  function isValidVin(vin) {
    // 17 characters; I, O and Q are excluded by the standard VIN alphabet.
    return /^[A-HJ-NPR-Z0-9]{17}$/.test(vin);
  }

  function checkVin() {
    hideError();

    var vin = getVin();

    if (!isValidVin(vin)) {
      showError('Please enter a valid 17-character VIN.');
      var input = document.getElementById('vinInput');
      if (input) input.focus();
      return;
    }

    if (!DESTINATION_URL || DESTINATION_URL.indexOf('YOUR-SITE.com') !== -1) {
      showError('Set DESTINATION_URL in app.js before using the Check VIN button.');
      return;
    }

    var separator = DESTINATION_URL.indexOf('?') === -1 ? '?' : '&';
    var url = DESTINATION_URL + separator + 'vin=' + encodeURIComponent(vin);

    // User click => allowed external navigation from Apps Script HtmlService.
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function init() {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    document.body.innerHTML = html;

    var input = document.getElementById('vinInput');
    var button = document.getElementById('vinButton');

    if (input) {
      input.addEventListener('input', function () {
        this.value = this.value
          .toUpperCase()
          .replace(/[^A-HJ-NPR-Z0-9]/g, '')
          .slice(0, 17);

        hideError();
      });

      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          checkVin();
        }
      });
    }

    if (button) {
      button.addEventListener('click', checkVin);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
