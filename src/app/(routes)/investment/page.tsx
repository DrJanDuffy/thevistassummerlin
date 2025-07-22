import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';

export const metadata: Metadata = {
  title: 'Investment Opportunities - The Vistas Summerlin Real Estate',
  description: 'Discover investment opportunities in The Vistas Summerlin. Learn about market performance, ROI potential, and investment strategies.',
  openGraph: {
    title: 'Investment Opportunities - The Vistas Summerlin Real Estate',
    description: 'Comprehensive investment analysis and opportunities in The Vistas Summerlin.',
    url: 'https://www.thevistassummerlin.com/investment',
    type: 'website',
  },
};

const investmentStats = [
  {
    title: 'Average ROI',
    value: '8.5%',
    change: '+2.1%',
    changeType: 'positive',
    description: 'Annual return on investment'
  },
  {
    title: 'Price Appreciation',
    value: '+5.2%',
    change: '+0.8%',
    changeType: 'positive',
    description: 'Year-over-year growth'
  },
  {
    title: 'Rental Yield',
    value: '4.8%',
    change: '+0.3%',
    changeType: 'positive',
    description: 'Average rental return'
  },
  {
    title: 'Days on Market',
    value: '45',
    change: '-12%',
    changeType: 'positive',
    description: 'Average time to sell'
  }
];

const investmentOpportunities = [
  {
    id: 'luxury-rentals',
    title: 'Luxury Rental Properties',
    description: 'High-end homes perfect for executive rentals and vacation stays',
    priceRange: '$800K - $2.5M',
    roi: '6.5% - 8.5%',
    image: '/subcommunities/Santaluz.jpg',
    features: ['Executive Rentals', 'Vacation Rentals', 'High-End Amenities', 'Premium Location']
  },
  {
    id: 'multi-family',
    title: 'Multi-Family Investments',
    description: 'Townhomes and duplexes offering excellent cash flow potential',
    priceRange: '$450K - $1.2M',
    roi: '7.2% - 9.1%',
    image: '/subcommunities/IMG_0737.JPG',
    features: ['Cash Flow Focus', 'Lower Entry Cost', 'Diversified Risk', 'Family Renters']
  },
  {
    id: 'fix-and-flip',
    title: 'Fix & Flip Opportunities',
    description: 'Properties with renovation potential for quick profit',
    priceRange: '$400K - $900K',
    roi: '15% - 25%',
    image: '/subcommunities/IMG_0738.JPG',
    features: ['Renovation Potential', 'Quick Turnaround', 'High Profit Margins', 'Market Demand']
  },
  {
    id: 'long-term-hold',
    title: 'Long-Term Hold Strategy',
    description: 'Properties for long-term appreciation and wealth building',
    priceRange: '$525K - $1.8M',
    roi: '5.5% - 7.5%',
    image: '/subcommunities/IMG_0739.JPG',
    features: ['Appreciation Focus', 'Stable Cash Flow', 'Tax Benefits', 'Wealth Building']
  }
];

const marketTrends = [
  {
    year: '2020',
    appreciation: '+3.2%',
    rentalGrowth: '+2.8%',
    marketActivity: 'Stable'
  },
  {
    year: '2021',
    appreciation: '+4.1%',
    rentalGrowth: '+3.5%',
    marketActivity: 'Growing'
  },
  {
    year: '2022',
    appreciation: '+4.8%',
    rentalGrowth: '+4.2%',
    marketActivity: 'Strong'
  },
  {
    year: '2023',
    appreciation: '+5.2%',
    rentalGrowth: '+4.8%',
    marketActivity: 'Robust'
  },
  {
    year: '2024',
    appreciation: '+5.8%',
    rentalGrowth: '+5.1%',
    marketActivity: 'Excellent'
  }
];

const investmentTips = [
  {
    title: 'Location Analysis',
    excerpt: 'Understanding the importance of location in real estate investment decisions.',
    readTime: '6 min read',
    date: 'January 20, 2024'
  },
  {
    title: 'ROI Calculation Methods',
    excerpt: 'Different methods to calculate return on investment for real estate properties.',
    readTime: '8 min read',
    date: 'January 18, 2024'
  },
  {
    title: 'Tax Benefits for Investors',
    excerpt: 'Maximizing tax advantages available to real estate investors.',
    readTime: '7 min read',
    date: 'January 15, 2024'
  }
];

export default function InvestmentPage() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
                Investment Opportunities
              </h1>
              <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
                Discover profitable real estate investment opportunities in The Vistas Summerlin
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
              <span className="text-text-dark">Investment</span>
            </nav>
          </div>
        </section>

        {/* Investment Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Why Invest in The Vistas Summerlin?
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                The Vistas Summerlin offers exceptional investment potential with strong market fundamentals, 
                consistent appreciation, and diverse investment opportunities for every strategy.
              </p>
            </div>

            {/* Investment Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {investmentStats.map((stat, index) => (
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

        {/* Investment Opportunities */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Investment Strategies
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Choose from multiple investment strategies tailored to your goals and risk tolerance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {investmentOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="bg-white rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
                  <div className="relative h-64 bg-light-gray">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-success-green text-white px-3 py-1 rounded-full text-sm font-secondary font-medium">
                        {opportunity.roi} ROI
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-primary font-medium text-white mb-2">
                        {opportunity.title}
                      </h3>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                        <span className="text-sm font-secondary text-white font-medium">
                          {opportunity.priceRange}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-body font-secondary text-text-light mb-6 leading-relaxed">
                      {opportunity.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-primary font-medium text-text-dark mb-4">
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {opportunity.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-body font-secondary text-text-light">
                            <svg className="w-5 h-5 text-success-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-link-blue text-white py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105">
                      Explore {opportunity.title}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Performance */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Market Performance History
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Track the consistent growth and performance of The Vistas Summerlin real estate market
              </p>
            </div>

            <div className="bg-light-gray p-8 rounded-default">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-text-light">
                      <th className="text-left py-4 px-6 font-primary font-medium text-text-dark">Year</th>
                      <th className="text-left py-4 px-6 font-primary font-medium text-text-dark">Price Appreciation</th>
                      <th className="text-left py-4 px-6 font-primary font-medium text-text-dark">Rental Growth</th>
                      <th className="text-left py-4 px-6 font-primary font-medium text-text-dark">Market Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketTrends.map((trend, index) => (
                      <tr key={index} className="border-b border-text-light/20">
                        <td className="py-4 px-6 font-secondary text-text-dark">{trend.year}</td>
                        <td className="py-4 px-6 font-secondary text-success-green font-medium">{trend.appreciation}</td>
                        <td className="py-4 px-6 font-secondary text-link-blue font-medium">{trend.rentalGrowth}</td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-secondary font-medium ${
                            trend.marketActivity === 'Excellent' ? 'bg-success-green text-white' :
                            trend.marketActivity === 'Robust' ? 'bg-link-blue text-white' :
                            trend.marketActivity === 'Strong' ? 'bg-primary-navy text-white' :
                            'bg-light-gray text-text-dark'
                          }`}>
                            {trend.marketActivity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Analysis */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-navy text-white p-10 rounded-default">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-primary font-medium mb-6">
                    Investment Analysis
                  </h3>
                  <p className="text-xl font-secondary mb-8 opacity-90 leading-relaxed">
                    The Vistas Summerlin continues to demonstrate strong investment fundamentals with 
                    consistent appreciation, stable rental demand, and excellent market liquidity. 
                    Our analysis shows continued growth potential across all property types.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-green rounded-full mr-4"></div>
                      <span className="text-lg font-secondary">Strong market fundamentals</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-green rounded-full mr-4"></div>
                      <span className="text-lg font-secondary">Diverse investment options</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-success-green rounded-full mr-4"></div>
                      <span className="text-lg font-secondary">Excellent liquidity</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-8 rounded-default">
                  <h4 className="text-2xl font-primary font-medium mb-6">
                    Get Investment Report
                  </h4>
                  <p className="text-lg font-secondary mb-8 opacity-90 leading-relaxed">
                    Receive a detailed investment analysis and market report for The Vistas Summerlin area.
                  </p>
                  <button className="w-full bg-white text-primary-navy py-4 rounded-default text-lg font-secondary font-medium hover:bg-light-gray transition-all duration-300 transform hover:scale-105">
                    Request Investment Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Investment Resources
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Expert insights and analysis to help you make informed investment decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentTips.map((tip, index) => (
                <div key={index} className="bg-light-gray rounded-default shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-gray">
                  <div className="h-48 bg-light-gray"></div>
                  <div className="p-8">
                    <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                      {tip.title}
                    </h3>
                    <p className="text-body font-secondary text-text-light mb-6 leading-relaxed">
                      {tip.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm font-secondary text-text-light mb-6">
                      <span>{tip.readTime}</span>
                      <span>{tip.date}</span>
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
                Ready to Invest in The Vistas Summerlin?
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto mb-12 leading-relaxed">
                Start your investment journey by exploring available properties in our community
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
                  Contact Investment Team
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