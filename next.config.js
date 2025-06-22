/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-map-gl', 'mapbox-gl'],
  experimental: {
    // appDir: true, // Uncomment if you use the App Router (Next.js 13+)
    // serverActions: true, // Uncomment if you use Server Actions
  },
  images: {
    domains: ['placehold.co', 'api.mapbox.com'],
  },
  webpack: (config) => {
    config.resolve.alias['mapbox-gl'] = 'mapbox-gl/dist/mapbox-gl.js';
    return config;
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