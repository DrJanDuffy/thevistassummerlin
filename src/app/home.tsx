'use client';

import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import Footer from '@/components/sections/footer';
import { Phone } from 'lucide-react';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { FeaturedProperty } from '@/components/FeaturedProperty';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <HomeEvaluationSection />
        <PropertyCategories />
        <FeaturedCommunities />
        
        {/* Featured Property Showcase */}
        <FeaturedProperty />
        
        {/* Quick Links Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Explore More About
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">The Vistas Summerlin</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover everything you need to know about our community, market insights, and expert guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Link */}
              <Link 
                href="/blog"
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Market Insights
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stay informed with expert analysis, market updates, and helpful guides for The Vistas Summerlin real estate market.
                  </p>
                </div>
              </Link>

              {/* About Link */}
              <Link 
                href="/about"
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    About Dr. Jan Duffy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Meet your preferred realtor and learn about our award-winning service, client testimonials, and success stories.
                  </p>
                </div>
              </Link>

              {/* Community Guide Link */}
              <Link 
                href="/community-guide"
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Community Guide
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete guide to The Vistas Summerlin - amenities, schools, lifestyle, and everything you need to know.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
        <FloatingActionButton href="tel:+17025551234">
          <Phone className="w-6 h-6" />
        </FloatingActionButton>
        <ScrollToTop />
      </main>
    </div>
  );
}