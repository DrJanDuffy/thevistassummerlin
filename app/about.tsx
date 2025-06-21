"use client";
import React from 'react';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">About The Vistas Summerlin</h1>
      <p className="text-lg text-gray-700 mb-4">
        The Vistas Summerlin is a vibrant master-planned community in Las Vegas, home to 28 unique subcommunities. Our mission is to provide hyperlocal expertise, real estate insights, and a welcoming environment for residents and homebuyers alike.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Explore our site to discover community events, property listings, home valuation tools, and more—all tailored to the needs of The Vistas Summerlin.
      </p>
      
      {/* RealScout Office Listings Widget */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Current Listings in The Vistas Summerlin</h2>
        <RealScoutOfficeListings />
      </div>
    </main>
  );
} 