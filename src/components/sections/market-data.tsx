'use client';

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

export default function MarketDataSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-primary font-medium text-text-dark mb-4">
            Current Market Insights
          </h2>
          <p className="text-body font-secondary text-text-light max-w-2xl mx-auto">
            Stay informed with the latest real estate market data and trends for 
            The Vistas Summerlin area.
          </p>
        </div>

        {/* Key Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <div key={index} className="bg-light-gray p-6 rounded-default text-center">
              <h3 className="text-body font-primary font-medium text-text-dark mb-2">
                {stat.title}
              </h3>
              <div className="text-3xl font-primary font-medium text-primary-navy mb-2">
                {stat.value}
              </div>
              <div className={`text-sm font-secondary mb-1 ${
                stat.changeType === 'positive' ? 'text-success-green' : 'text-error'
              }`}>
                {stat.change}
              </div>
              <div className="text-xs font-secondary text-text-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Market Trends Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-light-gray p-6 rounded-default">
            <h3 className="text-h3 font-primary font-medium text-text-dark mb-6">
              Price Trends
            </h3>
            <div className="space-y-4">
              {marketTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-body font-secondary text-text-dark">
                    {trend.period}
                  </div>
                  <div className="text-body font-primary font-medium text-link-blue">
                    {trend.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-light-gray p-6 rounded-default">
            <h3 className="text-h3 font-primary font-medium text-text-dark mb-6">
              Sales Activity
            </h3>
            <div className="space-y-4">
              {marketTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-body font-secondary text-text-dark">
                    {trend.period}
                  </div>
                  <div className="flex items-center space-x-4">
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

        {/* Market Analysis */}
        <div className="mt-16 bg-primary-navy text-white p-8 rounded-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-h3 font-primary font-medium mb-4">
                Market Analysis
              </h3>
              <p className="text-body font-secondary mb-6 opacity-90">
                The Vistas Summerlin market continues to show strong performance with increasing 
                home values and decreasing days on market. This indicates a healthy, competitive 
                market favorable to sellers while still offering opportunities for buyers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-success-green rounded-full mr-3"></div>
                  <span className="text-body font-secondary">Strong buyer demand</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-success-green rounded-full mr-3"></div>
                  <span className="text-body font-secondary">Limited inventory driving prices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-success-green rounded-full mr-3"></div>
                  <span className="text-body font-secondary">High-quality properties in demand</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-default">
              <h4 className="text-h4 font-primary font-medium mb-4">
                Get Your Market Report
              </h4>
              <p className="text-body font-secondary mb-6 opacity-90">
                Receive a detailed market analysis for your specific property or area of interest.
              </p>
              <button className="w-full bg-white text-primary-navy py-3 rounded-default text-body font-secondary font-medium hover:bg-light-gray transition-colors duration-300">
                Request Market Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 