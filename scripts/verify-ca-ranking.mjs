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
const advertorialMarkets = read(path.join(siteRoot, "src", "lib", "advertorialMarkets.ts"));
const structuredData = read(path.join(siteRoot, "src", "components", "seo", "StructuredData.tsx"));
const noscript = read(path.join(siteRoot, "src", "components", "seo", "NoscriptContent.tsx"));
const llms = read(path.join(siteRoot, "public", "llms.txt"));
const llmsFull = read(path.join(siteRoot, "public", "llms-full.txt"));

const caProductsBlock = sliceBetween(advertorial, "const canadaCompetitorProducts", "const productPriceKeys");
assertInOrder(
  caProductsBlock,
  ["Kala Red Light Face Mask", "TheraFace Mask", "Equinox LED Mask"],
  "the CA competitor product override"
);
assert(caProductsBlock.includes('price: "$382.49"'), "Kala CA price must be $382.49");
assert(caProductsBlock.includes('price: "$799.99"'), "TheraFace CA price must be $799.99");
assert(caProductsBlock.includes('price: "$385"'), "Equinox CA price must be $385");
assert(caProductsBlock.includes('{ label: "Light Effectiveness", value: 78 }'), "Kala metrics must be configured");
assert(caProductsBlock.includes('{ label: "Affordability", value: 18 }'), "TheraFace affordability metric must be configured");
assert(caProductsBlock.includes('{ label: "Material Quality", value: 84 }'), "Equinox metrics must be configured");
assert(caProductsBlock.includes('link: "#"'), "CA competitor product links must be non-outbound placeholders");

const caSelectorBlock = sliceBetween(advertorial, "function getCanadaProducts", "function getProductsForMarket");
assert(caSelectorBlock.includes("baseProducts[0]"), "CA list must preserve Buudy from the shared source product");
assert(caSelectorBlock.includes("baseProducts[1]"), "CA list must preserve CurrentBody from the shared source product");
assert(caSelectorBlock.includes('link: "#"'), "CA CurrentBody link must be disabled");
assert(advertorial.includes('if (market.key === "ca") return getCanadaProducts(market);'), "CA route must use the CA-only product override");
assert(advertorial.includes("preventPlaceholderNavigation"), "placeholder links must be prevented from navigating");
assert(advertorial.includes("aria-disabled={href === \"#\" ? true : undefined}"), "disabled competitor CTAs must be marked for assistive tech");

assert(advertorialMarkets.includes('priceRange: "$100 to $800+"'), "CA market price range must include the TheraFace ceiling");
assert(advertorialMarkets.includes('price: "$639.99"'), "CA CurrentBody price must remain $639.99");
assert(advertorialMarkets.includes('price: "$279"'), "CA Buudy price must remain $279");
assert(advertorialMarkets.includes('originalPrice: "$559"'), "CA Buudy compare-at price must remain $559");

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
