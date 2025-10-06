'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Home as HomeIcon, MapPin, TrendingUp, Phone, Star, Users, Award, Sparkles, ArrowRight, Play, Zap, Shield, Heart } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GradientCard from '@/components/ui/GradientCard';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced V0 Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Additional Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-300"></div>
        
        {/* Subtle Texture Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-white/10 rounded-full animate-pulse delay-1500"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge with Enhanced Animation */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
              <span>Preferred Realtor - Dr. Jan Duffy</span>
              <Zap className="w-4 h-4 text-yellow-400 animate-bounce" />
            </div>

            {/* Main Headline with Staggered Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className={`block text-white transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Find Your Perfect
                </span>
                <span className={`block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Home in
                </span>
                <span className={`block text-white transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  The Vistas
                </span>
                <span className={`block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Summerlin
                </span>
              </h1>
            </div>

            {/* Subtitle with Fade-in */}
            <p className={`text-xl lg:text-2xl font-light max-w-2xl leading-relaxed text-blue-100 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Award-winning realtor Dr. Jan Duffy guides you through 28 prestigious subcommunities in Las Vegas' most exclusive area. 
              Where luxury meets lifestyle, and every home tells a story of sophistication.
            </p>

            {/* Enhanced Urgency Alert */}
            <div className={`bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex items-center space-x-3 text-red-100 mb-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-lg">LIMITED AVAILABILITY - ACT FAST!</span>
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              </div>
              <p className="text-red-100">Only 12 premium properties remaining in The Vistas Summerlin</p>
            </div>

            {/* Enhanced Key Stats with Hover Effects */}
            <div className={`grid grid-cols-3 gap-6 py-6 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
                  <AnimatedCounter end={28} />
                </div>
                <div className="text-sm lg:text-base text-blue-100 group-hover:text-white transition-colors">Subcommunities</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl lg:text-4xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                  <AnimatedCounter end={875} prefix="$" suffix="K" />
                </div>
                <div className="text-sm lg:text-base text-blue-100 group-hover:text-white transition-colors">Median Price</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-3xl lg:text-4xl font-bold text-pink-300 mb-2 group-hover:text-pink-200 transition-colors">
                  <AnimatedCounter end={12} />
                </div>
                <div className="text-sm lg:text-base text-blue-100 group-hover:text-white transition-colors">Homes Remaining</div>
              </div>
            </div>

            {/* Enhanced Call to Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <a 
                href="tel:+17025551234" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group hover:scale-105"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Call Dr. Jan: (702) 555-1234</span>
                <Zap className="w-4 h-4 group-hover:animate-pulse" />
              </a>
              
              <Link 
                href="/communities" 
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                <span>Explore Communities</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className={`flex items-center space-x-8 pt-8 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors group">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">500+ Happy Families</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors group">
                <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors group">
                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">$2.1B Sales Volume</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Home Valuation Widget */}
          <div className={`transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <HomeIcon className="w-8 h-8 text-white" />
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

              {/* Enhanced Additional Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 rounded-xl p-3 hover:bg-blue-100 transition-colors group">
                    <div className="text-lg font-bold text-blue-600 group-hover:scale-110 transition-transform">98%</div>
                    <div className="text-xs text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 hover:bg-green-100 transition-colors group">
                    <div className="text-lg font-bold text-green-600 group-hover:scale-110 transition-transform">24hr</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Enhanced Floating Action Elements */}
      <div className="absolute top-20 right-20 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <div className="text-white text-sm">
            <div className="font-bold mb-1">Market Status</div>
            <div className="text-green-300 flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Active & Growing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-20 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <div className="text-white text-sm">
            <div className="font-bold mb-1">Trusted by</div>
            <div className="text-blue-300 flex items-center space-x-1">
              <Heart className="w-3 h-3 animate-pulse" />
              <span>500+ Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}