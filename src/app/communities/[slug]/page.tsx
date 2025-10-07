import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Home, 
  DollarSign, 
  Car, 
  GraduationCap, 
  TreePine, 
  UtensilsCrossed,
  ShoppingBag,
  ArrowLeft,
  Star,
  Users,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';
import { neighborhoods, getNeighborhoodBySlug } from '@/constants/neighborhoods';
import { RealScoutWidget } from '@/components/RealScoutWidget';

interface CommunityPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({
    slug: neighborhood.slug,
  }));
}

export async function generateMetadata({ params }: CommunityPageProps): Promise<Metadata> {
  const neighborhood = getNeighborhoodBySlug(params.slug);
  
  if (!neighborhood) {
    return {
      title: 'Community Not Found',
    };
  }

  return {
    title: `${neighborhood.name} Homes for Sale | The Vistas Summerlin | ${neighborhood.priceRange}`,
    description: `${neighborhood.description} in The Vistas Summerlin, Las Vegas. Luxury homes ${neighborhood.priceRange}. Expert real estate services by Dr. Jan Duffy.`,
    keywords: [
      `${neighborhood.name} homes for sale`,
      `${neighborhood.name} real estate`,
      `${neighborhood.name} The Vistas Summerlin`,
      `homes for sale ${neighborhood.name}`,
      `${neighborhood.name} Las Vegas`,
      `The Vistas Summerlin ${neighborhood.name}`,
      `luxury homes ${neighborhood.name}`
    ],
    openGraph: {
      title: `${neighborhood.name} Homes for Sale | The Vistas Summerlin`,
      description: `${neighborhood.description} in The Vistas Summerlin, Las Vegas. Luxury homes ${neighborhood.priceRange}.`,
      images: [`/subcommunities/IMG_0737.JPG`],
    },
    alternates: {
      canonical: `https://www.thevistassummerlin.com/communities/${neighborhood.slug}`,
    },
  };
}

export default function CommunityPage({ params }: CommunityPageProps) {
  const neighborhood = getNeighborhoodBySlug(params.slug);

  if (!neighborhood) {
    notFound();
  }

  const communityData = {
    schools: [
      { name: "Coronado High School", rating: 9, distance: "2.1 miles", type: "Public" },
      { name: "Somerset Academy", rating: 10, distance: "1.8 miles", type: "Charter" },
      { name: "Faith Lutheran Middle & High School", rating: 10, distance: "3.2 miles", type: "Private" }
    ],
    amenities: [
      { name: "Community Pool & Spa", icon: "🏊‍♀️" },
      { name: "Fitness Center", icon: "💪" },
      { name: "Walking Trails", icon: "🥾" },
      { name: "Playground", icon: "🎠" },
      { name: "Clubhouse", icon: "🏛️" },
      { name: "Gated Security", icon: "🔒" }
    ],
    nearby: [
      { name: "Red Rock Casino Resort", distance: "8 minutes", category: "Entertainment" },
      { name: "Downtown Summerlin", distance: "12 minutes", category: "Shopping" },
      { name: "Red Rock Canyon", distance: "15 minutes", category: "Outdoor" },
      { name: "Las Vegas Strip", distance: "25 minutes", category: "Entertainment" },
      { name: "McCarran International Airport", distance: "35 minutes", category: "Transportation" }
    ],
    marketStats: {
      avgPrice: neighborhood.priceRange,
      totalHomes: "45-65 homes",
      yearBuilt: "2018-2024",
      hoaFee: "$150-$300/month"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/communities" className="hover:text-blue-600">Communities</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{neighborhood.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Link 
                href="/communities"
                className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Communities
              </Link>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {neighborhood.name}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                {neighborhood.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-blue-200 mb-8">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" />
                  <span className="font-semibold">{neighborhood.priceRange}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="w-5 h-5" />
                  <span>{communityData.marketStats.totalHomes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Built {communityData.marketStats.yearBuilt}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#properties"
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  View Properties
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Agent
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-96">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Community Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <div className="font-semibold">Luxury Living</div>
                      <div className="text-sm text-blue-200">Premium finishes throughout</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <div className="font-semibold">Prime Location</div>
                      <div className="text-sm text-blue-200">Summerlin, Las Vegas</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <div className="font-semibold">Community Feel</div>
                      <div className="text-sm text-blue-200">Friendly, established neighborhood</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About Section */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">About {neighborhood.name}</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="text-xl leading-relaxed mb-6">
                    {neighborhood.name} represents the pinnacle of luxury living within The Vistas Summerlin community. 
                    This meticulously planned subcommunity offers residents an unparalleled lifestyle experience 
                    with world-class amenities and stunning architectural design.
                  </p>
                  <p className="mb-6">
                    Nestled in the heart of Summerlin, {neighborhood.name} provides easy access to Las Vegas' 
                    finest dining, shopping, and entertainment while maintaining the privacy and tranquility 
                    that luxury homeowners demand. The community features {communityData.marketStats.totalHomes.toLowerCase()} 
                    with homes built between {communityData.marketStats.yearBuilt}, showcasing the latest in 
                    modern luxury living.
                  </p>
                  <p className="mb-6">
                    Residents enjoy a comprehensive amenity package including a state-of-the-art fitness center, 
                    resort-style swimming pools, walking trails, and a beautifully appointed clubhouse. 
                    The community is professionally managed with 24/7 security and meticulously maintained 
                    common areas.
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Community Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {communityData.amenities.map((amenity, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl mb-3">{amenity.icon}</div>
                      <h4 className="font-semibold text-gray-900">{amenity.name}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Attractions */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Nearby Attractions</h3>
                <div className="space-y-4">
                  {communityData.nearby.map((attraction, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{attraction.name}</h4>
                        <p className="text-gray-600">{attraction.category}</p>
                      </div>
                      <div className="text-blue-600 font-semibold">{attraction.distance}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Market Stats */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Average Price</span>
                    <span className="font-semibold text-gray-900">{neighborhood.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Total Homes</span>
                    <span className="font-semibold text-gray-900">{communityData.marketStats.totalHomes}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-semibold text-gray-900">{communityData.marketStats.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">HOA Fee</span>
                    <span className="font-semibold text-gray-900">{communityData.marketStats.hoaFee}</span>
                  </div>
                </div>
              </div>

              {/* Schools */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nearby Schools</h3>
                <div className="space-y-4">
                  {communityData.schools.map((school, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{school.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {school.rating}/10
                        </span>
                        <span>{school.distance}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {school.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Interested in {neighborhood.name}?</h3>
                <p className="text-blue-100 mb-6">
                  Let Dr. Jan Duffy help you find your perfect home in this exclusive community.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call Now
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    Send Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Homes for Sale in {neighborhood.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse current listings in this exclusive community
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <RealScoutWidget 
              listing-status="For Sale"
              property-types="SFR,MF,TC"
              price-min="750000"
              price-max="2500000"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
