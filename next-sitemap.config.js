module.exports = {
  siteUrl: 'https://www.thevistassummerlin.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/_next/' },
      { userAgent: '*', disallow: '/admin/' },
      { userAgent: '*', disallow: '/*.vercel.app/' },
    ],
    additionalSitemaps: [
      'https://www.thevistassummerlin.com/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/_next/*', '/admin/*'],
  // Additional paths for important pages
  additionalPaths: async (config) => [
    await config.transform(config, '/faq'),
    await config.transform(config, '/testimonials'),
    await config.transform(config, '/agents/dr-jan-duffy'),
  ],
  // Priority and change frequency settings
  changefreq: 'weekly',
  priority: 0.7,
  // Optionally, add more config for alternate languages, exclude paths, etc.
}; 