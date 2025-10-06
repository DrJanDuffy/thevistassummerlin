'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Star, Award, Users, TrendingUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  communities: [
    { name: 'All Communities', href: '/communities' },
    { name: 'Barrington', href: '/communities/img-0737' },
    { name: 'Kingwood', href: '/communities/img-0738' },
    { name: 'Santalina', href: '/communities/img-0739' },
    { name: 'Portofino', href: '/communities/portofino' },
    { name: 'View All Communities', href: '/communities' }
  ],
  services: [
    { name: 'Home Valuation', href: '/valuation' },
    { name: 'Market Reports', href: '/market-reports' },
    { name: 'Property Search', href: '/search' },
    { name: 'Sell Your Home', href: '/sell' },
    { name: 'Community Guide', href: '/community-guide' }
  ],
  resources: [
    { name: 'Blog & News', href: '/blog' },
    { name: 'Market Analysis', href: '/market-analysis' },
    { name: 'Investment Guide', href: '/investment' },
    { name: 'Featured Property', href: '/properties/11773-golden-moments-avenue' },
    { name: 'About Dr. Jan Duffy', href: '/about' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap.xml' }
  ]
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">
                The Vistas Summerlin
              </h3>
              <div className="mb-4">
                <p className="text-blue-300 font-semibold mb-2">Homes by Dr. Jan Duffy</p>
                <p className="text-sm text-blue-200">Preferred Realtor | Award-Winning Service</p>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Dr. Jan Duffy, your preferred realtor, guides you through 28 unique subcommunities in Las Vegas' most 
                prestigious residential area. Discover luxury homes with world-class amenities and award-winning expertise.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-300" />
                </div>
                <a href="tel:+17025551234" className="text-blue-100 hover:text-white transition-colors">
                  Call Dr. Jan: (702) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-300" />
                </div>
                <a href="mailto:drjan@thevistassummerlin.com" className="text-blue-100 hover:text-white transition-colors">
                  drjan@thevistassummerlin.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-300" />
                </div>
                <span className="text-blue-100">Las Vegas, NV 89135</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="w-5 h-5 text-blue-200" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Communities</h4>
            <ul className="space-y-3">
              {footerLinks.communities.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-t border-white/20">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-300" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-blue-200 text-sm">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-300" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">$2.1B</div>
            <div className="text-blue-200 text-sm">Sales Volume</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-purple-300" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">15+</div>
            <div className="text-blue-200 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">98%</div>
            <div className="text-blue-200 text-sm">Satisfaction</div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">
              Stay Updated with Market Insights
            </h4>
            <p className="text-blue-100 mb-6">
              Get the latest market updates and property alerts delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 mb-4 md:mb-0">
              © 2024 The Vistas Summerlin. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy"
                className="text-blue-200 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-blue-200 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap.xml"
                className="text-blue-200 hover:text-white transition-colors duration-300"
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