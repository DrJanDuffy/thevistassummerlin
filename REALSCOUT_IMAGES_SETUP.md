# 🏠 RealScout Images Setup Guide

## ✅ What I've Done (Option 2 Implementation)

I've set up your website to use **RealScout images** - the professional photos from your actual listing. Here's what's been configured:

### **Updated Files:**
1. **`src/lib/propertyImages.ts`** - RealScout image URL configuration
2. **`src/app/home.tsx`** - Homepage now uses RealScout images
3. **`src/components/PropertyImageGallery.tsx`** - Property page gallery updated
4. **`scripts/get-realscout-images.js`** - Helper script to extract URLs

### **Current Setup:**
- **Homepage:** Shows RealScout kitchen photo + 3 thumbnail photos
- **Property Page:** Full gallery with all 8 RealScout photos
- **Mobile:** Optimized for all devices
- **SEO:** Proper alt text and captions

## 🎯 Next Steps: Get Your Real RealScout URLs

### **Method 1: Automated Script (Recommended)**

1. **Visit your RealScout listing:**
   ```
   https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139
   ```

2. **Open Developer Tools:**
   - Press `F12` or right-click → "Inspect"
   - Go to the **Console** tab

3. **Run the extraction script:**
   - Copy the code from `scripts/get-realscout-images.js`
   - Paste it in the console and press Enter
   - Copy the generated URLs

4. **Update the configuration:**
   - Replace URLs in `src/lib/propertyImages.ts`
   - Save the file

### **Method 2: Manual Copy (Alternative)**

1. **Right-click on each photo** in your RealScout listing
2. **Select "Copy image address"** or "Copy image URL"
3. **Replace the placeholder URLs** in `src/lib/propertyImages.ts`

## 📸 Image Order & Descriptions

Your RealScout images will appear in this order:

| # | Room | Description | Current URL |
|---|------|-------------|-------------|
| 1 | **Front Exterior** | Curb appeal shot | `realScoutImageUrls.frontExterior` |
| 2 | **Kitchen** | Modern black & white design | `realScoutImageUrls.kitchen` |
| 3 | **Living Room** | Gas fireplace & natural light | `realScoutImageUrls.livingRoom` |
| 4 | **Master Bedroom** | Primary suite with bath | `realScoutImageUrls.masterBedroom` |
| 5 | **Backyard** | Landscaped entertaining space | `realScoutImageUrls.backyard` |
| 6 | **Dining Room** | Formal entertaining area | `realScoutImageUrls.diningRoom` |
| 7 | **Second Master** | Unique dual master feature | `realScoutImageUrls.secondMaster` |
| 8 | **Garage** | 2-car with storage | `realScoutImageUrls.garage` |

## 🔧 How to Update the URLs

### **Step 1: Get Your Real URLs**
Use one of the methods above to get your actual RealScout image URLs.

### **Step 2: Update the Configuration**
Open `src/lib/propertyImages.ts` and replace the placeholder URLs:

```typescript
export const realScoutImageUrls = {
  // Replace these with your actual RealScout URLs
  frontExterior: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
  kitchen: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
  livingRoom: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
  masterBedroom: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
  backyard: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
  diningRoom: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
  secondMaster: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
  garage: "YOUR_ACTUAL_REALSCOUT_URL_HERE",
};
```

### **Step 3: Test Your Changes**
```bash
vercel dev
```

Visit your website and check:
- ✅ Homepage featured section shows your photos
- ✅ Property page gallery works
- ✅ All images load properly
- ✅ Mobile view looks good

## 🚀 Benefits of RealScout Images

### **Professional Quality:**
- High-resolution photos
- Professional staging
- Consistent lighting
- Multiple angles

### **Automatic Updates:**
- If you update photos in RealScout, they'll update on your website
- No need to manually upload files
- Always current listing photos

### **SEO Optimized:**
- Proper alt text for accessibility
- Fast loading with optimization
- Mobile-responsive
- Search engine friendly

## 🛠️ Troubleshooting

### **Images Not Showing?**
1. **Check URL format** - Should start with `https://em.realscout.com/`
2. **Verify URLs work** - Test in browser tab first
3. **Clear browser cache** - Hard refresh (Ctrl+F5)
4. **Check console errors** - Look for 404 or CORS errors

### **Slow Loading?**
- RealScout images are already optimized
- Check your internet connection
- Images load progressively (good for SEO)

### **Wrong Images?**
- Make sure you're copying the right image URLs
- Check the order matches your listing
- Verify you're on the correct property page

## 📱 What You'll See

### **Homepage Featured Section:**
- **Large main photo** (kitchen)
- **3 small thumbnails** (exterior, living room, backyard)
- **Hover effects** on thumbnails
- **Professional overlay** with property details

### **Individual Property Page:**
- **Full photo gallery** with navigation
- **Lightbox view** for enlarged images
- **Mobile carousel** for touch devices
- **Descriptive captions** for each photo

## 🎉 Ready to Go!

Once you update the RealScout URLs, your featured home will showcase:
- **Professional listing photos**
- **Multiple room views**
- **Mobile-optimized display**
- **Fast loading performance**
- **SEO-friendly structure**

**Need help?** The extraction script in `scripts/get-realscout-images.js` will guide you through getting the URLs automatically!

---

**🚀 Your RealScout images are ready to make your featured home look amazing!**
