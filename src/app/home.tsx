'use client';

import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <HomeEvaluationSection />
        <PropertyCategories />
        <FeaturedCommunities />
        
        {/* Quick Links Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Explore The Vistas Summerlin
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Discover everything The Vistas Summerlin has to offer through our comprehensive resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <a 
                href="/communities"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-navy transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Communities
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Explore all 28 unique subcommunities
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  View Communities →
                </span>
              </a>

              <a 
                href="/search"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-link-blue transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Property Search
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Find your perfect home
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  Start Searching →
                </span>
              </a>

              <a 
                href="/market-analysis"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-link-blue transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Market Analysis
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Get detailed market insights
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  View Analysis →
                </span>
              </a>

              <a 
                href="/investment"
                className="bg-white p-8 rounded-default shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-navy transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Investment
                </h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Discover investment opportunities
                </p>
                <span className="text-link-blue font-secondary font-medium group-hover:text-primary-navy transition-colors">
                  Learn More →
                </span>
              </a>
            </div>
          </div>
        </section>

        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
} 