'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import Link from 'next/link';

export default function Sell() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-success-green to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
              Sell Your Vistas Home
            </h1>
            <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
              Get the best value for your property in The Vistas Summerlin with expert guidance
            </p>
          </div>
        </section>

        {/* Why Sell in The Vistas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Why Sell in The Vistas Summerlin?
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto">
                Our community offers unique advantages for sellers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Strong Market Demand
                </h3>
                <p className="text-body font-secondary text-text-light">
                  High demand from buyers seeking luxury homes in premier Las Vegas communities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Expert Guidance
                </h3>
                <p className="text-body font-secondary text-text-light">
                  Local expertise and market knowledge to maximize your property's value
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Premium Pricing
                </h3>
                <p className="text-body font-secondary text-text-light">
                  Properties in The Vistas command premium prices due to location and amenities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Valuation Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Get Your Home's Value
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto">
                Discover what your home is worth in today's market
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-default shadow-lg">
              <RealScoutAdvancedSearch />
            </div>
          </div>
        </section>

        {/* Selling Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Our Selling Process
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto">
                A streamlined approach to get your home sold quickly and for the best price
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-primary font-medium text-text-dark mb-3">
                  Consultation
                </h3>
                <p className="text-sm font-secondary text-text-light">
                  Initial meeting to discuss your goals and timeline
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-primary font-medium text-text-dark mb-3">
                  Market Analysis
                </h3>
                <p className="text-sm font-secondary text-text-light">
                  Comprehensive pricing strategy and market positioning
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-primary font-medium text-text-dark mb-3">
                  Marketing
                </h3>
                <p className="text-sm font-secondary text-text-light">
                  Professional photography, staging, and targeted marketing
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-primary font-medium text-text-dark mb-3">
                  Closing
                </h3>
                <p className="text-sm font-secondary text-text-light">
                  Smooth transaction management and closing support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
              Ready to Sell Your Home?
            </h2>
            <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto mb-12">
              Get started with a free consultation and market analysis
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-success-green text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/market-reports"
                className="border-2 border-success-green text-success-green px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-success-green hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Market Reports
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 