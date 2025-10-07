import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { CalendlyButton } from '@/components/CalendlyButton';
import Link from 'next/link';
import { 
  Calculator, 
  Home, 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  CheckCircle, 
  ArrowRight,
  BarChart,
  DollarSign,
  Clock,
  Shield,
  Users,
  Award,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Home Valuation - The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Get your free, accurate home valuation for The Vistas Summerlin. Dr. Jan Duffy provides professional market analysis and pricing strategy for luxury homes.',
  keywords: [
    'home valuation The Vistas Summerlin',
    'free home appraisal Las Vegas',
    'property value estimate',
    'Dr. Jan Duffy home valuation',
    'Summerlin home pricing',
    'luxury home market analysis'
  ],
  openGraph: {
    title: 'Free Home Valuation - The Vistas Summerlin | Dr. Jan Duffy',
    description: 'Get your free, accurate home valuation with professional market analysis.',
    url: 'https://www.thevistassummerlin.com/valuation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/valuation',
  },
};

export default function ValuationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* V0 Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-pattern.png')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/70 to-purple-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Free Home Valuation for <span className="block text-blue-200">The Vistas Summerlin</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Get your accurate, professional home valuation with Dr. Jan Duffy's expert market analysis. 
            Discover your home's true market value in today's competitive Las Vegas real estate market.
          </p>
          <div className="flex justify-center space-x-4">
            <CalendlyButton url="https://calendly.com/drjanduffy" />
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors shadow-lg"
            >
              Contact Dr. Jan Duffy
            </Link>
          </div>
        </div>
      </section>

      {/* Valuation Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Valuation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy uses advanced market analysis and local expertise to provide accurate home valuations for The Vistas Summerlin properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Analysis</h3>
              <p className="text-gray-600">
                Comprehensive analysis of recent sales, market trends, and comparable properties in The Vistas.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <Home className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Assessment</h3>
              <p className="text-gray-600">
                Detailed evaluation of your home's features, condition, and unique characteristics.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Price Strategy</h3>
              <p className="text-gray-600">
                Strategic pricing recommendations based on current market conditions and buyer demand.
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <BarChart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Report</h3>
              <p className="text-gray-600">
                Comprehensive valuation report with market insights and pricing recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Jan Duffy for Your Home Valuation?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With over 12 years of experience specializing in The Vistas Summerlin, Dr. Jan Duffy provides 
                the most accurate and reliable home valuations in the Las Vegas luxury real estate market.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Market Expertise</h3>
                    <p className="text-gray-600">Specialized knowledge of The Vistas Summerlin market trends and buyer preferences.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                    <p className="text-gray-600">Utilizes cutting-edge market analysis tools and comprehensive data sources.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">Flexible scheduling that works around your lifestyle and timeline.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">Track record of accurate valuations that help homes sell quickly and for top dollar.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Your Free Valuation</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Takes only 15 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">100% confidential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">No obligation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Professional accuracy</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <CalendlyButton url="https://calendly.com/drjanduffy" />
                <a
                  href="tel:+17025000607"
                  className="flex items-center justify-center space-x-2 w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Dr. Jan Duffy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            The Vistas Summerlin Market Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-blue-900 mb-2">$1.2M</h3>
              <p className="text-blue-700 font-semibold">Average Home Price</p>
              <p className="text-blue-600 text-sm mt-2">+5.2% from last year</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-green-900 mb-2">32 Days</h3>
              <p className="text-green-700 font-semibold">Average Days on Market</p>
              <p className="text-green-600 text-sm mt-2">Fast-moving market</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <BarChart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-purple-900 mb-2">98.5%</h3>
              <p className="text-purple-700 font-semibold">List-to-Sale Ratio</p>
              <p className="text-purple-600 text-sm mt-2">Strong seller's market</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              Professional Home Valuation Services in The Vistas Summerlin
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Getting an accurate home valuation is crucial when selling your property in The Vistas Summerlin.
                Dr. Jan Duffy provides comprehensive, professional home valuations that help you understand your
                property's true market value and make informed decisions about pricing and timing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Why Accurate Home Valuation Matters
              </h3>

              <p className="mb-6">
                An accurate home valuation is essential for several reasons. First, it helps you price your home
                competitively in the market, attracting serious buyers while maximizing your return. Second,
                it provides a realistic timeline for selling, helping you plan your next steps. Third, it
                gives you confidence in negotiations, knowing you have professional data to support your pricing strategy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Dr. Jan Duffy's Valuation Methodology
              </h3>

              <p className="mb-6">
                Dr. Jan Duffy uses a comprehensive approach to home valuation that combines market analysis,
                property assessment, and local expertise. This includes analyzing recent comparable sales in
                The Vistas Summerlin, evaluating current market conditions, assessing your home's unique features
                and condition, and considering buyer demand patterns. The result is a detailed valuation report
                that provides both a price range and strategic recommendations for optimal market positioning.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Market Trends in The Vistas Summerlin
              </h3>

              <p className="mb-6">
                The Vistas Summerlin continues to be one of Las Vegas's most desirable luxury communities,
                with strong demand from both local and out-of-state buyers. Recent market trends show
                increasing interest in homes with outdoor living spaces, modern amenities, and proximity
                to community facilities. Properties in The Vistas typically sell within 30-45 days and
                achieve close to asking price, reflecting the community's strong market position.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Preparing for Your Home Valuation
              </h3>

              <p className="mb-6">
                To get the most accurate valuation, Dr. Jan Duffy recommends preparing your home for assessment
                by ensuring all areas are accessible, highlighting recent improvements or upgrades, and providing
                documentation of any special features or amenities. This preparation helps ensure the valuation
                reflects your home's true value and potential appeal to buyers.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Ready to Get Your Home Valuation?</h4>
                <p className="text-blue-800 mb-4">
                  Dr. Jan Duffy offers free, professional home valuations for The Vistas Summerlin properties.
                  With flexible scheduling and personalized service, getting your valuation is convenient and stress-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyButton url="https://calendly.com/drjanduffy" />
                  <Link
                    href="/contact"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                  >
                    Contact Dr. Jan Duffy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
