import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteRoot = path.join(root, "apps", "site");

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function sliceBetween(text, start, end) {
  const startIndex = text.indexOf(start);
  assert(startIndex !== -1, `${start} was not found`);
  const endIndex = text.indexOf(end, startIndex);
  assert(endIndex !== -1, `${end} was not found after ${start}`);
  return text.slice(startIndex, endIndex);
}

function assertInOrder(text, labels, context) {
  let cursor = -1;
  for (const label of labels) {
    const next = text.indexOf(label, cursor + 1);
    assert(next !== -1, `${label} must appear in ${context}`);
    assert(next > cursor, `${label} must appear in the expected order in ${context}`);
    cursor = next;
  }
}

const advertorial = read(path.join(siteRoot, "src", "legacy-pages", "NewAdvertorial.tsx"));
const advertorial2 = read(path.join(siteRoot, "src", "legacy-pages", "NewAdvertorial2.tsx"));
const greenStarRating = read(path.join(siteRoot, "src", "components", "GreenStarRating.tsx"));
const marketFlag = read(path.join(siteRoot, "src", "components", "MarketFlag.tsx"));
const advertorialMarkets = read(path.join(siteRoot, "src", "lib", "advertorialMarkets.ts"));
const structuredData = read(path.join(siteRoot, "src", "components", "seo", "StructuredData.tsx"));
const noscript = read(path.join(siteRoot, "src", "components", "seo", "NoscriptContent.tsx"));
const llms = read(path.join(siteRoot, "public", "llms.txt"));
const llmsFull = read(path.join(siteRoot, "public", "llms-full.txt"));

const caProductsBlock = sliceBetween(advertorial, "const canadaCompetitorProducts", "const productPriceKeys");
assert(advertorial.includes('image: "/img/57-w.webp"'), "Buudy product image must use the local provided asset");
assert(advertorial.includes('image: "/img/Untitled design.png"'), "CurrentBody product image must use the local provided asset");
assert(advertorial.includes('image: "/img/kala-1.jpg"'), "Kala CA image must use the provided local asset");
assert(advertorial.includes('"/img/TOP 5 LED Mask.png"'), "CA hero image must use the provided top-five landscape asset");
assert(advertorial.includes('"/img/TOP 5 LED Mask uk.png"'), "global, US, UK, and AU hero image must use the UK top-five landscape asset");
assert(advertorial.includes('src="/img/93-w.webp"'), "Premium Travel Box gift must use the provided local asset");
assert(advertorial.includes('src="/img/35-w.webp"'), "Buudy LED Torch gift must use the provided local asset");
assert(advertorial.includes('src="/img/94-w.webp"'), "Skincare guide gift must use the provided local asset");
assert(advertorial.includes('import {\n  GreenStarIcon,\n  GreenStarRating,'), "advertorial must use the shared green rating component");
assert(advertorial.includes("forceFull={product.isWinner}"), "Buudy must force five full displayed stars in country rankings");
assert(greenStarRating.includes("const STAR_POINTS"), "shared rating component must use a sharp custom SVG star shape");
assert(greenStarRating.includes("text-[#00b67a]"), "shared rating stars must use Trustpilot green #00b67a");
assert(greenStarRating.includes("aria-label={accessibleLabel}"), "shared rating component must expose an accurate accessible label");
assert(advertorial.includes("function MobileProsCons"), "advertorial must render compact mobile pros and cons");
assert(advertorial.includes("summarizeMobilePoint"), "mobile pros and cons must be summarized bullet-by-bullet");
assert(advertorial.includes("removeBulletHeading"), "mobile pros and cons must remove bullet subheadings, not render only the subheading");
assert(!advertorial.includes("return point.split(':')[0] + '.'"), "mobile summary must not display only the old pros/cons subheading");
assert(!advertorial.includes("text-amber-400"), "advertorial product ratings must not use the old gold star style");
assert(!advertorial.includes("bg-[#00b67a]"), "advertorial Trustpilot stars must not use green tile backgrounds");
assert(advertorial.includes("shouldShowProductCta(product)"), "product CTA visibility must be driven by available links");
assert(!advertorial.includes("Tested & Reviewed Comparisons"), "advertorial H1 must not include the old tested-and-reviewed suffix");
assert(advertorial.includes('<span className="block">Best LED Face Mask</span>'), "advertorial H1 first line must be the standardized ranking heading");
assert(advertorial.includes("<MarketFlag market={market.flagKey} />"), "advertorial H1 must render the market flag/globe");
assert(advertorial.includes("<span>{market.headingCountry} - 2026</span>"), "advertorial H1 second line must include the country label and year");
assert(advertorial2.includes("<MarketFlag market={market.flagKey} />"), "alternate advertorial H1 must render the market flag/globe");
assert(advertorial2.includes("<span>{market.headingCountry} - 2026</span>"), "alternate advertorial H1 second line must include the country label and year");
assert(advertorial2.includes("link: market.buudyUrl"), "alternate advertorial winner links must use the localized Buudy destination");
assert(advertorial2.includes("href={market.buudyUrl}"), "alternate advertorial CTAs must use the localized Buudy destination");
assert(!advertorial2.includes("BUUDY_LINK"), "alternate advertorial must not keep a module-level hard-coded Buudy link");
assert(advertorial2.includes("#1 Top Pick"), "alternate advertorial must place the simple #1 badge on the winner image");
assert(!advertorial2.includes("#1 Editor&apos;s Choice"), "alternate advertorial must not render the old centered editor-choice badge");
assert(advertorial2.includes('src="/img/93-w.webp"'), "alternate Premium Travel Box gift must use the provided local asset");
assert(advertorial2.includes('src="/img/35-w.webp"'), "alternate Buudy LED Torch gift must use the provided local asset");
assert(advertorial2.includes('src="/img/94-w.webp"'), "alternate skincare guide gift must use the provided local asset");
assert(marketFlag.includes('aria-label="United States flag"'), "US flag must be available");
assert(marketFlag.includes('aria-label="United Kingdom flag"'), "UK flag must be available");
assert(marketFlag.includes('aria-label="Canada flag"'), "Canada flag must be available");
assert(marketFlag.includes('aria-label="Australia flag"'), "Australia flag must be available");
assert(marketFlag.includes('aria-label="Worldwide"'), "global globe indicator must be available");
assertInOrder(
  caProductsBlock,
  ["Kala Red Light Face Mask", "TheraFace Mask", "Equinox LED Mask"],
  "the CA competitor product override"
);
assert(caProductsBlock.includes('price: "$382.49"'), "Kala CA price must be $382.49");
assert(caProductsBlock.includes('price: "$799.99"'), "TheraFace CA price must be $799.99");
assert(caProductsBlock.includes('price: "$385"'), "Equinox CA price must be $385");
assert(caProductsBlock.includes('image: "/img/WhatsApp Image 2026-02-08 at 12.18.58 AM.jpeg"'), "TheraFace CA image must use the provided local asset");
assert(caProductsBlock.includes('image: "/img/WhatsApp Image 2026-02-08 at 12.16.22 AM.jpeg"'), "Equinox CA image must use the provided local asset");
assert(caProductsBlock.includes('link: "https://amzn.to/4eosr5R"'), "Kala CA link must point to the provided affiliate URL");
assert(caProductsBlock.includes('link: "https://amzn.to/4a6g1yt"'), "TheraFace CA link must point to the provided affiliate URL");
assert(caProductsBlock.includes('link: "https://amzn.to/3S4qDYu"'), "Equinox CA link must point to the provided affiliate URL");
assert(caProductsBlock.includes('{ label: "Light Effectiveness", value: 78 }'), "Kala metrics must be configured");
assert(caProductsBlock.includes('{ label: "Affordability", value: 18 }'), "TheraFace affordability metric must be configured");
assert(caProductsBlock.includes('{ label: "Material Quality", value: 84 }'), "Equinox metrics must be configured");
assert(!caProductsBlock.includes('link: "#"'), "CA competitor product links must no longer be non-outbound placeholders");

const detailsBlock = sliceBetween(advertorial, "{/* Right Column: Details */}", "{/* Editor's Tip - Free Gifts Discovery (Buudy only) */}");
assertInOrder(
  detailsBlock,
  [
    "{/* Metrics */}",
    "{/* Mobile Pros & Cons disabled - using unified layout */}",
    "{/* Pros */}",
  ],
  "the product detail content flow"
);

const caSelectorBlock = sliceBetween(advertorial, "function getCanadaProducts", "function getProductsForMarket");
assert(caSelectorBlock.includes("baseProducts[0]"), "CA list must preserve Buudy from the shared source product");
assert(caSelectorBlock.includes("baseProducts[1]"), "CA list must preserve CurrentBody from the shared source product");
assert(caSelectorBlock.includes('link: "https://amzn.to/4fL0JCN"'), "CA CurrentBody link must point to the provided affiliate URL");
assert(advertorial.includes('if (market.key === "ca") return getCanadaProducts(market);'), "CA route must use the CA-only product override");
assert(advertorial.includes("preventPlaceholderNavigation"), "placeholder links must be prevented from navigating");
assert(advertorial.includes("aria-disabled={href === \"#\" ? true : undefined}"), "any future disabled CTAs must be marked for assistive tech");

assert(advertorialMarkets.includes('priceRange: "$100 to $800+"'), "CA market price range must include the TheraFace ceiling");
assert(advertorialMarkets.includes('price: "$639.99"'), "CA CurrentBody price must remain $639.99");
assert(advertorialMarkets.includes('price: "$279"'), "CA Buudy price must remain $279");
assert(advertorialMarkets.includes('originalPrice: "$559"'), "CA Buudy compare-at price must remain $559");
assert(advertorialMarkets.includes('buudyUrl: "https://buudy.com/products/buudy-led-mask"'), "global Buudy URL must be configured");
assert(advertorialMarkets.includes('buudyUrl: "https://us.buudy.com/products/buudy-led-mask"'), "US Buudy URL must be configured");
assert(advertorialMarkets.includes('buudyUrl: "https://www.buudy.co.uk/products/buudy-led-mask"'), "UK Buudy URL must be configured");
assert(advertorialMarkets.includes('buudyUrl: "https://au.buudy.com/products/buudy-led-mask"'), "AU Buudy URL must be configured");
assert(advertorialMarkets.includes('buudyUrl: "https://ca.buudy.com/products/buudy-led-mask"'), "CA Buudy URL must be configured");

const caSchemaBlock = sliceBetween(structuredData, "function getCanadaItemListElement", "function createAdvertorialSchema");
assertInOrder(
  caSchemaBlock,
  [
    "Buudy 7 Colour LED Mask",
    "CurrentBody LED Mask",
    "Kala Red Light Face Mask",
    "TheraFace Mask",
    "Equinox LED Mask"
  ],
  "the CA JSON-LD ItemList"
);
assert(!caSchemaBlock.includes("Omnilux Contour Face"), "CA JSON-LD must not include Omnilux in the top five");
assert(!caSchemaBlock.includes("Shark CryoGlow LED Mask"), "CA JSON-LD must not include Shark in the top five");
assert(!caSchemaBlock.includes("Dr. Dennis Gross"), "CA JSON-LD must not include Dr. Dennis Gross in the top five");

assert(noscript.includes('name: "Kala Red Light Face Mask"'), "CA noscript ranking must include Kala");
assert(noscript.includes('name: "TheraFace Mask"'), "CA noscript ranking must include TheraFace");
assert(noscript.includes('name: "Equinox LED Mask"'), "CA noscript ranking must include Equinox");
assert(noscript.includes("reviewed price of $799.99"), "CA noscript ranking must include the TheraFace price");

assert(llms.includes("Canada top-five ranking: Buudy 7 Colour LED Mask, CurrentBody LED Mask, Kala Red Light Face Mask, TheraFace Mask, Equinox LED Mask"), "llms.txt must expose the CA top-five ranking");
assert(llmsFull.includes("Canada-specific five-mask ranking of Buudy, CurrentBody, Kala, TheraFace, and Equinox"), "llms-full.txt must describe the CA-specific ranking");
assert(llmsFull.includes("Canada top-five ranking: Buudy 7 Colour LED Mask, CurrentBody LED Mask, Kala Red Light Face Mask, TheraFace Mask, Equinox LED Mask"), "llms-full.txt must expose the CA top-five ranking");

console.log("Canada ranking verification passed");
