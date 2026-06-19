import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteRoot = path.join(root, "apps", "site");
const scanRoots = [
  path.join(siteRoot, "src"),
  path.join(siteRoot, "public"),
  path.join(siteRoot, "next.config.ts"),
  path.join(root, "packages")
];
const textExtensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".txt", ".xml"]);
const forbidden = [
  ["trustpilot", "review", ".shop"].join(""),
  ["support@trustpilot", "review", ".shop"].join("")
];

function collectFiles(entry) {
  const stat = fs.statSync(entry);
  if (stat.isFile()) return textExtensions.has(path.extname(entry)) ? [entry] : [];

  return fs.readdirSync(entry, { withFileTypes: true }).flatMap((child) => {
    const childPath = path.join(entry, child.name);
    return child.isDirectory() ? collectFiles(childPath) : collectFiles(childPath);
  });
}

const violations = [];
for (const file of scanRoots.flatMap(collectFiles)) {
  const content = fs.readFileSync(file, "utf8");
  for (const needle of forbidden) {
    if (content.toLowerCase().includes(needle.toLowerCase())) {
      violations.push(`${path.relative(root, file)} contains ${needle}`);
    }
  }
}

if (violations.length) {
  throw new Error(`Domain independence verification failed:\n${violations.join("\n")}`);
}

console.log("Domain independence verification passed");
