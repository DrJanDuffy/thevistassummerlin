import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Home, DollarSign, Star, ArrowRight } from 'lucide-react';
import { neighborhoods } from '@/constants/neighborhoods';
import { RealScoutWidget } from '@/components/RealScoutWidget';

export const metadata: Metadata = {
  title: "The Vistas Summerlin Communities | 28 Luxury Subcommunities",
  description: "Explore all 28 luxury subcommunities in The Vistas Summerlin, Las Vegas. Find your perfect home in Barrington, Kingwood, Santalina, Bella Vista, and more exclusive neighborhoods.",
  keywords: [
    "The Vistas Summerlin communities",
    "Vistas subcommunities",
    "Summerlin neighborhoods",
    "luxury homes Las Vegas",
    "Barrington homes",
    "Kingwood real estate",
    "Bella Vista properties"
  ],
  openGraph: {
    title: "The Vistas Summerlin Communities | 28 Luxury Subcommunities",
    description: "Explore all 28 luxury subcommunities in The Vistas Summerlin, Las Vegas. Find your perfect home in exclusive neighborhoods.",
    images: ["/subcommunities/IMG_0737.JPG"],
  },
};

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              28 Luxury Communities
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Each subcommunity in The Vistas Summerlin offers unique character, amenities, and lifestyle opportunities. 
            Find your perfect luxury home in Las Vegas' most prestigious residential development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-blue-200">
            <div className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>28 Subcommunities</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Summerlin, Las Vegas</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5" />
              <span>$750K - $2.5M+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each community offers distinct architectural styles, amenities, and price points to match your lifestyle and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <Link
                key={neighborhood.slug}
                href={`/communities/${neighborhood.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-300/50">
                      {index + 1}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    {neighborhood.priceRange}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {neighborhood.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {neighborhood.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="text-sm">Explore Community</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Current Properties Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our current listings across all communities in The Vistas Summerlin
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

      {/* Community Comparison CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our local experts know each community intimately. Let us help you find the perfect neighborhood for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Schedule Community Tour
            </Link>
            <Link
              href="/market-analysis"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Star className="w-5 h-5 mr-2" />
              Market Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
