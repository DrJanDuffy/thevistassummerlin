import React from 'react';
import Link from "next/link";
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import CommunityHeroImage from "@/components/CommunityHeroImage";
import CommunitySpotlight from "@/components/CommunitySpotlight";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative w-full">
        <CommunityHeroImage 
          name="The Vistas Summerlin" 
          imgSrc="/subcommunities/IMG_0737.JPG"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Welcome to <span className="text-blue-300">The Vistas Summerlin</span>
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
            Discover your perfect home in one of 28 vibrant subcommunities. Explore local market insights, community events, and the best of Summerlin living—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/search"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Search Homes
            </Link>
            <Link
              href="/communities"
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-full text-lg shadow-lg border-2 border-transparent transition-all duration-300 transform hover:scale-105"
            >
              Explore Communities
            </Link>
          </div>
        </CommunityHeroImage>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why The Vistas Summerlin?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A perfect blend of luxury, convenience, and community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🏘️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">28 Subcommunities</h3>
              <p className="text-gray-600">Unique neighborhoods for every lifestyle.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top-Rated Schools</h3>
              <p className="text-gray-600">Excellence in education at your doorstep.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🌳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Parks & Recreation</h3>
              <p className="text-gray-600">Abundant outdoor spaces and modern facilities.</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Local Insights</h3>
              <p className="text-gray-600">Your trusted real estate advisors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Spotlight Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Community Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know the unique character of our featured communities.
            </p>
          </div>
          <CommunitySpotlight />
        </div>
      </section>


      {/* Featured Listings Section */}
      <section id="featured-listings" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Listings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover some of the most sought-after homes in The Vistas Summerlin.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <RealScoutOfficeListings />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through every step of your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Searching
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full text-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
