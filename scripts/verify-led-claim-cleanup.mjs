import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteRoot = path.join(root, "apps", "site");
const forbiddenClaim =
  /guarantee|warrant|certif|money[- ]back|return polic|trial period|risk[- ]free|health canada approv|medical[- ]grade|board-certified|dermatologist(?:-created|-founded|-recommended|.?s verdict| walkthrough)|endorsed by celebrities and dermatologists/i;

const files = [
  "src/legacy-pages/NewAdvertorial.tsx",
  "src/legacy-pages/NewAdvertorial2.tsx",
  "src/legacy-pages/mobileProsCons.ts",
  "src/components/seo/NoscriptContent.tsx",
  "src/lib/expertProfile.ts",
  "src/lib/metadata.ts",
  "src/legacy-pages/Home.tsx",
  "public/llms.txt",
  "public/llms-full.txt",
];

function assertClaimFree(relativePath, content) {
  const match = content.match(forbiddenClaim);
  if (match) {
    throw new Error(
      `${relativePath} still contains prohibited assurance or credential copy: ${match[0]}`,
    );
  }
}

for (const relativePath of files) {
  const content = fs.readFileSync(path.join(siteRoot, relativePath), "utf8");
  assertClaimFree(relativePath, content);
}

const structuredDataPath = path.join(
  siteRoot,
  "src/components/seo/StructuredData.tsx",
);
const structuredData = fs.readFileSync(structuredDataPath, "utf8");
const hairSchemaStart = structuredData.indexOf("const hairAdvertorialSchema");

if (hairSchemaStart === -1) {
  throw new Error("Could not isolate LED schema from hair-dryer schema");
}

assertClaimFree(
  "src/components/seo/StructuredData.tsx (LED schema)",
  structuredData.slice(0, hairSchemaStart),
);

console.log(
  "LED ranking assurance, credential, certification, and warranty claim cleanup verified",
);
