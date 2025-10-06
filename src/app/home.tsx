'use client';

import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import Footer from '@/components/sections/footer';
import { ArrowRight, Phone, Star, Users, Home as HomeIcon, MapPin, TrendingUp, Shield, Award, Heart, Sparkles, ChevronRight } from 'lucide-react';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { VoiceSearchFAQ, AnswerEngineOptimization } from '@/components/VoiceSearchOptimization';
import { FeaturedProperty } from '@/components/FeaturedProperty';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <HomeEvaluationSection />
        <PropertyCategories />
        <FeaturedCommunities />
        
        {/* Featured Property Showcase */}
        <FeaturedProperty />
        
        {/* V0-Styled Client Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 font-medium mb-6 shadow-lg">
                <Heart className="w-5 h-5" />
                <span>Client Success Stories</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                What Our Clients
                <span className="block text-blue-600">Say About Jan Duffy</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real stories from real families who found their dream homes in The Vistas Summerlin
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Testimonial 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    SM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Sarah & Mike Johnson</h4>
                    <p className="text-gray-600">Barrington Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    DL
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">David & Lisa Chen</h4>
                    <p className="text-gray-600">Kingwood Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    RW
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Robert & Wendy Martinez</h4>
                    <p className="text-gray-600">Santalina Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.1B</div>
                <div className="text-gray-600">Total Sales Volume</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of families who have found their perfect home in The Vistas Summerlin with Jan Duffy's expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/search"
                    className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Find Your Dream Home</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+1702XXX"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Jan Duffy</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* V0-Styled Community Spotlight Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6">
                <Sparkles className="w-5 h-5" />
                <span>Community Spotlight</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover The Vistas
                <span className="block text-blue-300">Summerlin Lifestyle</span>
              </h2>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Experience luxury living in one of Las Vegas' most prestigious master-planned communities
              </p>
            </div>

            {/* Community Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Prime Location</h3>
                <p className="text-blue-100 leading-relaxed">
                  Nestled against Red Rock Canyon with easy access to Downtown Summerlin, the Strip, and McCarran Airport.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gated Security</h3>
                <p className="text-blue-100 leading-relaxed">
                  24-hour security and gated entrances provide peace of mind for you and your family.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Top-Rated Schools</h3>
              <p className="text-blue-100 leading-relaxed">
                Access to Clark County's highest-rated schools including Palo Verde High School.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <Link
                href="/communities"
                className="inline-flex items-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Explore All Communities</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <BlogPosts />
        
        {/* 2025 SEO Optimization Components */}
        <AnswerEngineOptimization />
        <VoiceSearchFAQ />
        
        <Footer />
        <FloatingActionButton href="tel:+17025551234">
          <Phone className="w-6 h-6" />
        </FloatingActionButton>
        <ScrollToTop />
      </main>
    </div>
  );
}