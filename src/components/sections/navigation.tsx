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
    <nav className="bg-white shadow-card sticky top-0 z-modal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-h2 font-primary font-medium text-primary-navy">
              The Vistas Summerlin
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link 
                href="/" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="/buy" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Buy in The Vistas
              </Link>
              <Link 
                href="/sell" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Sell Your Vistas Home
              </Link>
              
              {/* Communities Dropdown */}
              <div className="relative">
                <button
                  className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300 flex items-center"
                  onClick={() => setShowCommunitiesDropdown(!showCommunitiesDropdown)}
                  onBlur={() => setTimeout(() => setShowCommunitiesDropdown(false), 150)}
                >
                  The Vistas Communities
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showCommunitiesDropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-light-gray rounded-default shadow-lg max-h-96 overflow-y-auto z-50">
                    <div className="p-4">
                      <Link
                        href="/communities"
                        className="block px-4 py-2 text-nav font-secondary text-text-dark hover:bg-link-blue hover:text-white rounded transition-colors duration-300 mb-2"
                        onClick={() => setShowCommunitiesDropdown(false)}
                      >
                        All Communities
                      </Link>
                      <div className="border-t border-light-gray my-2"></div>
                      {subcommunities.map((name) => (
                        <Link
                          key={name}
                          href={`/communities/${toKebabCase(name)}`}
                          className="block px-4 py-2 text-sm font-secondary text-text-dark hover:bg-link-blue hover:text-white rounded transition-colors duration-300"
                          onClick={() => setShowCommunitiesDropdown(false)}
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/market-reports" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Market Reports
              </Link>
              <Link 
                href="/about" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                About Dr. Jan Duffy
              </Link>
              <Link 
                href="/contact" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/search" 
              className="bg-link-blue text-white px-6 py-2 rounded-default text-nav font-secondary hover:bg-primary-navy transition-colors duration-300"
            >
              Find Your Home
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-dark hover:text-link-blue transition-colors duration-300"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-light-gray">
              <Link 
                href="/" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/buy" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy in The Vistas
              </Link>
              <Link 
                href="/sell" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Your Vistas Home
              </Link>
              <Link 
                href="/communities" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                The Vistas Communities
              </Link>
              <Link 
                href="/market-reports" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Market Reports
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Dr. Jan Duffy
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  href="/search" 
                  className="block w-full text-center bg-link-blue text-white px-6 py-2 rounded-default text-nav font-secondary hover:bg-primary-navy transition-colors duration-300"
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