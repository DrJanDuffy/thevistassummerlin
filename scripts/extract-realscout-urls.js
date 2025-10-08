// RealScout Image URL Extractor - Enhanced Version
// Run this in your browser console on the RealScout listing page

console.log('🔍 RealScout Image Extractor Starting...');

// Wait for page to fully load
setTimeout(() => {
  // Try multiple selectors to find RealScout images
  const selectors = [
    'img[src*="realscout"]',
    'img[src*="em.realscout"]',
    'img[src*="api/v1/images"]',
    '.gallery img',
    '.photo img',
    '.image img',
    '[data-testid*="image"] img',
    '.carousel img'
  ];
  
  let allImages = [];
  
  selectors.forEach(selector => {
    const images = document.querySelectorAll(selector);
    images.forEach(img => {
      if (img.src && img.src.includes('realscout')) {
        allImages.push({
          src: img.src,
          alt: img.alt || 'Property image',
          selector: selector
        });
      }
    });
  });
  
  // Remove duplicates
  const uniqueImages = allImages.filter((img, index, self) => 
    index === self.findIndex(i => i.src === img.src)
  );
  
  console.log(`Found ${uniqueImages.length} RealScout images:`);
  uniqueImages.forEach((img, index) => {
    console.log(`${index + 1}. ${img.src}`);
    console.log(`   Alt: ${img.alt}`);
    console.log(`   Found with: ${img.selector}`);
    console.log('');
  });
  
  if (uniqueImages.length > 0) {
    // Generate the propertyImages.ts content
    const roomTypes = ['frontExterior', 'kitchen', 'livingRoom', 'masterBedroom', 'backyard', 'diningRoom', 'secondMaster', 'garage'];
    
    console.log('📝 Copy this to src/lib/propertyImages.ts:');
    console.log('export const realScoutImageUrls = {');
    
    roomTypes.forEach((room, index) => {
      const url = uniqueImages[index] ? uniqueImages[index].src : 'PLACEHOLDER_URL';
      console.log(`  ${room}: "${url}",`);
    });
    
    console.log('};');
    
    console.log('\n🎯 Instructions:');
    console.log('1. Copy the code above');
    console.log('2. Open src/lib/propertyImages.ts in your project');
    console.log('3. Replace the export const realScoutImageUrls = { ... }; section');
    console.log('4. Save the file');
    console.log('5. Run "vercel dev" to see your changes');
    
  } else {
    console.log('❌ No RealScout images found. Try these alternatives:');
    console.log('1. Make sure you are on the actual property listing page');
    console.log('2. Wait for all images to load completely');
    console.log('3. Try scrolling through the photo gallery');
    console.log('4. Check if you need to log into RealScout first');
    console.log('');
    console.log('🔍 Debug: All images on page:');
    const allPageImages = Array.from(document.querySelectorAll('img'));
    allPageImages.forEach((img, index) => {
      if (img.src) {
        console.log(`${index + 1}. ${img.src.substring(0, 100)}...`);
      }
    });
  }
  
}, 3000); // Wait 3 seconds for page to load

console.log('⏳ Waiting for page to load... (3 seconds)');
