'use client';

import Link from 'next/link';

export default function AboutContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-8">
              About The Vistas Summerlin
            </h2>
            <p className="text-xl font-secondary text-text-light mb-6 leading-relaxed">
              The Vistas Summerlin is one of Las Vegas&apos; most prestigious residential areas, 
              featuring 28 unique subcommunities that offer diverse housing options from 
              luxury estates to family-friendly homes.
            </p>
            <p className="text-xl font-secondary text-text-light mb-8 leading-relaxed">
              Our community is known for its stunning mountain views, world-class amenities, 
              top-rated schools, and convenient access to shopping, dining, and entertainment. 
              Whether you&apos;re looking for a peaceful retreat or an active lifestyle, 
              The Vistas Summerlin has something for everyone.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-link-blue mb-3">28</div>
                <div className="text-lg font-secondary text-text-light">Subcommunities</div>
              </div>
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-success-green mb-3">500+</div>
                <div className="text-lg font-secondary text-text-light">Homes Available</div>
              </div>
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-primary-navy mb-3">15+</div>
                <div className="text-lg font-secondary text-text-light">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-link-blue mb-3">98%</div>
                <div className="text-lg font-secondary text-text-light">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/about"
                className="bg-link-blue text-white px-8 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 text-center transform hover:scale-105"
              >
                Learn More About Us
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-link-blue text-link-blue px-8 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue hover:text-white transition-all duration-300 text-center transform hover:scale-105"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
          
          <div className="bg-light-gray p-10 rounded-default">
            <h3 className="text-2xl font-primary font-medium text-text-dark mb-8">
              Why Choose The Vistas Summerlin?
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-link-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-primary font-medium text-text-dark mb-3">
                    Prime Location
                  </h4>
                  <p className="text-body font-secondary text-text-light leading-relaxed">
                    Conveniently located with easy access to the Strip, Red Rock Canyon, 
                    and all major amenities while maintaining a peaceful residential atmosphere.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-success-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-primary font-medium text-text-dark mb-3">
                    Investment Value
                  </h4>
                  <p className="text-body font-secondary text-text-light leading-relaxed">
                    Strong appreciation rates and consistent demand make The Vistas Summerlin 
                    an excellent long-term investment opportunity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-primary-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-primary font-medium text-text-dark mb-3">
                    Quality Homes
                  </h4>
                  <p className="text-body font-secondary text-text-light leading-relaxed">
                    Well-maintained properties with modern amenities, energy efficiency, 
                    and thoughtful design throughout all subcommunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-link-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-primary font-medium text-text-dark mb-3">
                    Strong Community
                  </h4>
                  <p className="text-body font-secondary text-text-light leading-relaxed">
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