"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About <span className="text-blue-600">Dr. Jan Duffy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted guide to The Vistas Summerlin with over 15 years of expertise in luxury real estate
          </p>
        </div>

        {/* Dr. Jan Duffy Profile */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="prose lg:prose-xl text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Dr. Jan Duffy</h2>
            <p>
              Dr. Jan Duffy is a distinguished real estate professional with a deep passion for The Vistas Summerlin community. With over 15 years of experience in luxury real estate, she has become the go-to expert for buyers and sellers in this premier Las Vegas community.
            </p>
            <p>
              Her academic background in real estate development, combined with her intimate knowledge of all 28 subcommunities within The Vistas, allows her to provide unparalleled insights and guidance to her clients. Dr. Duffy doesn't just sell homes—she helps families find their perfect place in this exceptional community.
            </p>
            <p>
              As a resident of The Vistas herself, Dr. Duffy brings a unique perspective that combines professional expertise with personal experience. She understands the lifestyle, amenities, and community dynamics that make The Vistas Summerlin so special.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl shadow-2xl overflow-hidden">
            <Image 
              src="https://placehold.co/600x400/0A2540/FFF?text=Dr.+Jan+Duffy" 
              alt="Dr. Jan Duffy - Real Estate Expert in The Vistas Summerlin"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Expertise & Credentials */}
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Expertise & Credentials</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Luxury Real Estate</h3>
                    <p className="text-gray-600">Specialized expertise in high-end properties and luxury market dynamics across The Vistas Summerlin.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Community Knowledge</h3>
                    <p className="text-gray-600">Intimate knowledge of all 28 subcommunities, their unique characteristics, and market trends.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Market Analysis</h3>
                    <p className="text-gray-600">Advanced market analysis and pricing strategies backed by data-driven insights and local expertise.</p>
                </div>
            </div>
        </section>

        {/* Why Choose Dr. Duffy */}
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Dr. Jan Duffy?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Resident</h4>
                            <p className="text-gray-600">Lives in The Vistas and experiences the community firsthand, providing authentic insights.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Academic Background</h4>
                            <p className="text-gray-600">Advanced education in real estate development provides deeper market understanding.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                            <p className="text-gray-600">Successfully guided hundreds of families through their real estate journey in The Vistas.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Personalized Service</h4>
                            <p className="text-gray-600">Tailored approach that considers each client's unique needs and preferences.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Market Expertise</h4>
                            <p className="text-gray-600">Deep understanding of market trends, pricing strategies, and negotiation tactics.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Connections</h4>
                            <p className="text-gray-600">Strong relationships with local vendors, contractors, and service providers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
            <div className="bg-white p-12 rounded-2xl shadow-xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Dr. Duffy's Mission</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        "My mission is to be the most trusted resource for anyone looking to buy, sell, or live in The Vistas Summerlin. I believe that real estate is about more than transactions—it's about building lives and fostering community. I am committed to providing unparalleled local insights, data-driven advice, and dedicated support every step of the way."
                    </p>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                        "As a resident of The Vistas myself, I understand what makes this community special. My goal is to help you find not just a house, but a home where you can thrive and create lasting memories."
                    </p>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work with Dr. Jan Duffy?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or just exploring The Vistas Summerlin, Dr. Duffy is here to provide the expert guidance you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/market-reports"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              View Market Reports
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 