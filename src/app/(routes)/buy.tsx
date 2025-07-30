'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import RealScoutSimpleSearch from '@/components/RealScoutSimpleSearch';
import Link from 'next/link';

export default function Buy() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
              Buy in The Vistas
            </h1>
            <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect home in one of 28 vibrant subcommunities in The Vistas Summerlin
            </p>
          </div>
        </section>

        {/* Quick Search Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Find Your Dream Home
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto">
                Start your search with our advanced property finder
              </p>
            </div>
            
            <RealScoutAdvancedSearch />
          </div>
        </section>

        {/* Quick Search Options */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Explore by Category
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto">
                Browse properties by type, price range, or community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Single Family Homes */}
              <div className="bg-light-gray p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4 text-center">
                  Single Family Homes
                </h3>
                <p className="text-body font-secondary text-text-light mb-6 text-center">
                  Spacious homes perfect for families
                </p>
                <Link 
                  href="/search?type=single-family"
                  className="block w-full text-center bg-link-blue text-white px-6 py-3 rounded-default text-nav font-secondary hover:bg-primary-navy transition-colors duration-300"
                >
                  View Homes
                </Link>
              </div>

              {/* Condos & Townhomes */}
              <div className="bg-light-gray p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4 text-center">
                  Condos & Townhomes
                </h3>
                <p className="text-body font-secondary text-text-light mb-6 text-center">
                  Low-maintenance living options
                </p>
                <Link 
                  href="/search?type=condo-townhome"
                  className="block w-full text-center bg-success-green text-white px-6 py-3 rounded-default text-nav font-secondary hover:bg-link-blue transition-colors duration-300"
                >
                  View Properties
                </Link>
              </div>

              {/* Luxury Homes */}
              <div className="bg-light-gray p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4 text-center">
                  Luxury Homes
                </h3>
                <p className="text-body font-secondary text-text-light mb-6 text-center">
                  Premium properties with exceptional amenities
                </p>
                <Link 
                  href="/search?type=luxury"
                  className="block w-full text-center bg-primary-navy text-white px-6 py-3 rounded-default text-nav font-secondary hover:bg-link-blue transition-colors duration-300"
                >
                  View Luxury
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Preview */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Explore Our Communities
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto">
                Each of our 28 subcommunities offers unique character and amenities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Altessa", "Barrington", "Canterra", "Encanto", "Hillstone", "Miraleste", "Palmilla", "Sage Hills"].map((community) => (
                <Link
                  key={community}
                  href={`/communities/${community.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white p-6 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
                >
                  <h3 className="text-lg font-primary font-medium text-text-dark mb-2 group-hover:text-link-blue transition-colors">
                    {community}
                  </h3>
                  <p className="text-sm font-secondary text-text-light">
                    View properties in {community}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/communities"
                className="bg-link-blue text-white px-8 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All 28 Communities
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto mb-12">
              Let us help you navigate the buying process with expert guidance and local insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-link-blue text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Expert Guidance
              </Link>
              <Link
                href="/market-reports"
                className="border-2 border-link-blue text-link-blue px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Market Reports
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 