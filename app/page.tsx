"use client";
import Image from "next/image";
import Link from "next/link";
import { PropertyFilter } from '@/components/PropertyFilter';
import { RealScoutWidget } from '@/components/RealScoutWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-blue-600">The Vistas</span>
              <br />
              <span className="text-green-600">Summerlin</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover your perfect home in one of 28 vibrant subcommunities. 
              Experience the best of Summerlin living with modern amenities, 
              top-rated schools, and a thriving community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#property-search"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Search
              </a>
              <Link
                href="/communities"
                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-full text-lg shadow-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Communities
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full max-w-5xl mx-auto">
            <Image
              src="https://placehold.co/1200x600/0A2540/FFF?text=The+Vistas+Summerlin+Community"
              alt="The Vistas Summerlin Community Overview"
              width={1200}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose The Vistas Summerlin?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of luxury, convenience, and community in one of Las Vegas&apos; most desirable locations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">28</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Subcommunities</h3>
              <p className="text-gray-600">Unique neighborhoods to match every lifestyle</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Schools</h3>
              <p className="text-gray-600">Excellence in education for all ages</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Parks & Amenities</h3>
              <p className="text-gray-600">Beautiful outdoor spaces and modern facilities</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Local real estate expertise and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search Section */}
      <section id="property-search" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find Your Dream Home
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use our advanced search tools to discover properties that match your criteria and lifestyle.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PropertyFilter />
            <RealScoutWidget />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover some of the most sought-after homes in The Vistas Summerlin.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured properties */}
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600">Featured properties will be displayed here</p>
            </div>
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
            Join thousands of families who have found their dream home in The Vistas Summerlin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/communities"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Communities
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full text-lg border-2 border-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
