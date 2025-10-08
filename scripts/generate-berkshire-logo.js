import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a Berkshire Hathaway branded logo SVG
const createBerkshireLogo = (size, filename) => {
  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="berkshireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#2C3E50;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a252f;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Background circle -->
    <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 10}" fill="url(#berkshireGrad)" stroke="#34495e" stroke-width="2"/>
    
    <!-- BHHS initials -->
    <text x="50%" y="45%" text-anchor="middle" dy="0.35em" fill="white" font-family="Arial, sans-serif" font-size="${size * 0.25}" font-weight="bold">BHHS</text>
    
    <!-- Nevada Properties text -->
    <text x="50%" y="70%" text-anchor="middle" dy="0.35em" fill="white" font-family="Arial, sans-serif" font-size="${size * 0.12}" font-weight="normal">Nevada Properties</text>
  </svg>`;
  
  const publicPath = path.join(__dirname, '..', 'public', filename);
  fs.writeFileSync(publicPath, svg);
  console.log(`Created ${filename}`);
};

console.log('Creating Berkshire Hathaway branded logos...');

// Create the main logo
createBerkshireLogo(512, 'berkshire-hathaway-logo.png');

// Update existing PWA icons with Berkshire branding
createBerkshireLogo(192, 'android-chrome-192x192.png');
createBerkshireLogo(512, 'android-chrome-512x512.png');
createBerkshireLogo(512, 'logo.png');

console.log('Berkshire Hathaway logos created successfully!');
console.log('');
console.log('IMPORTANT: These are branded placeholder logos. For production:');
console.log('- Replace with the actual Berkshire Hathaway HomeServices Nevada Properties logo');
console.log('- Ensure proper licensing and brand guidelines compliance');
console.log('- Use high-resolution PNG versions for best quality');
