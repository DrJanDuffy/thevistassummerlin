"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Search, MapPin, Filter, Grid, List, Star, Home, Users, TreePine } from 'lucide-react';

const allCommunities = [
  {
    id: 'barrington',
    name: 'Barrington',
    description: 'Elegant homes with sophisticated architecture and premium amenities',
    priceRange: '$750K - $1.8M',
    homesAvailable: 8,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Sophisticated Architecture', 'Premium Amenities', 'Gated Community', 'Landscaped Grounds'],
    category: 'Luxury'
  },
  {
    id: 'kingwood',
    name: 'Kingwood',
    description: 'Royal-inspired homes with majestic mountain views and luxury finishes',
    priceRange: '$850K - $2.1M',
    homesAvailable: 6,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Mountain Views', 'Luxury Finishes', 'Private Patios', 'Resort-Style Pool'],
    category: 'Luxury'
  },
  {
    id: 'santalina',
    name: 'Santalina',
    description: 'Mediterranean-inspired homes with warm colors and outdoor living spaces',
    priceRange: '$650K - $1.4M',
    homesAvailable: 12,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Mediterranean Style', 'Outdoor Living', 'Warm Colors', 'Community Gardens'],
    category: 'Premium'
  },
  {
    id: 'bella-vista',
    name: 'Bella Vista',
    description: 'Beautiful views and charming homes with Italian-inspired architecture',
    priceRange: '$600K - $1.3M',
    homesAvailable: 15,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Beautiful Views', 'Italian Architecture', 'Charming Streets', 'Community Center'],
    category: 'Premium'
  },
  {
    id: 'miraleste',
    name: 'Miraleste',
    description: 'Homes with stunning vistas and modern amenities in a peaceful setting',
    priceRange: '$700K - $1.6M',
    homesAvailable: 10,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Stunning Vistas', 'Modern Amenities', 'Peaceful Setting', 'Walking Trails'],
    category: 'Premium'
  },
  {
    id: 'solano',
    name: 'Solano',
    description: 'Family-friendly community with excellent schools and recreational facilities',
    priceRange: '$550K - $1.2M',
    homesAvailable: 20,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Excellent Schools', 'Recreational Facilities', 'Family Friendly', 'Parks & Playgrounds'],
    category: 'Family'
  },
  {
    id: 'canterra',
    name: 'Canterra',
    description: 'Contemporary homes with sustainable design and energy-efficient features',
    priceRange: '$650K - $1.5M',
    homesAvailable: 14,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Sustainable Design', 'Energy Efficient', 'Contemporary Style', 'Smart Home Features'],
    category: 'Premium'
  },
  {
    id: 'miramonte',
    name: 'Miramonte',
    description: 'Homes with mountain views and Spanish-inspired architecture',
    priceRange: '$700K - $1.7M',
    homesAvailable: 11,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Mountain Views', 'Spanish Architecture', 'Private Courtyards', 'Community Pool'],
    category: 'Premium'
  },
  {
    id: 'somerset',
    name: 'Somerset',
    description: 'Charming English-inspired homes with manicured gardens and community spirit',
    priceRange: '$600K - $1.4M',
    homesAvailable: 16,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['English Style', 'Manicured Gardens', 'Community Spirit', 'Walking Paths'],
    category: 'Family'
  },
  {
    id: 'capri',
    name: 'Capri',
    description: 'Island-inspired homes with resort-style amenities and tropical landscaping',
    priceRange: '$750K - $1.8M',
    homesAvailable: 9,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Island Inspired', 'Resort Amenities', 'Tropical Landscaping', 'Pool & Spa'],
    category: 'Luxury'
  },
  {
    id: 'monterosa',
    name: 'Monterosa',
    description: 'Homes with rose garden themes and elegant European-inspired design',
    priceRange: '$650K - $1.5M',
    homesAvailable: 13,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Rose Gardens', 'European Design', 'Elegant Architecture', 'Community Events'],
    category: 'Premium'
  },
  {
    id: 'sonesta',
    name: 'Sonesta',
    description: 'Musical-themed community with harmonious design and artistic touches',
    priceRange: '$600K - $1.3M',
    homesAvailable: 17,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Musical Theme', 'Harmonious Design', 'Artistic Touches', 'Community Concerts'],
    category: 'Family'
  },
  {
    id: 'cara-vella',
    name: 'Cara Vella',
    description: 'Beautiful face homes with stunning architecture and premium finishes',
    priceRange: '$800K - $2.0M',
    homesAvailable: 7,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Stunning Architecture', 'Premium Finishes', 'Gated Entry', 'Luxury Amenities'],
    category: 'Luxury'
  },
  {
    id: 'palmilla',
    name: 'Palmilla',
    description: 'Palm tree-lined streets with tropical landscaping and resort-style living',
    priceRange: '$700K - $1.6M',
    homesAvailable: 12,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Palm Trees', 'Tropical Landscaping', 'Resort Living', 'Pool & Tennis'],
    category: 'Premium'
  },
  {
    id: 'summerfield',
    name: 'Summerfield',
    description: 'Summer-inspired homes with bright colors and outdoor entertainment spaces',
    priceRange: '$550K - $1.2M',
    homesAvailable: 19,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Summer Theme', 'Bright Colors', 'Outdoor Entertainment', 'BBQ Areas'],
    category: 'Family'
  },
  {
    id: 'casa-rosa',
    name: 'Casa Rosa',
    description: 'Rose-colored homes with romantic architecture and garden settings',
    priceRange: '$650K - $1.4M',
    homesAvailable: 14,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Rose Theme', 'Romantic Architecture', 'Garden Settings', 'Community Rose Garden'],
    category: 'Premium'
  },
  {
    id: 'paradiso',
    name: 'Paradiso',
    description: 'Paradise-inspired homes with heavenly views and luxurious amenities',
    priceRange: '$900K - $2.3M',
    homesAvailable: 5,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Heavenly Views', 'Luxurious Amenities', 'Private Pools', 'Gated Security'],
    category: 'Luxury'
  },
  {
    id: 'talaverde',
    name: 'Talaverde',
    description: 'Green valley homes with natural landscaping and eco-friendly features',
    priceRange: '$600K - $1.3M',
    homesAvailable: 16,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Green Valley', 'Natural Landscaping', 'Eco-Friendly', 'Walking Trails'],
    category: 'Family'
  },
  {
    id: 'encanto',
    name: 'Encanto',
    description: 'Enchanted homes with magical gardens and whimsical design elements',
    priceRange: '$700K - $1.7M',
    homesAvailable: 11,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Enchanted Gardens', 'Whimsical Design', 'Magical Elements', 'Community Events'],
    category: 'Premium'
  },
  {
    id: 'portofino',
    name: 'Portofino',
    description: 'Italian coastal-inspired homes with Mediterranean charm and luxury amenities',
    priceRange: '$850K - $2.0M',
    homesAvailable: 8,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Italian Coastal', 'Mediterranean Charm', 'Luxury Amenities', 'Private Beach Club'],
    category: 'Luxury'
  },
  {
    id: 'talega',
    name: 'Talega',
    description: 'Homes with valley views and natural surroundings in a peaceful setting',
    priceRange: '$650K - $1.5M',
    homesAvailable: 13,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Valley Views', 'Natural Surroundings', 'Peaceful Setting', 'Hiking Trails'],
    category: 'Premium'
  },
  {
    id: 'estancia',
    name: 'Estancia',
    description: 'Spanish ranch-style homes with authentic architecture and courtyard living',
    priceRange: '$750K - $1.8M',
    homesAvailable: 10,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Spanish Ranch', 'Authentic Architecture', 'Courtyard Living', 'Community Pool'],
    category: 'Premium'
  },
  {
    id: 'sage-hills',
    name: 'Sage Hills',
    description: 'Homes nestled in sage-covered hills with natural desert landscaping',
    priceRange: '$600K - $1.4M',
    homesAvailable: 15,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Sage Hills', 'Desert Landscaping', 'Natural Setting', 'Hiking Access'],
    category: 'Family'
  },
  {
    id: 'vista-verde',
    name: 'Vista Verde',
    description: 'Green view homes with sustainable design and energy-efficient features',
    priceRange: '$700K - $1.6M',
    homesAvailable: 12,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Green Views', 'Sustainable Design', 'Energy Efficient', 'Solar Panels'],
    category: 'Premium'
  },
  {
    id: 'hillstone',
    name: 'Hillstone',
    description: 'Stone homes on hills with rustic charm and modern amenities',
    priceRange: '$800K - $1.9M',
    homesAvailable: 9,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Stone Homes', 'Rustic Charm', 'Modern Amenities', 'Hill Views'],
    category: 'Luxury'
  },
  {
    id: 'san-marcos',
    name: 'San Marcos',
    description: 'Spanish mission-inspired homes with authentic details and community spirit',
    priceRange: '$650K - $1.5M',
    homesAvailable: 14,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Spanish Mission', 'Authentic Details', 'Community Spirit', 'Mission Bell'],
    category: 'Premium'
  }
];

const categories = ['All', 'Luxury', 'Premium', 'Family'];

export default function CommunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMap, setShowMap] = useState(false);

  const filteredCommunities = useMemo(() => {
    return allCommunities.filter(community => {
      const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           community.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || community.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categoryStats = useMemo(() => {
    const stats = { Luxury: 0, Premium: 0, Family: 0 };
    allCommunities.forEach(community => {
      stats[community.category as keyof typeof stats]++;
    });
    return stats;
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary-navy via-link-blue to-primary-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-link-blue focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-link-blue text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

                             {/* View Toggle */}
               <div className="flex gap-2">
                 <button
                   onClick={() => setViewMode('grid')}
                   title="Grid view"
                   className={`p-2 rounded-lg transition-all duration-200 ${
                     viewMode === 'grid' ? 'bg-link-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
                 >
                   <Grid className="w-5 h-5" />
                 </button>
                 <button
                   onClick={() => setViewMode('list')}
                   title="List view"
                   className={`p-2 rounded-lg transition-all duration-200 ${
                     viewMode === 'list' ? 'bg-link-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
                 >
                   <List className="w-5 h-5" />
                 </button>
                 <button
                   onClick={() => setShowMap(!showMap)}
                   title="Toggle map view"
                   className={`p-2 rounded-lg transition-all duration-200 ${
                     showMap ? 'bg-link-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
                 >
                   <MapPin className="w-5 h-5" />
                 </button>
               </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredCommunities.length} of {allCommunities.length} communities
            </div>
          </div>
        </section>

        {/* Community Overview Stats */}
        <section className="py-12 bg-gradient-to-br from-light-gray to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-primary font-medium text-primary-navy mb-2">{allCommunities.length}</div>
                <div className="text-sm font-secondary text-gray-600">Total Communities</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-primary font-medium text-link-blue mb-2">{categoryStats.Luxury}</div>
                <div className="text-sm font-secondary text-gray-600">Luxury Communities</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-primary font-medium text-success-green mb-2">{categoryStats.Premium}</div>
                <div className="text-sm font-secondary text-gray-600">Premium Communities</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl font-primary font-medium text-purple-600 mb-2">{categoryStats.Family}</div>
                <div className="text-sm font-secondary text-gray-600">Family Communities</div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        {showMap && (
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-primary font-medium text-gray-700 mb-2">Interactive Community Map</h3>
                <p className="text-gray-600 mb-4">Explore our communities on an interactive map</p>
                <button className="bg-link-blue text-white px-6 py-3 rounded-lg hover:bg-primary-navy transition-colors">
                  Launch Map View
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Communities Grid/List */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCommunities.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-primary font-medium text-gray-700 mb-2">No communities found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }>
                {filteredCommunities.map((community) => (
                  <div
                    key={community.id}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-200 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className={viewMode === 'list' ? 'w-1/3' : 'w-full'}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={community.image}
                          alt={`${community.name} community`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                            community.category === 'Luxury' ? 'bg-purple-600' :
                            community.category === 'Premium' ? 'bg-link-blue' : 'bg-success-green'
                          }`}>
                            {community.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                      <h3 className="text-xl font-primary font-medium text-text-dark mb-2">
                        {community.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {community.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-primary font-medium text-link-blue">
                          {community.priceRange}
                        </div>
                        <div className="text-sm text-gray-500">
                          {community.homesAvailable} homes available
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {community.features.slice(0, 3).map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {community.features.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{community.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link
                        href={`/communities/${community.id}`}
                        className="inline-block w-full bg-primary-navy text-white text-center py-3 rounded-lg hover:bg-link-blue transition-colors font-medium"
                      >
                        Explore {community.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-primary font-medium mb-6">
              Ready to Find Your Perfect Community?
            </h2>
            <p className="text-xl font-secondary opacity-90 max-w-2xl mx-auto mb-8">
              Connect with our expert team to schedule a personalized tour of your favorite communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="bg-white text-primary-navy px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Search Available Homes
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary-navy transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 