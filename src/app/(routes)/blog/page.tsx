import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import BlogPosts from '@/components/sections/blog-posts';
import { BookOpen, TrendingUp, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Vistas Summerlin Blog - Real Estate Insights & Market Updates',
  description: 'Stay informed with expert analysis, market updates, and helpful guides for The Vistas Summerlin real estate market from Dr. Jan Duffy.',
  openGraph: {
    title: 'The Vistas Summerlin Blog - Real Estate Insights',
    description: 'Expert real estate analysis and market insights for The Vistas Summerlin community.',
    url: 'https://www.thevistassummerlin.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-gray-800 bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        {/* Blog Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg">
              <BookOpen className="w-5 h-5" />
              <span>Real Estate Insights</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Vistas Summerlin
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Real Estate Blog</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Expert analysis, market updates, and insider insights from Dr. Jan Duffy, 
              your trusted real estate professional in The Vistas Summerlin.
            </p>
          </div>
        </section>

        {/* Blog Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Market Accuracy</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}
