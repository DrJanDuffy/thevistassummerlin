'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { CalendlyButton } from '@/components/CalendlyButton';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
              Contact Dr. Jan Duffy
            </h1>
            <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
              Get in touch for expert guidance on buying or selling in The Vistas Summerlin
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                  Send a Message
                </h2>
                <p className="text-xl font-secondary text-text-light mb-8">
                  Fill out the form below and Dr. Duffy will get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-dark mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-light-gray rounded-default focus:ring-2 focus:ring-link-blue focus:border-transparent transition-colors"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-dark mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-light-gray rounded-default focus:ring-2 focus:ring-link-blue focus:border-transparent transition-colors"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-light-gray rounded-default focus:ring-2 focus:ring-link-blue focus:border-transparent transition-colors"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-light-gray rounded-default focus:ring-2 focus:ring-link-blue focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                      Subject *
                    </label>
                    <select 
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-light-gray rounded-default focus:ring-2 focus:ring-link-blue focus:border-transparent transition-colors"
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
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                      Message *
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5} 
                      className="w-full px-4 py-3 border border-light-gray rounded-default focus:ring-2 focus:ring-link-blue focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your real estate needs..."
                      required 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-link-blue text-white font-semibold py-4 px-8 rounded-default hover:bg-primary-navy transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl font-secondary text-text-light mb-8">
                  Multiple ways to connect with Dr. Jan Duffy for your real estate needs.
                </p>

                <div className="space-y-8">
                  {/* Direct Contact */}
                  <div className="bg-light-gray p-6 rounded-default">
                    <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                      Direct Contact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-link-blue rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-secondary text-text-light">Phone</p>
                          <a href="tel:+17025000607" className="text-lg font-primary font-medium text-link-blue hover:text-primary-navy transition-colors">
                            (702) 500-0607
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-link-blue rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-secondary text-text-light">Email</p>
                          <a href="mailto:DrJanSells@TheVistasSummerlin.com" className="text-lg font-primary font-medium text-link-blue hover:text-primary-navy transition-colors">
                            DrJanSells@TheVistasSummerlin.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="bg-light-gray p-6 rounded-default">
                    <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                      Office Location
                    </h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-success-green rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-secondary text-text-light">Address</p>
                        <p className="text-lg font-primary font-medium text-text-dark">
                          The Vistas Summerlin<br />
                          Las Vegas, NV 89138
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Schedule Consultation */}
                  <div className="bg-light-gray p-6 rounded-default">
                    <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                      Schedule a Consultation
                    </h3>
                    <p className="text-body font-secondary text-text-light mb-4">
                      Book a convenient time to discuss your real estate needs with Dr. Duffy.
                    </p>
                    <CalendlyButton url="https://calendly.com/drjanduffy/showing" />
                  </div>

                  {/* Response Time */}
                  <div className="bg-light-gray p-6 rounded-default">
                    <h3 className="text-xl font-primary font-medium text-text-dark mb-4">
                      Response Time
                    </h3>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary-navy rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-secondary text-text-light">Typical Response</p>
                        <p className="text-lg font-primary font-medium text-text-dark">
                          Within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto mb-12">
              Whether you're buying, selling, or just exploring, Dr. Duffy is here to help you navigate The Vistas Summerlin real estate market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/search"
                className="bg-link-blue text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Homes for Sale
              </Link>
              <Link
                href="/market-reports"
                className="border-2 border-link-blue text-link-blue px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Market Report
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 