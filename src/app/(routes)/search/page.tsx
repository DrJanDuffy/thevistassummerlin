'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Home, 
  MapPin, 
  Filter, 
  Star, 
  TrendingUp, 
  Calendar, 
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const propertyTypes = [
  {
    id: 'sfr',
    name: 'Single Family Homes',
    description: 'Spacious family homes with private yards and modern amenities',
    priceRange: '$525K - $2.5M',
    count: '350+',
    image: '/subcommunities/IMG_0737.JPG',
    features: ['3-6 Bedrooms', '2-4 Bathrooms', '1,800-4,500 sq ft', 'Private Yards'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mf',
    name: 'Multi-Family',
    description: 'Townhomes and duplexes perfect for families and investors',
    priceRange: '$450K - $1.2M',
    count: '120+',
    image: '/subcommunities/IMG_0737.JPG',
    features: ['2-4 Bedrooms', '2-3 Bathrooms', '1,200-2,800 sq ft', 'Shared Amenities'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'tc',
    name: 'Townhomes & Condos',
    description: 'Low-maintenance living with community amenities',
    priceRange: '$400K - $900K',
    count: '80+',
    image: '/subcommunities/IMG_0738.JPG',
    features: ['1-3 Bedrooms', '1-2 Bathrooms', '800-2,200 sq ft', 'Community Pools'],
    gradient: 'from-green-500 to-emerald-500'
  }
];


export default function SearchPage() {
  const [selectedPropertyType, setSelectedPropertyType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check for property-type query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const propertyType = urlParams.get('property-type');
    if (propertyType) {
      setSelectedPropertyType(propertyType);
    }
  }, []);

  const filteredPropertyTypes = selectedPropertyType 
    ? propertyTypes.filter(type => type.id === selectedPropertyType)
    : propertyTypes;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* V0 Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Advanced V0 Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-blue-200 font-medium mb-8 shadow-lg">
              <Search className="w-5 h-5 text-blue-300" />
              <span>Property Search</span>
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Find Your Dream Home in
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Vistas Summerlin
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Search through 500+ luxury properties across 28 exclusive subcommunities. 
              Discover homes that match your lifestyle with our advanced AI-powered search tools.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-blue-200">Properties</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-white mb-2">28</div>
                <div className="text-sm text-blue-200">Communities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-white mb-2">$600K+</div>
                <div className="text-sm text-blue-200">Starting Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-blue-200">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* V0 Advanced Search Widget */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 text-blue-800 font-medium mb-6 shadow-lg">
              <Filter className="w-5 h-5" />
              <span>Advanced Search</span>
              <Zap className="w-4 h-4" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Property Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our intelligent search engine analyzes millions of data points to find properties 
              that perfectly match your lifestyle and investment goals.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl shadow-2xl p-8 lg:p-12 border border-indigo-200">
            <div className="max-w-4xl mx-auto">
              <realscout-advanced-search 
                agent-encoded-id="QWdlbnQtMjI1MDUw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* V0 Property Types */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-gray-700 font-medium mb-6 shadow-lg">
              <Home className="w-5 h-5" />
              <span>Property Types</span>
              <Award className="w-4 h-4" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Diverse Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From luxury estates to cozy townhomes, discover the perfect property type 
              that matches your lifestyle and investment goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredPropertyTypes.map((property, index) => (
              <div 
                key={property.id} 
                className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`relative h-64 bg-gradient-to-br ${property.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                      {property.count} Available
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">
                      {property.name}
                    </h3>
                    <div className="text-lg text-white/90">
                      {property.priceRange}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {property.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {property.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/search?property-type=${property.id}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <span className="flex items-center justify-center">
                      View {property.name}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RealScout Office Widget - $800K-$1.2M Range */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-blue-200 font-medium mb-6 shadow-lg">
              <Star className="w-5 h-5 text-blue-300" />
              <span>Premium Properties</span>
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Luxury Homes $800K - $1.2M
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover our curated selection of premium properties in The Vistas Summerlin. 
              These exceptional homes offer the perfect balance of luxury, comfort, and value.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              price-min="800000"
              price-max="1200000"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            />
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/search"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
            >
              <span className="flex items-center">
                View All Listings
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* V0 Search Tips */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 text-blue-800 font-medium mb-6 shadow-lg">
              <TrendingUp className="w-5 h-5" />
              <span>Expert Tips</span>
              <Shield className="w-4 h-4" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Master Your Property Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unlock insider secrets and expert strategies to find your perfect home 
              faster and with greater confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Broad, Then Narrow
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Begin with basic criteria like price range and bedrooms, then refine your search 
                with additional filters to find your perfect match in The Vistas Summerlin.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Set Up Smart Alerts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create saved searches and get instant notifications when new properties matching 
                your criteria become available in your preferred communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Leverage Expert Guidance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work with Dr. Jan Duffy's deep local knowledge to explore communities and 
                discover hidden gems that match your lifestyle perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* V0 CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-blue-200 font-medium mb-8 shadow-lg">
            <Phone className="w-5 h-5 text-blue-300" />
            <span>Ready to Start?</span>
            <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Let's Find Your Dream Home Together
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Dr. Jan Duffy is ready to provide personalized guidance and expert market insights 
            to help you discover the perfect property in The Vistas Summerlin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Dr. Jan Duffy
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/about"
              className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
            >
              <Users className="w-5 h-5 mr-3" />
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 