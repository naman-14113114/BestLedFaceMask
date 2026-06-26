import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'apps/site/src/legacy-pages');

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      content = content.replace(/\{rest\.join\(":"\)\}/g, '<span dangerouslySetInnerHTML={{ __html: rest.join(":") }} />');
      content = content.replace(/\{rest\.join\(':'\)\}/g, "<span dangerouslySetInnerHTML={{ __html: rest.join(':') }} />");
      content = content.replace(/\{rest\.length > 0 \? ':' \+ rest\.join\(':'\) : ''\}/g, "<span dangerouslySetInnerHTML={{ __html: rest.length > 0 ? ':' + rest.join(':') : '' }} />");

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDir(dir);
