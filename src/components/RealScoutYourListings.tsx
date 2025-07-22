"use client";

import React from 'react';

interface RealScoutYourListingsProps {
  className?: string;
  containerClassName?: string;
}

export default function RealScoutYourListings({ 
  className = "", 
  containerClassName = "bg-white rounded-lg shadow-lg p-6" 
}: RealScoutYourListingsProps) {
  return (
    <div className={containerClassName}>
      <div className="text-center mb-4">
        <h3 className="text-xl font-primary font-medium text-text-dark mb-2">
          Your Listings
        </h3>
        <p className="text-sm text-gray-600">
          View and manage your property listings
        </p>
      </div>
      <div className={className}>
        <realscout-your-listings 
          suppressHydrationWarning={true}
        />
      </div>
    </div>
  );
} 