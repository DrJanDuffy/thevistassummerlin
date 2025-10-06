import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { VoiceSearchFAQ, AnswerEngineOptimization } from '@/components/VoiceSearchOptimization';
import { MapPin, Home, Users, Star, Award, TrendingUp, Shield, TreePine, Mountain, ShoppingBag, UtensilsCrossed } from 'lucide-react';

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
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg">
              <MapPin className="w-5 h-5" />
              <span>Community Guide</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Vistas Summerlin
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Complete Community Guide</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about living in The Vistas Summerlin - 
              from amenities and schools to lifestyle and real estate insights.
            </p>
          </div>
        </section>

        {/* Community Overview */}
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
              <div className="bg-blue-50 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">28 Subcommunities</h3>
                <p className="text-gray-700">
                  From luxury estates to family-friendly neighborhoods, discover the perfect community for your lifestyle.
                </p>
              </div>

              <div className="bg-green-50 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Beauty</h3>
                <p className="text-gray-700">
                  Nestled against Red Rock Canyon with hiking trails, parks, and stunning mountain views.
                </p>
              </div>

              <div className="bg-purple-50 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

        {/* Lifestyle & Amenities */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Lifestyle & Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the best of Las Vegas living with world-class amenities and entertainment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Mountain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon Access</h3>
                <p className="text-gray-600">
                  Easy access to hiking, biking, and breathtaking natural beauty at Red Rock Canyon National Conservation Area.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Summerlin</h3>
                <p className="text-gray-600">
                  Premier shopping, fine dining, and entertainment just minutes away from your home.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gated Security</h3>
                <p className="text-gray-600">
                  24-hour security and gated entrances provide peace of mind for you and your family.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  <UtensilsCrossed className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culinary Scene</h3>
                <p className="text-gray-600">
                  A diverse array of restaurants and cafes, from casual eateries to upscale dining experiences.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Events</h3>
                <p className="text-gray-600">
                  Regular community events, festivals, and activities that bring neighbors together.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
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
      </main>
      <Footer />
    </div>
  );
}
