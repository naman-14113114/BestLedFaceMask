import fs from 'fs';
import path from 'path';

const dir = 'apps/site/src/legacy-pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove the incorrectly placed badge on the image wrapper
  content = content.replace(/\s*\{product\.isWinner && \(\s*<img\s+src="\/img\/best-product-badge\.png"[^>]+\/>\s*\)\}/g, '');
  content = content.replace(/\s*<img\s+src="\/img\/best-product-badge\.png"[^>]+\/>/g, '');

  // 2. Remove any old sticky wrappers we might have tried before (just in case)
  content = content.replace(/\s*\{product\.isWinner && \(\s*<div className="sticky[^>]+>\s*<img\s+src="\/img\/best-product-badge\.png"[^>]+\/>\s*<\/div>\s*\)\}/g, '');
  content = content.replace(/\s*<div className="sticky[^>]+>\s*<img\s+src="\/img\/best-product-badge\.png"[^>]+\/>\s*<\/div>\s*/g, '');

  // 3. Add the sticky badge back at the TOP of the main container section
  // In files where we loop over products:
  content = content.replace(
    /(<div\s+key=\{product\.id\}\s+className=\{`relative bg-white rounded-3xl shadow-sm border \$\{product\.isWinner \? [^:]+ : [^:]+\} p-6 md:p-10`\}\s*>)/g,
    `$1\n              {product.isWinner && (\n                <div className="sticky top-4 z-30 h-0 w-full">\n                  <img\n                    src="/img/best-product-badge.png"\n                    alt="No. 1 Best Product"\n                    className="absolute -top-10 -left-10 md:-top-14 md:-left-14 w-32 md:w-48 object-contain drop-shadow-xl pointer-events-none"\n                  />\n                </div>\n              )}`
  );

  // In NewAdvertorial2.tsx:
  content = content.replace(
    /(<div\s+ref=\{buudySectionRef\}\s+className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 [^"]*"\s*>)/g,
    `$1\n            <div className="sticky top-4 z-30 h-0 w-full">\n              <img\n                src="/img/best-product-badge.png"\n                alt="No. 1 Best Product"\n                className="absolute -top-10 -left-10 md:-top-14 md:-left-14 w-32 md:w-48 object-contain drop-shadow-xl pointer-events-none"\n              />\n            </div>`
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Updated badges in', file);
  }
});
