import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteRoot = path.join(root, "apps", "site");
const publicAssets = path.join(siteRoot, "public", "assets");

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const exitPopup = read(path.join(publicAssets, "buudy-exit-popup.js"));
const outboundInteractions = read(path.join(publicAssets, "outbound-interactions-v2.js"));
const outboundLoader = JSON.parse(read(path.join(publicAssets, "outbound-button-loader.json")));
const layout = read(path.join(siteRoot, "src", "app", "layout.tsx"));
const advertorial = read(path.join(siteRoot, "src", "legacy-pages", "NewAdvertorial.tsx"));
const advertorialMarkets = read(path.join(siteRoot, "src", "lib", "advertorialMarkets.ts"));
const auPage = read(path.join(siteRoot, "src", "app", "best-led-face-mask-au-2026", "page.tsx"));
const caPage = read(path.join(siteRoot, "src", "app", "best-led-face-mask-ca-2026", "page.tsx"));
const nextConfig = read(path.join(siteRoot, "next.config.ts"));
const staleOutboundAsset = ["buudy", "outbound", "failsafe.js"].join("-");

function isEligible(pathname) {
  const match = exitPopup.match(/ELIGIBLE_PATHS\s*=\s*(\[[\s\S]*?\]);/);
  assert(match, "ELIGIBLE_PATHS array is not exposed in the popup script");
  const paths = Function(`return ${match[1]}`)();
  return paths.some((eligiblePath) => pathname === eligiblePath || pathname.startsWith(`${eligiblePath}/`));
}

assert(isEligible("/best-led-face-mask-uk-2026"), "canonical advertorial page must be exit-popup eligible");
assert(isEligible("/best-led-face-mask-au-2026"), "AU advertorial page must be exit-popup eligible");
assert(isEligible("/best-led-face-mask-ca-2026"), "CA advertorial page must be exit-popup eligible");
assert(isEligible("/top-5-led-mask"), "legacy top-5 path must remain exit-popup eligible before redirect");
assert(isEligible("/blog/red-light-mask-guide"), "article/blog pages must be exit-popup eligible");
assert(!isEligible("/privacy"), "privacy page must not be exit-popup eligible");
assert(!isEligible("/contact"), "contact page must not be exit-popup eligible");
assert(!isEligible("/pages/buudy-led-mask-product-redesign"), "product redesign page must not be exit-popup eligible");

assert(exitPopup.includes("https://uk.buudy.com/products/buudy-led-mask"), "exit popup CTA must use the current UK Buudy product page");
assert(exitPopup.includes("https://au.buudy.com/products/buudy-led-mask"), "exit popup CTA must support the AU Buudy product page");
assert(exitPopup.includes("https://ca.buudy.com/products/buudy-led-mask"), "exit popup CTA must support the CA Buudy product page");
assert(exitPopup.includes("AUD 299 instead of AUD 498"), "exit popup must include the AU offer text");
assert(exitPopup.includes("CAD 279 instead of CAD 559"), "exit popup must include the CA offer text");
assert(exitPopup.includes("utm_medium=exit_popup"), "exit popup CTA must include attribution");
assert(exitPopup.includes("sessionStorage"), "exit popup must use sessionStorage frequency capping");
assert(exitPopup.includes("data-buudy-exit-close"), "exit popup close controls must have explicit close attributes");
assert(exitPopup.includes('"pointerdown"'), "exit popup must close from pointer/touch starts, not click only");

assert(outboundInteractions.includes("https://uk.buudy.com/products/buudy-led-mask"), "outbound fallback route must use the UK Buudy product page");
assert(outboundInteractions.includes("https://au.buudy.com/products/buudy-led-mask"), "outbound fallback route must support the AU Buudy product page");
assert(outboundInteractions.includes("https://ca.buudy.com/products/buudy-led-mask"), "outbound fallback route must support the CA Buudy product page");
assert(outboundInteractions.includes("CONVERSION_VALUE = 330"), "Microsoft Ads conversion value must stay 330 INR");
assert(outboundInteractions.includes("CONVERSION_CURRENCY = \"INR\""), "Microsoft Ads conversion currency must stay INR");
assert(outboundInteractions.includes("buudy_outbound_click"), "primary outbound conversion event must be pushed");
assert(outboundInteractions.includes("affiliate_click"), "affiliate fallback conversion event must be pushed");
assert(outboundInteractions.includes("looksLikeBuudyImage"), "image-layer clicks must be handled");
assert(outboundInteractions.includes("markOutboundButtonLoading"), "outbound buttons must get a pre-navigation loading state");
assert(outboundInteractions.includes('"pointerdown"'), "the loader must start before native navigation");
assert(!outboundInteractions.includes("event.preventDefault()"), "outbound interactions must not cancel native anchor navigation");
assert(!outboundInteractions.includes("stopImmediatePropagation"), "outbound interactions must not swallow page-level click handlers");
assert(!outboundInteractions.includes("window.location.assign"), "outbound interactions must not replace native navigation");

assert(outboundLoader.layers.length === 5, "outbound loader JSON must preserve five animated dots");
assert(
  outboundLoader.layers.every((layer) => layer.shapes?.[0]?.it?.[1]?.c?.k?.every((channel) => channel === 1)),
  "outbound loader JSON dots must be pure white"
);

assert(layout.includes("/assets/microsoft-consent-mode.js"), "root layout must load Microsoft consent mode");
assert(layout.includes("/assets/outbound-interactions-v2.js"), "root layout must load the current outbound interaction script");
assert(!layout.includes(`/assets/${staleOutboundAsset}`), "root layout must not load the stale cached outbound filename");
assert(layout.includes("/assets/buudy-exit-popup.js"), "root layout must load the exit popup script");
assert(layout.includes("GTM-TQ3HRZMJ"), "root layout must preserve the GTM ID");
assert(layout.includes("699e744b8a14f51c38e4fa86/1ji9fci26"), "root layout must preserve the Tawk.to widget ID");
assert(layout.includes("api.autoStart = true"), "Tawk visitor tracking must remain enabled");
assert(layout.includes("api.onBeforeLoad = hideTawkWidget"), "Tawk must be hidden before it becomes visible");
assert(layout.includes("api.onLoad = function"), "Tawk must be hidden again after loading");
assert(layout.includes("api.hideWidget"), "Tawk must use the official hideWidget API");
assert(layout.includes("hideTawkFrames"), "Tawk iframe fallback must keep the launcher hidden");
assert(layout.includes("value: 330"), "root layout must preserve outbound conversion value");
assert(layout.includes("currency: 'INR'"), "root layout must preserve outbound conversion currency");
assert(nextConfig.includes('source: "/assets/:path*.js"'), "JavaScript assets must have a cache-specific header rule");
assert(nextConfig.includes('value: "public, max-age=0, must-revalidate"'), "JavaScript assets must not use immutable year-long caching");

assert(advertorial.includes('poster="/assets/buudy-dermatologist-verdict-poster.jpg"'), "advertorial must use the dermatologist video poster");
assert(advertorial.includes('<source src="/assets/buudy-dermatologist-verdict.mp4" type="video/mp4" />'), "advertorial must use the dermatologist MP4");
assert(advertorial.includes("£179"), "Buudy UK price copy must remain consistent");
assert(advertorial.includes("getProductsForMarket"), "advertorial must render market-specific product data");
assert(advertorial.includes("market.giftValues.total"), "advertorial must render market-specific gift values");
assert(advertorial.includes("function OutboundButton"), "advertorial must use the shared outbound button");
assert(advertorial.includes("outboundLoaderDots = [0, 1, 2, 3, 4]"), "outbound buttons must render five loading dots");
assert(advertorial.includes('className="outbound-loader-dot h-2.5 w-2.5 rounded-full bg-white"'), "outbound button dots must be white");
assert(advertorial.includes('aria-busy="false"'), "outbound buttons must expose their initial loading state");
assert(!advertorial.includes("window.location.assign"), "outbound buttons must rely on native anchor navigation");
assert(!advertorial.includes("OUTBOUND_NAVIGATION_DELAY_MS"), "outbound buttons must not delay or replace native navigation");
assert(auPage.includes('market="au"'), "AU page must render the AU advertorial market");
assert(caPage.includes('market="ca"'), "CA page must render the CA advertorial market");
assert(advertorialMarkets.includes('route: "/best-led-face-mask-au-2026"'), "AU market route must be configured");
assert(advertorialMarkets.includes('route: "/best-led-face-mask-ca-2026"'), "CA market route must be configured");
assert(advertorialMarkets.includes('buudyUrl: "https://au.buudy.com/products/buudy-led-mask"'), "AU Buudy URL must be configured");
assert(advertorialMarkets.includes('buudyUrl: "https://ca.buudy.com/products/buudy-led-mask"'), "CA Buudy URL must be configured");
assert(advertorialMarkets.includes('price: "$299"'), "AU Buudy price must be configured");
assert(advertorialMarkets.includes('originalPrice: "$498"'), "AU Buudy compare-at price must be configured");
assert(advertorialMarkets.includes('price: "$279"'), "CA Buudy price must be configured");
assert(advertorialMarkets.includes('originalPrice: "$559"'), "CA Buudy compare-at price must be configured");
assert(advertorialMarkets.includes('total: "$207"'), "AU gift total must be configured");
assert(advertorialMarkets.includes('total: "$128"'), "CA gift total must be configured");

console.log("Tracking, exit popup, and Buudy conversion verification passed");
