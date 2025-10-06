import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { VoiceSearchFAQ, AnswerEngineOptimization } from '@/components/VoiceSearchOptimization';
import { MapPin, Home, Users, Star, Award, TrendingUp, Shield, TreePine, Mountain, ShoppingBag, UtensilsCrossed, Zap, Sparkles, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Vistas Summerlin Community Guide - Complete Neighborhood Information',
  description: 'Complete guide to The Vistas Summerlin community. Discover amenities, schools, lifestyle, and everything you need to know about living in this prestigious Las Vegas community.',
  openGraph: {
    title: 'The Vistas Summerlin Community Guide - Complete Neighborhood Information',
    description: 'Everything you need to know about living in The Vistas Summerlin community.',
    url: 'https://www.thevistassummerlin.com/community-guide',
    type: 'website',
  },
};

export default function CommunityGuidePage() {
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <MapPin className="w-5 h-5" />
              <span>Community Guide</span>
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Vistas Summerlin
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Complete Community Guide
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to know about living in The Vistas Summerlin - 
              from amenities and schools to lifestyle and real estate insights.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Home className="w-6 h-6 text-blue-300 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-white">28</span>
                </div>
                <div className="text-blue-200 text-sm">Subcommunities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TreePine className="w-6 h-6 text-green-300 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <div className="text-blue-200 text-sm">Parks & Trails</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-6 h-6 text-purple-300 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-white">9.2</span>
                </div>
                <div className="text-blue-200 text-sm">School Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Community Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to The Vistas Summerlin
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The Vistas Summerlin is one of Las Vegas' most prestigious master-planned communities, 
                offering luxury living with world-class amenities and a family-friendly atmosphere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-3xl p-8 text-center hover:bg-blue-100 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">28 Subcommunities</h3>
                <p className="text-gray-700">
                  From luxury estates to family-friendly neighborhoods, discover the perfect community for your lifestyle.
                </p>
              </div>

              <div className="bg-green-50 rounded-3xl p-8 text-center hover:bg-green-100 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Beauty</h3>
                <p className="text-gray-700">
                  Nestled against Red Rock Canyon with hiking trails, parks, and stunning mountain views.
                </p>
              </div>

              <div className="bg-purple-50 rounded-3xl p-8 text-center hover:bg-purple-100 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Top-Rated Schools</h3>
                <p className="text-gray-700">
                  Access to Clark County's highest-rated schools including Palo Verde High School.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Lifestyle & Amenities */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-40 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lifestyle & Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the best of Las Vegas living with world-class amenities and entertainment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mountain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon Access</h3>
                <p className="text-gray-600">
                  Easy access to hiking, biking, and breathtaking natural beauty at Red Rock Canyon National Conservation Area.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Summerlin</h3>
                <p className="text-gray-600">
                  Premier shopping, fine dining, and entertainment just minutes away from your home.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gated Security</h3>
                <p className="text-gray-600">
                  24-hour security and gated entrances provide peace of mind for you and your family.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UtensilsCrossed className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culinary Scene</h3>
                <p className="text-gray-600">
                  A diverse array of restaurants and cafes, from casual eateries to upscale dining experiences.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Events</h3>
                <p className="text-gray-600">
                  Regular community events, festivals, and activities that bring neighbors together.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:scale-105 group">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Growth</h3>
                <p className="text-gray-600">
                  Consistent property appreciation and strong market performance make The Vistas a smart investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Sections */}
        <AnswerEngineOptimization />
        <VoiceSearchFAQ />

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Call The Vistas Home?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let Dr. Jan Duffy guide you through finding your perfect home in The Vistas Summerlin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/search"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>Start Your Search</span>
                  <ArrowRight className="w-5 h-5" />
                  <Zap className="w-4 h-4 animate-pulse" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>Meet Dr. Jan Duffy</span>
                  <Award className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}