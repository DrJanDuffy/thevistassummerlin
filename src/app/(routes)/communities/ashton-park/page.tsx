import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import RealScoutListings from '@/components/RealScoutListings';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Ashton Park Community - Luxury Homes in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Ashton Park, a premier community in The Vistas Summerlin featuring luxury homes with modern amenities and beautiful landscaping. Expert real estate guidance from Dr. Jan Duffy.',
  keywords: [
    'Ashton Park The Vistas Summerlin',
    'luxury homes Ashton Park',
    'Ashton Park Las Vegas real estate',
    'Dr. Jan Duffy Ashton Park',
    'Ashton Park community features',
    'homes for sale Ashton Park',
    'The Vistas Summerlin Ashton Park'
  ],
  openGraph: {
    title: 'Ashton Park Community - Luxury Homes in The Vistas Summerlin',
    description: 'Premier community featuring luxury homes with modern amenities and beautiful landscaping.',
    url: 'https://www.thevistassummerlin.com/communities/ashton-park',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/ashton-park',
  },
};

export default function AshtonParkPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Ashton Park"
        description="Premier community in The Vistas Summerlin featuring luxury homes with modern amenities and beautiful landscaping."
        priceRange="$500,000 - $1,200,000"
        homeCount={25}
        amenities={['Modern Architecture', 'Landscaped Grounds', 'Community Pool', 'Walking Trails', 'Tennis Courts', 'Community Center']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Ashton Park', url: 'https://www.thevistassummerlin.com/communities/ashton-park' }
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
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-8 py-4 text-green-200 font-medium mb-8 shadow-lg">
                <Sparkles className="w-6 h-6" />
                <span>✨ Premier Community</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Ashton Park
                <span className="block text-4xl lg:text-5xl mt-4">Modern Luxury Living</span>
              </h1>
              
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Ashton Park, a premier community in The Vistas Summerlin featuring 
                luxury homes with modern amenities and beautifully landscaped grounds.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$500K+</div>
                  <div className="text-blue-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-blue-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.8</div>
                  <div className="text-blue-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">1,200+</div>
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
                  Ashton Park: Modern Luxury Living
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    Ashton Park represents contemporary luxury living in The Vistas Summerlin, 
                    offering residents modern architecture, beautifully landscaped grounds, 
                    and a vibrant community atmosphere.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose Ashton Park?
                  </h3>
                  
                  <p className="mb-6">
                    Ashton Park is designed for modern families who appreciate contemporary design 
                    and community amenities. This well-established community features homes with 
                    clean architectural lines, updated interiors, and private outdoor spaces 
                    perfect for entertaining and relaxation.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in Ashton Park range from $500,000 to $1.2 million, featuring 
                    modern floor plans, updated kitchens, and spacious master suites. 
                    Many properties include private patios, landscaped yards, and 
                    two-car garages with additional storage space.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="Ashton Park community in The Vistas Summerlin - modern luxury homes with landscaped grounds"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "Ashton Park offers the perfect blend of modern luxury and community living."
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
                Ashton Park Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience modern community living with thoughtfully designed amenities for residents of all ages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Contemporary home designs featuring clean lines, open floor plans, 
                  and modern finishes throughout the community.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landscaped Grounds</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professionally maintained landscaping with mature trees, 
                  flowering plants, and manicured common areas.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Resort-style community pool with lounge areas, 
                  perfect for relaxation and socializing with neighbors.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Walking Trails</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic walking paths connecting throughout the community 
                  and to nearby parks and recreational areas.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tennis Courts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional-grade tennis courts with lighting for evening play 
                  and organized community tournaments.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Center</h3>
                <p className="text-gray-600 leading-relaxed">
                  Modern community center with meeting rooms, fitness facilities, 
                  and social spaces for resident events and activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in Ashton Park
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in Ashton Park. Each property offers exceptional value with modern amenities and beautiful landscaping.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_LOW" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="500000" 
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
              Ready to Call Ashton Park Home?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Ashton Park's luxury real estate market 
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
