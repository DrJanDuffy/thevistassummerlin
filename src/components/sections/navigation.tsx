'use client';

import { useState } from 'react';
import Link from 'next/link';

const subcommunities = [
  "Altessa", "Ashton Park", "Barrington", "Bella Vista", "Canterra", "Capri",
  "Cara Vella", "Casa Rosa", "Encanto", "Estancia", "Hillstone", "Kingwood",
  "Miraleste", "Miramonte", "Monterossa", "Palmilla", "Paradiso", "Portofino",
  "Sage Hills", "San Marcos", "Santalina", "Solano", "Somerset", "Sonesta",
  "Summerfield", "Talaverde", "Talega", "Vista Verde"
];

function toKebabCase(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCommunitiesDropdown, setShowCommunitiesDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg lg:text-xl font-primary font-semibold text-primary-navy hover:text-link-blue transition-colors duration-300">
              The Vistas Summerlin
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <div className="flex justify-center items-center space-x-10">
              <Link 
                href="/" 
                className="text-sm font-primary font-medium text-gray-700 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded"
              >
                Home
              </Link>
              <Link 
                href="/sell" 
                className="text-sm font-primary font-medium text-gray-700 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded"
              >
                Sell
              </Link>
              
              {/* Communities Dropdown */}
              <div className="relative">
                <button
                  className="text-sm font-primary font-medium text-gray-700 hover:text-link-blue transition-colors duration-200 flex items-center px-3 py-2 rounded group"
                  onClick={() => setShowCommunitiesDropdown(!showCommunitiesDropdown)}
                  onBlur={() => setTimeout(() => setShowCommunitiesDropdown(false), 150)}
                >
                  Communities
                  <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showCommunitiesDropdown && (
                  <div className="absolute left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                    <div className="p-4">
                      <Link
                        href="/communities"
                        className="block px-4 py-3 text-sm font-primary font-medium text-gray-900 hover:bg-link-blue hover:text-white rounded-md transition-colors duration-200 mb-2"
                        onClick={() => setShowCommunitiesDropdown(false)}
                      >
                        View All Communities
                      </Link>
                      <div className="border-t border-gray-200 my-3"></div>
                      <div className="grid grid-cols-2 gap-1">
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
              
              <Link 
                href="/market-reports" 
                className="text-sm font-primary font-medium text-gray-700 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded"
              >
                Market Reports
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-primary font-medium text-gray-700 hover:text-link-blue transition-colors duration-200 px-3 py-2 rounded"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link 
              href="/search" 
              className="bg-link-blue text-white px-6 py-3 rounded-lg text-sm font-primary font-medium hover:bg-primary-navy transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
                href="/sell" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Your Home
              </Link>
              <Link 
                href="/communities" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Communities
              </Link>
              <Link 
                href="/market-reports" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Market Reports
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-base font-primary font-medium text-gray-700 hover:text-link-blue hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link 
                  href="/search" 
                  className="block w-full text-center bg-link-blue text-white px-6 py-3 rounded-lg text-base font-primary font-medium hover:bg-primary-navy transition-colors duration-200 shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find Your Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 