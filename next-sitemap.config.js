module.exports = {
  siteUrl: 'https://thevistassummerlin.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/*.vercel.app/' },
    ],
  },
  exclude: ['/api/*'],
  // Optionally, add more config for alternate languages, exclude paths, etc.
}; 