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
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
            Featured Communities
          </h2>
          <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
            Discover some of our most sought-after subcommunities, each offering unique 
            amenities and lifestyle options for every family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredCommunities.map((community) => (
            <div key={community.id} className="bg-white rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
              <div className="relative h-72 bg-light-gray">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-primary font-medium text-white mb-3">
                    {community.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-secondary text-white/90">
                      {community.homesAvailable} Homes Available
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-secondary text-white font-medium">
                        {community.priceRange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-body font-secondary text-text-light mb-6 leading-relaxed">
                  {community.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-primary font-medium text-text-dark mb-4">
                    Community Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {community.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-body font-secondary text-text-light">
                        <svg className="w-5 h-5 text-success-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Link 
                    href={`/communities/${community.id}`}
                    className="flex-1 bg-link-blue text-white text-center py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105"
                  >
                    View Community
                  </Link>
                  <Link 
                    href={`/search?community=${community.id}`}
                    className="flex-1 bg-light-gray text-text-dark text-center py-4 rounded-default text-lg font-secondary font-medium hover:bg-text-light transition-all duration-300 transform hover:scale-105"
                  >
                    View Homes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Communities CTA */}
        <div className="text-center">
          <Link 
            href="/communities"
            className="inline-flex items-center bg-primary-navy text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All 28 Communities
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 