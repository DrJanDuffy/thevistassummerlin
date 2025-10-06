'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Home, MapPin, TrendingUp, Phone, Star, Users, Award, Sparkles, ArrowRight, Play } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GradientCard from '@/components/ui/GradientCard';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* V0-Styled Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle Texture Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-white/10 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8 animate-slide-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>Preferred Realtor - Dr. Jan Duffy</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-white">Find Your Perfect</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Home in</span>
                <span className="block text-white">The Vistas</span>
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Summerlin</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl font-light max-w-2xl leading-relaxed text-blue-100">
              Award-winning realtor Dr. Jan Duffy guides you through 28 prestigious subcommunities in Las Vegas' most exclusive area. 
              Where luxury meets lifestyle, and every home tells a story of sophistication.
            </p>

            {/* Urgency Alert */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6">
              <div className="flex items-center space-x-3 text-red-100 mb-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-lg">LIMITED AVAILABILITY - ACT FAST!</span>
              </div>
              <p className="text-red-100">Only 12 premium properties remaining in The Vistas Summerlin</p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">
                  <AnimatedCounter end={28} />
                </div>
                <div className="text-sm lg:text-base text-blue-100">Subcommunities</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl lg:text-4xl font-bold text-purple-300 mb-2">
                  <AnimatedCounter end={875} prefix="$" suffix="K" />
                </div>
                <div className="text-sm lg:text-base text-blue-100">Median Price</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl lg:text-4xl font-bold text-pink-300 mb-2">
                  <AnimatedCounter end={12} />
                </div>
                <div className="text-sm lg:text-base text-blue-100">Homes Remaining</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="tel:+17025551234" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Call Dr. Jan: (702) 555-1234</span>
              </a>
              
              <Link 
                href="/communities" 
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <MapPin className="w-5 h-5" />
                <span>Explore Communities</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-blue-100">
                <Users className="w-5 h-5" />
                <span className="text-sm">500+ Happy Families</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <Award className="w-5 h-5" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">$2.1B Sales Volume</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Home Valuation Widget */}
          <div className="animate-scale-in">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  What's Your Home Worth?
                </h3>
                <p className="text-gray-600">
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

              {/* Additional Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-blue-600">98%</div>
                    <div className="text-xs text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-green-600">24hr</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute top-20 right-20 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="text-white text-sm">
            <div className="font-bold mb-1">Market Status</div>
            <div className="text-green-300">Active & Growing</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-20 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="text-white text-sm">
            <div className="font-bold mb-1">Trusted by</div>
            <div className="text-blue-300">500+ Families</div>
          </div>
        </div>
      </div>
    </section>
  );
}