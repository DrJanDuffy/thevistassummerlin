import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';

export const metadata: Metadata = {
  title: 'Market Analysis - The Vistas Summerlin Real Estate Market',
  description: 'Get detailed market insights, trends, and analysis for The Vistas Summerlin real estate market. View current prices, sales data, and market forecasts.',
  openGraph: {
    title: 'Market Analysis - The Vistas Summerlin Real Estate Market',
    description: 'Comprehensive market analysis and trends for The Vistas Summerlin area.',
    url: 'https://www.thevistassummerlin.com/market-analysis',
    type: 'website',
  },
};

const marketStats = [
  {
    title: 'Median Home Price',
    value: '$875,000',
    change: '+5.2%',
    changeType: 'positive',
    description: 'vs. last year'
  },
  {
    title: 'Days on Market',
    value: '45',
    change: '-12%',
    changeType: 'positive',
    description: 'vs. last year'
  },
  {
    title: 'Homes Sold',
    value: '156',
    change: '+8.3%',
    changeType: 'positive',
    description: 'this quarter'
  },
  {
    title: 'Inventory',
    value: '89',
    change: '-15%',
    changeType: 'negative',
    description: 'vs. last month'
  }
];

const marketTrends = [
  {
    period: 'Q1 2024',
    price: '$850K',
    sales: 42,
    days: 52
  },
  {
    period: 'Q2 2024',
    price: '$865K',
    sales: 38,
    days: 48
  },
  {
    period: 'Q3 2024',
    price: '$875K',
    sales: 45,
    days: 45
  },
  {
    period: 'Q4 2024',
    price: '$890K',
    sales: 31,
    days: 42
  }
];

const marketInsights = [
  {
    title: '2024 Market Outlook',
    excerpt: 'Strong buyer demand continues to drive prices upward while inventory remains constrained.',
    readTime: '5 min read',
    date: 'January 15, 2024'
  },
  {
    title: 'Investment Opportunities in The Vistas',
    excerpt: 'Discover why The Vistas Summerlin is becoming a top choice for real estate investors.',
    readTime: '7 min read',
    date: 'January 10, 2024'
  },
  {
    title: 'Seasonal Market Trends',
    excerpt: 'Understanding how seasonal changes affect property values and sales activity.',
    readTime: '4 min read',
    date: 'January 5, 2024'
  }
];

export default function MarketAnalysisPage() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
                Market Analysis
              </h1>
              <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
                Comprehensive real estate market insights and trends for The Vistas Summerlin area
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="py-4 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm font-secondary text-text-light">
              <Link href="/" className="hover:text-link-blue transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-text-dark">Market Analysis</span>
            </nav>
          </div>
        </section>

        {/* Key Market Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Current Market Statistics
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Stay informed with the latest real estate market data and trends for 
                The Vistas Summerlin area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {marketStats.map((stat, index) => (
                <div key={index} className="bg-light-gray p-8 rounded-default text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-lg font-primary font-medium text-text-dark mb-4">
                    {stat.title}
                  </h3>
                  <div className="text-4xl font-primary font-medium text-primary-navy mb-3">
                    {stat.value}
                  </div>
                  <div className={`text-lg font-secondary mb-2 ${
                    stat.changeType === 'positive' ? 'text-success-green' : 'text-error'
                  }`}>
                    {stat.change}
                  </div>
                  <div className="text-sm font-secondary text-text-light">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Market Trends & Analysis
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Track quarterly performance and understand market dynamics
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div className="bg-white p-8 rounded-default shadow-lg">
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-8">
                  Price Trends
                </h3>
                <div className="space-y-6">
                  {marketTrends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-light-gray rounded-default">
                      <div className="text-lg font-secondary text-text-dark">
                        {trend.period}
                      </div>
                      <div className="text-xl font-primary font-medium text-link-blue">
                        {trend.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-default shadow-lg">
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-8">
                  Sales Activity
                </h3>
                <div className="space-y-6">
                  {marketTrends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-light-gray rounded-default">
                      <div className="text-lg font-secondary text-text-dark">
                        {trend.period}
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-sm font-secondary text-text-light">
                          {trend.sales} sales
                        </div>
                        <div className="text-sm font-secondary text-text-light">
                          {trend.days} days avg
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-navy text-white p-10 rounded-default">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-primary font-medium mb-6">
                    Market Analysis
                  </h3>
                  <p className="text-xl font-secondary mb-8 opacity-90 leading-relaxed">
                    The Vistas Summerlin market continues to show strong performance with increasing 
                    home values and decreasing days on market. This indicates a healthy, competitive 
                    market favorable to sellers while still offering opportunities for buyers.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-green rounded-full mr-4"></div>
                      <span className="text-lg font-secondary">Strong buyer demand</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-green rounded-full mr-4"></div>
                      <span className="text-lg font-secondary">Limited inventory driving prices</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-green rounded-full mr-4"></div>
                      <span className="text-lg font-secondary">High-quality properties in demand</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-8 rounded-default">
                  <h4 className="text-2xl font-primary font-medium mb-6">
                    Get Your Market Report
                  </h4>
                  <p className="text-lg font-secondary mb-8 opacity-90 leading-relaxed">
                    Receive a detailed market analysis for your specific property or area of interest.
                  </p>
                  <button className="w-full bg-white text-primary-navy py-4 rounded-default text-lg font-secondary font-medium hover:bg-light-gray transition-all duration-300 transform hover:scale-105">
                    Request Market Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Latest Market Insights
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Expert analysis and market updates to help you make informed decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketInsights.map((insight, index) => (
                <div key={index} className="bg-white rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
                  <div className="h-48 bg-light-gray"></div>
                  <div className="p-8">
                    <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                      {insight.title}
                    </h3>
                    <p className="text-body font-secondary text-text-light mb-6 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm font-secondary text-text-light mb-6">
                      <span>{insight.readTime}</span>
                      <span>{insight.date}</span>
                    </div>
                    <button className="w-full bg-link-blue text-white py-3 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Ready to Act on Market Insights?
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto mb-12 leading-relaxed">
                Use our market analysis to find the perfect property in The Vistas Summerlin
              </p>
              
              {/* RealScout Advanced Search */}
              <div className="max-w-2xl mx-auto mb-12">
                <RealScoutAdvancedSearch />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/communities"
                  className="bg-link-blue text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Communities
                </Link>
                <a
                  href="/contact"
                  className="border-2 border-link-blue text-link-blue px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get Market Report
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 