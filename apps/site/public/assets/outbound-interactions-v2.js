(function () {
  var BUUDY_HOST_RE = /(^|\.)buudy\.(com|co\.uk)$/i;
  var CONVERSION_VALUE = 330;
  var CONVERSION_CURRENCY = "INR";
  var CONVERSION_EVENT_NAMES = ["buudy_outbound_click", "affiliate_click"];
  var DEDUPE_WINDOW_MS = 1200;
  var JOURNEY_STORAGE_KEY = "blfm_attribution_v1";
  var JOURNEY_TTL_MS = 90 * 24 * 60 * 60 * 1000;
  var CANADA_PATH = "/best-led-face-mask-ca-2026";
  var CANADA_DESTINATION_HOST = "ca.buudy.com";
  var ATTRIBUTION_PARAM_NAMES = [
    "gclid",
    "gbraid",
    "wbraid",
    "msclkid",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  var GLOBAL_BUUDY_LED_MASK_URL = "https://buudy.com/products/buudy-led-mask";
  var US_BUUDY_LED_MASK_URL = "https://us.buudy.com/products/buudy-led-mask";
  var UK_BUUDY_LED_MASK_URL = "https://www.buudy.co.uk/products/buudy-led-mask";
  var AU_BUUDY_LED_MASK_URL = "https://au.buudy.com/products/buudy-led-mask";
  var CA_BUUDY_LED_MASK_URL = "https://ca.buudy.com/products/buudy-led-mask";
  var MARKET_BUUDY_URLS = [
    { path: "/best-led-face-mask-2026", url: GLOBAL_BUUDY_LED_MASK_URL },
    { path: "/best-led-face-mask-us-2026", url: US_BUUDY_LED_MASK_URL },
    { path: "/best-led-face-mask-au-2026", url: AU_BUUDY_LED_MASK_URL },
    { path: "/best-led-face-mask-ca-2026", url: CA_BUUDY_LED_MASK_URL },
    { path: "/best-led-face-mask-uk-2026", url: UK_BUUDY_LED_MASK_URL },
  ];
  var FALLBACK_BUUDY_URL = getMarketBuudyUrl(window.location.pathname);
  var BUUDY_IMAGE_RE =
    /buudy|57-w-1\.webp|176943060543a303d043|10650730\/products/i;
  var BUUDY_CARD_TEXT_RE =
    /buudy\s*(7\s*color|led|mask)|official website|check availability|free gifts/i;
  var LOADING_RESET_MS = 3000;
  var currentAttribution = initializeAttribution();

  function isCanadaLandingPage() {
    return (
      window.location.pathname === CANADA_PATH ||
      window.location.pathname.indexOf(CANADA_PATH + "/") === 0
    );
  }

  function createJourneyId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (character) {
        var random = (Math.random() * 16) | 0;
        var value = character === "x" ? random : (random & 3) | 8;
        return value.toString(16);
      },
    );
  }

  function readCookie(name) {
    var prefix = name + "=";
    var cookies = (document.cookie || "").split(";");

    for (var index = 0; index < cookies.length; index += 1) {
      var cookie = cookies[index].trim();
      if (cookie.indexOf(prefix) === 0) {
        return decodeURIComponent(cookie.slice(prefix.length));
      }
    }

    return null;
  }

  function parseStoredAttribution(value) {
    if (!value) return null;

    try {
      var parsed = JSON.parse(value);
      if (!parsed || !parsed.journey_id || parsed.expires_at <= Date.now()) {
        return null;
      }
      return parsed;
    } catch (error) {
      return null;
    }
  }

  function readStoredAttribution() {
    var stored = null;
    try {
      stored = window.localStorage.getItem(JOURNEY_STORAGE_KEY);
    } catch (error) {}

    return (
      parseStoredAttribution(stored) ||
      parseStoredAttribution(readCookie(JOURNEY_STORAGE_KEY))
    );
  }

  function writeStoredAttribution(attribution) {
    var serialized = JSON.stringify(attribution);
    try {
      window.localStorage.setItem(JOURNEY_STORAGE_KEY, serialized);
    } catch (error) {}

    try {
      document.cookie =
        JOURNEY_STORAGE_KEY +
        "=" +
        encodeURIComponent(serialized) +
        "; Max-Age=" +
        Math.floor(JOURNEY_TTL_MS / 1000) +
        "; Path=/; SameSite=Lax; Secure";
    } catch (error) {}
  }

  function getQueryAttribution() {
    var query = new URLSearchParams(window.location.search);
    var attribution = {};

    ATTRIBUTION_PARAM_NAMES.forEach(function (name) {
      var value = query.get(name);
      if (value) attribution[name] = value;
    });

    var journeyId = query.get("journey_id");
    if (journeyId) attribution.journey_id = journeyId;

    return attribution;
  }

  function hasNewAdClick(queryAttribution, storedAttribution) {
    var clickKeys = ["gclid", "gbraid", "wbraid", "msclkid"];
    return clickKeys.some(function (key) {
      return (
        queryAttribution[key] &&
        (!storedAttribution ||
          storedAttribution[key] !== queryAttribution[key])
      );
    });
  }

  function getAttributionSource(attribution) {
    if (attribution.gclid || attribution.gbraid || attribution.wbraid) {
      return "google_ads";
    }
    if (attribution.msclkid) return "microsoft_ads";
    if (attribution.utm_source) return attribution.utm_source;
    return "direct_or_referral";
  }

  function initializeAttribution() {
    if (!isCanadaLandingPage()) return null;

    var stored = readStoredAttribution();
    var query = getQueryAttribution();
    var startsNewJourney = hasNewAdClick(query, stored);
    var journeyId =
      query.journey_id ||
      (!startsNewJourney && stored && stored.journey_id) ||
      createJourneyId();
    var now = Date.now();
    var attribution = Object.assign({}, startsNewJourney ? {} : stored || {}, query, {
      journey_id: journeyId,
      market: "CA",
      landing_page:
        startsNewJourney || !stored || !stored.landing_page
          ? window.location.href
          : stored.landing_page,
      initial_referrer:
        startsNewJourney || !stored || !stored.initial_referrer
          ? document.referrer || ""
          : stored.initial_referrer,
      started_at:
        startsNewJourney || !stored || !stored.started_at
          ? now
          : stored.started_at,
      updated_at: now,
      expires_at: now + JOURNEY_TTL_MS,
    });

    writeStoredAttribution(attribution);
    window.__blfmAttribution = attribution;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "buudy_journey_start",
      market: "CA",
      journey_id: attribution.journey_id,
      attribution_source: getAttributionSource(attribution),
      landing_page: attribution.landing_page,
    });

    return attribution;
  }

  function getCtaPosition(target) {
    if (!target || !target.closest) return "programmatic";

    var source = target.closest(
      "[data-cta-position], [data-buudy-exit-popup], a[data-outbound-button='true'], a[href]",
    );
    if (!source) return "unknown";

    var explicit = source.getAttribute("data-cta-position");
    if (explicit) return explicit;
    if (source.hasAttribute("data-buudy-exit-popup")) return "exit_popup";

    var label =
      source.getAttribute("aria-label") ||
      source.innerText ||
      source.textContent ||
      "outbound_cta";
    return label
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 80) || "outbound_cta";
  }

  function decorateOutboundHref(href, target) {
    if (!href || !currentAttribution) return href;

    try {
      var url = new URL(href, window.location.href);
      if (url.hostname !== CANADA_DESTINATION_HOST) return url.href;

      url.searchParams.set("journey_id", currentAttribution.journey_id);
      ATTRIBUTION_PARAM_NAMES.forEach(function (name) {
        if (currentAttribution[name] && !url.searchParams.has(name)) {
          url.searchParams.set(name, currentAttribution[name]);
        }
      });
      url.searchParams.set("blfm_source", "bestledfacemask.org");
      url.searchParams.set("blfm_cta", getCtaPosition(target));
      return url.href;
    } catch (error) {
      return href;
    }
  }

  function applyDecoratedHref(target, href) {
    if (!target || !target.closest || !href) return href;

    var link = target.closest("a[href]");
    if (link && toBuudyHref(link.href)) {
      link.setAttribute("href", href);
    }
    return href;
  }

  function isModifiedClick(event) {
    return (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    );
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
      if (
        pathname === MARKET_BUUDY_URLS[i].path ||
        pathname.indexOf(MARKET_BUUDY_URLS[i].path + "/") === 0
      ) {
        return MARKET_BUUDY_URLS[i].url;
      }
    }

    return GLOBAL_BUUDY_LED_MASK_URL;
  }

  function getPageBuudyUrl() {
    var regionalLink = document.querySelector(
      'a[href*="buudy.co.uk/products/buudy-led-mask"],a[href*="us.buudy.com/products/buudy-led-mask"],a[href*="au.buudy.com/products/buudy-led-mask"],a[href*="ca.buudy.com/products/buudy-led-mask"],a[href*="buudy.com/products/buudy-led-mask"]',
    );
    return regionalLink ? regionalLink.href : FALLBACK_BUUDY_URL;
  }

  function getExplicitTrackedHref(target) {
    if (!target || !target.closest) return null;

    var source = target.closest(
      "a[href], [data-buudy-outbound-url], [data-buudy-outbound]",
    );
    if (!source) return null;

    var rawHref =
      source.href ||
      source.getAttribute("data-buudy-outbound-url") ||
      source.getAttribute("data-buudy-outbound");
    return toBuudyHref(rawHref);
  }

  function getText(target) {
    return ((target && (target.innerText || target.textContent)) || "").trim();
  }

  function looksLikeBuudyImage(target) {
    if (!target || !target.closest) return false;

    var image = target.closest("img, picture, figure");
    if (image) {
      var img =
        image.tagName === "IMG"
          ? image
          : image.querySelector && image.querySelector("img");
      if (img) {
        var imageMeta = [img.alt, img.currentSrc, img.src].join(" ");
        if (BUUDY_IMAGE_RE.test(imageMeta)) return true;
      }
    }

    var card = target.closest("article, section, li, div");
    if (!card) return false;

    var cardImage = card.querySelector && card.querySelector("img");
    var cardImageMeta = cardImage
      ? [cardImage.alt, cardImage.currentSrc, cardImage.src].join(" ")
      : "";
    return (
      BUUDY_IMAGE_RE.test(cardImageMeta) &&
      BUUDY_CARD_TEXT_RE.test(getText(card))
    );
  }

  function getPointTarget(event) {
    if (
      !event ||
      typeof event.clientX !== "number" ||
      typeof document.elementFromPoint !== "function"
    ) {
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

  function buildPayload(href, target) {
    var destination = new URL(href);
    var isCanadaDestination = destination.hostname === CANADA_DESTINATION_HOST;
    return {
      event_category: "outbound",
      event_label: href,
      outbound_url: href,
      event_value: CONVERSION_VALUE,
      revenue_value: CONVERSION_VALUE,
      currency: CONVERSION_CURRENCY,
      page_path: window.location.pathname,
      destination_host: destination.hostname,
      market: isCanadaDestination ? "CA" : undefined,
      journey_id:
        isCanadaDestination && currentAttribution
          ? currentAttribution.journey_id
          : undefined,
      attribution_source:
        isCanadaDestination && currentAttribution
          ? getAttributionSource(currentAttribution)
          : undefined,
      cta_position: getCtaPosition(target),
    };
  }

  function hasMicrosoftAdsConsent() {
    return (
      window.__blfmMicrosoftAdsConsent === "granted" ||
      (typeof window.blfmHasMicrosoftAdsConsent === "function" &&
        window.blfmHasMicrosoftAdsConsent())
    );
  }

  function setMicrosoftAdsConsent(value) {
    if (typeof window.blfmSetMicrosoftAdsConsent === "function") {
      window.blfmSetMicrosoftAdsConsent(value);
      return;
    }

    window.__blfmMicrosoftAdsConsent = value;
    try {
      window.localStorage.setItem("blfm_microsoft_ads_consent", value);
    } catch (error) {}

    if (value === "granted") {
      window.uetq = window.uetq || [];
      window.uetq.push("consent", "update", {
        ad_storage: "granted",
      });

      if (typeof window.blfmLoadMicrosoftUet === "function") {
        window.blfmLoadMicrosoftUet();
      }
    }
  }

  function wasRecentlyTracked(href) {
    var now = Date.now();
    var last = window.__blfmBuudyOutboundLast || {};
    if (last.href === href && now - last.time < DEDUPE_WINDOW_MS) return true;

    window.__blfmBuudyOutboundLast = {
      href: href,
      time: now,
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

  function pushGoogleAnalyticsEvents(payload) {
    if (typeof window.gtag !== "function") return;

    CONVERSION_EVENT_NAMES.forEach(function (eventName) {
      window.gtag("event", eventName, {
        event_category: payload.event_category,
        event_label: payload.event_label,
        outbound_url: payload.outbound_url,
        currency: payload.currency,
        event_value: payload.event_value,
        revenue_value: payload.revenue_value,
        page_path: payload.page_path,
        destination_host: payload.destination_host,
        market: payload.market,
        journey_id: payload.journey_id,
        attribution_source: payload.attribution_source,
        cta_position: payload.cta_position,
        transport_type: "beacon",
      });
    });
  }

  function trackBuudyOutbound(href, target) {
    if (!href || wasRecentlyTracked(href)) return false;

    var payload = buildPayload(href, target);
    pushDataLayerEvents(href, payload);
    pushMicrosoftEvents(payload);
    pushGoogleAnalyticsEvents(payload);

    if (typeof window.clarity === "function") {
      window.clarity("event", "buudy_outbound_click");
    }

    return true;
  }

  window.blfmTrackBuudyOutbound = function (href) {
    try {
      var trackedHref = toBuudyHref(href);
      var decoratedHref = decorateOutboundHref(trackedHref, null);
      return decoratedHref ? trackBuudyOutbound(decoratedHref, null) : false;
    } catch (error) {
      return false;
    }
  };

  function prepareTrackedHref(event) {
    var href = getTrackedHref(event);
    if (!href) return null;

    var decoratedHref = decorateOutboundHref(href, event.target);
    applyDecoratedHref(event.target, decoratedHref);
    applyDecoratedHref(getPointTarget(event), decoratedHref);
    return decoratedHref;
  }

  document.addEventListener(
    "pointerdown",
    function (event) {
      prepareTrackedHref(event);
      if (isModifiedClick(event)) return;
      markOutboundButtonLoading(event.target);
    },
    true,
  );

  document.addEventListener(
    "click",
    function (event) {
      if (!isModifiedClick(event)) {
        markOutboundButtonLoading(event.target);
      }

      var href = prepareTrackedHref(event);
      if (!href) return;
      if (isModifiedClick(event)) return;

      if (!hasMicrosoftAdsConsent()) {
        setMicrosoftAdsConsent("granted");
      }

      trackBuudyOutbound(href, event.target);
    },
    true,
  );

  document.addEventListener(
    "keydown",
    function (event) {
      if (
        event.key !== "Enter" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      prepareTrackedHref(event);
      markOutboundButtonLoading(event.target);
    },
    true,
  );
})();
