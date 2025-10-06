'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { CalendlyButton } from '@/components/CalendlyButton';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Star, Award, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* V0 Hero Section with Advanced Background */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            {/* Animated floating circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* V0 Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-200 font-medium mb-8 shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-5 h-5" />
              <span>The Vistas Summerlin | Homes by Dr. Jan Duffy</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-primary font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
              Contact Dr. Jan Duffy
            </h1>
            <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-4xl mx-auto leading-relaxed mb-12">
              Las Vegas real estate expert with flexible scheduling that works around YOUR lifestyle. 
              Available early mornings, evenings, and weekends - because your real estate goals don't follow traditional business hours.
            </p>

            {/* V0 Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
                <Phone className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Now</h3>
                <a href="tel:+17028420410" className="text-blue-200 hover:text-white transition-colors text-lg font-medium">
                  (702) 842-0410
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
                <Mail className="w-8 h-8 text-purple-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:DrJanSells@TheVistasSummerlin.com" className="text-purple-200 hover:text-white transition-colors text-lg font-medium">
                  DrJanSells@TheVistasSummerlin.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
                <Calendar className="w-8 h-8 text-green-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Schedule</h3>
                <span className="text-green-200 text-lg font-medium">Book Online</span>
              </div>
            </div>
          </div>
        </section>

        {/* V0 Contact Form Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* V0 Contact Form */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="mb-8">
                  <h2 className="text-4xl lg:text-5xl font-primary font-bold text-gray-900 mb-4">
                    Send a Message
                  </h2>
                  <p className="text-xl font-secondary text-gray-600">
                    Fill out the form below and Dr. Duffy will get back to you within 24 hours.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/70"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/70"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/70"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/70"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                      Subject *
                    </label>
                    <select 
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/70"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">I'm interested in buying a home</option>
                      <option value="selling">I'm interested in selling my home</option>
                      <option value="market-report">I'd like a market report</option>
                      <option value="consultation">I'd like to schedule a consultation</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Message *
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5} 
                      className="w-full px-4 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/70 resize-none"
                      placeholder="Tell us about your real estate needs..."
                      required 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* V0 Contact Information */}
              <div className="space-y-8">
                <div className="mb-8">
                  <h2 className="text-4xl lg:text-5xl font-primary font-bold text-gray-900 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-xl font-secondary text-gray-600">
                    Multiple ways to connect with Dr. Jan Duffy for your real estate needs.
                  </p>
                </div>

                {/* V0 Contact Cards */}
                <div className="space-y-6">
                  {/* Direct Contact */}
                  <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Direct Contact</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Phone</p>
                          <a href="tel:+17028420410" className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">
                            (702) 842-0410
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Email</p>
                          <a href="mailto:DrJanSells@TheVistasSummerlin.com" className="text-lg font-bold text-purple-600 hover:text-purple-700 transition-colors">
                            DrJanSells@TheVistasSummerlin.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Office Location</h3>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="text-lg font-bold text-gray-900">
                          10777 West Twain Avenue # 333<br />
                          Las Vegas, NV 89135
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Daily</span>
                        <span className="text-lg font-bold text-gray-900">6:00 AM - 9:00 PM</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Flexible scheduling that works around YOUR lifestyle
                      </p>
                    </div>
                  </div>

                  {/* Schedule Consultation */}
                  <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Schedule Consultation</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Book a convenient time to discuss your real estate needs with Dr. Duffy.
                    </p>
                    <CalendlyButton url="https://calendly.com/drjanduffy/showing" />
                  </div>

                  {/* Response Time */}
                  <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Response Time</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Typical Response</p>
                        <p className="text-lg font-bold text-gray-900">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* V0 Service Areas Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-primary font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Service Areas
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Serving discerning buyers, sellers, and investors across Henderson, Enterprise, and Southwest Vegas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                'Paradise, NV',
                'Henderson, NV',
                'Las Vegas, NV',
                'Enterprise, NV',
                'Clark County, NV',
                'Summerlin, Las Vegas',
                'Desert Hills, NV',
                'Spring Valley, NV',
                'North Las Vegas, NV',
                'Summerlin South, NV'
              ].map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <MapPin className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* V0 CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl lg:text-5xl font-primary font-bold text-gray-900 mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl font-secondary text-gray-600 max-w-2xl mx-auto mb-12">
                Whether you're buying, selling, or just exploring, Dr. Duffy is here to help you navigate the Las Vegas real estate market with flexible scheduling that works around YOUR lifestyle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/search"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Explore Homes for Sale</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/market-reports"
                  className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Get Market Report</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
