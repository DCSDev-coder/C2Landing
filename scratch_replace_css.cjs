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
  const isOrange = r > g + 40 && r > b + 40 && lum > 0.1 && lum < 0.7;
  
  if (lum > 0.8) {
    return 'white'; // Keep light background/text white
  } else if (lum < 0.15) {
    return isText ? 'var(--brand-text)' : 'var(--brand-main)';
  } else if (isOrange) {
    return 'var(--brand-tertiary)';
  } else if (lum > 0.5) {
    return isText ? 'var(--brand-muted)' : 'var(--brand-secondary)';
  } else {
    return isText ? 'var(--brand-text)' : 'var(--brand-main)';
  }
}

function processCssFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace standard CSS color properties with hex values
  const regex = /(color|background|background-color|border|border-color|fill|stroke):\s*(#[0-9a-fA-F]{3,6})/g;
  
  content = content.replace(regex, (match, prop, hex) => {
    const isText = prop === 'color';
    let mapped = mapHexToTheme(hex, isText);
    
    // special case if it returns white, we can leave it as white or #fff
    if (mapped === 'white') mapped = '#ffffff';

    return `${prop}: ${mapped}`;
  });
  
  // Replace arbitrary rgba in CSS (mostly shadows or overlays)
  // Let's just map dark rgba to a dark brand rgba, light to light.
  const rgbaRegex = /(color|background|background-color|border|border-color|box-shadow):\s*rgba?\([^)]+\)/g;
  content = content.replace(rgbaRegex, (match, prop) => {
    if (prop === 'box-shadow') return match; // Leave box-shadows alone for now
    if (prop.includes('color')) {
        return `${prop}: var(--brand-text)`;
    }
    return `${prop}: var(--brand-main)`; // fallback
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
    } else if (file.endsWith('.css')) {
      processCssFile(file);
    }
  });
}

walk(directory);
console.log('CSS color replacement complete.');
