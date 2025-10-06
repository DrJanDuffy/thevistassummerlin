'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Home, Users, Star, ArrowRight, CheckCircle, Mountain, TreePine, Sparkles, Heart, Zap, Award, TrendingUp } from 'lucide-react';

const featuredCommunities = [
  {
    id: 'santaluz',
    name: 'Santaluz',
    description: 'Luxury homes with mountain views and resort-style amenities',
    priceRange: '$800K - $2.5M',
    homesAvailable: 12,
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Mountain Views', 'Resort Pool', 'Golf Course', 'Hiking Trails'],
    rating: 4.9,
    population: '2,400+',
    icon: Mountain,
    gradient: 'from-blue-500 to-purple-600',
    badge: 'Premium',
    color: 'blue',
    stats: { appreciation: '5.2%', walkScore: 78, schoolRating: 9.2 }
  },
  {
    id: 'red-rock',
    name: 'Red Rock Canyon',
    description: 'Stunning homes with panoramic views of the iconic Red Rock Canyon',
    priceRange: '$650K - $1.8M',
    homesAvailable: 8,
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Canyon Views', 'Private Patios', 'Modern Design', 'Community Center'],
    rating: 4.8,
    population: '1,800+',
    icon: Mountain,
    gradient: 'from-green-500 to-teal-600',
    badge: 'Exclusive',
    color: 'green',
    stats: { appreciation: '4.8%', walkScore: 65, schoolRating: 8.9 }
  },
  {
    id: 'summerlin-park',
    name: 'Summerlin Park',
    description: 'Family-friendly community with parks, schools, and shopping nearby',
    priceRange: '$525K - $1.2M',
    homesAvailable: 25,
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Parks & Playgrounds', 'Top Schools', 'Shopping Center', 'Walking Trails'],
    rating: 4.7,
    population: '3,200+',
    icon: TreePine,
    gradient: 'from-purple-500 to-pink-600',
    badge: 'Family',
    color: 'purple',
    stats: { appreciation: '4.1%', walkScore: 82, schoolRating: 9.5 }
  }
];

export default function FeaturedCommunities() {
  const [hoveredCommunity, setHoveredCommunity] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Advanced V0 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-300"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <MapPin className="w-5 h-5" />
            <span>Featured Communities</span>
            <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Our Most
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prestigious Communities
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Experience the finest lifestyle options across our most sought-after subcommunities, 
            each offering unique amenities and unparalleled quality of life.
          </p>
        </div>

        {/* Enhanced Featured Communities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredCommunities.map((community, index) => {
            const IconComponent = community.icon;
            return (
              <div 
                key={community.id} 
                className="group relative"
                onMouseEnter={() => setHoveredCommunity(community.id)}
                onMouseLeave={() => setHoveredCommunity(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Enhanced Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className={`bg-${community.color}-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-1`}>
                    <span>{community.badge}</span>
                    <Zap className="w-3 h-3 animate-pulse" />
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/50 h-full group-hover:scale-105">
                  {/* Enhanced Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={community.image}
                      alt={community.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Enhanced Icon Overlay */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${community.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Enhanced Content Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(community.rating) ? 'text-yellow-400 fill-current' : 'text-white/40'} group-hover:scale-110 transition-transform`} 
                            />
                          ))}
                        </div>
                        <span className="text-white/90 text-sm font-medium group-hover:text-white transition-colors">{community.rating}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {community.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-white/90 group-hover:text-white transition-colors">
                            <Home className="w-4 h-4" />
                            <span className="text-sm font-medium">{community.homesAvailable} Available</span>
                          </div>
                          <div className="flex items-center space-x-1 text-white/90 group-hover:text-white transition-colors">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">{community.population}</span>
                          </div>
                        </div>
                        
                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
                          <span className="text-sm font-semibold text-white">
                            {community.priceRange}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Market Stats Overlay */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 hover:bg-white/30 transition-all duration-300">
                        <div className="text-xs text-white/80">Appreciation</div>
                        <div className="text-sm font-bold text-white">{community.stats.appreciation}</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 hover:bg-white/30 transition-all duration-300">
                        <div className="text-xs text-white/80">Walk Score</div>
                        <div className="text-sm font-bold text-white">{community.stats.walkScore}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content Section */}
                  <div className="p-8">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {community.description}
                    </p>
                    
                    {/* Enhanced Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <span>Community Features:</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {community.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced CTA Buttons */}
                    <div className="flex gap-3">
                      <Link 
                        href={`/communities/${community.id}`}
                        className={`flex-1 bg-gradient-to-r ${community.gradient} text-white text-center py-3 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                      >
                        <span>View Community</span>
                        <ArrowRight className="w-4 h-4" />
                        <Sparkles className="w-3 h-3 animate-pulse" />
                      </Link>
                      <Link 
                        href={`/search?community=${community.id}`}
                        className="flex-1 bg-gray-100 text-gray-900 text-center py-3 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200 hover:bg-gray-200 flex items-center justify-center space-x-2"
                      >
                        <span>View Homes</span>
                        <Home className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced View All Communities CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Explore All 28 Communities
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Discover the perfect community that matches your lifestyle and preferences
            </p>
            <Link 
              href="/communities"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>View All Communities</span>
              <ArrowRight className="w-5 h-5" />
              <Zap className="w-4 h-4 animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}