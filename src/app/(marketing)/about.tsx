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
            Your Guide to <span className="text-blue-600">The Vistas Summerlin</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining hyperlocal expertise with a passion for community to help you find not just a house, but a home.
          </p>
        </div>

        {/* Our Story / Mission Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="prose lg:prose-xl text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p>
              Our mission is to be the most trusted resource for anyone looking to buy, sell, or live in The Vistas Summerlin. We believe that real estate is about more than transactions; it&apos;s about building lives and fostering community. We are committed to providing unparalleled local insights, data-driven advice, and dedicated support every step of the way.
            </p>
            <p>
              We don&apos;t just work here; we are part of the community fabric. Our goal is to empower you with the knowledge and tools you need to make confident decisions and to make your journey in The Vistas a seamless and rewarding experience.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl shadow-2xl overflow-hidden">
            <Image 
              src="https://placehold.co/600x400/0A2540/FFF?text=Our+Team" 
              alt="A placeholder image representing the real estate team"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Core Values Section */}
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Expertise</h3>
                    <p className="text-gray-600">Deep, hyper-local knowledge of all 28 subcommunities within The Vistas.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Integrity</h3>
                    <p className="text-gray-600">Transparent, honest, and client-first approach in every interaction.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Community</h3>
                    <p className="text-gray-600">Actively participating in and giving back to the neighborhoods we serve.</p>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s Start Your Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re curious about the market or ready to make a move, we&apos;re here to provide the expert guidance you deserve.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </main>
    </div>
  );
} 