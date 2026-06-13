(function () {
  var CONSENT_KEY = "tpr_microsoft_ads_consent";
  var CLARITY_ID = "w4nply9u93";
  var BANNER_ID = "tpr-ms-consent";
  var MICROSOFT_UET_TAG_ID = "211072489";

  function flushMicrosoftUetCallbacks() {
    var callbacks = window.__tprMicrosoftUetCallbacks || [];
    window.__tprMicrosoftUetCallbacks = [];

    callbacks.forEach(function (callback) {
      try {
        callback();
      } catch (error) {}
    });
  }

  function loadMicrosoftUet(callback) {
    if (typeof callback === "function") {
      window.__tprMicrosoftUetCallbacks = window.__tprMicrosoftUetCallbacks || [];
      window.__tprMicrosoftUetCallbacks.push(callback);
    }

    if (window.__tprMicrosoftUetReady) {
      window.setTimeout(flushMicrosoftUetCallbacks, 0);
      return;
    }

    if (window.__tprMicrosoftUetLoading) {
      return;
    }

    window.__tprMicrosoftUetLoading = true;
    (function (w, d, t, u, o) {
      w[u] = w[u] || [];
      o.ts = new Date().getTime();

      var n = d.createElement(t);
      n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" !== u ? "&q=" + u : "");
      n.async = 1;
      n.onload = n.onreadystatechange = function () {
        var s = this.readyState;
        if (s && s !== "loaded" && s !== "complete") {
          return;
        }

        o.q = w[u];
        w[u] = new UET(o);
        w[u].push("pageLoad");
        window.__tprMicrosoftUetReady = true;
        window.__tprMicrosoftUetLoading = false;
        n.onload = n.onreadystatechange = null;
        flushMicrosoftUetCallbacks();
      };
      n.onerror = function () {
        window.__tprMicrosoftUetLoading = false;
        flushMicrosoftUetCallbacks();
      };

      var i = d.getElementsByTagName(t)[0];
      i.parentNode.insertBefore(n, i);
    })(window, document, "script", "uetq", {
      ti: MICROSOFT_UET_TAG_ID,
      enableAutoSpaTracking: true
    });
  }

  function getStoredConsent() {
    try {
      return window.localStorage.getItem(CONSENT_KEY);
    } catch (error) {
      return null;
    }
  }

  function storeConsent(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (error) {
      // Keep the in-memory signal even when storage is unavailable.
    }
  }

  function setUetConsent(value) {
    window.__tprMicrosoftAdsConsent = value;

    if (value === "granted") {
      window.uetq = window.uetq || [];
      window.uetq.push("consent", "update", {
        ad_storage: "granted"
      });
      loadMicrosoftUet();
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "microsoft_ads_consent_update",
      ad_storage: value
    });
  }

  function loadClarity() {
    if (window.__tprClarityLoaded || !CLARITY_ID) {
      return;
    }

    window.__tprClarityLoaded = true;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_ID);
  }

  function setClarityConsent(value) {
    if (typeof window.clarity !== "function") {
      return;
    }

    var consentValue = value === "granted" ? "granted" : "denied";
    window.clarity("consentv2", {
      ad_Storage: consentValue,
      analytics_Storage: consentValue
    });
  }

  function applyConsent(value, shouldStore) {
    if (shouldStore !== false) {
      storeConsent(value);
    }

    setUetConsent(value);
    loadClarity();
    setClarityConsent(value);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "microsoft_clarity_consent_update",
      clarity_storage: value
    });

    if (typeof window.clarity === "function") {
      window.clarity("event", value === "granted" ? "clarity_consent_granted" : "clarity_no_cookie_mode");
    }

    var banner = document.getElementById(BANNER_ID);
    if (banner) {
      banner.remove();
    }
  }

  window.tprSetMicrosoftAdsConsent = applyConsent;
  window.tprGetMicrosoftAdsConsent = getStoredConsent;
  window.tprLoadMicrosoftUet = loadMicrosoftUet;
  window.tprHasMicrosoftAdsConsent = function () {
    return window.__tprMicrosoftAdsConsent === "granted";
  };

  applyConsent("granted");
})();
