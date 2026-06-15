(function () {
  var TRUSTPILOT_HOST_RE = /(^|\.)trustpilotreview\.shop$/i;
  var BUUDY_HOST_RE = /(^|\.)buudy\.com$/i;
  var CONVERSION_VALUE = 330;
  var CONVERSION_CURRENCY = "INR";
  var CONVERSION_EVENT_NAMES = ["buudy_outbound_click", "affiliate_click"];
  var MICROSOFT_UET_TAG_ID = "211072489";
  var REDIRECT_DELAY_MS = 180;
  var DEDUPE_WINDOW_MS = 1200;
  var OLD_BUUDY_FACE_MASK_URL = "https://buudy.com" + "/pages/buudy-led-face-mask";
  var OLD_BUUDY_LED_MASK_URL = "https://buudy.com" + "/pages/buudy-led-mask";
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

  function isModifiedClick(event) {
    return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  }

  function toBuudyHref(rawHref) {
    if (!rawHref) return null;

    try {
      var url = new URL(rawHref, window.location.href);
      if (!BUUDY_HOST_RE.test(url.hostname)) return null;

      if (
        url.href.indexOf(OLD_BUUDY_FACE_MASK_URL) === 0 ||
        url.href.indexOf(OLD_BUUDY_LED_MASK_URL) === 0 ||
        url.pathname === "/products/buudy-led-mask"
      ) {
        var marketUrl = new URL(FALLBACK_BUUDY_URL);
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
      return FALLBACK_BUUDY_URL;
    }

    return null;
  }

  function normalizeBuudyLinks(root) {
    var scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll('a[href*="buudy.com"]').forEach(function (link) {
      link.target = "_self";
      link.rel = "noopener noreferrer";
    });
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

  function pushFreshMicrosoftEvents(payload) {
    function send() {
      pushMicrosoftEvents(payload);
    }

    if (typeof window.tprLoadMicrosoftUet === "function") {
      window.tprLoadMicrosoftUet(function () {
        window.setTimeout(send, 80);
      });
      return;
    }

    if (typeof window.UET === "function" && !Array.isArray(window.uetq)) {
      send();
      return;
    }

    window.uetq = window.uetq || [];
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://bat.bing.net/bat.js?ti=" + MICROSOFT_UET_TAG_ID;
    script.onload = function () {
      try {
        var queued = window.uetq;
        window.uetq = new UET({
          ti: MICROSOFT_UET_TAG_ID,
          enableAutoSpaTracking: false,
          q: queued
        });
        window.uetq.push("pageLoad");
      } catch (error) {}

      window.setTimeout(send, 80);
    };
    script.onerror = function () {
      pushMicrosoftEvents(payload);
    };
    (document.head || document.documentElement).appendChild(script);
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

  function trackBuudyOutboundAfterGrant(href) {
    if (!href || wasRecentlyTracked(href)) return false;

    var payload = buildPayload(href);
    pushDataLayerEvents(href, payload);
    pushFreshMicrosoftEvents(payload);

    if (typeof window.clarity === "function") {
      window.clarity("event", "buudy_outbound_click");
    }

    return true;
  }

  function redirectToBuudy(href) {
    if (!TRUSTPILOT_HOST_RE.test(window.location.hostname)) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "buudy_outbound_failsafe_redirect",
      outbound_url: href
    });

    window.location.assign(href);
  }

  function trackAndRedirect(href, delay) {
    trackBuudyOutbound(href);
    window.setTimeout(function () {
      redirectToBuudy(href);
    }, delay == null ? REDIRECT_DELAY_MS : delay);
  }

  window.tprTrackBuudyOutbound = function (href) {
    try {
      var trackedHref = toBuudyHref(href);
      return trackedHref ? trackBuudyOutbound(trackedHref) : false;
    } catch (error) {
      return false;
    }
  };

  document.addEventListener(
    "click",
    function (event) {
      var href = getTrackedHref(event);
      if (!href) return;
      if (isModifiedClick(event)) return;

      if (event.defaultPrevented) return;
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();

      if (!hasMicrosoftAdsConsent()) {
        setMicrosoftAdsConsent("granted");
      }

      trackAndRedirect(href);
    },
    true
  );

  function observeBuudyLinks() {
    var observerTarget = document.documentElement || document.body;
    if (!observerTarget || !observerTarget.nodeType) return;

    new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) normalizeBuudyLinks(node);
      });
    });
    }).observe(observerTarget, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      normalizeBuudyLinks(document);
      observeBuudyLinks();
    });
  } else {
    normalizeBuudyLinks(document);
    observeBuudyLinks();
  }
})();
