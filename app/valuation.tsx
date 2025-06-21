"use client";
import React from 'react';

const AGENT_ID = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID;

export default function Valuation() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Home Valuation Tool</h1>
      <p className="text-lg text-gray-700 mb-8">
        Instantly estimate your home&apos;s value in The Vistas Summerlin using our advanced valuation tool.
      </p>
      
      {AGENT_ID ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          {React.createElement('realscout-home-value', {
            'agent-encoded-id': AGENT_ID,
            suppressHydrationWarning: true,
            style: { width: '100%' },
          })}
        </div>
      ) : (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600">RealScout Agent ID is not configured. Please contact support.</p>
        </div>
      )}
      
      <noscript>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
          <p className="text-yellow-800">RealScout widgets require JavaScript to be enabled.</p>
        </div>
      </noscript>
    </main>
  );
} 