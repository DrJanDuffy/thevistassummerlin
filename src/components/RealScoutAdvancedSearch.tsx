"use client";

import React from 'react';

interface RealScoutAdvancedSearchProps {
  className?: string;
  containerClassName?: string;
}

export default function RealScoutAdvancedSearch({ 
  className = "", 
  containerClassName = "bg-white rounded-lg shadow-lg p-6" 
}: RealScoutAdvancedSearchProps) {
  return (
    <div className={containerClassName}>
      <div className="text-center mb-4">
        <h3 className="text-xl font-primary font-medium text-text-dark mb-2">
          Find Your Perfect Home
        </h3>
        <p className="text-sm text-gray-600">
          Search available properties in The Vistas Summerlin
        </p>
      </div>
      <div className={className}>
        <realscout-advanced-search 
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          suppressHydrationWarning={true}
        />
      </div>
    </div>
  );
} 