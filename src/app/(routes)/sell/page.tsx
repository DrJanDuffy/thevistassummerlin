import { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { FAQSchema } from '@/components/StructuredData';
import { Home, DollarSign, TrendingUp, Users, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sell Your Home in The Vistas Summerlin | Jan Duffy Real Estate',
  description: 'Sell your home in The Vistas Summerlin with expert realtor Jan Duffy. Get a free home valuation, market analysis, and professional marketing. 15+ years experience.',
  keywords: [
    'sell home The Vistas Summerlin',
    'home valuation Summerlin',
    'real estate agent The Vistas',
    'Jan Duffy sell home',
    'Summerlin home sales',
    'The Vistas real estate'
  ],
  openGraph: {
    title: 'Sell Your Home in The Vistas Summerlin',
    description: 'Expert guidance from Jan Duffy to sell your home quickly and for top dollar.',
    url: 'https://www.thevistassummerlin.com/sell',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/sell',
  },
};

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Sell Your Home in
              <span className="block text-green-200">The Vistas Summerlin</span>
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Get expert guidance from Jan Duffy to sell your home quickly and for top dollar. 
              15+ years of experience in The Vistas community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/valuation"
                className="bg-white text-green-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Home Valuation
              </Link>
              <a
                href="tel:+17025000607"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-900 transition-colors shadow-lg"
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
              Sell Your Home in The Vistas Summerlin with Expert Guidance
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Ready to sell your home in The Vistas Summerlin? Dr. Jan Duffy offers expert 
                real estate services with over 12 years of experience in The Vistas community. 
                Her office at 11312 Parkside Way provides convenient access and deep local 
                market knowledge to help you achieve top dollar for your luxury home.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Why Choose Dr. Jan Duffy for Your The Vistas Summerlin Home Sale
              </h3>
              
              <p className="mb-6">
                Dr. Jan Duffy specializes exclusively in The Vistas Summerlin real estate market, 
                providing personalized service with flexible scheduling that works around your 
                lifestyle. Her deep understanding of the community's 28 distinct subcommunities 
                and current market trends ensures your home is positioned for maximum value and 
                quick sale.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Comprehensive Home Selling Services in The Vistas Summerlin
              </h3>
              
              <p className="mb-6">
                Dr. Jan Duffy provides comprehensive selling services including free home 
                valuations, professional marketing strategies, and expert negotiation. Her 
                flexible scheduling accommodates busy professionals with evening and weekend 
                appointments, ensuring your home selling process fits seamlessly into your 
                lifestyle.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Contact Dr. Jan Duffy for Your Free Home Valuation
              </h3>
              
              <p className="mb-6">
                Don't wait to start your home selling journey in The Vistas Summerlin. Contact 
                Dr. Jan Duffy at (702) 500-0607 for your free home valuation and expert market 
                analysis. Her office at 11312 Parkside Way provides convenient access for all 
                your real estate needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Jan Duffy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jan Duffy to Sell Your Home?
            </h2>
            <p className="text-xl text-gray-600">
              Local expertise, proven results, and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Expert</h3>
              <p className="text-gray-700">
                15+ years specializing in The Vistas Summerlin. Deep knowledge of local market trends, 
                pricing, and buyer preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-700">
                Consistently achieve top dollar for sellers with homes selling 15% faster than 
                market average in The Vistas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Service</h3>
              <p className="text-gray-700">
                Dedicated support throughout the entire process. Regular updates, 
                professional photography, and strategic marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Selling Process
            </h2>
            <p className="text-xl text-gray-600">
              From valuation to closing, we guide you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Valuation</h3>
              <p className="text-gray-600">
                Comprehensive market analysis to determine your home's optimal listing price.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Strategy</h3>
              <p className="text-gray-600">
                Professional photography, staging advice, and multi-channel marketing campaign.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Showings & Offers</h3>
              <p className="text-gray-600">
                Coordinate showings, negotiate offers, and guide you through the decision process.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Closing</h3>
              <p className="text-gray-600">
                Handle all paperwork, coordinate with lenders, and ensure a smooth closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Vistas Market Performance
            </h2>
            <p className="text-xl text-gray-600">
              Your home in a strong, appreciating market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">$850K</div>
              <div className="text-gray-600">Average Sale Price</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-green-600 mb-2">28 Days</div>
              <div className="text-gray-600">Average Days on Market</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-600 mb-2">+8.2%</div>
              <div className="text-gray-600">Year-over-Year Appreciation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Sell Your Home?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get started with a free, no-obligation home valuation and market analysis. 
            Discover what your home is worth in today's market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-white text-green-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Valuation
            </Link>
            <a
              href="tel:+17025000607"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-900 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Jan Duffy
            </a>
            <a
              href="mailto:DrJanSells@TheVistasSummerlin.com"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-900 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Email Jan
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FAQSchema />
    </div>
  );
}
