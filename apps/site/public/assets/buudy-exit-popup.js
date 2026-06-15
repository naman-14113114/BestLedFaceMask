(function () {
  var ELIGIBLE_PATHS = [
    "/best-led-face-mask-in-uk",
    "/best-led-face-mask-au-2026",
    "/best-led-face-mask-ca-2026",
    "/best-led-face-mask-uk-2026",
    "/best-red-light-therapy-mask",
    "/blog",
    "/brand-name-premium",
    "/buudy-led-mask-uk",
    "/currentbody-vs-buudy",
    "/deluxeskin-vs-buudy",
    "/floating-head-warning",
    "/led-density-scam",
    "/missing-colors-expose",
    "/new-advertorial",
    "/qureskincare-vs-buudy",
    "/silicone-led-mask-dangers",
    "/therabody-vs-buudy",
    "/theraface-vs-other-masks",
    "/top-5-led-mask"
  ];

  var STORAGE_KEY = "buudy_exit_popup_seen_v1";
  var SHOW_DELAY_MS = 7000;
  var MOBILE_DELAY_MS = 14000;
  var MARKET_OFFERS = [
    {
      path: "/best-led-face-mask-au-2026",
      url: "https://au.buudy.com/products/buudy-led-mask",
      offer: "AUD 299 instead of AUD 498"
    },
    {
      path: "/best-led-face-mask-ca-2026",
      url: "https://ca.buudy.com/products/buudy-led-mask",
      offer: "CAD 279 instead of CAD 559"
    },
    {
      path: "/best-led-face-mask-uk-2026",
      url: "https://uk.buudy.com/products/buudy-led-mask",
      offer: "GBP 179 instead of GBP 449"
    }
  ];
  var DEFAULT_MARKET_OFFER = MARKET_OFFERS[2];
  var EXIT_POPUP_ATTRIBUTION = "?utm_source=trustpilotreview.shop&utm_medium=exit_popup&utm_campaign=article_exit&utm_content=last_chance";

  function getMarketOffer(pathname) {
    for (var i = 0; i < MARKET_OFFERS.length; i += 1) {
      if (pathname === MARKET_OFFERS[i].path || pathname.indexOf(MARKET_OFFERS[i].path + "/") === 0) {
        return MARKET_OFFERS[i];
      }
    }

    return DEFAULT_MARKET_OFFER;
  }

  var CURRENT_MARKET_OFFER = getMarketOffer(window.location.pathname);
  var CTA_URL = CURRENT_MARKET_OFFER.url + EXIT_POPUP_ATTRIBUTION;

  function isEligiblePath(pathname) {
    return ELIGIBLE_PATHS.some(function (eligiblePath) {
      return pathname === eligiblePath || pathname.indexOf(eligiblePath + "/") === 0;
    });
  }

  function storageGet(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures in private browsing modes.
    }
  }

  if (!isEligiblePath(window.location.pathname) || storageGet(STORAGE_KEY) === "1") {
    return;
  }

  var armed = false;
  var shown = false;
  var lastScrollY = window.scrollY || 0;

  function track(eventName) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      source: "trustpilotreview_exit_popup",
      target_url: CTA_URL
    });
  }

  function closePopup() {
    var overlay = document.querySelector("[data-buudy-exit-overlay]");
    if (overlay) {
      overlay.remove();
    }
    document.documentElement.classList.remove("buudy-exit-lock");
    storageSet(STORAGE_KEY, "1");
  }

  function buildPopup() {
    var overlay = document.createElement("div");
    overlay.setAttribute("data-buudy-exit-overlay", "true");
    overlay.className = "buudy-exit-overlay";
    overlay.innerHTML = [
      "<style>",
      ".buudy-exit-lock{overflow:hidden!important}",
      ".buudy-exit-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(10,8,7,.62);backdrop-filter:blur(10px);font-family:Georgia,'Times New Roman',serif;color:#18110d}",
      ".buudy-exit-card{position:relative;width:min(94vw,520px);overflow:hidden;border-radius:30px;background:linear-gradient(145deg,#fffaf4,#f3e1d2 54%,#fff);box-shadow:0 30px 90px rgba(0,0,0,.32);border:1px solid rgba(92,54,35,.18)}",
      ".buudy-exit-card:before{content:'';position:absolute;inset:-40% -25% auto auto;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(230,92,72,.32),rgba(230,92,72,0) 68%)}",
      ".buudy-exit-content{position:relative;z-index:1;padding:30px 30px 28px}",
      ".buudy-exit-kicker{display:inline-flex;align-items:center;gap:8px;margin-bottom:14px;padding:7px 11px;border-radius:999px;background:rgba(120,55,31,.1);font:700 11px/1.1 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#7b351f}",
      ".buudy-exit-title{margin:0 0 12px;font-size:clamp(30px,5vw,46px);line-height:.95;letter-spacing:-.045em;color:#120d0a}",
      ".buudy-exit-copy{margin:0 0 20px;font:400 16px/1.55 Arial,sans-serif;color:#45352d}",
      ".buudy-exit-offer{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;margin:0 0 20px;padding:14px;border-radius:20px;background:#18110d;color:#fff}",
      ".buudy-exit-offer strong{display:block;font:800 22px/1 Arial,sans-serif;color:#fff}",
      ".buudy-exit-offer span{font:600 12px/1.3 Arial,sans-serif;color:rgba(255,255,255,.72);text-transform:uppercase;letter-spacing:.08em}",
      ".buudy-exit-actions{display:flex;gap:10px;flex-wrap:wrap}",
      ".buudy-exit-cta,.buudy-exit-secondary{appearance:none;border:0;border-radius:999px;cursor:pointer;text-decoration:none;text-align:center;font:800 13px/1 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}",
      ".buudy-exit-cta{flex:1 1 230px;padding:16px 20px;background:#e9523d;color:#fff;box-shadow:0 14px 28px rgba(233,82,61,.28)}",
      ".buudy-exit-secondary{flex:1 1 150px;padding:16px 18px;background:rgba(255,255,255,.62);color:#39251b;border:1px solid rgba(64,38,24,.14)}",
      ".buudy-exit-close{position:absolute;z-index:3;top:14px;right:14px;width:36px;height:36px;border:0;border-radius:999px;background:rgba(255,255,255,.72);color:#2c1d15;font:22px/1 Arial,sans-serif;cursor:pointer}",
      "@media(max-width:520px){.buudy-exit-overlay{align-items:flex-end;padding:10px}.buudy-exit-card{border-radius:26px}.buudy-exit-content{padding:28px 22px 22px}.buudy-exit-title{font-size:34px}}",
      "</style>",
      "<section class='buudy-exit-card' role='dialog' aria-modal='true' aria-labelledby='buudy-exit-title'>",
      "<button class='buudy-exit-close' type='button' aria-label='Close' data-buudy-exit-close='true'>&times;</button>",
      "<div class='buudy-exit-content'>",
      "<div class='buudy-exit-kicker'>Before you go</div>",
      "<h2 class='buudy-exit-title' id='buudy-exit-title'>The #1 pick is still 60% off.</h2>",
      "<p class='buudy-exit-copy'>If you were comparing LED masks, do not leave without checking the Buudy 7-color mask. It covers red, blue, green, cyan, yellow, purple and white routines in one device.</p>",
      "<div class='buudy-exit-offer'><div><span>Today on Buudy</span><strong>" + CURRENT_MARKET_OFFER.offer + "</strong></div><span>Last check</span></div>",
      "<div class='buudy-exit-actions'>",
      "<a class='buudy-exit-cta' href='" + CTA_URL + "'>Claim 60% Off</a>",
      "<button class='buudy-exit-secondary' type='button' data-buudy-exit-close='true'>Keep Reading</button>",
      "</div>",
      "</div>",
      "</section>"
    ].join("");

    function shouldClose(event) {
      return event.target === overlay || (event.target.closest && event.target.closest("[data-buudy-exit-close], .buudy-exit-secondary, .buudy-exit-close"));
    }

    function onCloseIntent(event) {
      if (shouldClose(event)) {
        event.preventDefault();
        event.stopPropagation();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        closePopup();
      }
    }

    ["pointerdown", "touchstart", "click"].forEach(function (eventName) {
      overlay.addEventListener(eventName, onCloseIntent, true);
    });

    overlay.querySelector(".buudy-exit-cta").addEventListener("click", function () {
      track("buudy_exit_popup_cta_click");
      storageSet(STORAGE_KEY, "1");
    });

    return overlay;
  }

  function showPopup(reason) {
    if (!armed || shown || storageGet(STORAGE_KEY) === "1") {
      return;
    }

    shown = true;
    document.documentElement.classList.add("buudy-exit-lock");
    document.body.appendChild(buildPopup());
    track("buudy_exit_popup_view");
    window.dataLayer.push({ event: "buudy_exit_popup_reason", reason: reason });
  }

  function onMouseOut(event) {
    if (event.clientY <= 8 && !event.relatedTarget) {
      showPopup("desktop_top_exit");
    }
  }

  function onScroll() {
    var currentY = window.scrollY || 0;
    var doc = document.documentElement;
    var maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    var progress = currentY / maxScroll;
    var scrollingUp = currentY < lastScrollY - 80;

    if (progress > 0.42 && scrollingUp) {
      showPopup("mobile_scroll_up_exit");
    }

    lastScrollY = currentY;
  }

  function onKeydown(event) {
    if (event.key === "Escape" && shown) {
      closePopup();
    }
  }

  window.setTimeout(function () {
    armed = true;
  }, SHOW_DELAY_MS);

  document.addEventListener("mouseout", onMouseOut);
  document.addEventListener("keydown", onKeydown);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.setTimeout(function () {
    if (window.innerWidth <= 768 && window.scrollY > 500) {
      showPopup("mobile_time_on_page");
    }
  }, MOBILE_DELAY_MS);
})();
