'use client';

import Link from 'next/link';

const propertyTypes = [
  {
    id: 'sfr',
    name: 'Single Family Homes',
    description: 'Spacious family homes with private yards and modern amenities',
    priceRange: '$525K - $2.5M',
    count: '350+',
    image: '/subcommunities/Santaluz.jpg',
    features: ['3-6 Bedrooms', '2-4 Bathrooms', '1,800-4,500 sq ft', 'Private Yards']
  },
  {
    id: 'mf',
    name: 'Multi-Family',
    description: 'Townhomes and duplexes perfect for families and investors',
    priceRange: '$450K - $1.2M',
    count: '120+',
    image: '/subcommunities/IMG_0737.JPG',
    features: ['2-4 Bedrooms', '2-3 Bathrooms', '1,200-2,800 sq ft', 'Shared Amenities']
  },
  {
    id: 'tc',
    name: 'Townhomes & Condos',
    description: 'Low-maintenance living with community amenities',
    priceRange: '$400K - $900K',
    count: '80+',
    image: '/subcommunities/IMG_0738.JPG',
    features: ['1-3 Bedrooms', '1-2 Bathrooms', '800-2,200 sq ft', 'Community Pools']
  }
];

export default function PropertyCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-primary font-medium text-text-dark mb-4">
            Find Your Perfect Property Type
          </h2>
          <p className="text-body font-secondary text-text-light max-w-2xl mx-auto">
            From spacious single-family homes to convenient townhomes, discover the diverse 
            property options available across our 28 subcommunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((property) => (
            <div key={property.id} className="bg-white rounded-default shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-light-gray">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-h3 font-primary font-medium text-white mb-1">
                    {property.name}
                  </h3>
                  <p className="text-nav font-secondary text-white/90">
                    {property.count} Available
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-body font-secondary text-text-light mb-4">
                  {property.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-h3 font-primary font-medium text-link-blue mb-1">
                    {property.priceRange}
                  </div>
                  <div className="text-sm font-secondary text-text-light">
                    Price Range
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-body font-primary font-medium text-text-dark mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm font-secondary text-text-light">
                        <svg className="w-4 h-4 text-success-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={`/search?property-type=${property.id}`}
                  className="block w-full bg-link-blue text-white text-center py-3 rounded-default text-body font-secondary font-medium hover:bg-primary-navy transition-colors duration-300"
                >
                  View {property.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Search Widget */}
        <div className="mt-16 bg-light-gray p-8 rounded-default">
          <div className="text-center mb-8">
            <h3 className="text-h3 font-primary font-medium text-text-dark mb-4">
              Search All Properties
            </h3>
            <p className="text-body font-secondary text-text-light">
              Use our advanced search to find properties that match your specific criteria
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <realscout-advanced-search 
              agent-encoded-id="QWdlbnQtMjI1MDUw"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 