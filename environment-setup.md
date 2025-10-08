# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Google Search Console Verification
# Get this code from Google Search Console when you verify your domain
GOOGLE_SITE_VERIFICATION=your-google-verification-code-here

# RealScout Configuration
# Contact RealScout to get your actual office and market IDs
NEXT_PUBLIC_REALSCOUT_OFFICE_ID=your-office-id-here
NEXT_PUBLIC_REALSCOUT_MARKET_ID=las-vegas

# Google Analytics (Optional)
# GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

## How to Get These Values

### 1. Google Search Console Verification
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (thevistassummerlin.com)
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag
5. Add it to your `.env.local` file

### 2. RealScout Credentials
1. Contact RealScout support
2. Request your office ID and market ID for Las Vegas
3. Update the RealScout widget configurations in:
   - `src/app/(routes)/about/page.tsx`
   - `src/app/(routes)/communities/page.tsx`
   - `src/app/(routes)/search/page.tsx`

## Security Notes
- Never commit `.env.local` to version control
- Use different values for development and production
- Keep API keys secure and rotate them regularly
