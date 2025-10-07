import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Encanto Community - Charming Living in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Encanto, a charming community in The Vistas Summerlin featuring luxury homes with community gardens and family-friendly amenities. Expert real estate guidance from Dr. Jan Duffy.',
  keywords: [
    'Encanto The Vistas Summerlin',
    'charming homes Encanto',
    'Encanto Las Vegas real estate',
    'Dr. Jan Duffy Encanto',
    'Encanto community features',
    'luxury homes Encanto',
    'The Vistas Summerlin Encanto'
  ],
  openGraph: {
    title: 'Encanto Community - Charming Living in The Vistas Summerlin',
    description: 'Charming community featuring luxury homes with community gardens and family-friendly amenities.',
    url: 'https://www.thevistassummerlin.com/communities/encanto',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/encanto',
  },
};

export default function EncantoPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Encanto"
        description="Charming community in The Vistas Summerlin featuring luxury homes with community gardens and family-friendly amenities."
        priceRange="$500,000 - $1,100,000"
        homeCount={28}
        amenities={['Charming Architecture', 'Community Gardens', 'Pool Area', 'Playground', 'Walking Trails', 'Community Events']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Encanto', url: 'https://www.thevistassummerlin.com/communities/encanto' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-8 py-4 text-teal-200 font-medium mb-8 shadow-lg">
                <Sparkles className="w-6 h-6" />
                <span>✨ Charming Living</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Encanto
                <span className="block text-4xl lg:text-5xl mt-4">Charming Community</span>
              </h1>
              
              <p className="text-2xl text-teal-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Encanto, a charming community in The Vistas Summerlin 
                featuring luxury homes with community gardens and family-friendly amenities.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-teal-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$500K+</div>
                  <div className="text-teal-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-teal-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">28+</div>
                  <div className="text-teal-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.5</div>
                  <div className="text-teal-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">1,200+</div>
                  <div className="text-teal-200 text-sm">Residents</div>
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
                  Encanto: Charming Community Living
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    Encanto brings charm and warmth to The Vistas Summerlin, 
                    offering residents luxury living with community gardens 
                    and family-friendly amenities.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose Encanto?
                  </h3>
                  
                  <p className="mb-6">
                    Encanto is designed for families who appreciate charming 
                    architecture and community spirit. This welcoming community 
                    features homes with character, community gardens, and 
                    access to family-friendly amenities including playgrounds.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in Encanto range from $500,000 to $1.1 million, featuring 
                    charming architecture, spacious layouts, and family-friendly 
                    designs. Many properties include private yards, community garden 
                    access, and modern amenities throughout.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="Encanto community in The Vistas Summerlin - charming luxury homes with community gardens"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "Encanto offers charming living with community spirit and family amenities."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Encanto Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience charming community living with gardens and family-friendly amenities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Charming Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Delightful home designs featuring character details, 
                  varied rooflines, and welcoming front porches.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Gardens</h3>
                <p className="text-gray-600 leading-relaxed">
                  Shared community gardens where residents can grow 
                  vegetables, herbs, and flowers together.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pool Area</h3>
                <p className="text-gray-600 leading-relaxed">
                  Family-friendly pool area with shallow sections for children 
                  and shaded seating areas for parents.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Playground</h3>
                <p className="text-gray-600 leading-relaxed">
                  Safe, modern playground equipment designed for children 
                  of all ages with soft surfacing and shade.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Walking Trails</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic walking trails winding through gardens and 
                  community areas perfect for family strolls.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular community events including garden parties, 
                  holiday celebrations, and neighborhood gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in Encanto
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in Encanto. Each property offers exceptional value with charming amenities and community gardens.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-teal-100">
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="PRICE_LOW" 
                listing-status="For Sale" 
                property-types=",SFR" 
                price-min="500000" 
                price-max="1100000"
              ></realscout-office-listings>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://drjanduffy.realscout.com/homesearch/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105"
              >
                View All Listings on RealScout
              </a>
              <a
                href="tel:+17025000607"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-base font-medium rounded-full shadow-sm text-teal-600 bg-white hover:bg-teal-50 transition-colors duration-300 transform hover:scale-105"
              >
                Call Dr. Jan Duffy for Personalized Help
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Find Your Charming Home in Encanto?
            </h2>
            <p className="text-xl text-teal-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Encanto's luxury real estate market 
              with personalized service and expert local knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
