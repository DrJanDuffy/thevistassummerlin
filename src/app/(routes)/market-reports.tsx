'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';

export default function MarketReports() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
              Market Reports
            </h1>
            <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive market insights and analysis for The Vistas Summerlin area
            </p>
          </div>
        </section>

        {/* Current Market Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Current Market Overview
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto">
                Stay informed with the latest market trends and data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-light-gray p-6 rounded-default shadow-lg text-center">
                <div className="text-3xl font-primary font-bold text-link-blue mb-2">$850K</div>
                <div className="text-sm font-secondary text-text-light">Median Home Price</div>
                <div className="text-xs font-secondary text-success-green mt-1">↑ 5.2% vs last year</div>
              </div>

              <div className="bg-light-gray p-6 rounded-default shadow-lg text-center">
                <div className="text-3xl font-primary font-bold text-link-blue mb-2">45</div>
                <div className="text-sm font-secondary text-text-light">Days on Market</div>
                <div className="text-xs font-secondary text-success-green mt-1">↓ 12% vs last year</div>
              </div>

              <div className="bg-light-gray p-6 rounded-default shadow-lg text-center">
                <div className="text-3xl font-primary font-bold text-link-blue mb-2">2.8%</div>
                <div className="text-sm font-secondary text-text-light">Inventory Level</div>
                <div className="text-xs font-secondary text-success-green mt-1">Balanced market</div>
              </div>

              <div className="bg-light-gray p-6 rounded-default shadow-lg text-center">
                <div className="text-3xl font-primary font-bold text-link-blue mb-2">98.5%</div>
                <div className="text-sm font-secondary text-text-light">List to Sale Ratio</div>
                <div className="text-xs font-secondary text-success-green mt-1">Strong seller market</div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Reports Categories */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Available Reports
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto">
                Choose the report that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Monthly Market Report */}
              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4 text-center">
                  Monthly Market Report
                </h3>
                <p className="text-body font-secondary text-text-light mb-6 text-center">
                  Comprehensive monthly analysis of market trends, pricing, and inventory
                </p>
                <ul className="text-sm font-secondary text-text-light mb-6 space-y-2">
                  <li>• Price trends and analysis</li>
                  <li>• Inventory levels</li>
                  <li>• Days on market</li>
                  <li>• Market predictions</li>
                </ul>
                <Link 
                  href="/contact?report=monthly"
                  className="block w-full text-center bg-link-blue text-white px-6 py-3 rounded-default text-nav font-secondary hover:bg-primary-navy transition-colors duration-300"
                >
                  Request Report
                </Link>
              </div>

              {/* Community-Specific Report */}
              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4 text-center">
                  Community Analysis
                </h3>
                <p className="text-body font-secondary text-text-light mb-6 text-center">
                  Detailed analysis of specific subcommunities within The Vistas
                </p>
                <ul className="text-sm font-secondary text-text-light mb-6 space-y-2">
                  <li>• Community-specific pricing</li>
                  <li>• Amenity impact on value</li>
                  <li>• Development trends</li>
                  <li>• Investment potential</li>
                </ul>
                <Link 
                  href="/contact?report=community"
                  className="block w-full text-center bg-success-green text-white px-6 py-3 rounded-default text-nav font-secondary hover:bg-link-blue transition-colors duration-300"
                >
                  Request Report
                </Link>
              </div>

              {/* Investment Analysis */}
              <div className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4 text-center">
                  Investment Analysis
                </h3>
                <p className="text-body font-secondary text-text-light mb-6 text-center">
                  ROI analysis and investment opportunities in The Vistas
                </p>
                <ul className="text-sm font-secondary text-text-light mb-6 space-y-2">
                  <li>• ROI projections</li>
                  <li>• Rental market analysis</li>
                  <li>• Appreciation trends</li>
                  <li>• Investment strategies</li>
                </ul>
                <Link 
                  href="/contact?report=investment"
                  className="block w-full text-center bg-primary-navy text-white px-6 py-3 rounded-default text-nav font-secondary hover:bg-link-blue transition-colors duration-300"
                >
                  Request Report
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Key Market Trends
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto">
                Understanding the factors driving The Vistas Summerlin market
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
                  What's Driving Growth
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-primary font-medium text-text-dark mb-2">Luxury Market Demand</h4>
                      <p className="text-body font-secondary text-text-light">
                        High demand for luxury properties in premier Las Vegas communities continues to drive prices upward.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-primary font-medium text-text-dark mb-2">Limited Inventory</h4>
                      <p className="text-body font-secondary text-text-light">
                        Low inventory levels create competitive buying environments and support price stability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-primary font-medium text-text-dark mb-2">Amenity Premium</h4>
                      <p className="text-body font-secondary text-text-light">
                        Properties with access to golf courses, parks, and community amenities command premium prices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
                  Market Outlook
                </h3>
                <div className="space-y-6">
                  <div className="bg-light-gray p-6 rounded-default">
                    <h4 className="text-lg font-primary font-medium text-text-dark mb-3">Short Term (3-6 months)</h4>
                    <p className="text-body font-secondary text-text-light mb-3">
                      Continued price appreciation with seasonal fluctuations. Strong buyer demand expected to persist.
                    </p>
                    <div className="text-sm font-secondary text-success-green">↑ 3-5% price growth expected</div>
                  </div>

                  <div className="bg-light-gray p-6 rounded-default">
                    <h4 className="text-lg font-primary font-medium text-text-dark mb-3">Medium Term (6-12 months)</h4>
                    <p className="text-body font-secondary text-text-light mb-3">
                      Stable growth trajectory with potential for increased inventory as new developments come online.
                    </p>
                    <div className="text-sm font-secondary text-success-green">↑ 5-8% price growth expected</div>
                  </div>

                  <div className="bg-light-gray p-6 rounded-default">
                    <h4 className="text-lg font-primary font-medium text-text-dark mb-3">Long Term (1-3 years)</h4>
                    <p className="text-body font-secondary text-text-light mb-3">
                      Sustained appreciation driven by Las Vegas growth and The Vistas' premium positioning.
                    </p>
                    <div className="text-sm font-secondary text-success-green">↑ 8-12% cumulative growth expected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
              Get Your Custom Market Report
            </h2>
            <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto mb-12">
              Receive a personalized market analysis tailored to your specific needs and timeline
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-link-blue text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request Free Report
              </Link>
              <Link
                href="/market-analysis"
                className="border-2 border-link-blue text-link-blue px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Market Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 