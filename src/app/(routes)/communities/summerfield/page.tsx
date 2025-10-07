import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp, Phone, Mail, Calendar, Bed, Bath, Square, DollarSign } from 'lucide-react';
import { CommunitySchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Summerfield Community - Summer Living in The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Discover Summerfield, a summer living community in The Vistas Summerlin featuring luxury homes with family amenities and community events. Expert real estate guidance from Dr. Jan Duffy.',
  keywords: [
    'Summerfield The Vistas Summerlin',
    'summer homes Summerfield',
    'Summerfield Las Vegas real estate',
    'Dr. Jan Duffy Summerfield',
    'Summerfield community features',
    'luxury homes Summerfield',
    'The Vistas Summerlin Summerfield'
  ],
  openGraph: {
    title: 'Summerfield Community - Summer Living in The Vistas Summerlin',
    description: 'Summer living community featuring luxury homes with family amenities and community events.',
    url: 'https://www.thevistassummerlin.com/communities/summerfield',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/summerfield',
  },
};

export default function SummerfieldPage() {
  return (
    <>
      {/* Structured Data */}
      <CommunitySchema 
        communityName="Summerfield"
        description="Summer living community in The Vistas Summerlin featuring luxury homes with family amenities and community events."
        priceRange="$500,000 - $1,200,000"
        homeCount={28}
        amenities={['Summer Activities', 'Community Pool', 'Playground', 'Walking Trails', 'Community Events', 'Family Amenities']}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Communities', url: 'https://www.thevistassummerlin.com/communities' },
        { name: 'Summerfield', url: 'https://www.thevistassummerlin.com/communities/summerfield' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-8 py-4 text-yellow-200 font-medium mb-8 shadow-lg">
                <Sparkles className="w-6 h-6" />
                <span>☀️ Summer Living</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
                Summerfield
                <span className="block text-4xl lg:text-5xl mt-4">Summer Living</span>
              </h1>
              
              <p className="text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover Summerfield, a summer living community in The Vistas Summerlin 
                featuring luxury homes with family amenities and community events.
              </p>

              {/* Community Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$500K+</div>
                  <div className="text-yellow-200 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Home className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">28+</div>
                  <div className="text-yellow-200 text-sm">Homes Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4.6</div>
                  <div className="text-yellow-200 text-sm">Community Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-orange-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">1,100+</div>
                  <div className="text-yellow-200 text-sm">Residents</div>
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
                  Summerfield: Summer Living Paradise
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-xl mb-6">
                    Summerfield brings the joy of summer living to The Vistas Summerlin, 
                    featuring luxury homes with family amenities and a vibrant 
                    community atmosphere perfect for year-round enjoyment.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Why Choose Summerfield?
                  </h3>
                  
                  <p className="mb-6">
                    Summerfield is designed for families who appreciate summer activities 
                    and community spirit. This welcoming community features homes with 
                    family amenities, community pools, and access to playgrounds and 
                    walking trails perfect for active families.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    Luxury Homes & Features
                  </h3>
                  
                  <p className="mb-6">
                    Homes in Summerfield range from $500,000 to $1.2 million, featuring 
                    family-friendly designs, spacious layouts, and outdoor living areas. 
                    Many properties include private yards, community pool access, and 
                    premium finishes throughout.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/subcommunities/IMG_0737.JPG"
                    alt="Summerfield community in The Vistas Summerlin - summer living luxury homes with family amenities"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                    priority
                  />
                  <div className="mt-6 text-center">
                    <p className="text-gray-600 italic">
                      "Summerfield offers summer living with family amenities and community spirit."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Summerfield Community Amenities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience summer living with family amenities and community events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Summer Activities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Year-round summer activities including pool parties, 
                  outdoor events, and seasonal celebrations for all ages.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Pool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Family-friendly community pool with shallow areas for children 
                  and shaded seating areas for parents to relax.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Playground</h3>
                <p className="text-gray-600 leading-relaxed">
                  Safe, modern playground equipment designed for children 
                  of all ages with soft surfacing and shade structures.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Walking Trails</h3>
                <p className="text-gray-600 leading-relaxed">
                  Scenic walking trails winding through community areas 
                  and landscaped spaces perfect for family strolls.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular community events including summer festivals, 
                  holiday celebrations, and neighborhood gatherings.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Amenities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Family-focused amenities including picnic areas, 
                  sports courts, and community gathering spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Current Luxury Homes for Sale in Summerfield
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Discover our curated selection of luxury homes in Summerfield. Each property offers exceptional value with summer amenities and family features.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-yellow-100">
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
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-300 transform hover:scale-105"
              >
                View All Listings on RealScout
              </a>
              <a
                href="tel:+17025000607"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-600 text-base font-medium rounded-full shadow-sm text-yellow-600 bg-white hover:bg-yellow-50 transition-colors duration-300 transform hover:scale-105"
              >
                Call Dr. Jan Duffy for Personalized Help
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Experience Summer Living in Summerfield?
            </h2>
            <p className="text-xl text-yellow-100 mb-12 max-w-3xl mx-auto">
              Let Dr. Jan Duffy guide you through Summerfield's luxury real estate market 
              with personalized service and expert local knowledge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-yellow-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
