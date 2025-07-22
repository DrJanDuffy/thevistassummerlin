'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-navy to-link-blue text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-h1 font-primary font-medium mb-6 leading-tight">
            Discover Your Perfect Home in
            <span className="block text-4xl lg:text-6xl font-light">The Vistas Summerlin</span>
          </h1>
          
          <p className="text-body font-secondary text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Explore 28 vibrant subcommunities in one of Las Vegas&apos; most prestigious areas. 
            Get instant home valuations, market insights, and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/valuation" 
              className="bg-white text-primary-navy px-8 py-4 rounded-default text-body font-secondary font-medium hover:bg-light-gray transition-colors duration-300 shadow-card"
            >
              Get Your Home Value
            </Link>
            
            <Link 
              href="/communities" 
              className="border-2 border-white text-white px-8 py-4 rounded-default text-body font-secondary font-medium hover:bg-white hover:text-primary-navy transition-colors duration-300"
            >
              Explore Communities
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-primary font-medium mb-2">28</div>
              <div className="text-nav font-secondary opacity-80">Subcommunities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-primary font-medium mb-2">500+</div>
              <div className="text-nav font-secondary opacity-80">Homes Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-primary font-medium mb-2">$525K+</div>
              <div className="text-nav font-secondary opacity-80">Starting Prices</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white opacity-20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-white opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white opacity-15 rounded-full"></div>
      </div>
    </section>
  );
} 