import fs from 'fs';
import path from 'path';

const dir = 'apps/site/src/legacy-pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add `hidden md:block` to the sticky wrapper to hide it on phones
  content = content.replace(
    /(<div className=")sticky top-4 z-30 h-0 w-full(">\s*<img\s+src="\/img\/best-product-badge\.png")/g,
    `$1hidden md:block sticky top-4 z-30 h-0 w-full$2`
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Updated visibility in', file);
  }
});
