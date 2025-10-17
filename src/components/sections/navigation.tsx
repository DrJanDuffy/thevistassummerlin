'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAvailableCommunities, getCommunitySlug } from '@/lib/community-mapping';

const subcommunities = getAvailableCommunities();

function toKebabCase(name: string) {
  return getCommunitySlug(name);
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCommunitiesDropdown, setShowCommunitiesDropdown] = useState(false);
  const [showPropertiesDropdown, setShowPropertiesDropdown] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-primary-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="font-primary font-medium">Preferred Realtor: Dr. Jan Duffy | The Vistas Summerlin</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+17025000607" className="flex items-center hover:text-link-blue transition-colors duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Dr. Jan: (702) 500-0607
              </a>
        <a href="mailto:DrJanSells@TheVistasSummerlin.com" className="flex items-center hover:text-link-blue transition-colors duration-200">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          DrJanSells@TheVistasSummerlin.com
        </a>
        <a href="tel:+17025000607" className="flex items-center hover:text-link-blue transition-colors duration-200">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (702) 500-0607
        </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="text-2xl lg:text-3xl font-primary font-bold text-primary-navy group-hover:text-link-blue transition-colors duration-300">
                The Vistas Summerlin
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-base font-primary font-medium text-gray-800 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Home
            </Link>
            
            {/* Communities Dropdown */}
            <div className="relative">
              <button
                className="text-base font-primary font-medium text-gray-800 hover:text-link-blue transition-colors duration-200 flex items-center px-3 py-2 rounded-md hover:bg-gray-50 group"
                onClick={() => setShowCommunitiesDropdown(!showCommunitiesDropdown)}
                onBlur={(e) => {
                  // Use requestIdleCallback for better performance
                  if ('requestIdleCallback' in window) {
                    requestIdleCallback(() => setShowCommunitiesDropdown(false));
                  } else {
                    setTimeout(() => setShowCommunitiesDropdown(false), 0);
                  }
                }}
                aria-expanded={showCommunitiesDropdown ? "true" : "false"}
                aria-haspopup="true"
              >
                Communities
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showCommunitiesDropdown && (
                <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-primary font-semibold text-gray-900 mb-2">All Communities</h3>
                      <p className="text-sm text-gray-600">Discover luxury living in The Vistas Summerlin</p>
                    </div>
                    <Link
                      href="/communities"
                      className="block w-full text-center bg-link-blue text-white px-4 py-3 text-sm font-primary font-medium rounded-md hover:bg-primary-navy transition-colors duration-200 mb-4"
                      onClick={() => setShowCommunitiesDropdown(false)}
                    >
                      View All Communities
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      {subcommunities.map((name) => (
                        <Link
                          key={name}
                          href={`/communities/${toKebabCase(name)}`}
                          className="block px-3 py-2 text-sm font-primary text-gray-700 hover:bg-link-blue hover:text-white rounded transition-colors duration-200"
                          onClick={() => setShowCommunitiesDropdown(false)}
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Properties Dropdown */}
            <div className="relative">
              <button
                className="text-base font-primary font-medium text-gray-800 hover:text-link-blue transition-colors duration-200 flex items-center px-3 py-2 rounded-md hover:bg-gray-50 group"
                onClick={() => setShowPropertiesDropdown(!showPropertiesDropdown)}
                onBlur={(e) => {
                  // Use requestIdleCallback for better performance
                  if ('requestIdleCallback' in window) {
                    requestIdleCallback(() => setShowPropertiesDropdown(false));
                  } else {
                    setTimeout(() => setShowPropertiesDropdown(false), 0);
                  }
                }}
                aria-expanded={showPropertiesDropdown ? "true" : "false"}
                aria-haspopup="true"
              >
                Properties
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showPropertiesDropdown && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  <div className="p-4">
                    <Link
                      href="/search"
                      className="block px-4 py-3 text-sm font-primary font-medium text-gray-900 hover:bg-link-blue hover:text-white rounded-md transition-colors duration-200 mb-2"
                      onClick={() => setShowPropertiesDropdown(false)}
                    >
                      Search Properties
                    </Link>
                    <Link
                      href="/sell"
                      className="block px-4 py-3 text-sm font-primary font-medium text-gray-900 hover:bg-link-blue hover:text-white rounded-md transition-colors duration-200 mb-2"
                      onClick={() => setShowPropertiesDropdown(false)}
                    >
                      Sell Your Home
                    </Link>
                    <Link
                      href="/market-reports"
                      className="block px-4 py-3 text-sm font-primary font-medium text-gray-900 hover:bg-link-blue hover:text-white rounded-md transition-colors duration-200"
                      onClick={() => setShowPropertiesDropdown(false)}
                    >
                      Market Reports
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/blog" 
              className="text-base font-primary font-medium text-gray-800 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Blog
            </Link>
            
            <Link 
              href="/about" 
              className="text-base font-primary font-medium text-gray-800 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              About
            </Link>
            
            <Link 
              href="/contact" 
              className="text-base font-primary font-medium text-gray-800 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Contact
            </Link>
          </nav>

          {/* Search and CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <Link
              href="/search"
              className="flex items-center px-4 py-2 text-sm font-primary font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </Link>
            
            {/* Primary CTA */}
            <Link 
              href="/search" 
              className="bg-link-blue text-white px-6 py-3 rounded-lg text-sm font-primary font-semibold hover:bg-primary-navy transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Find Your Home
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-link-blue transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200">
              <Link 
                href="/" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/communities" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Communities
              </Link>
              <Link 
                href="/search" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Search Properties
              </Link>
              <Link 
                href="/sell" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Your Home
              </Link>
              <Link 
                href="/market-reports" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Market Reports
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
                <a href="tel:+17025000607" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-link-blue">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (702) 500-0607
                </a>
                <a href="mailto:DrJanSells@TheVistasSummerlin.com" className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-link-blue">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  DrJanSells@TheVistasSummerlin.com
                </a>
              </div>
              
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link 
                  href="/search" 
                  className="block w-full text-center bg-link-blue text-white px-6 py-3 rounded-lg text-base font-primary font-semibold hover:bg-primary-navy transition-colors duration-200 shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find Your Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 