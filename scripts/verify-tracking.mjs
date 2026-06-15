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
const outboundFailsafe = read(path.join(publicAssets, "buudy-outbound-failsafe.js"));
const layout = read(path.join(siteRoot, "src", "app", "layout.tsx"));
const advertorial = read(path.join(siteRoot, "src", "legacy-pages", "NewAdvertorial.tsx"));
const advertorialMarkets = read(path.join(siteRoot, "src", "lib", "advertorialMarkets.ts"));
const auPage = read(path.join(siteRoot, "src", "app", "best-led-face-mask-au-2026", "page.tsx"));
const caPage = read(path.join(siteRoot, "src", "app", "best-led-face-mask-ca-2026", "page.tsx"));

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

assert(outboundFailsafe.includes("https://uk.buudy.com/products/buudy-led-mask"), "outbound fallback route must use the UK Buudy product page");
assert(outboundFailsafe.includes("https://au.buudy.com/products/buudy-led-mask"), "outbound fallback route must support the AU Buudy product page");
assert(outboundFailsafe.includes("https://ca.buudy.com/products/buudy-led-mask"), "outbound fallback route must support the CA Buudy product page");
assert(outboundFailsafe.includes("CONVERSION_VALUE = 330"), "Microsoft Ads conversion value must stay 330 INR");
assert(outboundFailsafe.includes("CONVERSION_CURRENCY = \"INR\""), "Microsoft Ads conversion currency must stay INR");
assert(outboundFailsafe.includes("buudy_outbound_click"), "primary outbound conversion event must be pushed");
assert(outboundFailsafe.includes("affiliate_click"), "affiliate fallback conversion event must be pushed");
assert(outboundFailsafe.includes("looksLikeBuudyImage"), "image-layer clicks must be handled");
assert(outboundFailsafe.includes("stopImmediatePropagation"), "outbound clicks must beat page-level handlers that swallow navigation");

assert(layout.includes("/assets/microsoft-consent-mode.js"), "root layout must load Microsoft consent mode");
assert(layout.includes("/assets/buudy-outbound-failsafe.js"), "root layout must load the Buudy outbound failsafe");
assert(layout.includes("/assets/buudy-exit-popup.js"), "root layout must load the exit popup script");
assert(layout.includes("GTM-TQ3HRZMJ"), "root layout must preserve the GTM ID");
assert(layout.includes("699e744b8a14f51c38e4fa86/1ji9fci26"), "root layout must preserve the Tawk.to widget ID");
assert(layout.includes("value: 330"), "root layout must preserve outbound conversion value");
assert(layout.includes("currency: 'INR'"), "root layout must preserve outbound conversion currency");

assert(advertorial.includes('poster="/assets/buudy-dermatologist-verdict-poster.jpg"'), "advertorial must use the dermatologist video poster");
assert(advertorial.includes('<source src="/assets/buudy-dermatologist-verdict.mp4" type="video/mp4" />'), "advertorial must use the dermatologist MP4");
assert(advertorial.includes("£179"), "Buudy UK price copy must remain consistent");
assert(advertorial.includes("getProductsForMarket"), "advertorial must render market-specific product data");
assert(advertorial.includes("market.giftValues.total"), "advertorial must render market-specific gift values");
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
