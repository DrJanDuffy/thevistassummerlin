'use client';

import Link from 'next/link';

export default function AboutContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-h2 font-primary font-medium text-text-dark mb-6">
              About The Vistas Summerlin
            </h2>
            <p className="text-body font-secondary text-text-light mb-6">
              The Vistas Summerlin is one of Las Vegas' most prestigious residential areas, 
              featuring 28 unique subcommunities that offer diverse housing options from 
              luxury estates to family-friendly homes.
            </p>
            <p className="text-body font-secondary text-text-light mb-6">
              Our community is known for its stunning mountain views, world-class amenities, 
              top-rated schools, and convenient access to shopping, dining, and entertainment. 
              Whether you're looking for a peaceful retreat or an active lifestyle, 
              The Vistas Summerlin has something for everyone.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-primary font-medium text-link-blue mb-2">28</div>
                <div className="text-sm font-secondary text-text-light">Subcommunities</div>
              </div>
              <div>
                <div className="text-3xl font-primary font-medium text-success-green mb-2">500+</div>
                <div className="text-sm font-secondary text-text-light">Homes Available</div>
              </div>
              <div>
                <div className="text-3xl font-primary font-medium text-primary-navy mb-2">15+</div>
                <div className="text-sm font-secondary text-text-light">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-primary font-medium text-link-blue mb-2">98%</div>
                <div className="text-sm font-secondary text-text-light">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about"
                className="bg-link-blue text-white px-6 py-3 rounded-default text-body font-secondary font-medium hover:bg-primary-navy transition-colors duration-300 text-center"
              >
                Learn More About Us
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-link-blue text-link-blue px-6 py-3 rounded-default text-body font-secondary font-medium hover:bg-link-blue hover:text-white transition-colors duration-300 text-center"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
          
          <div className="bg-light-gray p-8 rounded-default">
            <h3 className="text-h3 font-primary font-medium text-text-dark mb-6">
              Why Choose The Vistas Summerlin?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-body font-primary font-medium text-text-dark mb-2">
                    Prime Location
                  </h4>
                  <p className="text-sm font-secondary text-text-light">
                    Conveniently located with easy access to the Strip, Red Rock Canyon, 
                    and all major amenities while maintaining a peaceful residential atmosphere.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-body font-primary font-medium text-text-dark mb-2">
                    Investment Value
                  </h4>
                  <p className="text-sm font-secondary text-text-light">
                    Strong appreciation rates and consistent demand make The Vistas Summerlin 
                    an excellent long-term investment opportunity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-body font-primary font-medium text-text-dark mb-2">
                    Quality Homes
                  </h4>
                  <p className="text-sm font-secondary text-text-light">
                    Well-maintained properties with modern amenities, energy efficiency, 
                    and thoughtful design throughout all subcommunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-body font-primary font-medium text-text-dark mb-2">
                    Strong Community
                  </h4>
                  <p className="text-sm font-secondary text-text-light">
                    Active homeowners associations, community events, and friendly neighbors 
                    create a welcoming environment for families and individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 