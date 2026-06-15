import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteRoot = path.join(root, "apps", "site");
const appRoot = path.join(siteRoot, "src", "app");
const nextConfig = fs.readFileSync(path.join(siteRoot, "next.config.ts"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const canonicalRoutes = [
  "/",
  "/best-led-face-mask-uk-2026",
  "/best-led-face-mask-au-2026",
  "/best-led-face-mask-ca-2026",
  "/currentbody-vs-buudy",
  "/theraface-vs-other-masks",
  "/deluxeskin-vs-buudy",
  "/qureskincare-vs-buudy",
  "/silicone-led-mask-dangers",
  "/floating-head-warning",
  "/missing-colors-expose",
  "/led-density-scam",
  "/brand-name-premium",
  "/privacy",
  "/terms",
  "/disclosure",
  "/contact"
];

for (const route of canonicalRoutes) {
  const pagePath = route === "/"
    ? path.join(appRoot, "page.tsx")
    : path.join(appRoot, route.slice(1), "page.tsx");
  assert(fs.existsSync(pagePath), `${route} must have an App Router page`);
}

assert(fs.existsSync(path.join(appRoot, "blog", "[slug]", "page.tsx")), "/blog/[slug] must have an App Router page");

const sitemap = fs.readFileSync(path.join(siteRoot, "public", "sitemap.xml"), "utf8");
const sitemapRoutes = [...sitemap.matchAll(/https:\/\/www\.trustpilotreview\.shop([^<]*)/g)].map((match) => match[1] || "/");
for (const route of sitemapRoutes) {
  if (route.startsWith("/blog/")) continue;
  assert(canonicalRoutes.includes(route), `${route} from sitemap must be canonical and deployable`);
}

const legacyRedirects = [
  "/new",
  "/new-advertorial",
  "/best-led-face-mask-in-uk",
  "/best-red-light-therapy-mask",
  "/best-red-light-therapy-mask/:path*",
  "/top-5-led-mask",
  "/top-5-led-mask/:path*",
  "/pages/buudy-led-mask",
  "/pages/buudy-led-mask/:path*",
  "/pages/buudy-led-face-mask",
  "/pages/buudy-led-face-mask/:path*",
  "/buudy-led-mask-uk",
  "/buudy-led-mask-uk/:path*",
  "/therabody-vs-buudy",
  "/therabody-vs-buudy/:path*",
  "/pages/buudy-led-mask-product-redesign",
  "/pages/buudy-led-mask-product-redesign/:path*"
];

for (const source of legacyRedirects) {
  assert(nextConfig.includes(`source: "${source}"`), `${source} must redirect to /best-led-face-mask-uk-2026`);
}

assert(!fs.existsSync(path.join(appRoot, "new-advertorial", "page.tsx")), "/new-advertorial must not remain a deployable page");
assert(!fs.existsSync(path.join(appRoot, "top-5-led-mask", "page.tsx")), "/top-5-led-mask must not remain a deployable page");
assert(!fs.existsSync(path.join(appRoot, "best-red-light-therapy-mask", "page.tsx")), "/best-red-light-therapy-mask must not remain a deployable page");

console.log("Canonical route and legacy redirect verification passed");
