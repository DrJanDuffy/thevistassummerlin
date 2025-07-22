'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                href="/communities" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Communities
              </Link>
              <Link 
                href="/search" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Search
              </Link>
              <Link 
                href="/market-analysis" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Market Analysis
              </Link>
              <Link 
                href="/investment" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                Investment
              </Link>
              <Link 
                href="/about" 
                className="text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
              >
                About
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
                href="/communities" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Communities
              </Link>
              <Link 
                href="/search" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link 
                href="/market-analysis" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Market Analysis
              </Link>
              <Link 
                href="/investment" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Investment
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-nav font-secondary text-text-dark hover:text-link-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
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