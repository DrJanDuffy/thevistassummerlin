import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import BlogPosts from '@/components/sections/blog-posts';
import { BookOpen, TrendingUp, Users, Star, Zap, Sparkles, Heart, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Vistas Summerlin Blog - Real Estate Insights & Market Updates',
  description: 'Stay informed with expert analysis, market updates, and helpful guides for The Vistas Summerlin real estate market from Dr. Jan Duffy.',
  openGraph: {
    title: 'The Vistas Summerlin Blog - Real Estate Insights',
    description: 'Expert real estate analysis and market insights for The Vistas Summerlin community.',
    url: 'https://www.thevistassummerlin.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-gray-800 bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        {/* Enhanced Blog Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Advanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-300"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <BookOpen className="w-5 h-5" />
              <span>Real Estate Insights</span>
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Vistas Summerlin
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real Estate Blog
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Expert analysis, market updates, and insider insights from Dr. Jan Duffy, 
              your trusted real estate professional in The Vistas Summerlin.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-300 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <div className="text-blue-200 text-sm">Market Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="w-6 h-6 text-green-300 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="w-6 h-6 text-purple-300 group-hover:scale-110 transition-transform" />
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Blog Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-gray-600">Market Accuracy</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 hover:bg-green-100 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 hover:bg-purple-100 transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <BlogPosts />

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let Dr. Jan Duffy guide you through The Vistas Summerlin's most prestigious communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/search"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>Start Your Search</span>
                  <ArrowRight className="w-5 h-5" />
                  <Zap className="w-4 h-4 animate-pulse" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>Meet Dr. Jan Duffy</span>
                  <Award className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}