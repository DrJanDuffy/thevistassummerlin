'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Building2, Building, Search, ArrowRight, CheckCircle, Star, TrendingUp, Users, Shield, Zap, Sparkles, Heart } from 'lucide-react';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';

const propertyTypes = [
  {
    id: 'sfr',
    name: 'Single Family Homes',
    description: 'Spacious family homes with private yards and modern amenities',
    priceRange: '$525K - $2.5M',
    count: '350+',
    image: '/subcommunities/IMG_0737.JPG',
    features: ['3-6 Bedrooms', '2-4 Bathrooms', '1,800-4,500 sq ft', 'Private Yards'],
    icon: Home,
    gradient: 'from-blue-500 to-purple-600',
    badge: 'Most Popular',
    color: 'blue',
    stats: { appreciation: '4.5%', demand: 'High', inventory: 'Limited' }
  },
  {
    id: 'mf',
    name: 'Multi-Family',
    description: 'Townhomes and duplexes perfect for families and investors',
    priceRange: '$450K - $1.2M',
    count: '120+',
    image: '/subcommunities/IMG_0738.JPG',
    features: ['2-4 Bedrooms', '2-3 Bathrooms', '1,200-2,800 sq ft', 'Shared Amenities'],
    icon: Building2,
    gradient: 'from-green-500 to-teal-600',
    badge: 'Great Investment',
    color: 'green',
    stats: { appreciation: '3.8%', demand: 'Medium', inventory: 'Good' }
  },
  {
    id: 'tc',
    name: 'Townhomes & Condos',
    description: 'Low-maintenance living with community amenities',
    priceRange: '$400K - $900K',
    count: '80+',
    image: '/subcommunities/IMG_0739.JPG',
    features: ['1-3 Bedrooms', '1-2 Bathrooms', '800-2,200 sq ft', 'Community Pools'],
    icon: Building,
    gradient: 'from-purple-500 to-pink-600',
    badge: 'Low Maintenance',
    color: 'purple',
    stats: { appreciation: '3.2%', demand: 'Steady', inventory: 'Available' }
  }
];

export default function PropertyCategories() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Advanced V0 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-200/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-200/10 rounded-full blur-lg animate-pulse delay-300"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 font-medium mb-6 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Search className="w-5 h-5" />
            <span>Property Types</span>
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Property Type
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From luxurious single-family estates to sophisticated townhomes, discover the diverse 
            property options that define The Vistas Summerlin lifestyle.
          </p>
        </div>

        {/* Enhanced Property Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {propertyTypes.map((property, index) => {
            const IconComponent = property.icon;
            return (
              <div 
                key={property.id} 
                className="group relative"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Enhanced Badge */}
                {property.badge && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`bg-${property.color}-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-1`}>
                      <span>{property.badge}</span>
                      <Zap className="w-3 h-3 animate-pulse" />
                    </div>
                  </div>
                )}

                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50 h-full group-hover:scale-105">
                  {/* Enhanced Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Enhanced Icon Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${property.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Enhanced Content Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {property.name}
                      </h3>
                      <p className="text-lg text-white/90 group-hover:text-white transition-colors">
                        {property.count} Available
                      </p>
                    </div>

                    {/* Market Stats Overlay */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <div className="text-xs text-white/80">Appreciation</div>
                        <div className="text-sm font-bold text-white">{property.stats.appreciation}</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <div className="text-xs text-white/80">Demand</div>
                        <div className="text-sm font-bold text-white">{property.stats.demand}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content Section */}
                  <div className="p-8">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {property.description}
                    </p>
                    
                    {/* Enhanced Price Range */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                      <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform">
                        {property.priceRange}
                      </div>
                      <div className="text-sm text-gray-600">Price Range</div>
                    </div>
                    
                    {/* Enhanced Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <span>Key Features:</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                      </h4>
                      <ul className="space-y-3">
                        {property.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Enhanced CTA Button */}
                    <Link 
                      href={`/search?property-type=${property.id}`}
                      className={`group/btn w-full bg-gradient-to-r ${property.gradient} text-white text-center py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2`}
                    >
                      <span>View {property.name}</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      <Sparkles className="w-4 h-4 group-hover/btn:animate-pulse" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Advanced Search Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50 hover:shadow-3xl transition-all duration-300">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Find Your Perfect Match
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Use our advanced search to find properties that match your specific criteria, 
              lifestyle preferences, and investment goals.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <RealScoutAdvancedSearch />
          </div>

          {/* Enhanced Quick Stats */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">550+</div>
                <div className="text-gray-600">Total Properties</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 hover:bg-purple-100 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">28</div>
                <div className="text-gray-600">Subcommunities</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 hover:bg-green-100 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}