import { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { BarChart, TrendingUp, Home, DollarSign, Calendar, Download, Eye } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Vistas Summerlin Market Reports | Real Estate Market Analysis',
  description: 'Get the latest market reports for The Vistas Summerlin. Comprehensive real estate market analysis, trends, and insights from expert realtor Jan Duffy.',
  keywords: [
    'The Vistas Summerlin market reports',
    'Summerlin real estate market analysis',
    'Las Vegas real estate trends',
    'The Vistas market data',
    'Jan Duffy market reports',
    'Summerlin home prices'
  ],
  openGraph: {
    title: 'The Vistas Summerlin Market Reports',
    description: 'Comprehensive real estate market analysis and trends for The Vistas Summerlin.',
    url: 'https://www.thevistassummerlin.com/market-reports',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/market-reports',
  },
};

export default function MarketReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Market Reports
              <span className="block text-blue-200">The Vistas Summerlin</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay informed with comprehensive market analysis, trends, and insights 
              for The Vistas Summerlin real estate market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/valuation"
                className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Your Home Value
              </Link>
              <a
                href="tel:+17025000607"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-colors shadow-lg"
              >
                Call Jan Duffy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              The Vistas Summerlin Market Reports and Analysis
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Access comprehensive market reports and analysis for The Vistas Summerlin real estate 
                market. Our detailed reports provide current trends, pricing data, and forecasts 
                to help you make informed decisions about buying or selling luxury homes in 
                Las Vegas's premier master-planned community.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Comprehensive Market Data for The Vistas Summerlin
              </h3>
              
              <p className="mb-6">
                Dr. Jan Duffy provides detailed market reports covering The Vistas Summerlin's 
                28 distinct subcommunities, from Mediterranean-inspired Portofino to the royal 
                elegance of Kingwood. Each report includes current pricing trends, inventory 
                levels, and market forecasts based on comprehensive local market analysis.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Expert Market Analysis and Insights
              </h3>
              
              <p className="mb-6">
                Our market reports include expert analysis from Dr. Jan Duffy, who specializes 
                in The Vistas Summerlin real estate market. With flexible scheduling and an 
                office at 11312 Parkside Way, Dr. Duffy provides personalized market insights 
                and comprehensive data to help you understand current market conditions.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Contact Dr. Jan Duffy for Market Reports
              </h3>
              
              <p className="mb-6">
                Ready to access detailed market reports for The Vistas Summerlin? Contact Dr. Jan Duffy 
                at (702) 500-0607 for comprehensive market analysis and personalized insights. 
                Her deep knowledge of local market conditions and flexible scheduling ensure 
                you get the information you need for confident real estate decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Market Overview
            </h2>
            <p className="text-xl text-gray-600">
              Latest data and trends for The Vistas Summerlin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">$850K</div>
              <div className="text-gray-600 mb-2">Average Sale Price</div>
              <div className="text-sm text-green-600">+5.2% vs last year</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-green-600 mb-2">28 Days</div>
              <div className="text-gray-600 mb-2">Days on Market</div>
              <div className="text-sm text-green-600">-12% vs last year</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 text-center">
              <Home className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-600 mb-2">42</div>
              <div className="text-gray-600 mb-2">Active Listings</div>
              <div className="text-sm text-red-600">-8% vs last month</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-orange-600 mb-2">98.5%</div>
              <div className="text-gray-600 mb-2">List-to-Sale Ratio</div>
              <div className="text-sm text-green-600">+2.1% vs last year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Market Reports
            </h2>
            <p className="text-xl text-gray-600">
              Download comprehensive market analysis reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Monthly Market Report */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-blue-600" />
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Monthly
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                December 2024 Market Report
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive analysis of The Vistas market performance, including sales data, 
                pricing trends, and inventory levels.
              </p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quarterly Report */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Quarterly
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Q4 2024 Market Analysis
              </h3>
              <p className="text-gray-600 mb-6">
                In-depth quarterly analysis covering market trends, seasonal patterns, 
                and year-over-year comparisons for The Vistas.
              </p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Annual Report */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Annual
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2024 Annual Market Review
              </h3>
              <p className="text-gray-600 mb-6">
                Complete year-end analysis with market predictions, investment insights, 
                and comprehensive data for The Vistas Summerlin.
              </p>
              <div className="flex space-x-3">
                <button className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Market Trends
            </h2>
            <p className="text-xl text-gray-600">
              What's driving The Vistas real estate market
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Price Appreciation</h3>
                <p className="text-gray-700 mb-4">
                  The Vistas continues to show strong price appreciation with an average 
                  increase of 8.2% year-over-year, outpacing the broader Las Vegas market.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">+8.2% YoY Growth</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inventory Levels</h3>
                <p className="text-gray-700 mb-4">
                  Low inventory continues to drive competitive bidding, with only 
                  2.1 months of supply available in The Vistas market.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <BarChart className="w-5 h-5" />
                  <span className="font-semibold">2.1 Months Supply</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Buyer Demand</h3>
                <p className="text-gray-700 mb-4">
                  Strong buyer demand driven by The Vistas' reputation for quality, 
                  amenities, and excellent schools continues to fuel market activity.
                </p>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Home className="w-5 h-5" />
                  <span className="font-semibold">High Demand</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Outlook</h3>
                <p className="text-gray-700 mb-4">
                  Positive outlook for 2025 with continued growth expected due to 
                  limited new construction and strong economic fundamentals.
                </p>
                <div className="flex items-center space-x-2 text-orange-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Positive 2025 Outlook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Your Personalized Market Analysis
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to understand what your home is worth in today's market? 
            Get a free, comprehensive market analysis tailored to your property.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Valuation
            </Link>
            <a
              href="tel:+17025000607"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-colors shadow-lg"
            >
              Call Jan Duffy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
