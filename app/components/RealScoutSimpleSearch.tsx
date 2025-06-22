"use client";
import React from 'react';
import { Buffer } from 'buffer';

const AGENT_ID = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID;

export default function RealScoutSimpleSearch() {
  if (!AGENT_ID) {
    return (
      <div className="text-red-600 p-4 border border-red-300 rounded">
        RealScout Agent ID is not configured.
      </div>
    );
  }
  
  const agentEncodedId = Buffer.from(`Agent-${AGENT_ID}`).toString('base64');

  return (
    <>
      {React.createElement('realscout-simple-search', {
        'agent-encoded-id': agentEncodedId,
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