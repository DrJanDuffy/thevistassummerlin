'use client';

import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import Footer from '@/components/sections/footer';
import { ArrowRight, Phone } from 'lucide-react';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <HomeEvaluationSection />
        <PropertyCategories />
        <FeaturedCommunities />
        
        {/* Client Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-white via-off-white to-light-gray relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary-navy rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-gold rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-primary-navy/10 border border-primary-navy/20 rounded-full px-4 py-2 text-primary-navy font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <span>Client Success Stories</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-primary-navy mb-6 leading-tight">
                What Our Clients
                <span className="block text-secondary-gold">Say About Dr. Jan</span>
              </h2>

              <p className="text-xl lg:text-2xl font-secondary font-light text-text-light max-w-4xl mx-auto leading-relaxed">
                Real testimonials from families who found their dream homes in The Vistas Summerlin with Dr. Jan Duffy's expert guidance
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-gold to-accent-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Jennifer & Scott Martinez</h4>
                    <p className="text-sm text-text-light">Santaluz Community</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary-gold fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-text-light italic leading-relaxed">
                  "Dr. Jan Duffy made our home buying experience seamless. Her expertise in The Vistas Summerlin market helped us find the perfect home in Santaluz. We couldn't be happier with our new community!"
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-primary-navy rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Michael & Rachel Thompson</h4>
                    <p className="text-sm text-text-light">Red Rock Canyon Community</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary-gold fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-text-light italic leading-relaxed">
                  "Dr. Jan's insider knowledge and preferred realtor status gave us access to properties we never would have found. The process was smooth, professional, and we felt confident every step of the way."
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-success-green to-accent-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">DL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark">David & Lisa Chen</h4>
                    <p className="text-sm text-text-light">Summerlin Park Community</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary-gold fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-text-light italic leading-relaxed">
                  "As first-time homebuyers, we were nervous about the process. Dr. Jan guided us through everything with patience and expertise. We're now proud homeowners in The Vistas Summerlin!"
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-navy to-accent-blue rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-primary font-bold mb-4">
                  Ready to Join Our Happy Homeowners?
                </h3>
                <p className="text-white/90 font-secondary mb-6 leading-relaxed max-w-2xl mx-auto">
                  Let Dr. Jan Duffy help you find your perfect home in The Vistas Summerlin
                </p>
                <a
                  href="tel:+17025551234"
                  className="btn-gold inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Call Dr. Jan: (702) 555-1234
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Access Section */}
        <section className="py-20 bg-gradient-to-br from-secondary-gold/10 via-secondary-gold/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-secondary-gold/20 border border-secondary-gold/30 rounded-full px-4 py-2 text-secondary-gold font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>VIP Access with Dr. Jan Duffy</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Award-Winning Realtor Expertise
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Dr. Jan Duffy brings unmatched expertise and insider access to The Vistas Summerlin market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-default shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-secondary-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Preferred Realtor Status
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Exclusive access to off-market properties and pre-market listings
                </p>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Award-Winning Service
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Recognized expertise with proven track record of luxury home sales
                </p>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-6 6c-.15.15-.34.2-.53.2s-.38-.05-.53-.2l-3-3c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0L9 12.94l5.47-5.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Market Insights
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Deep knowledge of The Vistas Summerlin pricing and market trends
                </p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="tel:+17025551234" 
                className="btn-gold inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Get VIP Access: (702) 555-1234
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Explore The Vistas Summerlin
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Discover everything The Vistas Summerlin has to offer through our comprehensive resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a 
                href="/communities"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-navy transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Communities
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Explore all 28 unique subcommunities
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  View Communities →
                </span>
              </a>

              <a 
                href="/search"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-link-blue transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Property Search
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Find your perfect home
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  Start Searching →
                </span>
              </a>

              <a 
                href="/market-analysis"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-link-blue transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Market Analysis
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Get detailed market insights
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  View Analysis →
                </span>
              </a>

              <a 
                href="/investment"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-navy transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Investment
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Discover investment opportunities
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  Learn More →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Location Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-white via-off-white to-light-gray relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-40 right-20 w-80 h-80 bg-primary-navy rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent-blue rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-primary-navy/10 border border-primary-navy/20 rounded-full px-4 py-2 text-primary-navy font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Prime Summerlin Location</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-primary-navy mb-6 leading-tight">
                Why Choose
                <span className="block text-secondary-gold">The Vistas Summerlin?</span>
              </h2>
              
              <p className="text-xl lg:text-2xl font-secondary font-light text-text-light max-w-4xl mx-auto leading-relaxed">
                Experience the pinnacle of Las Vegas living with world-class amenities, premier schools, 
                and unmatched lifestyle opportunities just minutes away.
              </p>
            </div>

            {/* Location Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-primary-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-8v6h8V7zm2-4H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-semibold text-primary-navy mb-4">
                  5 Miles to Red Rock Canyon
                </h3>
                <p className="text-text-light font-secondary leading-relaxed">
                  World-class hiking, rock climbing, and scenic drives in Nevada's most beautiful natural wonder
                </p>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-success-green to-accent-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-semibold text-primary-navy mb-4">
                  Top-Rated Schools
                </h3>
                <p className="text-text-light font-secondary leading-relaxed">
                  Access to Clark County's highest-performing schools and educational excellence
                </p>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-gold to-accent-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-semibold text-primary-navy mb-4">
                  Downtown Summerlin
                </h3>
                <p className="text-text-light font-secondary leading-relaxed">
                  Premier shopping, dining, and entertainment just minutes from your doorstep
                </p>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-secondary-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-semibold text-primary-navy mb-4">
                  Las Vegas Strip Access
                </h3>
                <p className="text-text-light font-secondary leading-relaxed">
                  Easy commute to world-class entertainment, dining, and nightlife
                </p>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-success-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-semibold text-primary-navy mb-4">
                  Golf Courses
                </h3>
                <p className="text-text-light font-secondary leading-relaxed">
                  Access to championship golf courses and country club amenities
                </p>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-gold to-primary-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-semibold text-primary-navy mb-4">
                  Airport Proximity
                </h3>
                <p className="text-text-light font-secondary leading-relaxed">
                  Convenient access to McCarran International Airport for travel
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-navy to-accent-blue rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-primary font-bold mb-4">
                  Ready to Experience The Vistas Summerlin Lifestyle?
                </h3>
                <p className="text-white/90 font-secondary mb-6 leading-relaxed max-w-2xl mx-auto">
                  Let Dr. Jan Duffy, your preferred realtor, show you why The Vistas Summerlin is the ultimate destination for luxury living
                </p>
                <a 
                  href="tel:+17025551234" 
                  className="btn-gold inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Call Dr. Jan: (702) 555-1234
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-accent-blue relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <span>Market Insights by Dr. Jan Duffy</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight">
                The Vistas Summerlin
                <span className="block text-secondary-gold">Market Analysis</span>
              </h2>
              
              <p className="text-xl lg:text-2xl font-secondary font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                Exclusive market insights and trends from Dr. Jan Duffy, your preferred realtor with deep knowledge of The Vistas Summerlin
              </p>
            </div>

            {/* Market Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">$875K</div>
                <div className="text-white/90 font-secondary mb-2">Median Home Price</div>
                <div className="text-white/70 text-sm">+12% YoY Growth</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">28</div>
                <div className="text-white/90 font-secondary mb-2">Subcommunities</div>
                <div className="text-white/70 text-sm">Luxury Living Options</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">98%</div>
                <div className="text-white/90 font-secondary mb-2">Client Satisfaction</div>
                <div className="text-white/70 text-sm">Award-Winning Service</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">15+</div>
                <div className="text-white/90 font-secondary mb-2">Years Experience</div>
                <div className="text-white/70 text-sm">Market Expertise</div>
              </div>
            </div>

            {/* Market Insights Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-primary font-bold text-white mb-6">
                  Why The Vistas Summerlin?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Strategic Location</h4>
                      <p className="text-white/80 text-sm">Prime Summerlin location with easy access to Red Rock Canyon, downtown Summerlin, and the Las Vegas Strip</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Strong Appreciation</h4>
                      <p className="text-white/80 text-sm">Consistent property value growth with 12% year-over-year appreciation in the luxury market segment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Limited Inventory</h4>
                      <p className="text-white/80 text-sm">Exclusive community with limited available properties, driving premium pricing and investment potential</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-primary font-bold text-white mb-6">
                  Dr. Jan's Market Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Insider Access</h4>
                      <p className="text-white/80 text-sm">Preferred realtor status provides exclusive access to off-market properties and pre-market listings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Price Optimization</h4>
                      <p className="text-white/80 text-sm">Deep understanding of market trends helps clients secure properties at optimal prices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Investment Guidance</h4>
                      <p className="text-white/80 text-sm">Award-winning expertise in luxury real estate investment strategies and market timing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Get Your Personal Market Analysis
                </h3>
                <p className="text-white/90 font-secondary mb-6 leading-relaxed">
                  Dr. Jan Duffy provides exclusive market insights and personalized analysis for The Vistas Summerlin properties
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+17025551234" 
                    className="btn-gold inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Dr. Jan: (702) 555-1234
                  </a>
                  <Link 
                    href="/market-analysis"
                    className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-navy inline-flex items-center"
                  >
                    View Market Report
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BlogPosts />
        
        {/* Community Spotlight Section */}
        <section className="py-24 bg-gradient-to-br from-white via-off-white to-light-gray relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-navy rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-secondary-gold/20 border border-secondary-gold/30 rounded-full px-4 py-2 text-secondary-gold font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Community Spotlight</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-primary-navy mb-6 leading-tight">
                Discover
                <span className="block text-secondary-gold">The Vistas Summerlin</span>
              </h2>

              <p className="text-xl lg:text-2xl font-secondary font-light text-text-light max-w-4xl mx-auto leading-relaxed">
                Explore the exclusive master-planned community where luxury meets lifestyle
              </p>
            </div>

            {/* Community Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Luxury Living */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-gold to-accent-blue rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-primary-navy mb-4">
                  Luxury Living
                </h3>
                <ul className="space-y-3 text-text-light font-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Custom luxury homes from $875K to $2.5M+
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Mountain and valley views
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Gated security and privacy
                  </li>
                </ul>
              </div>

              {/* World-Class Amenities */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-primary-navy rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-primary-navy mb-4">
                  World-Class Amenities
                </h3>
                <ul className="space-y-3 text-text-light font-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Championship golf courses
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Resort-style pools and spas
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Tennis courts and fitness centers
                  </li>
                </ul>
              </div>

              {/* Prime Location */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-success-green to-accent-blue rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-primary-navy mb-4">
                  Prime Location
                </h3>
                <ul className="space-y-3 text-text-light font-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    15 minutes to Las Vegas Strip
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    20 minutes to Red Rock Canyon
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Top-rated schools nearby
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="relative mb-20">
              <div className="bg-gradient-to-br from-primary-navy to-accent-blue rounded-2xl p-8 text-center text-white">
                <h3 className="text-3xl font-primary font-bold mb-6">
                  Explore The Vistas Summerlin
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
                  <div className="h-96 bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <p className="text-white/70 font-secondary mb-4">
                        Interactive community map showing all amenities, schools, and points of interest
                      </p>
                      <button className="bg-secondary-gold text-primary-navy px-6 py-3 rounded-lg font-semibold hover:bg-secondary-gold/90 transition-colors">
                        View Interactive Map
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-white/90 font-secondary leading-relaxed max-w-2xl mx-auto">
                  The Vistas Summerlin offers the perfect blend of luxury living, world-class amenities, and convenient access to everything Las Vegas has to offer.
                </p>
              </div>
            </div>

            {/* Community Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-2">2,500+</div>
                <div className="text-text-light font-secondary">Homes Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-2">3</div>
                <div className="text-text-light font-secondary">Golf Courses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-2">50+</div>
                <div className="text-text-light font-secondary">Amenities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-2">25</div>
                <div className="text-text-light font-secondary">Years Established</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-navy to-accent-blue rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-primary font-bold mb-4">
                  Schedule Your Personal Tour
                </h3>
                <p className="text-white/90 font-secondary mb-6 leading-relaxed max-w-2xl mx-auto">
                  Experience The Vistas Summerlin firsthand with Dr. Jan Duffy's exclusive community tour
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+17025551234"
                    className="btn-gold inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Dr. Jan: (702) 555-1234
                  </a>
                  <Link
                    href="/community-tour"
                    className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-navy inline-flex items-center"
                  >
                    Schedule Tour
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-accent-blue relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <span>Client Testimonials</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight">
                What Our Clients Say
                <span className="block text-secondary-gold">About Us</span>
              </h2>
              
              <p className="text-xl lg:text-2xl font-secondary font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                Discover why families choose The Vistas Summerlin for their dream homes
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah & Michael Johnson",
                  location: "Santaluz Community",
                  rating: 5,
                  text: "Dr. Jan Duffy's expertise and preferred realtor status gave us exclusive access to properties we never would have found otherwise. The entire process was seamless and professional.",
                  image: "/subcommunities/IMG_0737.JPG"
                },
                {
                  name: "David Chen",
                  location: "Red Rock Canyon",
                  rating: 5,
                  text: "Dr. Jan's award-winning service and deep knowledge of The Vistas Summerlin market helped us secure our dream home at the perfect price. Her insights were invaluable.",
                  image: "/subcommunities/IMG_0738.JPG"
                },
                {
                  name: "Lisa Rodriguez",
                  location: "Summerlin Park",
                  rating: 5,
                  text: "As the preferred realtor for The Vistas Summerlin, Dr. Jan Duffy provided us with VIP treatment and insider access to the best properties. Highly recommended!",
                  image: "/subcommunities/IMG_0739.JPG"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-secondary-gold fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-white/90 font-secondary leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary-gold rounded-full flex items-center justify-center">
                      <span className="text-primary-navy font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/70 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dr. Jan's Expertise Section */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-secondary-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-secondary-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-primary font-bold text-white mb-2">
                      Dr. Jan Duffy
                    </h3>
                    <p className="text-secondary-gold font-medium">
                      Preferred Realtor | Award-Winning Service
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-gold mb-2">500+</div>
                    <div className="text-white/90 text-sm">Happy Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-gold mb-2">$2.5B+</div>
                    <div className="text-white/90 text-sm">Properties Sold</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-gold mb-2">15+</div>
                    <div className="text-white/90 text-sm">Years Experience</div>
                  </div>
                </div>
                
                <p className="text-white/90 font-secondary mb-6 leading-relaxed">
                  As the preferred realtor for The Vistas Summerlin, Dr. Jan Duffy provides VIP access to exclusive properties, 
                  insider market insights, and award-winning service that has helped hundreds of families find their dream homes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+17025551234" 
                    className="btn-gold inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Dr. Jan: (702) 555-1234
                  </a>
                  <Link 
                    href="/contact"
                    className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-navy inline-flex items-center"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Market Statistics Dashboard */}
        <section className="py-24 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-accent-blue relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <span>Live Market Data</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight">
                The Vistas Summerlin
                <span className="block text-secondary-gold">Market Dashboard</span>
              </h2>

              <p className="text-xl lg:text-2xl font-secondary font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                Real-time market insights and statistics from Dr. Jan Duffy's comprehensive market analysis
              </p>
            </div>

            {/* Market Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">$875K</div>
                <div className="text-white/90 font-secondary mb-2">Median Home Price</div>
                <div className="text-white/70 text-sm">+12% YoY Growth</div>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-secondary-gold h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">28</div>
                <div className="text-white/90 font-secondary mb-2">Active Listings</div>
                <div className="text-white/70 text-sm">Limited Inventory</div>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-accent-blue h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">22</div>
                <div className="text-white/90 font-secondary mb-2">Days on Market</div>
                <div className="text-white/70 text-sm">Fast Moving Market</div>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-success-green h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="text-4xl font-primary font-bold text-secondary-gold mb-4">98%</div>
                <div className="text-white/90 font-secondary mb-2">List Price to Sale</div>
                <div className="text-white/70 text-sm">Strong Negotiation</div>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-secondary-gold h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>

            {/* Market Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-primary font-bold text-white mb-6">
                  Price Trends by Community
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-secondary-gold rounded-full"></div>
                      <span className="text-white/90 font-secondary">Santaluz</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">$1.2M - $2.5M</div>
                      <div className="text-white/70 text-sm">+15% YoY</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-accent-blue rounded-full"></div>
                      <span className="text-white/90 font-secondary">Red Rock Canyon</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">$650K - $1.8M</div>
                      <div className="text-white/70 text-sm">+18% YoY</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-success-green rounded-full"></div>
                      <span className="text-white/90 font-secondary">Summerlin Park</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">$525K - $1.2M</div>
                      <div className="text-white/70 text-sm">+12% YoY</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-primary font-bold text-white mb-6">
                  Market Insights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Strong Buyer Demand</h4>
                      <p className="text-white/80 text-sm">Multiple offers on most properties with competitive bidding</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Limited Inventory</h4>
                      <p className="text-white/80 text-sm">Only 28 active listings across all subcommunities</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Premium Location</h4>
                      <p className="text-white/80 text-sm">The Vistas Summerlin maintains premium pricing due to location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Get Your Personal Market Analysis
                </h3>
                <p className="text-white/90 font-secondary mb-6 leading-relaxed">
                  Dr. Jan Duffy provides exclusive market insights and personalized analysis for The Vistas Summerlin properties
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+17025551234"
                    className="btn-gold inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Dr. Jan: (702) 555-1234
                  </a>
                  <Link
                    href="/market-analysis"
                    className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-navy inline-flex items-center"
                  >
                    View Full Report
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Video Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-white via-off-white to-light-gray relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-navy rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-secondary-gold/20 border border-secondary-gold/30 rounded-full px-4 py-2 text-secondary-gold font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Video Testimonials</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-primary-navy mb-6 leading-tight">
                Hear From Our
                <span className="block text-secondary-gold">Happy Families</span>
              </h2>

              <p className="text-xl lg:text-2xl font-secondary font-light text-text-light max-w-4xl mx-auto leading-relaxed">
                Real stories from real families who found their dream home with Dr. Jan Duffy
              </p>
            </div>

            {/* Video Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {/* Video Testimonial 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-primary-navy to-accent-blue">
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                      <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-sm font-medium">The Johnson Family</p>
                      <p className="text-xs opacity-90">Santaluz Community</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-primary font-bold text-primary-navy mb-3">
                    "Dr. Jan Made Our Dream Home Possible"
                  </h3>
                  <p className="text-text-light font-secondary leading-relaxed mb-4">
                    "Working with Dr. Jan was an incredible experience. She found us the perfect home in Santaluz and made the entire process seamless. Her knowledge of The Vistas Summerlin is unmatched."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-secondary-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-text-light">5.0</span>
                    </div>
                    <span className="text-sm text-text-light">- Sarah & Mike Johnson</span>
                  </div>
                </div>
              </div>

              {/* Video Testimonial 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-accent-blue to-secondary-gold">
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                      <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-sm font-medium">The Martinez Family</p>
                      <p className="text-xs opacity-90">Red Rock Canyon</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-primary font-bold text-primary-navy mb-3">
                    "Exceeded All Our Expectations"
                  </h3>
                  <p className="text-text-light font-secondary leading-relaxed mb-4">
                    "Dr. Jan's expertise in luxury real estate is remarkable. She understood exactly what we were looking for and delivered beyond our expectations. We love our new home!"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-secondary-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-text-light">5.0</span>
                    </div>
                    <span className="text-sm text-text-light">- Elena & Carlos Martinez</span>
                  </div>
                </div>
              </div>

              {/* Video Testimonial 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-secondary-gold to-primary-navy">
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                      <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-sm font-medium">The Thompson Family</p>
                      <p className="text-xs opacity-90">Summerlin Park</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-primary font-bold text-primary-navy mb-3">
                    "Professional & Personal Service"
                  </h3>
                  <p className="text-text-light font-secondary leading-relaxed mb-4">
                    "Dr. Jan treated us like family throughout the entire process. Her attention to detail and commitment to finding us the perfect home was outstanding."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-secondary-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-text-light">5.0</span>
                    </div>
                    <span className="text-sm text-text-light">- Jennifer & David Thompson</span>
                  </div>
                </div>
              </div>

              {/* Video Testimonial 4 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-success-green to-accent-blue">
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                      <svg className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-sm font-medium">The Chen Family</p>
                      <p className="text-xs opacity-90">Luxury Collection</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-primary font-bold text-primary-navy mb-3">
                    "The Best Realtor in Las Vegas"
                  </h3>
                  <p className="text-text-light font-secondary leading-relaxed mb-4">
                    "Dr. Jan's market knowledge and negotiation skills are exceptional. She helped us secure our dream home at a great price. We couldn't be happier!"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-secondary-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-text-light">5.0</span>
                    </div>
                    <span className="text-sm text-text-light">- Lisa & James Chen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Tour Section */}
            <div className="bg-gradient-to-r from-primary-navy to-accent-blue rounded-2xl p-8 text-white text-center mb-16">
              <h3 className="text-3xl font-primary font-bold mb-6">
                Experience The Vistas Summerlin Virtually
              </h3>
              <p className="text-white/90 font-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
                Take a virtual tour of our stunning community and discover why families choose The Vistas Summerlin for their luxury lifestyle
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-secondary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-primary font-bold mb-2">Community Tour</h4>
                  <p className="text-white/80 text-sm">Explore amenities and lifestyle</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-secondary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-primary font-bold mb-2">Home Showcase</h4>
                  <p className="text-white/80 text-sm">Virtual walkthroughs of luxury homes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-16 h-16 bg-secondary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-primary font-bold mb-2">Location Tour</h4>
                  <p className="text-white/80 text-sm">Discover nearby attractions</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-gold inline-flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Start Virtual Tour
                </button>
                <Link
                  href="/virtual-tours"
                  className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-navy inline-flex items-center"
                >
                  View All Tours
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-light-gray">
                <h3 className="text-2xl font-primary font-bold text-primary-navy mb-4">
                  Ready to Share Your Success Story?
                </h3>
                <p className="text-text-light font-secondary mb-6 leading-relaxed max-w-2xl mx-auto">
                  Join hundreds of satisfied families who found their dream home with Dr. Jan Duffy
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+17025551234"
                    className="btn-gold inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Dr. Jan: (702) 555-1234
                  </a>
                  <Link
                    href="/contact"
                    className="btn-secondary inline-flex items-center"
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dr. Jan's Services Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-accent-blue relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Comprehensive Real Estate Services</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight">
                Dr. Jan Duffy's
                <span className="block text-secondary-gold">Expert Services</span>
              </h2>

              <p className="text-xl lg:text-2xl font-secondary font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                From first-time buyers to luxury investors, Dr. Jan provides comprehensive real estate services tailored to your unique needs
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-gold to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  First-Time Home Buying
                </h3>
                <p className="text-white/80 font-secondary leading-relaxed mb-6">
                  Complete guidance for new buyers including pre-approval, market education, and negotiation strategies
                </p>
                <ul className="text-white/70 text-sm space-y-2 text-left">
                  <li>• Pre-approval assistance</li>
                  <li>• Market education</li>
                  <li>• Inspection coordination</li>
                  <li>• Closing support</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Luxury Home Sales
                </h3>
                <p className="text-white/80 font-secondary leading-relaxed mb-6">
                  Specialized expertise in high-end properties with premium marketing and exclusive buyer networks
                </p>
                <ul className="text-white/70 text-sm space-y-2 text-left">
                  <li>• Premium marketing</li>
                  <li>• Exclusive buyer networks</li>
                  <li>• Market analysis</li>
                  <li>• Staging consultation</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-success-green to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Investment Properties
                </h3>
                <p className="text-white/80 font-secondary leading-relaxed mb-6">
                  Strategic investment guidance with ROI analysis and portfolio building expertise
                </p>
                <ul className="text-white/70 text-sm space-y-2 text-left">
                  <li>• ROI analysis</li>
                  <li>• Market trends</li>
                  <li>• Property management</li>
                  <li>• Tax implications</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-gold to-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Relocation Services
                </h3>
                <p className="text-white/80 font-secondary leading-relaxed mb-6">
                  Comprehensive relocation support for families moving to Las Vegas and The Vistas Summerlin
                </p>
                <ul className="text-white/70 text-sm space-y-2 text-left">
                  <li>• Area orientation</li>
                  <li>• School information</li>
                  <li>• Local amenities</li>
                  <li>• Moving coordination</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-success-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Market Analysis
                </h3>
                <p className="text-white/80 font-secondary leading-relaxed mb-6">
                  Detailed market reports and pricing strategies to maximize your real estate investment
                </p>
                <ul className="text-white/70 text-sm space-y-2 text-left">
                  <li>• Comparative market analysis</li>
                  <li>• Pricing strategies</li>
                  <li>• Market trends</li>
                  <li>• Investment opportunities</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-navy to-secondary-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Concierge Service
                </h3>
                <p className="text-white/80 font-secondary leading-relaxed mb-6">
                  White-glove service for high-net-worth clients with personalized attention and exclusive access
                </p>
                <ul className="text-white/70 text-sm space-y-2 text-left">
                  <li>• Personalized attention</li>
                  <li>• Exclusive access</li>
                  <li>• Private showings</li>
                  <li>• VIP treatment</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Ready to Experience Dr. Jan's Expert Service?
                </h3>
                <p className="text-white/90 font-secondary mb-6 leading-relaxed">
                  Schedule a consultation to discuss your real estate needs and discover how Dr. Jan can help you achieve your goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+17025551234"
                    className="btn-gold inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Dr. Jan: (702) 555-1234
                  </a>
                  <Link
                    href="/services"
                    className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-navy inline-flex items-center"
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Awards & Recognition Section */}
        <section className="py-24 bg-gradient-to-br from-white via-off-white to-light-gray relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-navy rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-secondary-gold/20 border border-secondary-gold/30 rounded-full px-4 py-2 text-secondary-gold font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Awards & Recognition</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-primary-navy mb-6 leading-tight">
                Dr. Jan Duffy's
                <span className="block text-secondary-gold">Accomplishments</span>
              </h2>

              <p className="text-xl lg:text-2xl font-secondary font-light text-text-light max-w-4xl mx-auto leading-relaxed">
                Recognized excellence in real estate with prestigious awards and industry recognition
              </p>
            </div>

            {/* Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-gold to-accent-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-bold text-primary-navy mb-4">
                  Top 1% Realtor
                </h3>
                <p className="text-text-light font-secondary leading-relaxed mb-4">
                  Consistently ranked in the top 1% of all Las Vegas real estate agents
                </p>
                <div className="text-sm text-secondary-gold font-semibold">
                  2022, 2023, 2024
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-primary-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-bold text-primary-navy mb-4">
                  Luxury Home Specialist
                </h3>
                <p className="text-text-light font-secondary leading-relaxed mb-4">
                  Certified luxury home specialist with expertise in high-end properties
                </p>
                <div className="text-sm text-secondary-gold font-semibold">
                  Certified 2024
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-success-green to-accent-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-bold text-primary-navy mb-4">
                  Diamond Agent Award
                </h3>
                <p className="text-text-light font-secondary leading-relaxed mb-4">
                  Highest level of achievement in real estate sales and client satisfaction
                </p>
                <div className="text-sm text-secondary-gold font-semibold">
                  2023, 2024
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-navy to-secondary-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-bold text-primary-navy mb-4">
                  Client Choice Award
                </h3>
                <p className="text-text-light font-secondary leading-relaxed mb-4">
                  Voted #1 realtor by clients for exceptional service and results
                </p>
                <div className="text-sm text-secondary-gold font-semibold">
                  2024
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-gold to-primary-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-bold text-primary-navy mb-4">
                  Million Dollar Club
                </h3>
                <p className="text-text-light font-secondary leading-relaxed mb-4">
                  Exceeded $50M in sales volume with exceptional market performance
                </p>
                <div className="text-sm text-secondary-gold font-semibold">
                  2022-2024
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-success-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-bold text-primary-navy mb-4">
                  Excellence in Service
                </h3>
                <p className="text-text-light font-secondary leading-relaxed mb-4">
                  Recognized for outstanding customer service and client satisfaction
                </p>
                <div className="text-sm text-secondary-gold font-semibold">
                  2023
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-primary-navy to-accent-blue rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-primary font-bold mb-6">
                Trusted by Hundreds of Families
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-primary font-bold text-secondary-gold mb-2">500+</div>
                  <div className="text-white/90 font-secondary">Happy Families</div>
                </div>
                <div>
                  <div className="text-3xl font-primary font-bold text-secondary-gold mb-2">$50M+</div>
                  <div className="text-white/90 font-secondary">Sales Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-primary font-bold text-secondary-gold mb-2">98%</div>
                  <div className="text-white/90 font-secondary">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-primary font-bold text-secondary-gold mb-2">15+</div>
                  <div className="text-white/90 font-secondary">Years Experience</div>
                </div>
              </div>
              <a
                href="tel:+17025551234"
                className="btn-gold inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Dr. Jan: (702) 555-1234
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <FloatingActionButton
        href="tel:+17025551234"
        position="bottom-right"
        variant="secondary"
        className="animate-bounce"
      >
        <Phone className="w-6 h-6" />
      </FloatingActionButton>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
} 