/*
 * Muuhu store — remove the PlusBase DEFAULT (native) footer.  v2 (Vue-hardened)
 *
 * Paste this ONCE into the store's GLOBAL custom JavaScript area and REPLACE the
 * previous version. (Website Builder -> global / custom JS, NOT inside a section.)
 *
 * WHY v1 failed: the storefront is a Vue SPA (ShopBase "thesitebase" app). The
 * default footer is a Vue-rendered Website Builder SECTION:
 *     <section component="pb-plb-footer" section-id="2I2jc1" data-block-id="TKN5H8">
 *        <footer class="... block-footer"> ...548 Market St / shops-support.net... </footer>
 *     </section>
 * Vue re-creates that section during hydration AFTER a one-shot removal runs, so the
 * footer came back. v2 removes the whole SECTION, keeps doing it through the entire
 * hydration window (polls for 25s), re-runs on SPA navigation + re-injection, and
 * lays down a CSS guard so it can never flash back between removals.
 *
 * REMOVES:  <section component="pb-plb-footer"> and footer.block-footer  (native PlusBase footer)
 * KEEPS:    <footer role="contentinfo">  (your custom "Business Information" footer)
 */
(function () {
  "use strict";

  if (window.__muuhuKillNativeFooter) return;        // never install twice
  window.__muuhuKillNativeFooter = true;

  var SECTION  = '[component="pb-plb-footer"]';       // the native footer SECTION
  var FALLBACK = "footer.block-footer";               // and the footer itself, just in case
  var GUARD_CSS = true; // keeps it invisible even if Vue re-inserts for a frame.
                        // Set to false if you want pure node-removal with no CSS safety net.

  function injectGuard() {
    if (!GUARD_CSS) return;
    if (document.getElementById("muuhu-kill-native-footer-css")) return;
    var s = document.createElement("style");
    s.id = "muuhu-kill-native-footer-css";
    s.textContent = '[component="pb-plb-footer"],footer.block-footer{display:none !important}';
    (document.head || document.documentElement).appendChild(s);
  }

  function removeAll() {
    var nodes = document.querySelectorAll(SECTION + "," + FALLBACK);
    var removed = 0;
    for (var i = 0; i < nodes.length; i += 1) {
      var el = nodes[i];
      var cls = el.getAttribute("class") || "";
      // Never remove the custom footer: it is role="contentinfo" and carries neither
      // the block-footer class nor the pb-plb-footer component, so it can't match the
      // selectors above — this is just an extra guard.
      if (el.tagName === "FOOTER" && cls.indexOf("block-footer") === -1) continue;
      if (el.parentNode) { el.parentNode.removeChild(el); removed += 1; }
    }
    return removed;
  }

  function tick() { injectGuard(); removeAll(); }

  // debounced version for the noisy MutationObserver
  var pending = null;
  function schedule() {
    if (pending) return;
    pending = window.setTimeout(function () { pending = null; tick(); }, 50);
  }

  // 1) run immediately + on every relevant lifecycle event
  tick();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", tick);
  window.addEventListener("load", tick);
  window.addEventListener("pageshow", tick);
  document.addEventListener("rsc:plusbase:hydrate", tick);
  document.addEventListener("plusbase:custom-html:ready", tick);

  // 2) beat Vue hydration timing: poll for ~25s, then stop (Vue is idle after that)
  var ticks = 0;
  var timer = window.setInterval(function () {
    ticks += 1;
    tick();
    if (ticks >= 100) window.clearInterval(timer); // 100 * 250ms = 25s
  }, 250);

  // 3) SPA navigation (PlusBase changes the URL without a full reload)
  function patch(method) {
    var orig = history[method];
    if (typeof orig !== "function") return;
    history[method] = function () { var r = orig.apply(this, arguments); schedule(); return r; };
  }
  patch("pushState");
  patch("replaceState");
  window.addEventListener("popstate", schedule);
  window.addEventListener("hashchange", schedule);

  // 4) catch any later re-injection
  function attachObserver() {
    var target = document.body || document.documentElement;
    if (!target) { window.setTimeout(attachObserver, 50); return; }
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i += 1) {
        if (muts[i].addedNodes && muts[i].addedNodes.length) { schedule(); return; }
      }
    }).observe(target, { childList: true, subtree: true });
  }
  attachObserver();
})();
