import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Communities - The Vistas Summerlin 28 Subcommunities',
  description: 'Explore all 28 unique subcommunities in The Vistas Summerlin. Find detailed information about each community, amenities, and available homes.',
  openGraph: {
    title: 'Communities - The Vistas Summerlin 28 Subcommunities',
    description: 'Discover the diverse subcommunities that make up The Vistas Summerlin.',
    url: 'https://www.thevistassummerlin.com/communities',
    type: 'website',
  },
};

const allCommunities = [
  {
    id: 'santaluz',
    name: 'Santaluz',
    description: 'Luxury homes with mountain views and resort-style amenities',
    priceRange: '$800K - $2.5M',
    homesAvailable: 12,
    image: '/subcommunities/Santaluz.jpg',
    features: ['Mountain Views', 'Resort Pool', 'Golf Course', 'Hiking Trails'],
    category: 'Luxury'
  },
  {
    id: 'red-rock',
    name: 'Red Rock Canyon',
    description: 'Stunning homes with panoramic views of the iconic Red Rock Canyon',
    priceRange: '$650K - $1.8M',
    homesAvailable: 8,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Canyon Views', 'Private Patios', 'Modern Design', 'Community Center'],
    category: 'Premium'
  },
  {
    id: 'summerlin-park',
    name: 'Summerlin Park',
    description: 'Family-friendly community with parks, schools, and shopping nearby',
    priceRange: '$525K - $1.2M',
    homesAvailable: 25,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Parks & Playgrounds', 'Top Schools', 'Shopping Center', 'Walking Trails'],
    category: 'Family'
  },
  {
    id: 'vista-heights',
    name: 'Vista Heights',
    description: 'Elevated living with spectacular city and mountain vistas',
    priceRange: '$750K - $1.5M',
    homesAvailable: 15,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['City Views', 'Rooftop Decks', 'Modern Architecture', 'Fitness Center'],
    category: 'Premium'
  },
  {
    id: 'canyon-ridge',
    name: 'Canyon Ridge',
    description: 'Secluded homes nestled against the canyon walls',
    priceRange: '$900K - $2.2M',
    homesAvailable: 6,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Canyon Proximity', 'Privacy', 'Natural Landscaping', 'Hiking Access'],
    category: 'Luxury'
  },
  {
    id: 'meadowbrook',
    name: 'Meadowbrook',
    description: 'Charming homes surrounded by open meadows and green spaces',
    priceRange: '$600K - $1.1M',
    homesAvailable: 18,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Open Spaces', 'Community Gardens', 'Playgrounds', 'Walking Paths'],
    category: 'Family'
  },
  {
    id: 'sunset-vista',
    name: 'Sunset Vista',
    description: 'Homes designed to capture the perfect sunset views',
    priceRange: '$700K - $1.6M',
    homesAvailable: 10,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Sunset Views', 'Outdoor Living', 'Pool Access', 'BBQ Areas'],
    category: 'Premium'
  },
  {
    id: 'oak-grove',
    name: 'Oak Grove',
    description: 'Mature trees and established landscaping create a peaceful atmosphere',
    priceRange: '$550K - $1.3M',
    homesAvailable: 22,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Mature Trees', 'Established Gardens', 'Community Events', 'Neighborly Feel'],
    category: 'Family'
  },
  {
    id: 'eagle-point',
    name: 'Eagle Point',
    description: 'Perched high with commanding views of the valley below',
    priceRange: '$850K - $2.1M',
    homesAvailable: 9,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Valley Views', 'Elevated Position', 'Privacy', 'Luxury Finishes'],
    category: 'Luxury'
  },
  {
    id: 'willow-creek',
    name: 'Willow Creek',
    description: 'Waterfront-inspired homes with lush landscaping',
    priceRange: '$650K - $1.4M',
    homesAvailable: 14,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Water Features', 'Lush Landscaping', 'Community Pool', 'Walking Trails'],
    category: 'Premium'
  },
  {
    id: 'pine-ridge',
    name: 'Pine Ridge',
    description: 'Mountain-inspired homes with rustic charm and modern amenities',
    priceRange: '$600K - $1.5M',
    homesAvailable: 16,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Mountain Style', 'Rustic Charm', 'Modern Amenities', 'Community Lodge'],
    category: 'Premium'
  },
  {
    id: 'maple-woods',
    name: 'Maple Woods',
    description: 'Family-oriented community with excellent schools and parks',
    priceRange: '$500K - $1.1M',
    homesAvailable: 28,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Top Schools', 'Parks', 'Family Events', 'Safe Environment'],
    category: 'Family'
  },
  {
    id: 'cedar-heights',
    name: 'Cedar Heights',
    description: 'Elevated homes with privacy and spectacular views',
    priceRange: '$750K - $1.8M',
    homesAvailable: 11,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Privacy', 'Spectacular Views', 'Custom Homes', 'Gated Access'],
    category: 'Luxury'
  },
  {
    id: 'birch-grove',
    name: 'Birch Grove',
    description: 'Contemporary homes with clean lines and modern design',
    priceRange: '$650K - $1.3M',
    homesAvailable: 19,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Modern Design', 'Clean Lines', 'Smart Homes', 'Community Gym'],
    category: 'Premium'
  },
  {
    id: 'aspen-meadows',
    name: 'Aspen Meadows',
    description: 'Open spaces and natural beauty define this peaceful community',
    priceRange: '$575K - $1.2M',
    homesAvailable: 20,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Open Spaces', 'Natural Beauty', 'Peaceful Atmosphere', 'Community Events'],
    category: 'Family'
  },
  {
    id: 'spruce-pine',
    name: 'Spruce Pine',
    description: 'Mountain retreat atmosphere with luxury amenities',
    priceRange: '$800K - $1.9M',
    homesAvailable: 8,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Mountain Retreat', 'Luxury Amenities', 'Spa Access', 'Fine Dining'],
    category: 'Luxury'
  },
  {
    id: 'juniper-hills',
    name: 'Juniper Hills',
    description: 'Rolling hills and natural landscapes create a serene environment',
    priceRange: '$700K - $1.6M',
    homesAvailable: 12,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Rolling Hills', 'Natural Landscapes', 'Serene Environment', 'Hiking Trails'],
    category: 'Premium'
  },
  {
    id: 'cypress-court',
    name: 'Cypress Court',
    description: 'Elegant homes with sophisticated design and upscale amenities',
    priceRange: '$750K - $2.0M',
    homesAvailable: 7,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Elegant Design', 'Upscale Amenities', 'Concierge Service', 'Private Pool'],
    category: 'Luxury'
  },
  {
    id: 'magnolia-gardens',
    name: 'Magnolia Gardens',
    description: 'Beautiful gardens and landscaping throughout the community',
    priceRange: '$600K - $1.4M',
    homesAvailable: 17,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Beautiful Gardens', 'Landscaping', 'Garden Tours', 'Community Events'],
    category: 'Premium'
  },
  {
    id: 'dogwood-lane',
    name: 'Dogwood Lane',
    description: 'Charming homes with character and community spirit',
    priceRange: '$550K - $1.2M',
    homesAvailable: 23,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Charming Homes', 'Community Spirit', 'Neighborhood Events', 'Friendly Atmosphere'],
    category: 'Family'
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom',
    description: 'Spring beauty and seasonal charm in every home',
    priceRange: '$650K - $1.5M',
    homesAvailable: 15,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Seasonal Beauty', 'Spring Blooms', 'Community Gardens', 'Outdoor Living'],
    category: 'Premium'
  },
  {
    id: 'rose-garden',
    name: 'Rose Garden',
    description: 'Romantic setting with beautiful rose gardens and intimate spaces',
    priceRange: '$700K - $1.7M',
    homesAvailable: 9,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Rose Gardens', 'Romantic Setting', 'Intimate Spaces', 'Garden Parties'],
    category: 'Premium'
  },
  {
    id: 'lily-pond',
    name: 'Lily Pond',
    description: 'Waterfront-inspired homes with peaceful pond views',
    priceRange: '$750K - $1.8M',
    homesAvailable: 6,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Pond Views', 'Waterfront Living', 'Peaceful Atmosphere', 'Wildlife Watching'],
    category: 'Luxury'
  },
  {
    id: 'iris-meadows',
    name: 'Iris Meadows',
    description: 'Wildflower meadows and natural beauty in every direction',
    priceRange: '$600K - $1.3M',
    homesAvailable: 18,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Wildflower Meadows', 'Natural Beauty', 'Hiking Trails', 'Nature Walks'],
    category: 'Premium'
  },
  {
    id: 'tulip-court',
    name: 'Tulip Court',
    description: 'Colorful gardens and vibrant community life',
    priceRange: '$575K - $1.2M',
    homesAvailable: 21,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Colorful Gardens', 'Vibrant Community', 'Seasonal Events', 'Family Activities'],
    category: 'Family'
  },
  {
    id: 'daffodil-hill',
    name: 'Daffodil Hill',
    description: 'Elevated homes with spring blooms and mountain views',
    priceRange: '$700K - $1.6M',
    homesAvailable: 13,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Spring Blooms', 'Mountain Views', 'Elevated Position', 'Seasonal Beauty'],
    category: 'Premium'
  },
  {
    id: 'sunflower-fields',
    name: 'Sunflower Fields',
    description: 'Open fields and sunny disposition in this cheerful community',
    priceRange: '$550K - $1.1M',
    homesAvailable: 24,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Open Fields', 'Sunny Disposition', 'Cheerful Community', 'Outdoor Activities'],
    category: 'Family'
  },
  {
    id: 'lavender-lane',
    name: 'Lavender Lane',
    description: 'Aromatic gardens and peaceful atmosphere',
    priceRange: '$650K - $1.4M',
    homesAvailable: 16,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Aromatic Gardens', 'Peaceful Atmosphere', 'Meditation Spaces', 'Wellness Focus'],
    category: 'Premium'
  }
];

const categories = ['All', 'Luxury', 'Premium', 'Family'];

export default function CommunitiesPage() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
                Our Communities
              </h1>
              <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
                Discover all 28 unique subcommunities that make The Vistas Summerlin special
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
              <span className="text-text-dark">Communities</span>
            </nav>
          </div>
        </section>

        {/* Community Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Find Your Perfect Community
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Each of our 28 subcommunities offers unique character, amenities, and lifestyle options. 
                From luxury estates to family-friendly neighborhoods, there&apos;s a perfect fit for everyone.
              </p>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-link-blue mb-3">28</div>
                <div className="text-lg font-secondary text-text-light">Subcommunities</div>
              </div>
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-success-green mb-3">500+</div>
                <div className="text-lg font-secondary text-text-light">Homes Available</div>
              </div>
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-primary-navy mb-3">3</div>
                <div className="text-lg font-secondary text-text-light">Community Types</div>
              </div>
              <div className="text-center p-6 bg-light-gray rounded-default">
                <div className="text-4xl font-primary font-medium text-link-blue mb-3">100%</div>
                <div className="text-lg font-secondary text-text-light">Unique Character</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Categories */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Community Categories
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Choose from three distinct community types, each designed for different lifestyles and preferences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-8 rounded-default shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-4">Luxury</h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Premium homes with high-end amenities, privacy, and exclusive features
                </p>
                <div className="text-lg font-primary font-medium text-link-blue">8 Communities</div>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg text-center">
                <div className="w-16 h-16 bg-link-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-4">Premium</h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Quality homes with modern amenities and excellent value
                </p>
                <div className="text-lg font-primary font-medium text-link-blue">12 Communities</div>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg text-center">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-4">Family</h3>
                <p className="text-body font-secondary text-text-light mb-6">
                  Welcoming communities perfect for families with excellent schools and parks
                </p>
                <div className="text-lg font-primary font-medium text-link-blue">8 Communities</div>
              </div>
            </div>
          </div>
        </section>

        {/* All Communities Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                All Communities
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Browse all 28 subcommunities and find the perfect match for your lifestyle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCommunities.map((community) => (
                <div key={community.id} className="bg-white rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
                  <div className="relative h-64 bg-light-gray">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-secondary font-medium ${
                        community.category === 'Luxury' ? 'bg-primary-navy text-white' :
                        community.category === 'Premium' ? 'bg-link-blue text-white' :
                        'bg-success-green text-white'
                      }`}>
                        {community.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-primary font-medium text-white mb-2">
                        {community.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-secondary text-white/90">
                          {community.homesAvailable} Homes Available
                        </p>
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-secondary text-white font-medium">
                            {community.priceRange}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-body font-secondary text-text-light mb-4 leading-relaxed">
                      {community.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-primary font-medium text-text-dark mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {community.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-xs font-secondary text-text-light">
                            <svg className="w-3 h-3 text-success-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={`/communities/${community.id}`}
                        className="flex-1 bg-link-blue text-white text-center py-3 rounded-default text-sm font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105"
                      >
                        View Details
                      </a>
                      <a 
                        href={`/search?community=${community.id}`}
                        className="flex-1 bg-light-gray text-text-dark text-center py-3 rounded-default text-sm font-secondary font-medium hover:bg-text-light transition-all duration-300 transform hover:scale-105"
                      >
                        View Homes
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 