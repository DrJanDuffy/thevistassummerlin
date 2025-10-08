import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Canterra Community - Oversized Lots & Dual Master Suites in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Canterra in The Vistas Summerlin featuring oversized lots up to 11,761 sq ft, dual master suite floor plans, and flexible square footage from 1,829-2,787 sq ft. Perfect for multi-generational living.',
  keywords: [
    'Canterra The Vistas Summerlin',
    'oversized lots Las Vegas',
    'dual master suite homes',
    'multi-generational homes',
    'Canterra Las Vegas real estate',
    'Dr. Jan Duffy Canterra',
    'big lot homes Summerlin',
    'homes for sale Canterra',
    'The Vistas Summerlin Canterra',
    '11,761 square foot lots',
    'pool installation lots',
    'RV parking homes'
  ],
  openGraph: {
    title: 'Canterra Community - Oversized Lots & Dual Master Suites in The Vistas Summerlin',
    description: 'Oversized lots up to 11,761 sq ft with dual master suite floor plans perfect for multi-generational living in The Vistas Summerlin.',
    url: 'https://www.thevistassummerlin.com/communities/canterra',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/canterra',
  },
};

export default function CanterraPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Canterra"
        description="Oversized lots up to 11,761 sq ft with dual master suite floor plans perfect for multi-generational living in The Vistas Summerlin."
        priceRange="$550,000 - $1,300,000"
        homeCount={22}
        amenities={['Oversized Lots', 'Dual Master Suites', 'Multi-Generational Living', 'Pool Installation Space', 'RV Parking', '360-Degree Design']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Canterra', url: 'https://www.thevistassummerlin.com/communities/canterra' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-8 py-4 text-blue-200 font-medium mb-8 shadow-lg">
                <Sparkles className="w-6 h-6" />
                <span>✨ Contemporary Living</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Canterra
                <span className="block text-4xl lg:text-5xl mt-4">Oversized Lots & Dual Master Suites</span>
              </h1>
              
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Canterra's unique oversized lots up to 11,761 sq ft with dual master suite 
                floor plans perfect for multi-generational living in The Vistas Summerlin.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$550K+</div>
                  <div className="text-blue-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Square className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">11,761</div>
                  <div className="text-blue-200 text-sm">Max Lot Size (sq ft)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.7</div>
                  <div className="text-blue-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Bed className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">2,787</div>
                  <div className="text-blue-200 text-sm">Max Home Size (sq ft)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Selling Points */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Canterra's Unique Selling Points
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes Canterra truly special in The Vistas Summerlin market - 
                oversized lots, dual master suites, and flexible square footage options.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="space-y-12">
                  {/* Oversized Lots */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6">
                        <Square className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">1. Oversized Lots</h3>
                        <p className="text-blue-600 font-semibold">Up to 11,761 Square Feet</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <strong>The biggest differentiator</strong> - lot sizes up to 11,761 square feet, 
                      which was HUGE for production homes in that era. Most tract homes in Vegas 
                      were on 5,000-7,000 sq ft lots.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-2">🏊</div>
                        <div className="text-sm font-semibold text-gray-700">Pool Installation</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-2">🌳</div>
                        <div className="text-sm font-semibold text-gray-700">Professional Landscaping</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-blue-600 mb-2">🚐</div>
                        <div className="text-sm font-semibold text-gray-700">RV Parking</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                      <p className="text-blue-800 font-medium">
                        💡 <strong>Smart Investment:</strong> In 2003-2004, when land was cheaper pre-boom, 
                        R/S grabbed bigger parcels and marketed "room to grow" - pools, RV parking, 
                        outdoor kitchens. Smart play that's paying off now with resale values.
                      </p>
                    </div>
                  </div>

                  {/* Dual Master Suites */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-purple-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">2. Dual Master Suite Floor Plans</h3>
                        <p className="text-purple-600 font-semibold">Perfect Multi-Generational Living</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      The highly sought-after dual master suite floor plan was a signature R/S feature - 
                      perfect for multi-generational living, which was becoming popular in Vegas 
                      in the early 2000s.
                    </p>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3">Ideal For:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700">Multi-generational families</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700">Aging parents</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700">Adult children</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700">Guest accommodations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-12">
                  {/* Flexible Square Footage */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-green-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6">
                        <Home className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">3. Flexible Square Footage Range</h3>
                        <p className="text-green-600 font-semibold">1,829 - 2,787 Square Feet</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      With homes from 1,829-2,787 sq ft, they hit that sweet spot - bigger than 
                      entry-level but not luxury pricing. Mid-range families could get space AND a big lot.
                    </p>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-green-600">1,829 - 2,787</div>
                        <div className="text-gray-600">Square Feet Range</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">1,829</div>
                          <div className="text-sm text-gray-600">Minimum</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">2,787</div>
                          <div className="text-sm text-gray-600">Maximum</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summerlin Mandated Features */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-xl border border-orange-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-6">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">4. Summerlin Mandated Features</h3>
                        <p className="text-orange-600 font-semibold">360-Degree Design Excellence</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      At least 15% outdoor living space (courtyards, miradors, loggias, covered patios) 
                      and 360-degree design on all four sides - but R/S maximized these with those big lots.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">15% minimum outdoor living space</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Courtyards & miradors</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Covered patios & loggias</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">360-degree design on all four sides</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Benefits */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Canterra Stands Out
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Canterra's unique combination of oversized lots, dual master suites, and flexible 
                square footage makes it the perfect choice for families seeking space and versatility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Square className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Oversized Lots</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lots up to 11,761 sq ft provide room for pools, professional landscaping, 
                  RV parking, and outdoor kitchens - a rare find in Vegas production homes.
                </p>
                <div className="text-blue-600 font-semibold text-lg">Up to 11,761 sq ft</div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dual Master Suites</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Perfect for multi-generational living with aging parents, adult children, 
                  or guest accommodations in a separate master suite.
                </p>
                <div className="text-purple-600 font-semibold text-lg">Multi-generational ready</div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Square Footage</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Homes from 1,829-2,787 sq ft hit the sweet spot - bigger than entry-level 
                  but not luxury pricing, perfect for growing families.
                </p>
                <div className="text-green-600 font-semibold text-lg">1,829 - 2,787 sq ft</div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Summerlin Standards</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  15% minimum outdoor living space with courtyards, miradors, loggias, 
                  and 360-degree design on all four sides.
                </p>
                <div className="text-orange-600 font-semibold text-lg">360-degree design</div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Investment</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Built when land was cheaper pre-boom, these oversized lots are now 
                  paying off with excellent resale values and appreciation.
                </p>
                <div className="text-blue-600 font-semibold text-lg">Proven appreciation</div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Room to Grow</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The "room to grow" concept allows for future additions like pools, 
                  outdoor kitchens, and expanded outdoor living spaces.
                </p>
                <div className="text-green-600 font-semibold text-lg">Future-proof design</div>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in Canterra
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in Canterra. Each property offers exceptional value with contemporary amenities and resort-style features.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_LOW" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="550000" 
                price-max="1300000"
              ></realscout-office-listings>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://drjanduffy.realscout.com/homesearch/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                View All Listings on RealScout
              </a>
              <a
                href="tel:+17025000607"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-base font-medium rounded-full shadow-sm text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
              >
                Call Dr. Jan Duffy for Personalized Help
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Call Canterra Home?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Canterra's luxury real estate market 
              with personalized service and expert local knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Dr. Duffy</span>
              </Link>
              <Link
                href="/valuation"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Get Home Value</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
