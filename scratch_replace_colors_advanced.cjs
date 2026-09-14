const fs = require('fs');
const path = require('path');

const directory = './src';

// Helper to convert hex to RGB
function hexToRgb(hex) {
  let r = 0, g = 0, b = 0;
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  return { r, g, b };
}

function getLuminance(r, g, b) {
  const a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Map any hex to our new theme
function mapHexToTheme(hex, isText) {
  const { r, g, b } = hexToRgb(hex);
  const lum = getLuminance(r, g, b);
  
  // Is it orange-ish/red-ish? (R is dominant)
  const isOrange = r > g + 40 && r > b + 40 && lum > 0.1 && lum < 0.7;
  
  if (lum > 0.8) {
    // Very light -> white or gray-50
    return 'white';
  } else if (lum < 0.15) {
    // Very dark -> brand-main or brand-text
    return isText ? 'brand-text' : 'brand-main';
  } else if (isOrange) {
    return 'brand-tertiary';
  } else if (lum > 0.5) {
    // Light mid -> brand-secondary or brand-fourth
    return isText ? 'brand-muted' : 'brand-secondary';
  } else {
    // Dark mid -> brand-main
    return isText ? 'brand-text' : 'brand-main';
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace any tailwind class with a hex code inside
  // e.g., bg-[#123456], text-[#abcdef], border-[#123]
  const regex = /(bg|text|border|ring|fill|hover:text|hover:bg|focus:ring)-\[#([0-9a-fA-F]{3,6})\]/g;
  
  content = content.replace(regex, (match, prefix, hex) => {
    const isText = prefix.includes('text');
    const mapped = mapHexToTheme('#' + hex, isText);
    
    // If we map to white/gray, for background use bg-white, etc.
    if (mapped === 'white') return `${prefix}-white`;
    if (mapped === 'gray-50') return `${prefix}-gray-50`;
    
    return `${prefix}-${mapped}`;
  });
  
  // Replace arbitrary tailwind rgba values too, e.g. bg-[rgba(...)]
  // To keep it simple, just map all rgba with < 0.5 opacity to a light theme or something
  // Or just map all background colors with rgba to brand-secondary
  const rgbaRegex = /(bg|text|border)-\[rgba?\([^)]+\)\]/g;
  content = content.replace(rgbaRegex, (match, prefix) => {
    return `${prefix}-brand-secondary/30`;
  });

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
console.log('Intelligent color replacement complete.');
