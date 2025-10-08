'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, MapPin, BarChart3, Award, Shield, Zap, Sparkles, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function HomeEvaluationSection() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    // Check if RealScout script is loaded
    const checkRealScoutScript = () => {
      if (typeof window !== 'undefined' && window.customElements) {
        // Script is loaded, wait a bit more for widget to initialize
        setTimeout(() => {
          console.log('RealScout script loaded - showing widget');
          setIsWidgetLoaded(true);
        }, 2000);
      } else {
        // Script not loaded yet, check again
        setTimeout(checkRealScoutScript, 500);
      }
    };

    // Initial check after component mounts
    const initialTimeout = setTimeout(checkRealScoutScript, 1000);
    
    // Fallback timeout to show widget after 5 seconds regardless
    const fallbackTimeout = setTimeout(() => {
      console.log('RealScout widget fallback timeout - showing widget anyway');
      setIsWidgetLoaded(true);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  const handleWidgetLoad = () => {
    console.log('RealScout widget loaded successfully');
    setIsWidgetLoaded(true);
  };

  const handleWidgetError = () => {
    console.error('RealScout widget failed to load');
    setWidgetError(true);
    setIsWidgetLoaded(true); // Show fallback content
  };

  return (
    <section id="home-valuation" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* V0 Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated floating orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* V0 Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Instant Valuation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Instant Home Valuation
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get your comprehensive market analysis in under 60 seconds
          </p>
        </div>

        {/* V0 Compact Widget Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                What's Your Home Worth?
              </h3>
              <p className="text-gray-600">
                Get an instant, data-driven estimate
              </p>
            </div>

            {/* Compact Widget Container */}
            <div className="max-w-md mx-auto">
              {!isWidgetLoaded && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-gray-600 text-sm">Loading valuation tool...</p>
                </div>
              )}
              
              {/* RealScout Home Value Widget - V0 Compact Design */}
              {!widgetError ? (
                <div style={{ 
                  display: isWidgetLoaded ? 'block' : 'none'
                }}>
                  <realscout-home-value 
                    agent-encoded-id="QWdlbnQtMjI1MDUw"
                    onLoad={handleWidgetLoad}
                    onError={handleWidgetError}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '12px'
                    }}
                  />
                </div>
              ) : (
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Valuation Tool Temporarily Unavailable</h3>
                  <p className="text-gray-600 mb-4 text-sm">Please contact Dr. Jan Duffy directly for a personalized home valuation.</p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Contact Dr. Jan Duffy
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}
            </div>

            {/* V0 Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-medium">Bank-Level Security</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">60 Second Results</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700 font-medium">Market Accurate</span>
                </div>
              </div>
            </div>
          </div>

          {/* V0 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Analysis</h3>
              <p className="text-blue-100 text-sm">Advanced algorithms analyze 50+ market factors for unparalleled accuracy.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hyperlocal Data</h3>
              <p className="text-blue-100 text-sm">Specialized knowledge of The Vistas Summerlin market dynamics.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-Time Updates</h3>
              <p className="text-blue-100 text-sm">Live market data ensures your valuation reflects current conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
