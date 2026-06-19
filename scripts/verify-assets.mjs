import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteRoot = path.join(root, "apps", "site");
const publicRoot = path.join(siteRoot, "public");
const sourceRoot = path.join(siteRoot, "src");
const bannedHost = ["lawngreen-kingfisher-468763", "hostingersite.com"].join(".");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredPublicFiles = [
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "llms-full.txt",
  "assets/microsoft-consent-mode.js",
  "assets/outbound-interactions-v2.js",
  "assets/buudy-exit-popup.js",
  "assets/outbound-button-loader.json",
  "assets/buudy-dermatologist-verdict-poster.jpg",
  "assets/buudy-dermatologist-verdict.mp4",
  "img/35-w.webp",
  "img/39-w.webp",
  "img/57-w.webp",
  "img/93-w.webp",
  "img/94-w.webp",
  "img/Beauty Pie.png",
  "img/Dr Dennis Gross.png",
  "img/Keskin-1.png",
  "img/Odelyne-1.jpeg",
  "img/Sallybeauty.png",
  "img/Sensse.png",
  "img/TOP 5 LED Mask uk.png",
  "img/TOP 5 LED Mask-10.png",
  "img/TOP 5 LED Mask-11.png",
  "img/TOP 5 LED Mask-12.png",
  "img/TOP 5 LED Mask-13.png",
  "img/TOP 5 LED Mask-14.png",
  "img/TOP 5 LED Mask-2.png",
  "img/TOP 5 LED Mask-3.png",
  "img/TOP 5 LED Mask-4.png",
  "img/TOP 5 LED Mask-5.png",
  "img/TOP 5 LED Mask-6.png",
  "img/TOP 5 LED Mask-7.png",
  "img/TOP 5 LED Mask-8.png",
  "img/TOP 5 LED Mask-9.png",
  "img/Veoskin.png",
  "img/dense_led_macro_1774237501628.png",
  "img/dr-megan-vincze.png",
  "img/kala-1.jpg",
  "img/luxury_mask_markup_1774237538064.png",
  "img/neck_led_mask_1774237229811.png",
  "img/pure derma.jpeg",
  "img/qure.png",
  "img/seven_colors_mask_1774237479088.png",
  "img/TOP 5 LED Mask.png",
  "img/Untitled design.png",
  "img/WhatsApp Image 2026-02-08 at 12.16.22 AM.jpeg",
  "img/WhatsApp Image 2026-02-08 at 12.18.58 AM.jpeg"
];

for (const file of requiredPublicFiles) {
  assert(fs.existsSync(path.join(publicRoot, file)), `${file} must exist in apps/site/public`);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory() && [".next", ".turbo", "node_modules"].includes(entry.name)) return [];
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return fullPath;
  });
}

const localAssetRefs = new Set();
for (const file of walk(sourceRoot)) {
  if (!/\.(tsx|ts|css)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/["'`](\/(?:assets|img)\/[^"'`)]+)["'`]/g)) {
    localAssetRefs.add(match[1]);
  }
}

for (const ref of localAssetRefs) {
  const assetPath = path.join(publicRoot, ref.slice(1));
  assert(fs.existsSync(assetPath), `${ref} is referenced but missing from public`);
}

const textExtensions = new Set([".css", ".js", ".json", ".md", ".mjs", ".ts", ".tsx", ".txt", ".xml"]);
for (const file of walk(siteRoot)) {
  if (!textExtensions.has(path.extname(file).toLowerCase())) continue;
  const text = fs.readFileSync(file, "utf8");
  assert(!text.includes(bannedHost), `${path.relative(root, file)} must not reference the removed external host`);
}

const publicEntries = walk(publicRoot).map((file) => path.relative(publicRoot, file).replaceAll("\\", "/")).sort();
for (const file of publicEntries) {
  assert(requiredPublicFiles.includes(file), `${file} is not part of the approved public asset set`);
}

console.log("Public asset verification passed");
