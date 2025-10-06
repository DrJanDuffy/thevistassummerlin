'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Search, MapPin, Filter, Grid, List, Star, Home, Users, TreePine, ArrowRight, ChevronDown } from 'lucide-react';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import RealScoutYourListings from '@/components/RealScoutYourListings';

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
    id: 'canyon-ridge',
    name: 'Canyon Ridge',
    description: 'Modern homes with stunning canyon views and contemporary design',
    priceRange: '$700K - $1.6M',
    homesAvailable: 10,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Canyon Views', 'Modern Design', 'Smart Homes', 'Fitness Center'],
    category: 'Luxury'
  },
  {
    id: 'sunset-hills',
    name: 'Sunset Hills',
    description: 'Family-friendly community with parks, trails, and excellent schools',
    priceRange: '$550K - $1.2M',
    homesAvailable: 20,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Family-Friendly', 'Parks & Trails', 'Top Schools', 'Community Events'],
    category: 'Family'
  }
];

const categories = ['All', 'Luxury', 'Premium', 'Family'];

export default function CommunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCommunities = useMemo(() => {
    return allCommunities.filter(community => {
      const matchesSearch = community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           community.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || community.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              The Vistas Communities
              <span className="block text-blue-200">Discover Your Perfect Neighborhood</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore 28 prestigious subcommunities in The Vistas Summerlin, each offering unique luxury living experiences.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                  <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Any Price</option>
                    <option>$500K - $750K</option>
                    <option>$750K - $1M</option>
                    <option>$1M - $1.5M</option>
                    <option>$1.5M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Homes Available</label>
                  <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Any Amount</option>
                    <option>1-5 Homes</option>
                    <option>6-10 Homes</option>
                    <option>11-15 Homes</option>
                    <option>16+ Homes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Features</label>
                  <select className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Any Features</option>
                    <option>Gated Community</option>
                    <option>Mountain Views</option>
                    <option>Pool</option>
                    <option>Fitness Center</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {filteredCommunities.length} Communities Found
              </h2>
              <p className="text-gray-600 mt-2">
                {selectedCategory !== 'All' && `in ${selectedCategory} category`}
              </p>
            </div>
          </div>

          {/* Communities Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredCommunities.map((community) => (
              <div
                key={community.id}
                className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Community Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-80 h-64' : 'h-64'}`}>
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      community.category === 'Luxury' 
                        ? 'bg-purple-100 text-purple-800' 
                        : community.category === 'Premium'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {community.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>

                {/* Community Content */}
                <div className={`p-8 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{community.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{community.description}</p>
                  
                  {/* Price & Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600">{community.priceRange}</div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Home className="w-4 h-4" />
                      <span className="text-sm">{community.homesAvailable} homes</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {community.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                      {community.features.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          +{community.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/communities/${community.id}`}
                    className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <span>Explore {community.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCommunities.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No communities found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RealScout Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-gray-600">
              Use our advanced search tools to find the perfect property in The Vistas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Property Search</h3>
              <p className="text-gray-600 mb-6">
                Search all available properties across The Vistas communities with detailed filters.
              </p>
              <RealScoutAdvancedSearch />
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Saved Listings</h3>
              <p className="text-gray-600 mb-6">
                View and manage your saved properties and get updates on price changes.
              </p>
              <RealScoutYourListings />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}