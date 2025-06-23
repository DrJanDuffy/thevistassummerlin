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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full">
        <CommunityHeroImage 
          name="The Vistas Summerlin" 
          imgSrc="/subcommunities/IMG_0737.JPG"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg font-heading">
            Welcome to <span className="text-accent">The Vistas Summerlin</span>
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
            Discover your perfect home in one of 28 vibrant subcommunities. Explore local market insights, community events, and the best of Summerlin living—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/search"
              className="bg-accent hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Search Homes
            </Link>
            <Link
              href="/communities"
              className="bg-background hover:bg-secondary text-primary font-bold py-4 px-10 rounded-full text-lg shadow-lg border-2 border-transparent transition-all duration-300 transform hover:scale-105"
            >
              Explore Communities
            </Link>
          </div>
        </CommunityHeroImage>
      </section>

      {/* Why Choose Section */}
      <AnimatedSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Why The Vistas Summerlin?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Experience a perfect blend of luxury, convenience, and vibrant community life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <HomeIcon className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">28 Subcommunities</h3>
              <p className="text-foreground/80 leading-relaxed">Find your perfect fit among unique neighborhoods, each with its own character and charm.</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <School className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Top-Rated Schools</h3>
              <p className="text-foreground/80 leading-relaxed">Access to some of the best public and private schools, ensuring excellence in education.</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <Trees className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Parks & Recreation</h3>
              <p className="text-foreground/80 leading-relaxed">Enjoy abundant outdoor spaces, community pools, and modern recreational facilities.</p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-transparent hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                <UserCheck className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Expert Local Insights</h3>
              <p className="text-foreground/80 leading-relaxed">Leverage our deep market knowledge and get trusted advice from real estate professionals.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Community Spotlight Section */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Community Spotlight
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Get to know the unique character of our featured communities.
            </p>
          </div>
          <CommunitySpotlight />
        </div>
      </AnimatedSection>


      {/* Featured Listings Section */}
      <AnimatedSection id="featured-listings" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Featured Listings
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
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
      <AnimatedSection className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through every step of your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="bg-accent hover:bg-opacity-90 text-accent-foreground font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Searching
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground font-bold py-4 px-10 rounded-full text-lg border-2 border-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
