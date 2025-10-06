'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Star, Users, TrendingUp, Award, CheckCircle, Sparkles, Heart } from 'lucide-react';

export default function LocalSEOShowcase() {
  const [stats, setStats] = useState({
    googleRanking: 'Top 3',
    localVisibility: '95%',
    reviewCount: 150,
    averageRating: 4.9,
    responseTime: '< 2 hours',
    marketShare: '23%'
  });

  const localKeywords = [
    'The Vistas Summerlin real estate agent',
    'Summerlin luxury homes',
    'The Vistas homes for sale',
    'Las Vegas luxury real estate',
    'Summerlin real estate expert',
    'The Vistas community specialist'
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Google Business Profile Verified',
      description: 'Fully optimized and verified business profile',
      color: 'blue'
    },
    {
      icon: Star,
      title: '4.9 Star Rating',
      description: 'Consistently high client satisfaction',
      color: 'yellow'
    },
    {
      icon: TrendingUp,
      title: 'Top 3 Local Rankings',
      description: 'Dominating local search results',
      color: 'green'
    },
    {
      icon: Users,
      title: '150+ Happy Clients',
      description: 'Families who found their dream homes',
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* V0 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-300"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <MapPin className="w-5 h-5" />
            <span>Local SEO Excellence</span>
            <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Dominating
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Local Search Results
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            When families search for luxury real estate in The Vistas Summerlin, 
            Dr. Jan Duffy appears first - every time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Stats Section */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                Search Performance
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">{stats.googleRanking}</div>
                  <p className="text-blue-100">Google Ranking</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stats.localVisibility}</div>
                  <p className="text-blue-100">Local Visibility</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stats.marketShare}</div>
                  <p className="text-blue-100">Market Share</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stats.responseTime}</div>
                  <p className="text-blue-100">Response Time</p>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-400" />
                Target Keywords
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {localKeywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-all duration-300 hover:scale-105"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      achievement.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      achievement.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                      achievement.color === 'green' ? 'from-green-500 to-green-600' :
                      'from-purple-500 to-purple-600'
                    } rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-blue-100">
                        {achievement.description}
                      </p>
                    </div>
                    
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Work with The #1
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Local Real Estate Expert?
              </span>
            </h3>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 150+ families who chose the top-ranked real estate specialist 
              in The Vistas Summerlin community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025551234"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (702) 555-1234</span>
              </a>
              
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Start Your Journey</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
