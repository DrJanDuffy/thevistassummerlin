'use client';

import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import BlogPosts from '@/components/sections/blog-posts';
import Footer from '@/components/sections/footer';
import { ArrowRight } from 'lucide-react';

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
        
        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-accent-blue relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <span>Client Testimonials</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight">
                What Our Clients Say
                <span className="block text-secondary-gold">About Us</span>
              </h2>
              
              <p className="text-xl lg:text-2xl font-secondary font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
                Discover why families choose The Vistas Summerlin for their dream homes
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah & Michael Johnson",
                  location: "Santaluz Community",
                  rating: 5,
                  text: "Working with The Vistas Summerlin team was an exceptional experience. They helped us find our dream home in Santaluz and made the entire process seamless.",
                  image: "/subcommunities/IMG_0737.JPG"
                },
                {
                  name: "David Chen",
                  location: "Red Rock Canyon",
                  rating: 5,
                  text: "The market insights and community knowledge provided by this team is unmatched. They truly understand luxury real estate in Las Vegas.",
                  image: "/subcommunities/IMG_0738.JPG"
                },
                {
                  name: "Lisa Rodriguez",
                  location: "Summerlin Park",
                  rating: 5,
                  text: "From initial consultation to closing, the professionalism and attention to detail exceeded our expectations. Highly recommended!",
                  image: "/subcommunities/IMG_0739.JPG"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-secondary-gold fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-white/90 font-secondary leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary-gold rounded-full flex items-center justify-center">
                      <span className="text-primary-navy font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/70 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-primary font-bold text-white mb-4">
                  Ready to Find Your Dream Home?
                </h3>
                <p className="text-white/90 font-secondary mb-6 leading-relaxed">
                  Join hundreds of satisfied families who call The Vistas Summerlin home
                </p>
                <Link 
                  href="/contact"
                  className="btn-gold inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 