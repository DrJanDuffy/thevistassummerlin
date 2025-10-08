'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Search, MapPin, Filter, Grid, List, Star, Home, Users, TreePine, ArrowRight, ChevronDown } from 'lucide-react';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import RealScoutYourListings from '@/components/RealScoutYourListings';
import RealScoutListings from '@/components/RealScoutListings';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';

// Debounce utility function
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

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

  // Optimized click handlers using useCallback
  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleFilterToggle = useCallback(() => {
    setShowFilters(!showFilters);
  }, [showFilters]);

  const handleViewModeChange = useCallback((mode: 'grid' | 'list') => {
    setViewMode(mode);
  }, []);

  const handleSearchChange = useMemo(() => 
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    }, 300), []
  );

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
      
      {/* V0 Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        {/* V0 Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* V0 Brand Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 text-blue-200 font-medium mb-8 shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <MapPin className="w-6 h-6" />
              <span>The Vistas Summerlin | Homes by Dr. Jan Duffy</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Discover The Vistas Communities
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Dr. Jan Duffy specializes in The Vistas Summerlin luxury community. Explore 28 prestigious 
              subcommunities, each offering unique luxury living experiences with flexible scheduling 
              that works around YOUR lifestyle.
            </p>
            
            {/* V0 Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search The Vistas communities..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              The Vistas Summerlin Communities: Luxury Living at Its Finest
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Discover The Vistas Summerlin's 28 distinct subcommunities, each offering unique 
                architectural styles and luxury amenities. From Mediterranean-inspired <Link href="/communities/portofino" className="text-blue-600 hover:text-blue-800 font-semibold underline">Portofino</Link> 
                to the royal elegance of <Link href="/communities/kingwood" className="text-blue-600 hover:text-blue-800 font-semibold underline">Kingwood</Link>, The Vistas provides diverse options for 
                discerning homebuyers seeking the ultimate in Summerlin living.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Latest Summerlin Community News
              </h3>
              
              <p className="mb-6">
                Stay informed about the latest developments in Summerlin communities. Recent neighborhood spotlights include 
                <a href="https://summerlin.com/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">Mockingbird by Lennar</a>, 
                <a href="https://summerlin.com/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ascension by Toll Brothers</a>, and 
                <a href="https://summerlin.com/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">Edgewood by Tri Pointe Homes</a>. 
                These new developments showcase the continued growth and innovation in Summerlin's master-planned community.
              </p>
              
              <p className="mb-6">
                The Vistas Summerlin features world-class subcommunities including <Link href="/communities/img-0737" className="text-blue-600 hover:text-blue-800 font-semibold underline">Barrington</Link> with 
                sophisticated architecture, <Link href="/communities/kingwood" className="text-blue-600 hover:text-blue-800 font-semibold underline">Kingwood</Link> with royal-inspired homes and mountain views, 
                and <Link href="/communities/santalina" className="text-blue-600 hover:text-blue-800 font-semibold underline">Santalina</Link> with Mediterranean charm. Each community offers unique amenities 
                ranging from resort-style pools to private patios and landscaped grounds, creating 
                a diverse portfolio of luxury living options.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Luxury Homes for Sale Across All Communities
              </h3>
              
              <p className="mb-6">
                Our current inventory spans The Vistas Summerlin's prestigious communities with 
                luxury homes ranging from $500,000 to $600,000. Each property benefits 
                from The Vistas' world-class amenities including the community center at 11312 
                Parkside Way, miles of walking paths, and access to TPC Summerlin golf course. Browse our live listings below or <Link href="/market-reports" className="text-blue-600 hover:text-blue-800 font-semibold underline">view market trends</Link>.
              </p>
              
              {/* RealScout Listings Widget */}
              <div className="my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Current Luxury Homes for Sale in The Vistas Summerlin Communities
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Explore our curated selection of luxury homes across The Vistas Summerlin's prestigious communities. Each property offers exceptional value with premium amenities and access to world-class community features.
                </p>
                <RealScoutListings 
                  officeId={process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || "your-office-id"}
                  marketId={process.env.NEXT_PUBLIC_REALSCOUT_MARKET_ID || "las-vegas"}
                  responsive={true}
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Downtown Summerlin Lifestyle & Entertainment
              </h3>
              
              <p className="mb-6">
                The Vistas Summerlin residents enjoy easy access to <a href="https://summerlin.com/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">Downtown Summerlin</a>, 
                a premier lifestyle and entertainment hub featuring world-class restaurants, retail shopping, and entertainment venues. 
                Recent community highlights include celebrations for the Little League World Series Champions and exciting new additions 
                arriving at Downtown Summerlin, making it an even more vibrant destination for residents.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                The Vistas Community Center & Amenities
              </h3>
              
              <p className="mb-6">
                The Vistas Community Center, located at 11312 Parkside Way, serves as the heart 
                of our community. This world-class facility features basketball courts, tennis 
                courts, a football field, and ample green spaces perfect for family recreation. 
                The community also offers miles of walking paths, professionally maintained parks, 
                and access to TPC Summerlin golf course.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                The Vistas Summerlin HOA and Community Features
              </h3>
              
              <p className="mb-6">
                The Vistas Summerlin HOA fees typically range from $200 to $400 per month, 
                depending on the specific subcommunity and included amenities. These fees 
                cover professional landscape maintenance, community security, and access to 
                shared facilities. The community is served by top-rated schools including 
                Palo Verde High School and Ernest May Elementary.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Expert Real Estate Services for The Vistas Communities
              </h3>
              
              <p className="mb-6">
                Dr. Jan Duffy specializes in The Vistas Summerlin real estate market, offering 
                personalized service with flexible scheduling that works around your lifestyle. 
                With over 12 years of experience and an office located at 11312 Parkside Way, 
                Dr. Duffy provides expert guidance for buying or selling in any of The Vistas 
                subcommunities.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Contact Dr. Jan Duffy for Community Expertise
              </h3>
              
              <p className="mb-6">
                Ready to explore luxury homes in The Vistas Summerlin communities? Contact Dr. Jan Duffy 
                at (702) 500-0607 for expert guidance on finding your perfect home in The Vistas. 
                Her deep knowledge of each subcommunity ensures you'll find the ideal match for 
                your lifestyle and investment goals.
              </p>
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
                  onClick={() => handleCategoryClick(category)}
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
                onClick={handleFilterToggle}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => handleViewModeChange('grid')}
                  className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleViewModeChange('list')}
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

      {/* Property Categories Section */}
      <PropertyCategories />

      {/* Featured Communities Section */}
      <FeaturedCommunities />

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