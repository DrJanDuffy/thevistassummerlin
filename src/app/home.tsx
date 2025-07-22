'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import MarketDataSection from '@/components/sections/market-data';
import BlogPosts from '@/components/sections/blog-posts';
import AboutContent from '@/components/sections/about-content';
import Footer from '@/components/sections/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home'); // Example state for navigation

  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <HomeEvaluationSection />
        <PropertyCategories />
        <FeaturedCommunities />
        <MarketDataSection />
        <BlogPosts />
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
} 