'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Mail, BookOpen, TrendingUp, Users, Star } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '2024 Market Outlook: What to Expect in The Vistas Summerlin',
    excerpt: 'Discover the latest trends and predictions for the real estate market in our prestigious community.',
    category: 'Market Insights',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    image: '/subcommunities/IMG_0737.JPG',
    gradient: 'from-blue-500 to-purple-600',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Top 5 Amenities That Make The Vistas Summerlin Special',
    excerpt: 'From world-class golf courses to hiking trails, explore what makes our community unique.',
    category: 'Community',
    readTime: '4 min read',
    date: 'Dec 12, 2024',
    image: '/subcommunities/IMG_0738.JPG',
    gradient: 'from-green-500 to-teal-600',
    color: 'green'
  },
  {
    id: 3,
    title: 'Home Buying Guide: Navigating The Vistas Summerlin Market',
    excerpt: 'Essential tips and strategies for buyers looking to purchase in our competitive market.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: 'Dec 10, 2024',
    image: '/subcommunities/IMG_0739.JPG',
    gradient: 'from-purple-500 to-pink-600',
    color: 'purple'
  }
];

export default function BlogPosts() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* V0 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 font-medium mb-6 shadow-lg">
            <BookOpen className="w-5 h-5" />
            <span>Latest Market Insights</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stay Informed with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Analysis</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert analysis, market updates, and helpful guides 
            for The Vistas Summerlin real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className={`bg-${post.color}-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                    {post.category}
                  </span>
                </div>
                
                {/* Read Time */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-all duration-300 text-lg font-semibold group/link"
                >
                  Read More
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Updated with Market Insights
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the latest market updates, property alerts, and expert insights delivered 
              directly to your inbox.
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Market Accuracy</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}