# Environment Variables Setup Guide

## 🚨 **CRITICAL: Required for Google Readiness**

### **1. Google Search Console Verification**
```bash
# Get this from Google Search Console -> Settings -> Ownership verification
GOOGLE_SITE_VERIFICATION=your-google-verification-code-here
```

**Steps to get verification code:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.thevistassummerlin.com`
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag
5. Set as `GOOGLE_SITE_VERIFICATION` environment variable

### **2. RealScout Configuration**
```bash
# Get these from RealScout support team
NEXT_PUBLIC_REALSCOUT_OFFICE_ID=your-office-id
NEXT_PUBLIC_REALSCOUT_MARKET_ID=your-market-id
```

### **3. Optional Analytics**
```bash
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Bing Webmaster Tools (optional)
BING_SITE_VERIFICATION=your-bing-verification-code-here
```

## **How to Set Environment Variables:**

### **For Vercel Deployment:**
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable above

### **For Local Development:**
1. Create `.env.local` file in project root
2. Add the variables above
3. Restart development server

## **Current Status:**
- ✅ PWA Icons: Created and ready
- ❌ Google Verification: Needs actual verification code
- ❌ RealScout: Needs office ID and market ID
- ✅ Build: Working correctly
- ✅ Sitemap: Will auto-update with new pages

## **Next Steps:**
1. Set up Google Search Console and get verification code
2. Contact RealScout for office/market IDs
3. Deploy with proper environment variables
4. Submit sitemap to Google Search Console
