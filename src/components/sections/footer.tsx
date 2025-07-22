'use client';

import Link from 'next/link';

const footerLinks = {
  communities: [
    { name: 'All Communities', href: '/communities' },
    { name: 'Santaluz', href: '/communities/santaluz' },
    { name: 'Red Rock Canyon', href: '/communities/red-rock' },
    { name: 'Summerlin Park', href: '/communities/summerlin-park' },
    { name: 'View All 28', href: '/communities' }
  ],
  services: [
    { name: 'Home Valuation', href: '/valuation' },
    { name: 'Market Data', href: '/market' },
    { name: 'Property Search', href: '/search' },
    { name: 'Buying Guide', href: '/guide' },
    { name: 'Selling Guide', href: '/sell' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Market Insights', href: '/market' },
    { name: 'School Information', href: '/schools' },
    { name: 'Community Events', href: '/events' },
    { name: 'Local Amenities', href: '/amenities' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap.xml' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-h3 font-primary font-medium mb-4">
              The Vistas Summerlin
            </h3>
            <p className="text-body font-secondary mb-6 opacity-90">
              Your trusted partner in finding the perfect home in one of Las Vegas' most 
              prestigious residential areas. Discover 28 unique subcommunities with 
              diverse housing options and world-class amenities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-link-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-body font-secondary">(702) 555-0123</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-link-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-body font-secondary">info@thevistassummerlin.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-link-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-body font-secondary">Las Vegas, NV 89135</span>
              </div>
            </div>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-body font-primary font-medium mb-4">Communities</h4>
            <ul className="space-y-2">
              {footerLinks.communities.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-body font-secondary opacity-80 hover:text-link-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-body font-primary font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-body font-secondary opacity-80 hover:text-link-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-body font-primary font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-body font-secondary opacity-80 hover:text-link-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-body font-primary font-medium mb-4">
              Stay Updated
            </h4>
            <p className="text-body font-secondary opacity-80 mb-4">
              Get the latest market updates and property alerts delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-default text-body font-secondary text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-link-blue focus:border-transparent"
              />
              <button className="bg-link-blue text-white px-6 py-3 rounded-default text-body font-secondary font-medium hover:bg-white hover:text-primary-navy transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-body font-secondary opacity-80 mb-4 md:mb-0">
              © 2024 The Vistas Summerlin. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy"
                className="text-body font-secondary opacity-80 hover:text-link-blue transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-body font-secondary opacity-80 hover:text-link-blue transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap.xml"
                className="text-body font-secondary opacity-80 hover:text-link-blue transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 