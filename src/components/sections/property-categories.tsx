'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Building2, Building, Search, ArrowRight, CheckCircle } from 'lucide-react';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';

const propertyTypes = [
  {
    id: 'sfr',
    name: 'Single Family Homes',
    description: 'Spacious family homes with private yards and modern amenities',
    priceRange: '$525K - $2.5M',
    count: '350+',
    image: '/subcommunities/Santaluz.jpg',
    features: ['3-6 Bedrooms', '2-4 Bathrooms', '1,800-4,500 sq ft', 'Private Yards'],
    icon: Home,
    gradient: 'from-accent-blue to-primary-navy',
    badge: 'Most Popular'
  },
  {
    id: 'mf',
    name: 'Multi-Family',
    description: 'Townhomes and duplexes perfect for families and investors',
    priceRange: '$450K - $1.2M',
    count: '120+',
    image: '/subcommunities/IMG_0737.JPG',
    features: ['2-4 Bedrooms', '2-3 Bathrooms', '1,200-2,800 sq ft', 'Shared Amenities'],
    icon: Building2,
    gradient: 'from-success-green to-accent-blue',
    badge: 'Great Investment'
  },
  {
    id: 'tc',
    name: 'Townhomes & Condos',
    description: 'Low-maintenance living with community amenities',
    priceRange: '$400K - $900K',
    count: '80+',
    image: '/subcommunities/IMG_0738.JPG',
    features: ['1-3 Bedrooms', '1-2 Bathrooms', '800-2,200 sq ft', 'Community Pools'],
    icon: Building,
    gradient: 'from-secondary-gold to-accent-blue',
    badge: 'Low Maintenance'
  }
];

export default function PropertyCategories() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-off-white to-light-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary-navy rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent-blue rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-secondary-gold/10 border border-secondary-gold/20 rounded-full px-4 py-2 text-secondary-gold font-medium mb-6">
            <Search className="w-4 h-4" />
            <span>Property Types</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-primary font-bold text-primary-navy mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-secondary-gold">Property Type</span>
          </h2>
          
          <p className="text-xl lg:text-2xl font-secondary font-light text-text-light max-w-4xl mx-auto leading-relaxed">
            From luxurious single-family estates to sophisticated townhomes, discover the diverse 
            property options that define The Vistas Summerlin lifestyle.
          </p>
        </div>

        {/* Property Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {propertyTypes.map((property) => {
            const IconComponent = property.icon;
            return (
              <div 
                key={property.id} 
                className="group relative"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Badge */}
                {property.badge && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-secondary-gold text-primary-navy px-3 py-1 rounded-full text-sm font-semibold">
                      {property.badge}
                    </div>
                  </div>
                )}

                <div className="card-luxury h-full overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${property.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-primary font-bold text-white mb-2">
                        {property.name}
                      </h3>
                      <p className="text-lg font-secondary text-white/90">
                        {property.count} Available
                      </p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <p className="text-lg font-secondary text-text-light mb-6 leading-relaxed">
                      {property.description}
                    </p>
                    
                    {/* Price Range */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-accent-blue/10 to-primary-navy/10 rounded-xl border border-accent-blue/20">
                      <div className="text-3xl font-primary font-bold text-primary-navy mb-1">
                        {property.priceRange}
                      </div>
                      <div className="text-sm font-secondary text-text-light">
                        Price Range
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-primary font-semibold text-primary-navy mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {property.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-body font-secondary text-text-light">
                            <CheckCircle className="w-5 h-5 text-success-green mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA Button */}
                    <Link 
                      href={`/search?property-type=${property.id}`}
                      className="group/btn w-full bg-gradient-to-r from-primary-navy to-accent-blue text-white text-center py-4 rounded-xl text-lg font-secondary font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
                    >
                      View {property.name}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced Search Section */}
        <div className="card-luxury p-12">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-gold to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-primary font-bold text-primary-navy mb-4">
              Find Your Perfect Match
            </h3>
            <p className="text-xl font-secondary font-light text-text-light max-w-3xl mx-auto leading-relaxed">
              Use our advanced search to find properties that match your specific criteria, 
              lifestyle preferences, and investment goals.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <RealScoutAdvancedSearch />
          </div>

          {/* Quick Stats */}
          <div className="mt-12 pt-12 border-t border-medium-gray">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-primary font-bold text-primary-navy mb-2">550+</div>
                <div className="text-text-light font-secondary">Total Properties</div>
              </div>
              <div>
                <div className="text-3xl font-primary font-bold text-accent-blue mb-2">28</div>
                <div className="text-text-light font-secondary">Subcommunities</div>
              </div>
              <div>
                <div className="text-3xl font-primary font-bold text-success-green mb-2">98%</div>
                <div className="text-text-light font-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 