# 📸 How to Add Photos to Your Featured Home

## Quick Start Guide

### **Step 1: Add Your Photos**
1. **Copy your photos** to the `public/images/` folder
2. **Name them exactly as shown below:**

```
public/images/
├── featured-home-kitchen.jpg        (✅ Already exists)
├── featured-home-exterior.jpg       (Add this)
├── featured-home-living-room.jpg    (Add this)
├── featured-home-master-bedroom.jpg (Add this)
├── featured-home-backyard.jpg       (Add this)
├── featured-home-dining-room.jpg    (Add this)
├── featured-home-second-master.jpg  (Add this)
└── featured-home-garage.jpg         (Add this)
```

### **Step 2: Photo Requirements**
- **Format:** JPG or PNG
- **Size:** 800x600 pixels minimum (1200x800 recommended)
- **File Size:** Under 500KB each (for fast loading)
- **Quality:** High quality, well-lit photos

### **Step 3: Where Photos Will Appear**

#### **Homepage Featured Section:**
- Main large photo (currently kitchen)
- Small thumbnail photos in bottom-right corner
- Professional gallery layout

#### **Individual Property Page:**
- Full photo gallery with navigation
- Lightbox view for enlarged images
- Mobile-optimized carousel

## 🎯 Best Practices for Real Estate Photos

### **Photo Order (Most Important First):**
1. **Front Exterior** - Curb appeal shot
2. **Kitchen** - Heart of the home
3. **Living Room** - Main gathering space
4. **Master Bedroom** - Primary suite
5. **Backyard** - Outdoor living space
6. **Dining Room** - Formal entertaining
7. **Second Master** - Unique selling point
8. **Garage** - Storage/parking

### **Photo Tips:**
- **Lighting:** Use natural light when possible
- **Angles:** Show room depth and size
- **Clean:** Remove clutter and personal items
- **Staging:** Make beds, open blinds, turn on lights
- **Details:** Capture unique features (granite counters, etc.)

## 🔄 Using RealScout Images (Recommended)

### **Get RealScout Image URLs:**
1. Visit your RealScout listing: `https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139`
2. Right-click on each image → "Copy image address"
3. Replace the placeholder URLs in `src/lib/propertyImages.ts`

### **Example RealScout URL Format:**
```
https://em.realscout.com/api/v1/images/1234567890/800x600
```

## 📱 Mobile Optimization

Your photos will automatically be:
- **Responsive** - Scale to any screen size
- **Optimized** - Compressed for fast loading
- **Lazy-loaded** - Load as needed to save bandwidth
- **Accessible** - Proper alt text for screen readers

## 🚀 After Adding Photos

### **Test Your Changes:**
1. Run `vercel dev` to see your changes locally
2. Check the homepage featured section
3. Visit the individual property page
4. Test on mobile devices

### **Performance Check:**
- Use browser dev tools to check loading speeds
- Ensure images load quickly on mobile
- Verify all images display correctly

## 🛠️ Troubleshooting

### **Image Not Showing?**
- Check file name matches exactly (case-sensitive)
- Verify image is in `public/images/` folder
- Check file format (JPG/PNG)
- Clear browser cache

### **Slow Loading?**
- Compress images (use tools like TinyPNG)
- Reduce file size to under 500KB each
- Use JPG format for photos (not PNG)

### **Quality Issues?**
- Use high-resolution source images
- Ensure good lighting in original photos
- Consider professional photography for best results

## 📞 Need Help?

If you need assistance:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Test with a simple image first
4. Contact for technical support

---

**Ready to add your photos?** Just copy them to the `public/images/` folder with the exact names shown above!
