'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, MapPin, BarChart3, Award, Shield, Zap } from 'lucide-react';

export default function HomeEvaluationSection() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-off-white via-white to-light-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-navy rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-secondary-gold/10 border border-secondary-gold/20 rounded-full px-4 py-2 text-secondary-gold font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-primary font-bold text-primary-navy mb-6 leading-tight">
            Discover Your Home&apos;s
            <span className="block text-secondary-gold">True Market Value</span>
          </h2>
          
          <p className="text-xl lg:text-2xl font-secondary font-light text-text-light max-w-4xl mx-auto leading-relaxed">
            Our advanced AI-powered valuation tool analyzes millions of data points to provide 
            you with the most accurate home value estimate in The Vistas Summerlin market.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
          {/* Main Valuation Widget */}
          <div className="xl:col-span-2">
            <div className="card-luxury p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-primary font-semibold text-primary-navy mb-3">
                  Instant Home Valuation
                </h3>
                <p className="text-lg text-text-light font-secondary">
                  Get your comprehensive market analysis in under 60 seconds
                </p>
              </div>

              <div className="min-h-[500px] flex items-center justify-center">
                {!isWidgetLoaded && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <TrendingUp className="w-8 h-8 text-accent-blue" />
                    </div>
                    <p className="text-text-light">Loading valuation tool...</p>
                  </div>
                )}
                
                {/* RealScout Home Value Widget */}
                <realscout-home-value 
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  onLoad={() => setIsWidgetLoaded(true)}
                />
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-medium-gray">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-light">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Bank-Level Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent-blue" />
                    <span>60-Second Results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-secondary-gold" />
                    <span>99.2% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits and Market Data */}
          <div className="space-y-8">
            {/* Why Get a Valuation */}
            <div className="card-luxury p-8">
              <h3 className="text-2xl font-primary font-semibold text-primary-navy mb-6">
                Why Choose Our Valuation?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-success-green to-accent-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-primary font-semibold text-primary-navy mb-2">
                      AI-Powered Analysis
                    </h4>
                    <p className="text-text-light font-secondary leading-relaxed">
                      Advanced algorithms analyze 50+ market factors for unparalleled accuracy
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-gold to-accent-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-primary font-semibold text-primary-navy mb-2">
                      Hyperlocal Data
                    </h4>
                    <p className="text-text-light font-secondary leading-relaxed">
                      Specialized knowledge of The Vistas Summerlin market dynamics
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-primary-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-primary font-semibold text-primary-navy mb-2">
                      Real-Time Updates
                    </h4>
                    <p className="text-text-light font-secondary leading-relaxed">
                      Live MLS data ensures your valuation reflects current market conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Statistics */}
            <div className="card-luxury p-8">
              <h3 className="text-2xl font-primary font-semibold text-primary-navy mb-6">
                Market Performance
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-accent-blue/10 to-primary-navy/10 rounded-xl p-6 border border-accent-blue/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-light">Median Price</span>
                    <span className="text-sm font-medium text-success-green">+5.2%</span>
                  </div>
                  <div className="text-3xl font-primary font-bold text-primary-navy">$875,000</div>
                  <div className="text-sm text-text-light mt-1">Year-over-year growth</div>
                </div>

                <div className="bg-gradient-to-r from-success-green/10 to-accent-blue/10 rounded-xl p-6 border border-success-green/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-light">Days on Market</span>
                    <span className="text-sm font-medium text-accent-blue">-12%</span>
                  </div>
                  <div className="text-3xl font-primary font-bold text-primary-navy">45</div>
                  <div className="text-sm text-text-light mt-1">Average time to sell</div>
                </div>

                <div className="bg-gradient-to-r from-secondary-gold/10 to-accent-blue/10 rounded-xl p-6 border border-secondary-gold/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-light">List to Sale Ratio</span>
                    <span className="text-sm font-medium text-secondary-gold">98%</span>
                  </div>
                  <div className="text-3xl font-primary font-bold text-primary-navy">98.2%</div>
                  <div className="text-sm text-text-light mt-1">Homes selling at or above list</div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary-navy to-accent-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-primary font-semibold mb-4">
                Ready to Sell?
              </h3>
              <p className="text-white/90 font-secondary mb-6 leading-relaxed">
                Get a detailed Comparative Market Analysis and expert guidance from our local specialists.
              </p>
              <Link 
                href="/contact" 
                className="btn-gold w-full justify-center"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 