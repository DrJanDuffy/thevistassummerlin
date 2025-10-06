import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Star, Users, Award, TrendingUp, Heart, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy - The Vistas Summerlin Preferred Realtor',
  description: 'Meet Dr. Jan Duffy, your preferred realtor for The Vistas Summerlin. Award-winning service, 15+ years experience, and 500+ happy families.',
  openGraph: {
    title: 'About Dr. Jan Duffy - The Vistas Summerlin Preferred Realtor',
    description: 'Award-winning realtor with 15+ years experience serving The Vistas Summerlin community.',
    url: 'https://www.thevistassummerlin.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const phoneNumber = "+17025551234";
  const emailAddress = "drjan@thevistassummerlin.com";

  return (
    <div className="flex min-h-screen flex-col font-secondary text-gray-800 bg-gray-50">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-100 font-medium mb-6 shadow-lg">
                  <Award className="w-5 h-5" />
                  <span>Preferred Realtor</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Meet Dr. Jan Duffy
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Trusted Realtor</span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  With over 15 years of experience specializing in The Vistas Summerlin, 
                  Dr. Jan Duffy has helped 500+ families find their dream homes in Las Vegas' 
                  most prestigious community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Dr. Jan</span>
                  </a>
                  <Link 
                    href="/contact"
                    className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold text-white">JD</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dr. Jan Duffy</h3>
                    <p className="text-blue-200 mb-6">Preferred Realtor - The Vistas Summerlin</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">15+</div>
                        <div className="text-blue-200 text-sm">Years Experience</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-blue-200 text-sm">Happy Families</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Dr. Jan Duffy?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dr. Jan Duffy brings unparalleled expertise and dedication to every real estate transaction. 
                  As the preferred realtor for The Vistas Summerlin, she understands the unique characteristics 
                  of each subcommunity and helps clients make informed decisions.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  With a deep understanding of market trends, local amenities, and community dynamics, 
                  Dr. Duffy provides personalized service that goes beyond buying and selling homes. 
                  She's committed to helping families find not just a house, but a home where they can thrive.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Licensed Real Estate Professional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">The Vistas Summerlin Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Award-Winning Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">500+ Successful Transactions</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <a href={`tel:${phoneNumber}`} className="text-blue-600 hover:text-blue-700">
                          {phoneNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a href={`mailto:${emailAddress}`} className="text-blue-600 hover:text-blue-700">
                          {emailAddress}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Location</div>
                        <div className="text-gray-700">Las Vegas, NV 89135</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 font-medium mb-6 shadow-lg">
                <Heart className="w-5 h-5" />
                <span>Client Success Stories</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                What Our Clients
                <span className="block text-blue-600">Say About Dr. Jan</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real stories from real families who found their dream homes in The Vistas Summerlin
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Testimonial 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    SM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Sarah & Mike Johnson</h4>
                    <p className="text-gray-600">Barrington Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "Jan made our home buying process seamless. Her knowledge of The Vistas is unmatched, and she helped us find the perfect home in Barrington within our budget."
                </p>
                <div className="text-sm text-gray-500">
                  Closed: $1.2M • 3 months ago
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    DL
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">David & Lisa Chen</h4>
                    <p className="text-gray-600">Kingwood Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "We were relocating from California and Jan's expertise was invaluable. She understood our needs and found us a beautiful home in Kingwood that exceeded our expectations."
                </p>
                <div className="text-sm text-gray-500">
                  Closed: $1.8M • 2 months ago
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    RW
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Robert & Wendy Martinez</h4>
                    <p className="text-gray-600">Santalina Community</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "Jan's attention to detail and market knowledge helped us sell our home quickly and buy our dream home in Santalina. Her professionalism is outstanding."
                </p>
                <div className="text-sm text-gray-500">
                  Closed: $950K • 1 month ago
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.1B</div>
                <div className="text-gray-600">Total Sales Volume</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of families who have found their perfect home in The Vistas Summerlin with Jan Duffy's expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/search"
                    className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Find Your Dream Home</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Dr. Jan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}