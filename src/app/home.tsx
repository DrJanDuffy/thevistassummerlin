'use client';

import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import Footer from '@/components/sections/footer';
import { Phone, BookOpen, User, MapPin, ArrowRight, Zap, Sparkles, Heart, Award, TrendingUp, Users, Star } from 'lucide-react';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { FeaturedProperty } from '@/components/FeaturedProperty';
import GoogleBusinessProfileWidget from '@/components/sections/google-business-profile-widget';
import ReviewCollectionWidget from '@/components/sections/review-collection-widget';
import LocalSEOShowcase from '@/components/sections/local-seo-showcase';

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
        
        {/* Google Business Profile Widget */}
        <GoogleBusinessProfileWidget />
        
        {/* Review Collection Widget */}
        <ReviewCollectionWidget />
        
        {/* Local SEO Showcase */}
        <LocalSEOShowcase />
        
        {/* Enhanced Quick Links Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Advanced Background Elements */}
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 font-medium mb-6 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Sparkles className="w-5 h-5" />
                <span>Explore More</span>
                <Zap className="w-4 h-4 text-blue-500 animate-pulse" />
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Everything About
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  The Vistas Summerlin
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Dive deeper into our community with expert insights, market analysis, and comprehensive guides 
                designed to help you make informed decisions about your real estate journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Blog Link */}
              <Link 
                href="/blog"
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Market Insights
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Stay informed with expert analysis, market updates, and helpful guides for The Vistas Summerlin real estate market.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="font-semibold">Read Latest Posts</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                  </div>
                </div>
              </Link>

              {/* About Link */}
              <Link 
                href="/about"
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    About Dr. Jan Duffy
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Meet your preferred realtor and learn about our award-winning service, client testimonials, and success stories.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-green-600 group-hover:text-green-700 transition-colors">
                    <span className="font-semibold">Meet Dr. Jan</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <Heart className="w-4 h-4 group-hover:animate-pulse" />
                  </div>
                </div>
              </Link>

              {/* Community Guide Link */}
              <Link 
                href="/community-guide"
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Community Guide
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Complete guide to The Vistas Summerlin - amenities, schools, lifestyle, and everything you need to know.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-purple-600 group-hover:text-purple-700 transition-colors">
                    <span className="font-semibold">Explore Guide</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <Award className="w-4 h-4 group-hover:animate-pulse" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Enhanced Stats Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose The Vistas Summerlin?
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the perfect blend of luxury, convenience, and community in Las Vegas' most prestigious area.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-all duration-300 hover:scale-105 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">4.5%</div>
                  <div className="text-gray-600">Annual Appreciation</div>
                </div>
                <div className="text-center bg-green-50 rounded-2xl p-6 hover:bg-green-100 transition-all duration-300 hover:scale-105 group">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">28</div>
                  <div className="text-gray-600">Subcommunities</div>
                </div>
                <div className="text-center bg-purple-50 rounded-2xl p-6 hover:bg-purple-100 transition-all duration-300 hover:scale-105 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">9.2</div>
                  <div className="text-gray-600">School Rating</div>
                </div>
                <div className="text-center bg-orange-50 rounded-2xl p-6 hover:bg-orange-100 transition-all duration-300 hover:scale-105 group">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
        <FloatingActionButton href="tel:+17025551234">
          <Phone className="w-6 h-6" />
        </FloatingActionButton>
        <ScrollToTop />
      </main>
    </div>
  );
}