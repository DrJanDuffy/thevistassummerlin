"use client";

import React from 'react';

export default function RealScoutOfficeListings() {
  // @ts-ignore: Custom element for RealScout
  return (
    <>
      {React.createElement('realscout-office-listings', {
        'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
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