'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Home, MapPin, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GradientCard from '@/components/ui/GradientCard';

export default function Hero() {
  // Removed image carousel for luxury background style

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-accent-blue"></div>
        
        {/* Luxury Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 bg-luxury-dots-hero"></div>
        
        {/* Elegant Geometric Shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-gold/5 rounded-full blur-3xl"></div>
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8 animate-slide-up">
            {/* Preferred Realtor Badge */}
            <GradientCard gradient="from-secondary-gold/20 to-secondary-gold/10" className="inline-block p-0">
              <div className="flex items-center space-x-2 px-4 py-2 text-secondary-gold font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Preferred Realtor - Dr. Jan Duffy</span>
              </div>
            </GradientCard>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-primary font-bold leading-tight">
                <span className="block text-white">Find Your Perfect</span>
                <span className="block text-secondary-gold">Home in</span>
                <span className="block text-white">The Vistas</span>
                <span className="block text-secondary-gold">Summerlin</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl font-secondary font-light max-w-2xl leading-relaxed opacity-95">
              Award-winning realtor Dr. Jan Duffy guides you through 28 prestigious subcommunities in Las Vegas&apos; most exclusive area. 
              Where luxury meets lifestyle, and every home tells a story of sophistication.
            </p>

            {/* Limited Availability Alert */}
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2 text-red-100">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="font-semibold">LIMITED AVAILABILITY - ACT FAST!</span>
              </div>
              <p className="text-sm text-red-100 mt-1">Only 12 premium properties remaining in The Vistas Summerlin</p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-primary font-bold text-secondary-gold mb-2">
                  <AnimatedCounter end={28} />
                </div>
                <div className="text-sm lg:text-base font-secondary opacity-90">Subcommunities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-primary font-bold text-secondary-gold mb-2">
                  <AnimatedCounter end={875} prefix="$" suffix="K" />
                </div>
                <div className="text-sm lg:text-base font-secondary opacity-90">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-primary font-bold text-secondary-gold mb-2">
                  <AnimatedCounter end={12} />
                </div>
                <div className="text-sm lg:text-base font-secondary opacity-90">Homes Remaining</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="tel:+17025551234" 
                className="btn-gold group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Dr. Jan: (702) 555-1234
              </a>
              
              <Link 
                href="/communities" 
                className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-navy"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Explore Communities
              </Link>
            </div>
          </div>

          {/* Right Column - Home Valuation Widget */}
          <div className="animate-scale-in">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-primary font-semibold text-primary-navy mb-2">
                  What&apos;s Your Home Worth?
                </h3>
                <p className="text-text-light font-secondary">
                  Get an instant, data-driven estimate
                </p>
              </div>
              
              {/* RealScout Simple Search Widget */}
              <realscout-simple-search
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                placeholder="Enter an address, neighborhood, or city..."
                button-text="Search Homes"
                show-suggested-searches="true"
                class="realscout-hero-widget"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-secondary-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-secondary-gold/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-white/10 rounded-full animate-pulse delay-1500"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-40 right-20 w-2 h-20 bg-secondary-gold/30 transform rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-20 h-2 bg-secondary-gold/30 transform -rotate-45"></div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-20 left-8 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-white text-sm">
            <div className="font-semibold mb-1">Trusted by</div>
            <div className="opacity-80">500+ Families</div>
          </div>
        </div>
      </div>

      {/* Market Status */}
      <div className="absolute bottom-20 right-8 z-10 hidden lg:block">
        <div className="bg-success-green/20 backdrop-blur-sm rounded-lg p-4 border border-success-green/30">
          <div className="text-white text-sm">
            <div className="font-semibold mb-1">Market Status</div>
            <div className="opacity-80">Active & Growing</div>
          </div>
        </div>
      </div>
    </section>
  );
} 