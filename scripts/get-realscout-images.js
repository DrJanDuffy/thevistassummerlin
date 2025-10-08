#!/usr/bin/env node

/**
 * RealScout Image URL Extractor
 * 
 * This script helps you extract the actual image URLs from your RealScout listing
 * and update the propertyImages.ts file automatically.
 * 
 * Usage:
 * 1. Visit your RealScout listing in a web browser
 * 2. Open Developer Tools (F12)
 * 3. Go to the Console tab
 * 4. Copy and paste this script
 * 5. Copy the output and update src/lib/propertyImages.ts
 */

console.log(`
🔍 RealScout Image URL Extractor
================================

To get your actual RealScout image URLs:

1. Visit your listing: https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139

2. Open Developer Tools (F12) → Console tab

3. Paste this code:
`);

const extractScript = `
// Extract all images from the page
const images = Array.from(document.querySelectorAll('img[src*="realscout"]'));
const imageUrls = images.map(img => img.src).filter(url => url.includes('realscout'));

console.log('Found RealScout images:');
imageUrls.forEach((url, index) => {
  console.log(\`\${index + 1}. \${url}\`);
});

// Generate the updated propertyImages.ts content
const roomTypes = ['frontExterior', 'kitchen', 'livingRoom', 'masterBedroom', 'backyard', 'diningRoom', 'secondMaster', 'garage'];

console.log('\\n📝 Copy this to src/lib/propertyImages.ts:');
console.log('export const realScoutImageUrls = {');

roomTypes.forEach((room, index) => {
  const url = imageUrls[index] || 'PLACEHOLDER_URL';
  console.log(\`  \${room}: "\${url}",\`);
});

console.log('};');
`;

console.log(extractScript);

console.log(`
4. Copy the output and replace the URLs in src/lib/propertyImages.ts

5. Save the file and your RealScout images will be displayed!

💡 Pro Tips:
- Make sure you're logged into RealScout
- Images should load properly on the page
- Copy the full URLs including dimensions
- Test the URLs in a new browser tab first

🚀 After updating, your featured home will show the actual professional photos!
`);

// Alternative: Manual method
console.log(`
📋 Manual Method (Alternative):
==============================

If the script doesn't work, you can manually copy image URLs:

1. Right-click on each photo in your RealScout listing
2. Select "Copy image address" or "Copy image URL"
3. Replace the placeholder URLs in src/lib/propertyImages.ts

Example URL format:
https://em.realscout.com/api/v1/images/[image-id]/800x600

Your current placeholder URLs in src/lib/propertyImages.ts:
- frontExterior: "https://em.realscout.com/api/v1/images/2722090_exterior_front/800x600"
- kitchen: "https://em.realscout.com/api/v1/images/2722090_kitchen_main/800x600"
- etc.

Replace these with your actual RealScout image URLs!
`);
