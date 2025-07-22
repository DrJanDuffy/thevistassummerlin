'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '2024 Market Outlook: What to Expect in The Vistas Summerlin',
    excerpt: 'Discover the latest trends and predictions for the real estate market in our prestigious community.',
    category: 'Market Insights',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    image: '/subcommunities/IMG_0737.JPG'
  },
  {
    id: 2,
    title: 'Top 5 Amenities That Make The Vistas Summerlin Special',
    excerpt: 'From world-class golf courses to hiking trails, explore what makes our community unique.',
    category: 'Community',
    readTime: '4 min read',
    date: 'Dec 12, 2024',
    image: '/subcommunities/IMG_0738.JPG'
  },
  {
    id: 3,
    title: 'Home Buying Guide: Navigating The Vistas Summerlin Market',
    excerpt: 'Essential tips and strategies for buyers looking to purchase in our competitive market.',
    category: 'Buying Guide',
    readTime: '7 min read',
    date: 'Dec 10, 2024',
    image: '/subcommunities/Santaluz.jpg'
  }
];

export default function BlogPosts() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-primary font-medium text-text-dark mb-4">
            Latest Market Insights
          </h2>
          <p className="text-body font-secondary text-text-light max-w-2xl mx-auto">
            Stay informed with expert analysis, market updates, and helpful guides 
            for The Vistas Summerlin real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-default shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-light-gray">
                <div className="absolute top-4 left-4">
                  <span className="bg-link-blue text-white px-3 py-1 rounded-full text-xs font-secondary">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-text-dark px-2 py-1 rounded text-xs font-secondary">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm font-secondary text-text-light mb-3">
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-h3 font-primary font-medium text-text-dark mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-body font-secondary text-text-light mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-link-blue hover:text-primary-navy transition-colors duration-300 text-body font-secondary font-medium"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white p-8 rounded-default shadow-card">
          <div className="text-center">
            <h3 className="text-h3 font-primary font-medium text-text-dark mb-4">
              Stay Updated with Market Insights
            </h3>
            <p className="text-body font-secondary text-text-light mb-6 max-w-2xl mx-auto">
              Get the latest market updates, property alerts, and expert insights delivered 
              directly to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-light-gray rounded-default text-body font-secondary focus:outline-none focus:ring-2 focus:ring-link-blue focus:border-transparent"
                />
                <button className="bg-link-blue text-white px-6 py-3 rounded-default text-body font-secondary font-medium hover:bg-primary-navy transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs font-secondary text-text-light mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-link-blue hover:text-primary-navy transition-colors duration-300 text-body font-secondary font-medium"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 