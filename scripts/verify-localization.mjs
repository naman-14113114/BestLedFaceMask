import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteRoot = path.join(root, "apps", "site");

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function filesUnder(directory, extensions) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return filesUnder(fullPath, extensions);
    return extensions.some((extension) => entry.name.endsWith(extension))
      ? [fullPath]
      : [];
  });
}

const marketContext = read(path.join(siteRoot, "src", "lib", "marketContext.ts"));
const localization = read(
  path.join(siteRoot, "src", "components", "MarketLocalizedContent.tsx")
);
const rootLayout = read(path.join(siteRoot, "src", "app", "layout.tsx"));
const outbound = read(
  path.join(siteRoot, "public", "assets", "outbound-interactions-v2.js")
);
const sourceFiles = filesUnder(path.join(siteRoot, "src"), [".ts", ".tsx"]);
const publicTextFiles = [
  path.join(siteRoot, "public", "llms.txt"),
  path.join(siteRoot, "public", "llms-full.txt"),
  path.join(siteRoot, "public", "robots.txt")
];

assert(
  marketContext.includes('requestHeaders.get("x-vercel-ip-country")'),
  "market context must prioritize Vercel country detection"
);
assert(
  marketContext.includes('requestHeaders.get("cf-ipcountry")') &&
    marketContext.includes('requestHeaders.get("cloudfront-viewer-country")'),
  "market context must include Cloudflare and CloudFront fallbacks"
);
assert(
  marketContext.includes("AUD: 1.9001") &&
    marketContext.includes("CAD: 1.8788") &&
    marketContext.includes('asOf: "2026-06-18"'),
  "market context must preserve the approved fallback FX rates"
);
assert(
  marketContext.includes("api.frankfurter.dev/v2/rates") &&
    marketContext.includes("revalidate: 86_400"),
  "FX rates must use the daily cached Frankfurter request"
);
assert(
  localization.includes("localizeBuudyHref") &&
    localization.includes("localizeMarketText"),
  "shared price and outbound-link localization helpers must remain enabled"
);
assert(
  rootLayout.includes(
    '<Script src="/assets/outbound-interactions-v2.js" strategy="afterInteractive" />'
  ),
  "outbound interactions must load after hydration"
);
assert(
  !outbound.includes("normalizeBuudyLinks") &&
    !outbound.includes("observeBuudyLinks"),
  "outbound interactions must not mutate server-rendered links"
);

for (const file of sourceFiles) {
  const content = read(file);
  assert(
    !content.includes("Loading date..."),
    `${path.relative(root, file)} must render its date in the initial HTML`
  );
  assert(
    !content.includes("Trustpilot Review Shop") &&
      !content.includes("Trustpilot Review |"),
    `${path.relative(root, file)} must use the Best LED Face Mask brand`
  );
}

for (const file of publicTextFiles) {
  const content = read(file);
  assert(
    !content.includes("Trustpilot Review Shop"),
    `${path.relative(root, file)} must use the Best LED Face Mask brand`
  );
}

const explicitRoutes = [
  ["best-led-face-mask-uk-2026", "uk"],
  ["best-led-face-mask-au-2026", "au"],
  ["best-led-face-mask-ca-2026", "ca"]
];

for (const [route, market] of explicitRoutes) {
  const page = read(path.join(siteRoot, "src", "app", route, "page.tsx"));
  assert(
    page.includes(`getRequestPageContext("${market}")`),
    `${route} must keep route-market precedence`
  );
}

console.log("First-load, market localization, and branding verification passed");
