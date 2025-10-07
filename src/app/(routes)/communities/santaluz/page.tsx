import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import RealScoutListings from '@/components/RealScoutListings';
import { RealEstateListingSchema, CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Santaluz Community - Luxury Homes in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Santaluz, a premium community in The Vistas Summerlin featuring luxury homes with mountain views, resort-style amenities, and golf course access. Homes from $800K-$2.5M.',
  keywords: [
    'Santaluz The Vistas Summerlin',
    'luxury homes Santaluz',
    'Santaluz Las Vegas real estate',
    'mountain view homes Santaluz',
    'resort amenities Santaluz',
    'Dr. Jan Duffy Santaluz',
    'Santaluz community features',
    'golf course homes Santaluz'
  ],
  openGraph: {
    title: 'Santaluz Community - Luxury Homes in The Vistas Summerlin',
    description: 'Premium community with luxury homes featuring mountain views and resort-style amenities.',
    url: 'https://www.thevistassummerlin.com/communities/santaluz',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/santaluz',
  },
};

export default function SantaluzPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Santaluz"
        description="Premium community in The Vistas Summerlin featuring luxury homes with mountain views, resort-style amenities, and golf course access."
        priceRange="$800,000 - $2,500,000"
        homeCount={12}
        amenities={['Mountain Views', 'Resort Pool', 'Golf Course', 'Hiking Trails', 'Community Center', 'Tennis Courts']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Santaluz', url: 'https://www.thevistassummerlin.com/communities/santaluz' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-8 py-4 text-yellow-200 font-medium mb-8 shadow-lg">
                <Sparkles className="w-6 h-6" />
                <span>✨ Premium Community</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
                Santaluz
                <span className="block text-4xl lg:text-5xl mt-4">Mountain View Luxury</span>
              </h1>
              
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Santaluz, a premium community in The Vistas Summerlin featuring 
                luxury homes with breathtaking mountain views and resort-style amenities.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$800K+</div>
                  <div className="text-blue-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">12+</div>
                  <div className="text-blue-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-blue-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">2,400+</div>
                  <div className="text-blue-200 text-sm">Residents</div>
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
                  Santaluz: Premium Mountain View Living
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    Santaluz represents the pinnacle of luxury living in The Vistas Summerlin, 
                    offering residents unparalleled mountain views and resort-style amenities 
                    in a prestigious community setting.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose Santaluz?
                  </h3>
                  
                  <p className="mb-6">
                    Santaluz is designed for discerning homeowners who appreciate the finer things in life. 
                    This exclusive community features custom-built luxury homes with panoramic mountain views, 
                    resort-style pools, and direct access to world-class golf courses. The community's 
                    elevated position provides stunning vistas of the Las Vegas Strip and surrounding 
                    mountain ranges.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in Santaluz range from $800,000 to $2.5 million, featuring custom architecture, 
                    premium finishes, and expansive outdoor living spaces. Many properties include 
                    private pools, outdoor kitchens, and landscaped gardens that complement the 
                    natural desert beauty.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="Santaluz community in The Vistas Summerlin - luxury homes with mountain views"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "Santaluz offers the perfect blend of luxury, privacy, and natural beauty."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Santaluz Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience resort-style living with world-class amenities designed for luxury and convenience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mountain Views</h3>
                <p className="text-gray-600 leading-relaxed">
                  Breathtaking panoramic views of the Las Vegas Strip and surrounding mountain ranges 
                  from your private outdoor spaces.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Resort Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Luxurious resort-style community pool with cabanas, spa features, and 
                  professional landscaping for year-round enjoyment.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Golf Course Access</h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct access to TPC Summerlin golf course and other premier golf facilities 
                  for the ultimate golfing lifestyle.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hiking Trails</h3>
                <p className="text-gray-600 leading-relaxed">
                  Miles of scenic hiking trails connecting to Red Rock Canyon and other 
                  natural areas for outdoor enthusiasts.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Center</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art community center with fitness facilities, meeting rooms, 
                  and social spaces for residents.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tennis Courts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional-grade tennis courts with lighting for evening play and 
                  organized tournaments throughout the year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Listings */}
        <RealScoutListings 
          title="Current Luxury Homes for Sale in Santaluz"
          description="Discover our curated selection of luxury homes in Santaluz. Each property offers exceptional value with premium amenities, mountain views, and access to world-class community features."
          priceMin="800000"
          priceMax="2500000"
          className="py-20"
        />

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Call Santaluz Home?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Santaluz's luxury real estate market 
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
