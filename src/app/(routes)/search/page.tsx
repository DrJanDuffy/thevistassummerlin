import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Property Search - Find Your Perfect Home in The Vistas Summerlin',
  description: 'Search luxury homes for sale in The Vistas Summerlin with advanced filters. Find your dream home from $800K-$2.5M+ with Dr. Jan Duffy\'s expert guidance. View 28+ subcommunities including Portofino, Kingwood & Barrington.',
  keywords: [
    'The Vistas Summerlin homes for sale',
    'luxury homes Summerlin',
    'property search The Vistas',
    'homes for sale Las Vegas',
    'Dr. Jan Duffy real estate',
    'Summerlin property search'
  ],
  openGraph: {
    title: 'Property Search - Find Your Perfect Home in The Vistas Summerlin',
    description: 'Advanced property search with detailed filters and real-time results.',
    url: 'https://www.thevistassummerlin.com/search',
    type: 'website',
  },
};

const propertyTypes = [
  {
    id: 'sfr',
    name: 'Single Family Homes',
    description: 'Spacious family homes with private yards and modern amenities',
    priceRange: '$525K - $2.5M',
    count: '350+',
    image: '/subcommunities/IMG_0737.JPG',
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

const featuredListings = [
  {
    id: 1,
    title: 'Luxury Mountain View Estate',
    price: '$1,250,000',
    location: 'Santaluz',
    beds: 4,
    baths: 3.5,
    sqft: '3,200',
    image: '/subcommunities/IMG_0737.JPG',
    status: 'Active'
  },
  {
    id: 2,
    title: 'Modern Family Home',
    price: '$875,000',
    location: 'Red Rock Canyon',
    beds: 3,
    baths: 2.5,
    sqft: '2,400',
    image: '/subcommunities/IMG_0737.JPG',
    status: 'Active'
  },
  {
    id: 3,
    title: 'Cozy Townhome',
    price: '$650,000',
    location: 'Summerlin Park',
    beds: 2,
    baths: 2,
    sqft: '1,600',
    image: '/subcommunities/IMG_0738.JPG',
    status: 'Active'
  },
  {
    id: 4,
    title: 'Investment Property',
    price: '$750,000',
    location: 'Vista Heights',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    image: '/subcommunities/IMG_0739.JPG',
    status: 'Active'
  },
  {
    id: 5,
    title: 'Executive Home',
    price: '$1,100,000',
    location: 'Canyon Ridge',
    beds: 5,
    baths: 4,
    sqft: '3,800',
    image: '/subcommunities/IMG_0737.JPG',
    status: 'Active'
  },
  {
    id: 6,
    title: 'First-Time Buyer Special',
    price: '$525,000',
    location: 'Meadowbrook',
    beds: 2,
    baths: 2,
    sqft: '1,400',
    image: '/subcommunities/IMG_0738.JPG',
    status: 'Active'
  }
];

const searchFilters = [
  { name: 'Price Range', options: ['$400K - $600K', '$600K - $800K', '$800K - $1M', '$1M+'] },
  { name: 'Bedrooms', options: ['1+', '2+', '3+', '4+', '5+'] },
  { name: 'Bathrooms', options: ['1+', '2+', '3+', '4+'] },
  { name: 'Property Type', options: ['Single Family', 'Multi-Family', 'Townhome', 'Condo'] },
  { name: 'Community', options: ['Santaluz', 'Red Rock Canyon', 'Summerlin Park', 'All Communities'] }
];

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
                Find Your Perfect Home
              </h1>
              <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
                Search through 500+ available properties across 28 subcommunities in The Vistas Summerlin
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="py-4 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm font-secondary text-text-light">
              <Link href="/" className="hover:text-link-blue transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-text-dark">Property Search</span>
            </nav>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                Find Your Perfect Home in The Vistas Summerlin
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Discover luxury homes for sale in The Vistas Summerlin with our comprehensive 
                  property search tools. Filter by price range, bedrooms, bathrooms, and community 
                  features to find your ideal home in Las Vegas's most prestigious master-planned 
                  community.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Advanced Property Search in The Vistas Summerlin
                </h3>
                
                <p className="mb-6">
                  Our advanced search tools help you find luxury homes across The Vistas Summerlin's 
                  28 distinct subcommunities. From Mediterranean-inspired Portofino to the royal 
                  elegance of Kingwood, search by specific features, price ranges, and amenities 
                  to discover your perfect match in this prestigious Las Vegas community.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Luxury Homes Available in The Vistas Summerlin
                </h3>
                
                <p className="mb-6">
                  The Vistas Summerlin offers luxury homes ranging from $600,000 to over $2.5 million, 
                  featuring 2,500 to 4,500 square feet of living space. Each property benefits from 
                  The Vistas' world-class amenities including the community center at 11312 Parkside Way, 
                  miles of walking paths, and access to TPC Summerlin golf course.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Expert Guidance from Dr. Jan Duffy
                </h3>
                
                <p className="mb-6">
                  Dr. Jan Duffy specializes in The Vistas Summerlin real estate market, offering 
                  personalized service with flexible scheduling that works around your lifestyle. 
                  Her office at 11312 Parkside Way provides convenient access and deep local 
                  market knowledge to help you find your perfect home.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Contact Dr. Jan Duffy for Personalized Search Assistance
                </h3>
                
                <p className="mb-6">
                  Ready to find your dream home in The Vistas Summerlin? Contact Dr. Jan Duffy 
                  at (702) 500-0607 for personalized search assistance and expert market guidance. 
                  Her flexible scheduling and deep community knowledge ensure you'll find the 
                  perfect home for your family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Search Widget */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Advanced Property Search
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Use our comprehensive search tools to find properties that match your exact criteria
              </p>
            </div>
            
            <div className="bg-light-gray p-10 rounded-default">
              <div className="max-w-4xl mx-auto">
                <realscout-advanced-search 
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Browse by Property Type
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                From spacious single-family homes to convenient townhomes, discover the diverse 
                property options available across our 28 subcommunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {propertyTypes.map((property) => (
                <div key={property.id} className="bg-white rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
                  <div className="relative h-56 bg-light-gray">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-primary font-medium text-white mb-2">
                        {property.name}
                      </h3>
                      <p className="text-lg font-secondary text-white/90">
                        {property.count} Available
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-body font-secondary text-text-light mb-6 leading-relaxed">
                      {property.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-2xl font-primary font-medium text-link-blue mb-2">
                        {property.priceRange}
                      </div>
                      <div className="text-sm font-secondary text-text-light">
                        Price Range
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-primary font-medium text-text-dark mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {property.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-body font-secondary text-text-light">
                            <svg className="w-5 h-5 text-success-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={`/search?property-type=${property.id}`}
                      className="block w-full bg-link-blue text-white text-center py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105"
                    >
                      View {property.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Filters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Quick Search Filters
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Use these popular filters to quickly narrow down your search
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {searchFilters.map((filter, index) => (
                <div key={index} className="bg-light-gray p-6 rounded-default">
                  <h3 className="text-lg font-primary font-medium text-text-dark mb-4">
                    {filter.name}
                  </h3>
                  <div className="space-y-2">
                    {filter.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center">
                        <input type="checkbox" className="mr-3 text-link-blue" />
                        <span className="text-sm font-secondary text-text-light">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Featured Listings
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Discover some of our most popular and highly-rated properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredListings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
                  <div className="relative h-64 bg-light-gray">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-success-green text-white px-3 py-1 rounded-full text-sm font-secondary font-medium">
                        {listing.status}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-primary font-medium text-white mb-2">
                        {listing.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-secondary text-white/90">
                          {listing.location}
                        </p>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-lg font-primary font-medium text-white">
                            {listing.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-primary font-medium text-link-blue">{listing.beds}</div>
                        <div className="text-sm font-secondary text-text-light">Beds</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-primary font-medium text-link-blue">{listing.baths}</div>
                        <div className="text-sm font-secondary text-text-light">Baths</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-primary font-medium text-link-blue">{listing.sqft}</div>
                        <div className="text-sm font-secondary text-text-light">Sq Ft</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-link-blue text-white py-3 rounded-default text-sm font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105">
                        View Details
                      </button>
                      <button className="flex-1 bg-light-gray text-text-dark py-3 rounded-default text-sm font-secondary font-medium hover:bg-text-light transition-all duration-300 transform hover:scale-105">
                        Schedule Tour
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/search/all"
                className="inline-flex items-center bg-primary-navy text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Listings
                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Search Tips */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Search Tips & Advice
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Get the most out of your property search with these helpful tips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-light-gray p-8 rounded-default">
                <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Start Broad, Then Narrow
                </h3>
                <p className="text-body font-secondary text-text-light leading-relaxed">
                  Begin with basic criteria like price range and bedrooms, then refine your search 
                  with additional filters to find your perfect match.
                </p>
              </div>

              <div className="bg-light-gray p-8 rounded-default">
                <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Set Up Alerts
                </h3>
                <p className="text-body font-secondary text-text-light leading-relaxed">
                  Create saved searches and get notified when new properties matching your criteria 
                  become available.
                </p>
              </div>

              <div className="bg-light-gray p-8 rounded-default">
                <div className="w-12 h-12 bg-primary-navy rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                  Explore Communities
                </h3>
                <p className="text-body font-secondary text-text-light leading-relaxed">
                  Each of our 28 subcommunities has unique character and amenities. 
                  Research different areas to find the perfect location for your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 