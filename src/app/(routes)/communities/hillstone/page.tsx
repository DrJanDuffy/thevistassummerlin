import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Hillstone Community - Mountain View Homes in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Hillstone, a mountain view community in The Vistas Summerlin featuring luxury homes with stone architecture and hiking access. Expert real estate guidance from Dr. Jan Duffy.',
  keywords: [
    'Hillstone The Vistas Summerlin',
    'mountain view homes Hillstone',
    'Hillstone Las Vegas real estate',
    'Dr. Jan Duffy Hillstone',
    'Hillstone community features',
    'luxury homes Hillstone',
    'The Vistas Summerlin Hillstone'
  ],
  openGraph: {
    title: 'Hillstone Community - Mountain View Homes in The Vistas Summerlin',
    description: 'Mountain view community featuring luxury homes with stone architecture and hiking access.',
    url: 'https://www.thevistassummerlin.com/communities/hillstone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/hillstone',
  },
};

export default function HillstonePage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Hillstone"
        description="Mountain view community in The Vistas Summerlin featuring luxury homes with stone architecture and hiking access."
        priceRange="$700,000 - $1,700,000"
        homeCount={16}
        amenities={['Mountain Views', 'Stone Architecture', 'Private Patios', 'Hiking Access', 'Community Pool', 'Scenic Trails']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Hillstone', url: 'https://www.thevistassummerlin.com/communities/hillstone' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-stone-900 to-gray-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-stone-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-stone-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-stone-500/20 to-gray-500/20 backdrop-blur-sm border border-stone-400/30 rounded-full px-8 py-4 text-stone-200 font-medium mb-8 shadow-lg">
                <Mountain className="w-6 h-6" />
                <span>🏔️ Mountain Views</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-stone-200 to-gray-200 bg-clip-text text-transparent leading-tight">
                Hillstone
                <span className="block text-4xl lg:text-5xl mt-4">Mountain View Living</span>
              </h1>
              
              <p className="text-2xl text-stone-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Hillstone, a mountain view community in The Vistas Summerlin 
                featuring luxury homes with stone architecture and hiking access.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-stone-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$700K+</div>
                  <div className="text-stone-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-stone-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">16+</div>
                  <div className="text-stone-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-stone-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">600+</div>
                  <div className="text-stone-200 text-sm">Residents</div>
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
                  Hillstone: Mountain View Luxury
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    Hillstone offers unparalleled mountain views in The Vistas Summerlin, 
                    featuring luxury homes with stone architecture and direct access 
                    to hiking trails and natural beauty.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose Hillstone?
                  </h3>
                  
                  <p className="mb-6">
                    Hillstone is designed for those who appreciate natural beauty and 
                    outdoor recreation. This exclusive community features homes with 
                    stone architecture, private patios, and direct access to hiking 
                    trails and scenic mountain views.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in Hillstone range from $700,000 to $1.7 million, featuring 
                    stone architecture, mountain views, and spacious layouts. Many 
                    properties include private patios, outdoor kitchens, and 
                    premium finishes throughout.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="Hillstone community in The Vistas Summerlin - mountain view luxury homes with stone architecture"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "Hillstone offers breathtaking mountain views with luxury stone architecture."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-stone-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hillstone Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience mountain view living with stone architecture and outdoor recreation access.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-stone-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mountain Views</h3>
                <p className="text-gray-600 leading-relaxed">
                  Breathtaking mountain views from many properties, 
                  providing a stunning natural backdrop for daily living.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-stone-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stone Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elegant stone architecture featuring natural materials, 
                  creating homes that blend beautifully with the landscape.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Patios</h3>
                <p className="text-gray-600 leading-relaxed">
                  Spacious private patios perfect for enjoying mountain views, 
                  outdoor dining, and relaxation in natural surroundings.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hiking Access</h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct access to hiking trails and natural areas, 
                  perfect for outdoor enthusiasts and nature lovers.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Resort-style community pool with mountain views, 
                  perfect for relaxation and family recreation.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scenic Trails</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic walking trails winding through natural areas 
                  and community spaces with mountain views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-stone-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in Hillstone
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in Hillstone. Each property offers exceptional value with mountain views and stone architecture.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_LOW" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="700000" 
                price-max="1700000"
              ></realscout-office-listings>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-stone-600 hover:bg-stone-700 transition-colors duration-300 transform hover:scale-105"
              >
                View All Listings on RealScout
              </a>
              <a
                href="tel:+17025000607"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-stone-600 text-base font-medium rounded-full shadow-sm text-stone-600 bg-white hover:bg-stone-50 transition-colors duration-300 transform hover:scale-105"
              >
                Call Dr. Jan Duffy for Personalized Help
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-stone-900 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Experience Mountain View Living in Hillstone?
            </h2>
            <p className="text-xl text-stone-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Hillstone's luxury real estate market 
              with personalized service and expert local knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-stone-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
