'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { FAQSchema, ArticleSchema } from '@/components/StructuredData';
import { Star, Users, Award, TrendingUp, Heart, Phone, Mail, MapPin, ArrowRight, CheckCircle, Zap, Sparkles, Shield, Home, Crown, Mountain, Building } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import RealScoutListings from '@/components/RealScoutListings';
import GoogleBusinessProfileWidget from '@/components/sections/google-business-profile-widget';
import ReviewCollectionWidget from '@/components/sections/review-collection-widget';
import LocalSEOShowcase from '@/components/sections/local-seo-showcase';

// Metadata moved to layout or parent component since this is a client component

export default function AboutPage() {
  const phoneNumber = "+17025000607";
  const emailAddress = "DrJanSells@TheVistasSummerlin.com";

  return (
    <div className="flex min-h-screen flex-col font-secondary text-gray-800 bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Advanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-300"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Award className="w-5 h-5" />
                  <span>The Vistas Summerlin | Homes by Dr. Jan Duffy</span>
                  <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Meet Dr. Jan Duffy
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Your Trusted Realtor
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  With over 12 years of experience specializing in The Vistas Summerlin, 
                  Dr. Jan Duffy offers flexible scheduling that works around YOUR lifestyle. 
                  Serving discerning buyers, sellers, and investors across Henderson, Enterprise, and Southwest Vegas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Dr. Jan</span>
                    <Zap className="w-4 h-4 animate-pulse" />
                  </a>
                  <Link 
                    href="/contact"
                    className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl font-bold text-white">JD</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dr. Jan Duffy</h3>
                    <p className="text-blue-200 mb-6">The Vistas Summerlin | Homes by Dr. Jan Duffy</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                        <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">12+</div>
                        <div className="text-blue-200 text-sm">Years Experience</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                        <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">150+</div>
                        <div className="text-blue-200 text-sm">Happy Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                Dr. Jan Duffy: Your Trusted The Vistas Summerlin Real Estate Expert
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Dr. Jan Duffy has been serving The Vistas Summerlin community for over 12 years, 
                  establishing herself as the premier real estate expert for luxury homes in Las Vegas. 
                  With deep knowledge of The Vistas market and personalized service that adapts to your 
                  schedule, Dr. Duffy provides exceptional guidance for both buyers and sellers.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Expertise in The Vistas Summerlin Real Estate Market
                </h3>
                
                <p className="mb-6">
                  Dr. Jan Duffy specializes exclusively in <Link href="/communities" className="text-blue-600 hover:text-blue-800 font-semibold underline">The Vistas Summerlin</Link>, Las Vegas's most 
                  prestigious master-planned community. Her office is strategically located at 
                  11312 Parkside Way, right in the heart of The Vistas community, providing 
                  unparalleled access to local market insights and community knowledge. This 
                  specialized focus allows Dr. Duffy to offer expert guidance on luxury homes 
                  ranging from $800,000 to over $2.5 million. <Link href="/search" className="text-blue-600 hover:text-blue-800 font-semibold underline">Browse current listings</Link> or <Link href="/valuation" className="text-blue-600 hover:text-blue-800 font-semibold underline">get your home's value</Link>.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Flexible Scheduling for Busy Professionals
                </h3>
                
                <p className="mb-6">
                  Understanding that luxury home buyers and sellers often have demanding schedules, 
                  Dr. Jan Duffy offers flexible scheduling that works around your lifestyle. Whether 
                  you're a busy executive, healthcare professional, or entrepreneur, Dr. Duffy 
                  accommodates evening and weekend appointments to ensure your real estate needs 
                  are met without disrupting your professional commitments.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Comprehensive Real Estate Services in The Vistas Summerlin
                </h3>
                
                <p className="mb-6">
                  Dr. Jan Duffy provides comprehensive real estate services including luxury home 
                  sales, property valuations, market analysis, and investment consulting. Her deep 
                  understanding of The Vistas community's 28 distinct subcommunities, from 
                  Mediterranean-inspired Portofino to the royal elegance of Kingwood, ensures 
                  clients find their perfect match in this prestigious Las Vegas community.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Contact Dr. Jan Duffy for Expert Real Estate Guidance
                </h3>
                
                <p className="mb-6">
                  Ready to buy or sell luxury real estate in The Vistas Summerlin? Contact Dr. Jan Duffy 
                  at (702) 500-0607 for personalized service and expert market guidance. Her office 
                  at 11312 Parkside Way, Las Vegas, NV 89138 is conveniently located in the heart of 
                  The Vistas community, providing easy access for all your real estate needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings Widget */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Current Luxury Homes for Sale - Dr. Jan Duffy's Listings
              </h2>
              <p className="text-lg text-gray-600">
                Browse Dr. Jan Duffy's current luxury home listings in The Vistas Summerlin. Each property is carefully selected and expertly marketed with personalized service and local market expertise.
              </p>
            </div>
            <RealScoutListings 
              officeId={process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || "your-office-id"}
              marketId={process.env.NEXT_PUBLIC_REALSCOUT_MARKET_ID || "las-vegas"}
              responsive={true}
            />
          </div>
        </div>

        {/* Summerlin Community Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Summerlin: An Award-Winning Master-Planned Community
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The Vistas Summerlin is part of <a href="https://summerlin.com/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">Summerlin</a>, 
                an award-winning community built from a big vision. This master-planned community continues to receive recognition 
                for its innovative design, exceptional amenities, and commitment to quality living.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Latest Developments</h3>
                <p className="text-gray-600">
                  Recent neighborhoods include Mockingbird by Lennar, Ascension by Toll Brothers, and Edgewood by Tri Pointe Homes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Events</h3>
                <p className="text-gray-600">
                  Downtown Summerlin hosts celebrations, festivals, and community gatherings throughout the year.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Award Recognition</h3>
                <p className="text-gray-600">
                  Summerlin continues to be recognized as one of the nation's premier master-planned communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Dr. Jan Duffy?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dr. Jan Duffy brings unparalleled expertise and dedication to every real estate transaction. 
                  As the preferred realtor for The Vistas Summerlin, she understands the unique characteristics 
                  of each subcommunity and helps clients make informed decisions.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  With a deep understanding of market trends, local amenities, and community dynamics, 
                  Dr. Duffy provides personalized service that goes beyond buying and selling homes. 
                  She's committed to helping families find not just a house, but a home where they can thrive.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Licensed Real Estate Professional</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">The Vistas Summerlin Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Award-Winning Service</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">500+ Successful Transactions</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <a href={`tel:${phoneNumber}`} className="text-blue-600 hover:text-blue-700">
                          {phoneNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a href={`mailto:${emailAddress}`} className="text-blue-600 hover:text-blue-700">
                          {emailAddress}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Location</div>
                        <div className="text-gray-700">Las Vegas, NV 89138</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 font-medium mb-6 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Heart className="w-5 h-5" />
                <span>Client Success Stories</span>
                <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                What Our Clients
                <span className="block text-blue-600">Say About Dr. Jan</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real stories from real families who found their dream homes in The Vistas Summerlin
              </p>
            </div>

            {/* Enhanced Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Testimonial 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    SM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Sarah & Mike Johnson</h4>
                    <p className="text-gray-600">Barrington Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "Jan made our home buying process seamless. Her knowledge of The Vistas is unmatched, and she helped us find the perfect home in Barrington within our budget."
                </p>
                <div className="text-sm text-gray-500">
                  Closed: $1.2M • 3 months ago
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    DL
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">David & Lisa Chen</h4>
                    <p className="text-gray-600">Kingwood Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "We were relocating from California and Jan's expertise was invaluable. She understood our needs and found us a beautiful home in Kingwood that exceeded our expectations."
                </p>
                <div className="text-sm text-gray-500">
                  Closed: $1.8M • 2 months ago
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    RW
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Robert & Wendy Martinez</h4>
                    <p className="text-gray-600">Santalina Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "Jan's attention to detail and market knowledge helped us sell our home quickly and buy our dream home in Santalina. Her professionalism is outstanding."
                </p>
                <div className="text-sm text-gray-500">
                  Closed: $950K • 1 month ago
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">$2.1B</div>
                <div className="text-gray-600">Total Sales Volume</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of families who have found their perfect home in The Vistas Summerlin with Jan Duffy's expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/search"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <span>Find Your Dream Home</span>
                    <ArrowRight className="w-5 h-5" />
                    <Zap className="w-4 h-4 animate-pulse" />
                  </Link>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Dr. Jan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy serves discerning clients across the Las Vegas Valley with expertise in The Vistas Summerlin
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'The Vistas Summerlin', icon: Crown, featured: true },
                { name: 'Henderson', icon: Building },
                { name: 'Enterprise', icon: Building },
                { name: 'Southwest Vegas', icon: Building },
                { name: 'Summerlin', icon: Mountain },
                { name: 'Paradise', icon: Building },
                { name: 'Las Vegas', icon: Building },
                { name: 'Clark County', icon: Building },
                { name: 'Desert Hills', icon: Building },
                { name: 'Spring Valley', icon: Building }
              ].map((area, index) => (
                <div key={index} className={`${area.featured ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white/80 backdrop-blur-sm border border-white/50'} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <area.icon className={`w-6 h-6 ${area.featured ? 'text-white' : 'text-blue-600'} mx-auto mb-2`} />
                  <p className={`text-sm font-medium ${area.featured ? 'text-white' : 'text-gray-900'}`}>{area.name}</p>
                  {area.featured && <p className="text-xs text-blue-200 mt-1">Specialty</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Business Profile Widget */}
        <GoogleBusinessProfileWidget />
        
        {/* Review Collection Widget */}
        <ReviewCollectionWidget />
        
        {/* Local SEO Showcase */}
        <LocalSEOShowcase />
      </main>
      <Footer />
      <ArticleSchema 
        title="About Dr. Jan Duffy - Las Vegas Real Estate Expert"
        description="Learn about Dr. Jan Duffy, your trusted Las Vegas real estate expert specializing in The Vistas Summerlin luxury homes and communities."
        datePublished="2024-01-01T00:00:00Z"
        dateModified="2025-10-15T00:00:00Z"
        url="https://www.thevistassummerlin.com/about"
      />
      <FAQSchema />
    </div>
  );
}