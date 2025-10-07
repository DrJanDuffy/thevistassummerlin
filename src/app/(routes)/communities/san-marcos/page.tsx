import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'San Marcos Community - Spanish Colonial Charm in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover San Marcos, a Spanish colonial charm community in The Vistas Summerlin featuring luxury homes with private courtyards and community amenities. Expert real estate guidance from Dr. Jan Duffy.',
  keywords: [
    'San Marcos The Vistas Summerlin',
    'Spanish colonial homes San Marcos',
    'San Marcos Las Vegas real estate',
    'Dr. Jan Duffy San Marcos',
    'San Marcos community features',
    'luxury homes San Marcos',
    'The Vistas Summerlin San Marcos'
  ],
  openGraph: {
    title: 'San Marcos Community - Spanish Colonial Charm in The Vistas Summerlin',
    description: 'Spanish colonial charm community featuring luxury homes with private courtyards and community amenities.',
    url: 'https://www.thevistassummerlin.com/communities/san-marcos',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/san-marcos',
  },
};

export default function SanMarcosPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="San Marcos"
        description="Spanish colonial charm community in The Vistas Summerlin featuring luxury homes with private courtyards and community amenities."
        priceRange="$650,000 - $1,500,000"
        homeCount={20}
        amenities={['Spanish Colonial', 'Private Courtyards', 'Community Pool', 'Tennis Courts', 'Walking Paths', 'Community Center']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'San Marcos', url: 'https://www.thevistassummerlin.com/communities/san-marcos' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-8 py-4 text-red-200 font-medium mb-8 shadow-lg">
                <Heart className="w-6 h-6" />
                <span>🏛️ Spanish Colonial</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-red-200 to-orange-200 bg-clip-text text-transparent leading-tight">
                San Marcos
                <span className="block text-4xl lg:text-5xl mt-4">Spanish Colonial Charm</span>
              </h1>
              
              <p className="text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover San Marcos, a Spanish colonial charm community in The Vistas Summerlin 
                featuring luxury homes with private courtyards and community amenities.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-red-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$650K+</div>
                  <div className="text-red-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-red-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-red-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.7</div>
                  <div className="text-red-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-orange-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">800+</div>
                  <div className="text-red-200 text-sm">Residents</div>
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
                  San Marcos: Spanish Colonial Elegance
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    San Marcos brings Spanish colonial charm to The Vistas Summerlin, 
                    featuring luxury homes with private courtyards and authentic 
                    architectural details that celebrate traditional Spanish design.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose San Marcos?
                  </h3>
                  
                  <p className="mb-6">
                    San Marcos is designed for those who appreciate Spanish colonial 
                    architecture and intimate community living. This charming community 
                    features homes with private courtyards, community pools, and access 
                    to tennis courts and walking paths.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in San Marcos range from $650,000 to $1.5 million, featuring 
                    Spanish colonial architecture, private courtyards, and spacious layouts. 
                    Many properties include outdoor living areas, traditional finishes, 
                    and premium amenities throughout.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="San Marcos community in The Vistas Summerlin - Spanish colonial charm luxury homes with private courtyards"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "San Marcos offers Spanish colonial charm with private courtyards and community amenities."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                San Marcos Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience Spanish colonial charm with private courtyards and community amenities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Spanish Colonial</h3>
                <p className="text-gray-600 leading-relaxed">
                  Authentic Spanish colonial architecture featuring stucco exteriors, 
                  tile roofs, and traditional design elements throughout.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Courtyards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Spacious private courtyards perfect for outdoor dining, 
                  relaxation, and entertaining in traditional Spanish style.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Resort-style community pool with Spanish-inspired design, 
                  perfect for relaxation and family recreation.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tennis Courts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional-grade tennis courts with traditional Spanish 
                  architectural elements and evening lighting.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Walking Paths</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic walking paths winding through Spanish-inspired 
                  landscaping and community spaces.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Center</h3>
                <p className="text-gray-600 leading-relaxed">
                  Spanish colonial-style community center hosting cultural events, 
                  meetings, and neighborhood gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in San Marcos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in San Marcos. Each property offers exceptional value with Spanish colonial charm and private courtyards.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_LOW" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="650000" 
                price-max="1500000"
              ></realscout-office-listings>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://drjanduffy.realscout.com/homesearch/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
              >
                View All Listings on RealScout
              </a>
              <a
                href="tel:+17025000607"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-600 text-base font-medium rounded-full shadow-sm text-red-600 bg-white hover:bg-red-50 transition-colors duration-300 transform hover:scale-105"
              >
                Call Dr. Jan Duffy for Personalized Help
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Experience Spanish Colonial Living in San Marcos?
            </h2>
            <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through San Marcos' luxury real estate market 
              with personalized service and expert local knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
