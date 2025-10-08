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
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Advanced V0 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-200/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-200/10 rounded-full blur-lg animate-pulse delay-300"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 font-medium mb-6 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
            <TrendingUp className="w-5 h-5" />
            <span>Market Intelligence</span>
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Home's
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              True Market Value
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our advanced AI-powered valuation tool analyzes millions of data points to provide 
            you with the most accurate home value estimate in The Vistas Summerlin market.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
          {/* Main Valuation Widget */}
          <div className="xl:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Instant Home Valuation
                </h3>
                <p className="text-lg text-gray-600">
                  Get your comprehensive market analysis in under 60 seconds
                </p>
              </div>

              <div className="min-h-[500px] flex items-center justify-center">
                {!isWidgetLoaded && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <TrendingUp className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="text-gray-600">Loading valuation tool...</p>
                  </div>
                )}
                
                {/* RealScout Home Value Widget */}
                {!widgetError ? (
                  <div style={{ display: isWidgetLoaded ? 'block' : 'none', width: '100%', minHeight: '400px' }}>
                    <realscout-home-value 
                      agent-encoded-id="QWdlbnQtMjI1MDUw"
                      onLoad={handleWidgetLoad}
                      onError={handleWidgetError}
                    />
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Valuation Tool Temporarily Unavailable</h3>
                    <p className="text-gray-600 mb-4">Please contact Dr. Jan Duffy directly for a personalized home valuation.</p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Contact Dr. Jan Duffy
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                  <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">Bank-Level Security</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">60-Second Results</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700 font-medium">99.2% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Benefits and Market Data */}
          <div className="space-y-8">
            {/* Why Get a Valuation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Valuation?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      AI-Powered Analysis
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced algorithms analyze 50+ market factors for unparalleled accuracy
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Hyperlocal Data
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Specialized knowledge of The Vistas Summerlin market dynamics
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Real-Time Updates
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Live market data ensures your valuation reflects current conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2" />
                Market Performance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Average Appreciation</span>
                  <span className="text-2xl font-bold">4.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Days on Market</span>
                  <span className="text-2xl font-bold">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Price per Sq Ft</span>
                  <span className="text-2xl font-bold">$285</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Inventory Level</span>
                  <span className="text-2xl font-bold">Low</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Sell?
              </h3>
              <p className="text-gray-600 mb-6">
                Get a personalized market strategy from Dr. Jan Duffy
              </p>
              <Link
                href="/sell"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Get Market Strategy</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}