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

function collectLottieStrokeColors(value, colors = []) {
  if (!value || typeof value !== "object") return colors;

  if (value.ty === "st" && Array.isArray(value.c?.k)) {
    colors.push(value.c.k);
  }

  for (const child of Object.values(value)) {
    if (Array.isArray(child)) {
      child.forEach((item) => collectLottieStrokeColors(item, colors));
    } else if (child && typeof child === "object") {
      collectLottieStrokeColors(child, colors);
    }
  }

  return colors;
}

const exitPopup = read(path.join(publicAssets, "buudy-exit-popup.js"));
const outboundInteractions = read(path.join(publicAssets, "outbound-interactions-v2.js"));
const outboundLoader = JSON.parse(read(path.join(publicAssets, "outbound-button-loader.json")));
const layout = read(path.join(siteRoot, "src", "app", "layout.tsx"));
const advertorial = read(path.join(siteRoot, "src", "legacy-pages", "NewAdvertorial.tsx"));
const advertorial2 = read(path.join(siteRoot, "src", "legacy-pages", "NewAdvertorial2.tsx"));
const outboundLoaderComponent = read(path.join(siteRoot, "src", "components", "OutboundLoader.tsx"));
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
assert(outboundInteractions.includes("getPageBuudyUrl"), "outbound tracking must respect the page's localized Buudy destination");
assert(!outboundInteractions.includes("normalizeBuudyLinks"), "outbound tracking must not mutate links before hydration");
assert(!outboundInteractions.includes("observeBuudyLinks"), "outbound tracking must not observe and rewrite React-owned links");
assert(!outboundInteractions.includes("event.preventDefault()"), "outbound interactions must not cancel native anchor navigation");
assert(!outboundInteractions.includes("stopImmediatePropagation"), "outbound interactions must not swallow page-level click handlers");
assert(!outboundInteractions.includes("window.location.assign"), "outbound interactions must not replace native navigation");

const outboundLoaderStrokeColors = collectLottieStrokeColors(outboundLoader);
assert(outboundLoader.nm === "Refresh", "outbound loader JSON must use the replacement refresh animation");
assert(outboundLoaderStrokeColors.length > 0, "outbound loader JSON must contain visible strokes");
assert(
  outboundLoaderStrokeColors.every((color) => color.length === 4 && color.every((channel) => channel === 1)),
  "outbound loader JSON strokes must be pure white"
);

assert(layout.includes("/assets/microsoft-consent-mode.js"), "root layout must load Microsoft consent mode");
assert(layout.includes("/assets/outbound-interactions-v2.js"), "root layout must load the current outbound interaction script");
assert(layout.includes('<Script src="/assets/outbound-interactions-v2.js" strategy="afterInteractive" />'), "outbound interactions must load after React hydration");
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
assert(advertorial.includes("initial={false}"), "the free-gifts panel must be visible on its first render");
assert(!advertorial.includes("initial={{ opacity: 0, scale: 0.95 }}"), "the free-gifts panel must not depend on an in-view reveal to become visible");
assert(advertorial.includes("function OutboundButton"), "advertorial must use the shared outbound button");
assert(advertorial.includes("import { OutboundLoader }"), "main advertorial buttons must use the shared Lottie loader");
assert(advertorial.includes('aria-busy="false"'), "outbound buttons must expose their initial loading state");
assert(!advertorial.includes("window.location.assign"), "outbound buttons must rely on native anchor navigation");
assert(!advertorial.includes("OUTBOUND_NAVIGATION_DELAY_MS"), "outbound buttons must not delay or replace native navigation");
assert(outboundLoaderComponent.includes("import Lottie from 'lottie-react'"), "shared outbound loader must render with Lottie");
assert(outboundLoaderComponent.includes("outboundLoaderAnimation"), "shared outbound loader must use the replacement animation");
assert(outboundLoaderComponent.includes('className="outbound-lottie-loader h-10 w-10"'), "shared outbound loader must keep its compact button size");
assert(advertorial2.includes("import { OutboundLoader }"), "alternate advertorial buttons must use the shared Lottie loader");
assert(advertorial2.includes('data-outbound-button="true"'), "alternate advertorial buttons must participate in the loading interaction");
assert(advertorial2.includes('data-outbound-loader="true"'), "alternate advertorial buttons must display the shared loader");
assert(auPage.includes('import NewAdvertorial from "@/legacy-pages/NewAdvertorial"'), "AU must use the shared advertorial with animated outbound buttons");
assert(caPage.includes('import NewAdvertorial from "@/legacy-pages/NewAdvertorial"'), "CA must use the shared advertorial with animated outbound buttons");
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
