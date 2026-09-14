const fs = require('fs');
const path = require('path');

const directory = './src';

const colorMap = {
  // Dark Browns -> Main (dark green) or Text
  '#28130d': 'brand-main',
  '#3a241c': 'brand-main',
  '#23150c': 'brand-text',
  '#2b120c': 'brand-main',
  '#2d1a12': 'brand-main',
  '#2f1a12': 'brand-main',
  '#37312b': 'brand-text',
  '#4a3427': 'brand-main',
  '#6b3a2a': 'brand-text',
  '#704f38': 'brand-secondary',
  '#705a49': 'brand-muted',

  // Oranges -> Tertiary or Fourth
  '#ef5b23': 'brand-tertiary',
  '#f05d24': 'brand-tertiary',
  '#d86c42': 'brand-fourth',
  '#d95721': 'brand-tertiary',
  '#c7672f': 'brand-tertiary',
  '#ee6b39': 'brand-tertiary',
  '#ff8a43': 'brand-fourth',

  // Light Creams/Papers -> replace with white or just remove hardcoded bg if possible
  '#f6f0e7': 'white',
  '#fff9ef': 'white',
  '#ebe7e0': 'gray-100',
  '#f0ece5': 'gray-100',
  '#f9f5f0': 'gray-50',
  '#dcd7d0': 'brand-muted',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const [hex, brand] of Object.entries(colorMap)) {
    const hexRegexStr = hex.replace('#', '\\#');
    const prefixes = ['text', 'bg', 'border', 'ring', 'fill', 'hover:text', 'hover:bg', 'focus:ring'];
    
    prefixes.forEach(prefix => {
      const regex = new RegExp(`${prefix}-\\[${hexRegexStr}\\]`, 'ig');
      content = content.replace(regex, `${prefix}-${brand}`);
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      walk(file);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
      processFile(file);
    }
  });
}

walk(directory);
console.log('Color replacement complete.');
