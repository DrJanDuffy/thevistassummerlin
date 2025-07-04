"use client";

import React from 'react';
import { Buffer } from 'buffer';

const AGENT_ID = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID;

export default function RealScoutOfficeListings() {
  if (!AGENT_ID) {
    return (
      <div style={{ color: 'red' }}>
        RealScout Agent ID is not configured.
      </div>
    );
  }
  
  const agentEncodedId = Buffer.from(`Agent-${AGENT_ID}`).toString('base64');

  return (
    <>
      {React.createElement('realscout-office-listings', {
        'agent-encoded-id': agentEncodedId,
        'sort-order': 'STATUS_AND_SIGNIFICANT_CHANGE',
        'listing-status': 'For Sale',
        'property-types': 'SFR,MF,TC',
        'price-min': '500000',
        'price-max': '4000000',
        suppressHydrationWarning: true,
      })}
      <noscript>
        <div style={{ color: 'red' }}>
          RealScout widgets require JavaScript to be enabled.
        </div>
      </noscript>
    </>
  );
} 