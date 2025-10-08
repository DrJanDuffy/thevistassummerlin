# 🏠 Manual RealScout URL Extraction Guide

## 🎯 **Method 1: Enhanced Console Script**

### **Step 1: Visit Your Listing**
Go to: `https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139`

### **Step 2: Open Developer Tools**
- Press **F12** or right-click → **"Inspect"**
- Go to **"Console"** tab

### **Step 3: Run Enhanced Script**
Copy and paste this entire script from `scripts/extract-realscout-urls.js`:

```javascript
// RealScout Image URL Extractor - Enhanced Version
console.log('🔍 RealScout Image Extractor Starting...');

setTimeout(() => {
  const selectors = [
    'img[src*="realscout"]',
    'img[src*="em.realscout"]', 
    'img[src*="api/v1/images"]',
    '.gallery img',
    '.photo img',
    '.image img'
  ];
  
  let allImages = [];
  
  selectors.forEach(selector => {
    const images = document.querySelectorAll(selector);
    images.forEach(img => {
      if (img.src && img.src.includes('realscout')) {
        allImages.push({
          src: img.src,
          alt: img.alt || 'Property image'
        });
      }
    });
  });
  
  const uniqueImages = allImages.filter((img, index, self) => 
    index === self.findIndex(i => i.src === img.src)
  );
  
  console.log(`Found ${uniqueImages.length} RealScout images:`);
  uniqueImages.forEach((img, index) => {
    console.log(`${index + 1}. ${img.src}`);
  });
  
  if (uniqueImages.length > 0) {
    const roomTypes = ['frontExterior', 'kitchen', 'livingRoom', 'masterBedroom', 'backyard', 'diningRoom', 'secondMaster', 'garage'];
    
    console.log('📝 Copy this to src/lib/propertyImages.ts:');
    console.log('export const realScoutImageUrls = {');
    
    roomTypes.forEach((room, index) => {
      const url = uniqueImages[index] ? uniqueImages[index].src : 'PLACEHOLDER_URL';
      console.log(`  ${room}: "${url}",`);
    });
    
    console.log('};');
  }
}, 3000);
```

---

## 🖱️ **Method 2: Manual Right-Click Method**

### **Step 1: Navigate Through Photos**
1. Go to your RealScout listing
2. Click through the photo gallery
3. Make sure all photos are loaded

### **Step 2: Copy Each Image URL**
For each photo, right-click and select:
- **"Copy image address"** (Chrome)
- **"Copy image URL"** (Firefox)
- **"Copy image link"** (Safari)

### **Step 3: Note the Order**
Copy URLs in this order:
1. **Front Exterior** - House front view
2. **Kitchen** - Black & white modern kitchen
3. **Living Room** - Gas fireplace area
4. **Master Bedroom** - Primary bedroom
5. **Backyard** - Outdoor space
6. **Dining Room** - Formal dining area
7. **Second Master** - Second primary suite
8. **Garage** - 2-car garage

---

## 📋 **Method 3: Network Tab Method**

### **Step 1: Open Network Tab**
- Press **F12** → **"Network"** tab
- Refresh the page
- Filter by **"Img"** to see only images

### **Step 2: Find RealScout Images**
Look for requests to:
- `em.realscout.com`
- `api/v1/images`
- URLs containing your MLS number (2722090)

### **Step 3: Copy URLs**
Right-click on each image request → **"Copy URL"**

---

## 🔧 **Update Your Configuration**

Once you have the URLs, update `src/lib/propertyImages.ts`:

```typescript
export const realScoutImageUrls = {
  frontExterior: "YOUR_FIRST_URL_HERE",
  kitchen: "YOUR_SECOND_URL_HERE", 
  livingRoom: "YOUR_THIRD_URL_HERE",
  masterBedroom: "YOUR_FOURTH_URL_HERE",
  backyard: "YOUR_FIFTH_URL_HERE",
  diningRoom: "YOUR_SIXTH_URL_HERE",
  secondMaster: "YOUR_SEVENTH_URL_HERE",
  garage: "YOUR_EIGHTH_URL_HERE",
};
```

---

## 🧪 **Test Your URLs**

### **Step 1: Verify URLs Work**
Copy each URL and paste in a new browser tab to make sure they load.

### **Step 2: Test Your Website**
```bash
vercel dev
```

Check:
- ✅ Homepage shows your photos
- ✅ Property page gallery works
- ✅ All images load properly
- ✅ Mobile view looks good

---

## 🚨 **Troubleshooting**

### **No Images Found?**
1. **Make sure you're logged into RealScout**
2. **Wait for all photos to load completely**
3. **Scroll through the entire photo gallery**
4. **Try refreshing the page**

### **Wrong Images?**
1. **Check the order matches your listing**
2. **Make sure you're on the right property**
3. **Verify MLS number matches (2722090)**

### **Images Don't Load?**
1. **Test URLs in browser first**
2. **Check for typos in the URLs**
3. **Clear browser cache**
4. **Make sure URLs are in quotes**

---

## 🎯 **Expected URL Format**

Your RealScout URLs should look like:
```
https://em.realscout.com/api/v1/images/[image-id]/800x600
https://em.realscout.com/api/v1/images/[image-id]/1200x900
https://em.realscout.com/api/v1/images/[image-id]/1600x1200
```

---

**🚀 Once you have the URLs, your featured home will showcase the actual professional photos from your RealScout listing!**
