import React from 'react';
import Link from "next/link";
import { Home as HomeIcon, School, Trees, UserCheck } from 'lucide-react';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import CommunityHeroImage from "@/components/CommunityHeroImage";
import CommunitySpotlight from "@/components/CommunitySpotlight";
import Testimonials from "@/components/Testimonials";
import AnimatedSection from "@/components/AnimatedSection";

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
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Why The Vistas Summerlin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a perfect blend of luxury, convenience, and vibrant community life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="group text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <HomeIcon className="h-12 w-12 text-blue-600 mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">28 Subcommunities</h3>
              <p className="text-gray-600 leading-relaxed">Find your perfect fit among unique neighborhoods, each with its own character and charm.</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="group text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-2xl hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <School className="h-12 w-12 text-green-600 mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Top-Rated Schools</h3>
              <p className="text-gray-600 leading-relaxed">Access to some of the best public and private schools, ensuring excellence in education.</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="group text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-2xl hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <Trees className="h-12 w-12 text-purple-600 mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Parks & Recreation</h3>
              <p className="text-gray-600 leading-relaxed">Enjoy abundant outdoor spaces, community pools, and modern recreational facilities.</p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="group text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-2xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <UserCheck className="h-12 w-12 text-orange-600 mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Local Insights</h3>
              <p className="text-gray-600 leading-relaxed">Leverage our deep market knowledge and get trusted advice from real estate professionals.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Community Spotlight Section */}
      <AnimatedSection className="py-20 bg-gray-50">
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
      </AnimatedSection>


      {/* Featured Listings Section */}
      <AnimatedSection id="featured-listings" className="py-16 bg-white">
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
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
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
      </AnimatedSection>
    </div>
  );
}
