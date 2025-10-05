'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: '2024 Market Outlook: What to Expect in The Vistas Summerlin',
    excerpt: 'Discover the latest trends and predictions for the real estate market in our prestigious community.',
    category: 'Market Insights',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    image: '/subcommunities/IMG_0737.JPG',
    fallbackImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 2,
    title: 'Top 5 Amenities That Make The Vistas Summerlin Special',
    excerpt: 'From world-class golf courses to hiking trails, explore what makes our community unique.',
    category: 'Community',
    readTime: '4 min read',
    date: 'Dec 12, 2024',
    image: '/subcommunities/IMG_0738.JPG',
    fallbackImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 3,
    title: 'Home Buying Guide: Navigating The Vistas Summerlin Market',
    excerpt: 'Essential tips and strategies for buyers looking to purchase in our competitive market.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: 'Dec 10, 2024',
    image: '/subcommunities/IMG_0739.JPG',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center'
  }
];

export default function BlogPosts() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
            Latest Market Insights
          </h2>
          <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert analysis, market updates, and helpful guides 
            for The Vistas Summerlin real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-navy via-accent-blue to-secondary-gold">
                {/* Luxury Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-luxury-pattern-blog"></div>
                
                {/* Elegant Geometric Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/5 rounded-full blur-md"></div>
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-link-blue text-white px-4 py-2 rounded-full text-sm font-secondary font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-white/90 text-text-dark px-3 py-2 rounded text-sm font-secondary font-medium">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm font-secondary text-text-light mb-4">
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-primary font-medium text-text-dark mb-4 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-body font-secondary text-text-light mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-link-blue hover:text-primary-navy transition-all duration-300 text-lg font-secondary font-medium group"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white p-10 rounded-default shadow-lg mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
              Stay Updated with Market Insights
            </h3>
            <p className="text-xl font-secondary text-text-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the latest market updates, property alerts, and expert insights delivered 
              directly to your inbox.
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border border-light-gray rounded-default text-body font-secondary focus:outline-none focus:ring-2 focus:ring-link-blue focus:border-transparent"
                />
                <button className="bg-link-blue text-white px-8 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-sm font-secondary text-text-light mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center text-link-blue hover:text-primary-navy transition-all duration-300 text-lg font-secondary font-medium group"
          >
            View All Articles
            <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 