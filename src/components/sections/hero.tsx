'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-navy via-primary-navy to-link-blue text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-primary font-light mb-8 leading-tight">
            Discover Your Perfect Home in
            <span className="block font-medium mt-2">The Vistas Summerlin</span>
          </h1>
          
          <p className="text-xl lg:text-2xl font-secondary mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Explore 28 vibrant subcommunities in one of Las Vegas&apos; most prestigious areas. 
            Get instant home valuations, market insights, and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              href="/valuation" 
              className="bg-white text-primary-navy px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-light-gray transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Home Value
            </Link>
            
            <Link 
              href="/communities" 
              className="border-2 border-white text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-white hover:text-primary-navy transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Communities
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-primary font-medium mb-3">28</div>
              <div className="text-lg font-secondary opacity-90">Subcommunities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-primary font-medium mb-3">500+</div>
              <div className="text-lg font-secondary opacity-90">Homes Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-primary font-medium mb-3">$525K+</div>
              <div className="text-lg font-secondary opacity-90">Starting Prices</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-24 h-24 border border-white opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 border border-white opacity-20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white opacity-15 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-white opacity-10 rounded-full animate-pulse delay-1500"></div>
      </div>
    </section>
  );
} 