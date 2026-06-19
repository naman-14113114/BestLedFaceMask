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
const expertProfile = read(path.join(siteRoot, "src", "lib", "expertProfile.ts"));
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
const legacyBrand = ["Trustpilot", " Review"].join("");

assert(
  marketContext.includes('requestHeaders.get("x-vercel-ip-country")'),
  "market context must prioritize Vercel country detection"
);
assert(
  /default:\s*return "global";/.test(marketContext),
  "unsupported visitor countries must fall back to the global market"
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
  expertProfile.includes('name: "Dr. Megan Vincze"') &&
    expertProfile.includes('title: "Certified Dermatologist"') &&
    expertProfile.includes('image: "/img/dr-megan-vincze.png"') &&
    expertProfile.includes("masksReviewed: 18") &&
    expertProfile.includes('testingHours: "200+"'),
  "shared expert profile must preserve the approved Dr. Megan identity"
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
    !/Elizabeth\s+Vance/i.test(content),
    `${path.relative(root, file)} must not reference Dr. Elizabeth Vance`
  );
  assert(
    !/Dr\.\s+Elizabeth/i.test(content),
    `${path.relative(root, file)} must not reference the old Elizabeth doctor identity`
  );
  assert(
    !/#1\s+Editor(?:'|&apos;)?s\s+Choice/i.test(content),
    `${path.relative(root, file)} must not render the old centered #1 editor-choice badge`
  );
  content.split(/\r?\n/).forEach((line, index) => {
    if (/\bstar\b|<Star|GreenStar|rating/i.test(line)) {
      assert(
        !/(text|fill|bg|border)-(yellow|amber)-|#[fF](59|acc|bbf|fc|fd)|amber|yellow/i.test(line),
        `${path.relative(root, file)}:${index + 1} must not use yellow/amber styling for rating stars`
      );
    }
  });
  assert(
    !content.includes("Loading date..."),
    `${path.relative(root, file)} must render its date in the initial HTML`
  );
  assert(
    !content.includes(`${legacyBrand} Shop`) &&
      !content.includes(`${legacyBrand} |`),
    `${path.relative(root, file)} must use the Best LED Face Mask brand`
  );
}

for (const file of publicTextFiles) {
  const content = read(file);
  assert(
    !/Elizabeth\s+Vance/i.test(content),
    `${path.relative(root, file)} must not reference Dr. Elizabeth Vance`
  );
  assert(
    !content.includes(`${legacyBrand} Shop`),
    `${path.relative(root, file)} must use the Best LED Face Mask brand`
  );
}

const explicitRoutes = [
  ["best-led-face-mask-2026", "global"],
  ["best-led-face-mask-us-2026", "us"],
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
  assert(
    page.includes(`advertorialMetadata("/${route}", "${market}")`),
    `${route} must bind metadata to its explicit market`
  );
}

const metadata = read(path.join(siteRoot, "src", "lib", "metadata.ts"));
for (const route of explicitRoutes.map(([route]) => `/${route}`)) {
  assert(
    metadata.includes(route),
    `${route} must appear in the reciprocal hreflang map`
  );
}
assert(
  metadata.includes('"x-default": `${siteUrl}/best-led-face-mask-2026`'),
  "global guide must be the x-default hreflang target"
);

console.log("First-load, market localization, and branding verification passed");
