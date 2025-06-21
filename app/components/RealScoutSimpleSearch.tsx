"use client";
import React from 'react';

const AGENT_ID = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID;

export default function RealScoutSimpleSearch() {
  if (!AGENT_ID) {
    return (
      <div className="text-red-600 p-4 border border-red-300 rounded">
        RealScout Agent ID is not configured.
      </div>
    );
  }

  return (
    <>
      {React.createElement('realscout-simple-search', {
        'agent-encoded-id': AGENT_ID,
        suppressHydrationWarning: true,
        style: { width: '100%' },
      })}
      <noscript>
        <div style={{ color: 'red' }}>
          RealScout widgets require JavaScript to be enabled.
        </div>
      </noscript>
    </>
  );
} 