import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Sage Hills Community - Natural Beauty in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Sage Hills, a natural beauty community in The Vistas Summerlin featuring luxury homes with native landscaping and hiking trails. Expert real estate guidance from Dr. Jan Duffy.',
  keywords: [
    'Sage Hills The Vistas Summerlin',
    'natural homes Sage Hills',
    'Sage Hills Las Vegas real estate',
    'Dr. Jan Duffy Sage Hills',
    'Sage Hills community features',
    'luxury homes Sage Hills',
    'The Vistas Summerlin Sage Hills'
  ],
  openGraph: {
    title: 'Sage Hills Community - Natural Beauty in The Vistas Summerlin',
    description: 'Natural beauty community featuring luxury homes with native landscaping and hiking trails.',
    url: 'https://www.thevistassummerlin.com/communities/sage-hills',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/sage-hills',
  },
};

export default function SageHillsPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Sage Hills"
        description="Natural beauty community in The Vistas Summerlin featuring luxury homes with native landscaping and hiking trails."
        priceRange="$550,000 - $1,200,000"
        homeCount={30}
        amenities={['Natural Landscaping', 'Hiking Trails', 'Community Pool', 'Native Gardens', 'Walking Paths', 'Community Center']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Sage Hills', url: 'https://www.thevistassummerlin.com/communities/sage-hills' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-8 py-4 text-green-200 font-medium mb-8 shadow-lg">
                <TreePine className="w-6 h-6" />
                <span>🌿 Natural Beauty</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Sage Hills
                <span className="block text-4xl lg:text-5xl mt-4">Natural Living</span>
              </h1>
              
              <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Sage Hills, a natural beauty community in The Vistas Summerlin 
                featuring luxury homes with native landscaping and hiking trails.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$550K+</div>
                  <div className="text-green-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">30+</div>
                  <div className="text-green-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.5</div>
                  <div className="text-green-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-emerald-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">1,200+</div>
                  <div className="text-green-200 text-sm">Residents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Sage Hills: Natural Beauty Living
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    Sage Hills celebrates natural beauty in The Vistas Summerlin, 
                    featuring luxury homes with native landscaping and direct access 
                    to hiking trails and natural areas.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose Sage Hills?
                  </h3>
                  
                  <p className="mb-6">
                    Sage Hills is designed for those who appreciate natural beauty and 
                    outdoor recreation. This environmentally conscious community 
                    features homes with native landscaping, hiking trails, and 
                    access to community amenities including pools and gardens.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in Sage Hills range from $550,000 to $1.2 million, featuring 
                    natural landscaping, spacious layouts, and environmentally conscious 
                    designs. Many properties include native gardens, outdoor living areas, 
                    and premium finishes throughout.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="Sage Hills community in The Vistas Summerlin - natural beauty luxury homes with native landscaping"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "Sage Hills offers natural beauty with native landscaping and hiking trails."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sage Hills Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience natural beauty with native landscaping and outdoor recreation access.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Landscaping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Beautiful native landscaping throughout the community, 
                  featuring drought-resistant plants and natural desert beauty.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hiking Trails</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic hiking trails winding through natural areas, 
                  perfect for outdoor enthusiasts and nature lovers.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Resort-style community pool with natural surroundings, 
                  perfect for relaxation and family recreation.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Native Gardens</h3>
                <p className="text-gray-600 leading-relaxed">
                  Community native gardens showcasing local plant species 
                  and providing educational opportunities for residents.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Walking Paths</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic walking paths winding through natural areas 
                  and community spaces for peaceful strolls.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Center</h3>
                <p className="text-gray-600 leading-relaxed">
                  Eco-friendly community center hosting environmental events, 
                  meetings, and neighborhood gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in Sage Hills
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in Sage Hills. Each property offers exceptional value with natural amenities and native landscaping.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_LOW" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="550000" 
                price-max="1200000"
              ></realscout-office-listings>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://drjanduffy.realscout.com/homesearch/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
              >
                View All Listings on RealScout
              </a>
              <a
                href="tel:+17025000607"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-base font-medium rounded-full shadow-sm text-green-600 bg-white hover:bg-green-50 transition-colors duration-300 transform hover:scale-105"
              >
                Call Dr. Jan Duffy for Personalized Help
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Experience Natural Living in Sage Hills?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Sage Hills' luxury real estate market 
              with personalized service and expert local knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
