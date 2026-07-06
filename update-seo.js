const fs = require('fs');
const path = require('path');

const filePath = path.resolve('E:/1st YEAR DTU/New folder/trustpilot-led-mask-replica/apps/site/src/components/seo/StructuredData.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const target = `  const video = graph.find((node) => node["@type"] === "VideoObject");
  if (video) {
    video["@id"] = \`\${routeUrl}#dermatologist-video\`;
  }`;

const replacement = `  const video = graph.find((node) => node["@type"] === "VideoObject");
  if (video) {
    video["@id"] = \`\${routeUrl}#dermatologist-video\`;
    if (market.key === "ca") {
      video.name = "Editor walkthrough of the Buudy 7 Colour LED Mask";
    }
  }`;

// normalize line endings just in case
content = content.replace(/\r\n/g, '\n');
const normalizedTarget = target.replace(/\r\n/g, '\n');

if (content.includes(normalizedTarget)) {
  content = content.replace(normalizedTarget, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Replacement successful");
} else {
  console.log("Target not found!");
}
