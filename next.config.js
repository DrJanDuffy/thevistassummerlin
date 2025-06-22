/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir: true, // Uncomment if you use the App Router (Next.js 13+)
    // serverActions: true, // Uncomment if you use Server Actions
  },
  images: {
    domains: ['placehold.co'], // Add if you use external images
  },
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig; 