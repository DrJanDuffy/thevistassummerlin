'use client';

import Link from 'next/link';

const featuredCommunities = [
  {
    id: 'santaluz',
    name: 'Santaluz',
    description: 'Luxury homes with mountain views and resort-style amenities',
    priceRange: '$800K - $2.5M',
    homesAvailable: 12,
    image: '/subcommunities/Santaluz.jpg',
    features: ['Mountain Views', 'Resort Pool', 'Golf Course', 'Hiking Trails']
  },
  {
    id: 'red-rock',
    name: 'Red Rock Canyon',
    description: 'Stunning homes with panoramic views of the iconic Red Rock Canyon',
    priceRange: '$650K - $1.8M',
    homesAvailable: 8,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Canyon Views', 'Private Patios', 'Modern Design', 'Community Center']
  },
  {
    id: 'summerlin-park',
    name: 'Summerlin Park',
    description: 'Family-friendly community with parks, schools, and shopping nearby',
    priceRange: '$525K - $1.2M',
    homesAvailable: 25,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Parks & Playgrounds', 'Top Schools', 'Shopping Center', 'Walking Trails']
  }
];

export default function FeaturedCommunities() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-primary font-medium text-text-dark mb-4">
            Featured Communities
          </h2>
          <p className="text-body font-secondary text-text-light max-w-2xl mx-auto">
            Discover some of our most sought-after subcommunities, each offering unique 
            amenities and lifestyle options for every family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCommunities.map((community) => (
            <div key={community.id} className="bg-white rounded-default shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 bg-light-gray">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-h3 font-primary font-medium text-white mb-2">
                    {community.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-nav font-secondary text-white/90">
                      {community.homesAvailable} Homes Available
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-secondary text-white">
                        {community.priceRange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-body font-secondary text-text-light mb-4">
                  {community.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-body font-primary font-medium text-text-dark mb-3">
                    Community Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {community.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm font-secondary text-text-light">
                        <svg className="w-4 h-4 text-success-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link 
                    href={`/communities/${community.id}`}
                    className="flex-1 bg-link-blue text-white text-center py-3 rounded-default text-body font-secondary font-medium hover:bg-primary-navy transition-colors duration-300"
                  >
                    View Community
                  </Link>
                  <Link 
                    href={`/search?community=${community.id}`}
                    className="flex-1 bg-light-gray text-text-dark text-center py-3 rounded-default text-body font-secondary font-medium hover:bg-text-light transition-colors duration-300"
                  >
                    View Homes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Communities CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/communities"
            className="inline-flex items-center bg-primary-navy text-white px-8 py-4 rounded-default text-body font-secondary font-medium hover:bg-link-blue transition-colors duration-300"
          >
            View All 28 Communities
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 