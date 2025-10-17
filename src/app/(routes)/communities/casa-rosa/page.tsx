import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Casa Rosa Community - Spanish-Inspired Elegance in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Casa Rosa, a Spanish-inspired elegant community in The Vistas Summerlin featuring luxury homes with private patios and landscaped gardens. Expert real estate guidance from Dr. Jan Duffy.',
  keywords: [
    'Casa Rosa The Vistas Summerlin',
    'Spanish homes Casa Rosa',
    'Casa Rosa Las Vegas real estate',
    'Dr. Jan Duffy Casa Rosa',
    'Casa Rosa community features',
    'luxury homes Casa Rosa',
    'The Vistas Summerlin Casa Rosa'
  ],
  openGraph: {
    title: 'Casa Rosa Community - Spanish-Inspired Elegance in The Vistas Summerlin',
    description: 'Spanish-inspired elegant community featuring luxury homes with private patios and landscaped gardens.',
    url: 'https://www.thevistassummerlin.com/communities/casa-rosa',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/casa-rosa',
  },
};

export default function CasaRosaPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Casa Rosa"
        description="Spanish-inspired elegant community in The Vistas Summerlin featuring luxury homes with private patios and landscaped gardens."
        priceRange="$650,000 - $1,600,000"
        homeCount={20}
        amenities={['Spanish Architecture', 'Private Patios', 'Landscaped Gardens', 'Community Pool', 'Walking Paths', 'Community Center']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Casa Rosa', url: 'https://www.thevistassummerlin.com/communities/casa-rosa' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-rose-900 to-pink-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-sm border border-rose-400/30 rounded-full px-8 py-4 text-rose-200 font-medium mb-8 shadow-lg">
                <Sparkles className="w-6 h-6" />
                <span>✨ Spanish Elegance</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-rose-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                Casa Rosa
                <span className="block text-4xl lg:text-5xl mt-4">Spanish-Inspired Luxury</span>
              </h1>
              
              <p className="text-2xl text-rose-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Casa Rosa, a Spanish-inspired elegant community in The Vistas Summerlin 
                featuring luxury homes with private patios and landscaped gardens.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-rose-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$650K+</div>
                  <div className="text-rose-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-rose-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-rose-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.6</div>
                  <div className="text-rose-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-pink-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">800+</div>
                  <div className="text-rose-200 text-sm">Residents</div>
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
                  Casa Rosa: Spanish-Inspired Elegance
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    Casa Rosa brings the warmth and elegance of Spanish architecture 
                    to The Vistas Summerlin, offering residents luxury living with 
                    private patios and beautifully landscaped gardens.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose Casa Rosa?
                  </h3>
                  
                  <p className="mb-6">
                    Casa Rosa is designed for those who appreciate Spanish-inspired 
                    architecture and elegant outdoor living. This charming community 
                    features homes with private patios, landscaped gardens, and 
                    access to community amenities including pools and walking paths.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in Casa Rosa range from $650,000 to $1.6 million, featuring 
                    Spanish-inspired architecture, private patios, and spacious living 
                    areas. Many properties include landscaped gardens, outdoor kitchens, 
                    and premium finishes throughout.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="Casa Rosa community in The Vistas Summerlin - Spanish-inspired luxury homes with private patios"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "Casa Rosa offers Spanish elegance with modern luxury amenities."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Casa Rosa Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience Spanish-inspired elegance with private patios and landscaped gardens.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Spanish Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elegant Spanish-inspired home designs featuring stucco exteriors, 
                  clay tile roofs, and wrought iron details that evoke Mediterranean charm.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Patios</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intimate private patios perfect for outdoor dining, 
                  relaxation, and entertaining in Spanish style.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landscaped Gardens</h3>
                <p className="text-gray-600 leading-relaxed">
                  Beautifully landscaped gardens with Mediterranean plants, 
                  flowering shrubs, and mature trees throughout the community.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Resort-style community pool with cabanas, spa features, 
                  and professional landscaping for year-round enjoyment.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Walking Paths</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic walking paths winding through landscaped gardens 
                  and community areas for peaceful strolls.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Center</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elegant community center hosting social events, 
                  meetings, and neighborhood gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in Casa Rosa
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in Casa Rosa. Each property offers exceptional value with Spanish-inspired amenities and private patios.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-rose-100">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_LOW" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="650000" 
                price-max="1600000"
              ></realscout-office-listings>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-rose-600 hover:bg-rose-700 transition-colors duration-300 transform hover:scale-105"
              >
                View All Listings on RealScout
              </a>
              <a
                href="tel:+17025000607"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-rose-600 text-base font-medium rounded-full shadow-sm text-rose-600 bg-white hover:bg-rose-50 transition-colors duration-300 transform hover:scale-105"
              >
                Call Dr. Jan Duffy for Personalized Help
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-rose-900 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Experience Casa Rosa Elegance?
            </h2>
            <p className="text-xl text-rose-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Casa Rosa's luxury real estate market 
              with personalized service and expert local knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
