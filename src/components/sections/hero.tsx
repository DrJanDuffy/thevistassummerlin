'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Home, MapPin, TrendingUp } from 'lucide-react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/subcommunities/IMG_0737.JPG',
    '/subcommunities/IMG_0738.JPG',
    '/subcommunities/IMG_0739.JPG'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Luxury home in The Vistas Summerlin ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/80 via-primary-navy/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8 animate-slide-up">
            {/* Luxury Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary-gold/20 backdrop-blur-sm border border-secondary-gold/30 rounded-full px-4 py-2 text-secondary-gold font-medium">
              <Home className="w-4 h-4" />
              <span>Luxury Real Estate</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-primary font-bold leading-tight">
                <span className="block text-white">Find Your Perfect</span>
                <span className="block text-secondary-gold">Home in</span>
                <span className="block text-white">The Vistas</span>
                <span className="block text-secondary-gold">Summerlin</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl font-secondary font-light max-w-2xl leading-relaxed opacity-95">
              Discover 28 prestigious subcommunities in Las Vegas&apos; most exclusive area. 
              Where luxury meets lifestyle, and every home tells a story of sophistication.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-primary font-bold text-secondary-gold mb-2">28</div>
                <div className="text-sm lg:text-base font-secondary opacity-90">Subcommunities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-primary font-bold text-secondary-gold mb-2">$875K</div>
                <div className="text-sm lg:text-base font-secondary opacity-90">Median Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-primary font-bold text-secondary-gold mb-2">500+</div>
                <div className="text-sm lg:text-base font-secondary opacity-90">Homes Available</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/valuation" 
                className="btn-gold group"
              >
                <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Your Home Value
              </Link>
              
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
              
              {/* Placeholder for RealScout Widget */}
              <div className="bg-gradient-to-br from-accent-blue/10 to-primary-navy/10 rounded-xl p-6 border border-accent-blue/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-accent-blue" />
                  </div>
                  <h4 className="text-lg font-primary font-medium text-primary-navy mb-2">
                    Instant Home Valuation
                  </h4>
                  <p className="text-sm text-text-light mb-4">
                    Enter your address to receive a comprehensive market analysis
                  </p>
                  <Link 
                    href="/valuation" 
                    className="btn-primary w-full"
                  >
                    Start Valuation
                  </Link>
                </div>
              </div>
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