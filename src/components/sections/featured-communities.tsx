'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine } from 'lucide-react';

const featuredCommunities = [
  {
    id: 'santaluz',
    name: 'Santaluz',
    description: 'Luxury homes with mountain views and resort-style amenities',
    priceRange: '$800K - $2.5M',
    homesAvailable: 12,
    image: '/subcommunities/Santaluz.jpg',
    features: ['Mountain Views', 'Resort Pool', 'Golf Course', 'Hiking Trails'],
    rating: 4.9,
    population: '2,400+',
    icon: Mountain,
    gradient: 'from-secondary-gold to-accent-blue',
    badge: 'Premium'
  },
  {
    id: 'red-rock',
    name: 'Red Rock Canyon',
    description: 'Stunning homes with panoramic views of the iconic Red Rock Canyon',
    priceRange: '$650K - $1.8M',
    homesAvailable: 8,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Canyon Views', 'Private Patios', 'Modern Design', 'Community Center'],
    rating: 4.8,
    population: '1,800+',
    icon: Mountain,
    gradient: 'from-accent-blue to-primary-navy',
    badge: 'Exclusive'
  },
  {
    id: 'summerlin-park',
    name: 'Summerlin Park',
    description: 'Family-friendly community with parks, schools, and shopping nearby',
    priceRange: '$525K - $1.2M',
    homesAvailable: 25,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Parks & Playgrounds', 'Top Schools', 'Shopping Center', 'Walking Trails'],
    rating: 4.7,
    population: '3,200+',
    icon: TreePine,
    gradient: 'from-success-green to-accent-blue',
    badge: 'Family'
  }
];

export default function FeaturedCommunities() {
  const [hoveredCommunity, setHoveredCommunity] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-accent-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Featured Communities</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight">
            Discover Our Most
            <span className="block text-secondary-gold">Prestigious Communities</span>
          </h2>
          
          <p className="text-xl lg:text-2xl font-secondary font-light text-white/90 max-w-4xl mx-auto leading-relaxed">
            Experience the finest lifestyle options across our most sought-after subcommunities, 
            each offering unique amenities and unparalleled quality of life.
          </p>
        </div>

        {/* Featured Communities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredCommunities.map((community) => {
            const IconComponent = community.icon;
            return (
              <div 
                key={community.id} 
                className="group relative"
                onMouseEnter={() => setHoveredCommunity(community.id)}
                onMouseLeave={() => setHoveredCommunity(null)}
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-secondary-gold text-primary-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {community.badge}
                  </div>
                </div>

                <div className="card-luxury h-full overflow-hidden bg-white/95 backdrop-blur-sm border-white/20">
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={community.image}
                      alt={community.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${community.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(community.rating) ? 'text-secondary-gold fill-current' : 'text-white/40'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-white/90 text-sm font-medium">{community.rating}</span>
                      </div>
                      
                      <h3 className="text-2xl font-primary font-bold text-white mb-3">
                        {community.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-white/90">
                            <Home className="w-4 h-4" />
                            <span className="text-sm font-medium">{community.homesAvailable} Available</span>
                          </div>
                          <div className="flex items-center space-x-1 text-white/90">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">{community.population}</span>
                          </div>
                        </div>
                        
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                          <span className="text-sm font-semibold text-white">
                            {community.priceRange}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <p className="text-lg font-secondary text-text-light mb-6 leading-relaxed">
                      {community.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-primary font-semibold text-primary-navy mb-4">
                        Community Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {community.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-body font-secondary text-text-light">
                            <CheckCircle className="w-4 h-4 text-success-green mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Link 
                        href={`/communities/${community.id}`}
                        className="flex-1 bg-gradient-to-r from-primary-navy to-accent-blue text-white text-center py-3 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                      >
                        View Community
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link 
                        href={`/search?community=${community.id}`}
                        className="flex-1 bg-light-gray text-primary-navy text-center py-3 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-medium-gray"
                      >
                        View Homes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Communities CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-primary font-bold text-white mb-4">
              Explore All 28 Communities
            </h3>
            <p className="text-white/90 font-secondary mb-6 leading-relaxed">
              Discover the perfect community that matches your lifestyle and preferences
            </p>
            <Link 
              href="/communities"
              className="btn-gold inline-flex items-center"
            >
              View All Communities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 