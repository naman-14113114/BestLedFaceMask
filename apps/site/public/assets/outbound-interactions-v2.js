(function () {
  var BUUDY_HOST_RE = /(^|\.)buudy\.com$/i;
  var CONVERSION_VALUE = 330;
  var CONVERSION_CURRENCY = "INR";
  var CONVERSION_EVENT_NAMES = ["buudy_outbound_click", "affiliate_click"];
  var DEDUPE_WINDOW_MS = 1200;
  var UK_BUUDY_LED_MASK_URL = "https://uk.buudy.com/products/buudy-led-mask";
  var AU_BUUDY_LED_MASK_URL = "https://au.buudy.com/products/buudy-led-mask";
  var CA_BUUDY_LED_MASK_URL = "https://ca.buudy.com/products/buudy-led-mask";
  var MARKET_BUUDY_URLS = [
    { path: "/best-led-face-mask-au-2026", url: AU_BUUDY_LED_MASK_URL },
    { path: "/best-led-face-mask-ca-2026", url: CA_BUUDY_LED_MASK_URL },
    { path: "/best-led-face-mask-uk-2026", url: UK_BUUDY_LED_MASK_URL }
  ];
  var FALLBACK_BUUDY_URL = getMarketBuudyUrl(window.location.pathname);
  var BUUDY_IMAGE_RE = /buudy|57-w-1\.webp|176943060543a303d043|10650730\/products/i;
  var BUUDY_CARD_TEXT_RE = /buudy\s*(7\s*color|led|mask)|official website|check availability|free gifts/i;
  var LOADING_RESET_MS = 3000;

  function isModifiedClick(event) {
    return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  }

  function markOutboundButtonLoading(target) {
    if (!target || !target.closest) return;

    var link = target.closest('a[data-outbound-button="true"][href]');
    if (!link || link.getAttribute("href") === "#") return;

    link.setAttribute("data-loading", "true");
    link.setAttribute("aria-busy", "true");

    window.setTimeout(function () {
      if (!link.isConnected) return;
      link.setAttribute("data-loading", "false");
      link.setAttribute("aria-busy", "false");
    }, LOADING_RESET_MS);
  }

  function toBuudyHref(rawHref) {
    if (!rawHref) return null;

    try {
      var url = new URL(rawHref, window.location.href);
      if (!BUUDY_HOST_RE.test(url.hostname)) return null;

      if (url.hostname === "buudy.com" || url.hostname === "www.buudy.com") {
        var marketUrl = new URL(getPageBuudyUrl());
        marketUrl.search = url.search;
        marketUrl.hash = url.hash;
        return marketUrl.href;
      }

      return url.href;
    } catch (error) {
      return null;
    }
  }

  function getMarketBuudyUrl(pathname) {
    for (var i = 0; i < MARKET_BUUDY_URLS.length; i += 1) {
      if (pathname === MARKET_BUUDY_URLS[i].path || pathname.indexOf(MARKET_BUUDY_URLS[i].path + "/") === 0) {
        return MARKET_BUUDY_URLS[i].url;
      }
    }

    return UK_BUUDY_LED_MASK_URL;
  }

  function getPageBuudyUrl() {
    var regionalLink = document.querySelector(
      'a[href*="uk.buudy.com/products/buudy-led-mask"],a[href*="au.buudy.com/products/buudy-led-mask"],a[href*="ca.buudy.com/products/buudy-led-mask"]'
    );
    return regionalLink ? regionalLink.href : FALLBACK_BUUDY_URL;
  }

  function getExplicitTrackedHref(target) {
    if (!target || !target.closest) return null;

    var source = target.closest('a[href], [data-buudy-outbound-url], [data-buudy-outbound]');
    if (!source) return null;

    var rawHref = source.href || source.getAttribute("data-buudy-outbound-url") || source.getAttribute("data-buudy-outbound");
    return toBuudyHref(rawHref);
  }

  function getText(target) {
    return ((target && (target.innerText || target.textContent)) || "").trim();
  }

  function looksLikeBuudyImage(target) {
    if (!target || !target.closest) return false;

    var image = target.closest("img, picture, figure");
    if (image) {
      var img = image.tagName === "IMG" ? image : image.querySelector && image.querySelector("img");
      if (img) {
        var imageMeta = [img.alt, img.currentSrc, img.src].join(" ");
        if (BUUDY_IMAGE_RE.test(imageMeta)) return true;
      }
    }

    var card = target.closest("article, section, li, div");
    if (!card) return false;

    var cardImage = card.querySelector && card.querySelector("img");
    var cardImageMeta = cardImage ? [cardImage.alt, cardImage.currentSrc, cardImage.src].join(" ") : "";
    return BUUDY_IMAGE_RE.test(cardImageMeta) && BUUDY_CARD_TEXT_RE.test(getText(card));
  }

  function getPointTarget(event) {
    if (!event || typeof event.clientX !== "number" || typeof document.elementFromPoint !== "function") {
      return null;
    }
    return document.elementFromPoint(event.clientX, event.clientY);
  }

  function getTrackedHref(event) {
    var target = event.target;
    var href = getExplicitTrackedHref(target);
    if (href) return href;

    var pointTarget = getPointTarget(event);
    href = getExplicitTrackedHref(pointTarget);
    if (href) return href;

    if (looksLikeBuudyImage(target) || looksLikeBuudyImage(pointTarget)) {
      return getPageBuudyUrl();
    }

    return null;
  }

  function buildPayload(href) {
    return {
      event_category: "outbound",
      event_label: href,
      outbound_url: href,
      event_value: CONVERSION_VALUE,
      revenue_value: CONVERSION_VALUE,
      currency: CONVERSION_CURRENCY
    };
  }

  function hasMicrosoftAdsConsent() {
    return (
      window.__tprMicrosoftAdsConsent === "granted" ||
      (typeof window.tprHasMicrosoftAdsConsent === "function" && window.tprHasMicrosoftAdsConsent())
    );
  }

  function setMicrosoftAdsConsent(value) {
    if (typeof window.tprSetMicrosoftAdsConsent === "function") {
      window.tprSetMicrosoftAdsConsent(value);
      return;
    }

    window.__tprMicrosoftAdsConsent = value;
    try {
      window.localStorage.setItem("tpr_microsoft_ads_consent", value);
    } catch (error) {}

    if (value === "granted") {
      window.uetq = window.uetq || [];
      window.uetq.push("consent", "update", {
        ad_storage: "granted"
      });

      if (typeof window.tprLoadMicrosoftUet === "function") {
        window.tprLoadMicrosoftUet();
      }
    }
  }

  function wasRecentlyTracked(href) {
    var now = Date.now();
    var last = window.__tprBuudyOutboundLast || {};
    if (last.href === href && now - last.time < DEDUPE_WINDOW_MS) return true;

    window.__tprBuudyOutboundLast = {
      href: href,
      time: now
    };
    return false;
  }

  function pushDataLayerEvents(href, payload) {
    window.dataLayer = window.dataLayer || [];
    CONVERSION_EVENT_NAMES.forEach(function (eventName) {
      window.dataLayer.push(Object.assign({ event: eventName }, payload));
    });
  }

  function pushMicrosoftEvents(payload) {
    window.uetq = window.uetq || [];
    CONVERSION_EVENT_NAMES.forEach(function (eventName) {
      window.uetq.push("event", eventName, payload);
    });
  }

  function trackBuudyOutbound(href) {
    if (!href || wasRecentlyTracked(href)) return false;

    var payload = buildPayload(href);
    pushDataLayerEvents(href, payload);
    pushMicrosoftEvents(payload);

    if (typeof window.clarity === "function") {
      window.clarity("event", "buudy_outbound_click");
    }

    return true;
  }

  window.tprTrackBuudyOutbound = function (href) {
    try {
      var trackedHref = toBuudyHref(href);
      return trackedHref ? trackBuudyOutbound(trackedHref) : false;
    } catch (error) {
      return false;
    }
  };

  document.addEventListener("pointerdown", function (event) {
    if (isModifiedClick(event)) return;
    markOutboundButtonLoading(event.target);
  }, true);

  document.addEventListener(
    "click",
    function (event) {
      if (!isModifiedClick(event)) {
        markOutboundButtonLoading(event.target);
      }

      var href = getTrackedHref(event);
      if (!href) return;
      if (isModifiedClick(event)) return;

      if (!hasMicrosoftAdsConsent()) {
        setMicrosoftAdsConsent("granted");
      }

      trackBuudyOutbound(href);
    },
    true
  );

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    markOutboundButtonLoading(event.target);
  }, true);

})();
