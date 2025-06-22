'use client';
import { useEffect, useRef } from 'react';
import { Buffer } from 'buffer';

// The script is now loaded globally in app/layout.tsx
// const REALSCOUT_SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
const AGENT_ID = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID;

interface Property {
  id: string;
  latitude: number;
  longitude: number;
  price: string;
  address: string;
}

interface RealScoutWidgetProps {
  'listing-status'?: string;
  'property-types'?: string;
  'price-min'?: string;
  'price-max'?: string;
  'beds-min'?: string;
  'baths-min'?: string;
  'geo-bounds-json'?: string;
  'sort-order'?: string;
  onListingsLoaded?: (properties: Property[]) => void;
}

export function RealScoutWidget(props: RealScoutWidgetProps) {
  const widgetRef = useRef<HTMLElement | null>(null);
  const { onListingsLoaded, ...widgetProps } = props;
  const agentEncodedId = AGENT_ID ? Buffer.from(`Agent-${AGENT_ID}`).toString('base64') : null;

  useEffect(() => {
    const currentWidget = widgetRef.current;
    
    const handleListingsLoaded = (event: Event) => {
      console.log('RealScout Widget Event Fired:', event); // DEBUGGING LINE
      const customEvent = event as CustomEvent;
      if (onListingsLoaded && customEvent.detail?.listings) {
        onListingsLoaded(customEvent.detail.listings);
      }
    };

    // The event listener name is a guess. We're using the console.log to discover the real one.
    currentWidget?.addEventListener('rs:listings-loaded', handleListingsLoaded);

    return () => {
      currentWidget?.removeEventListener('rs:listings-loaded', handleListingsLoaded);
    };
  }, [onListingsLoaded]);

  if (!agentEncodedId) {
    return (
      <div className="text-red-600 p-4 border border-red-300 rounded-lg text-center">
        Property search is temporarily unavailable. Missing Agent ID.
      </div>
    );
  }

  const finalWidgetProps = {
    'agent-encoded-id': agentEncodedId,
    'sort-order': 'STATUS_AND_SIGNIFICANT_CHANGE',
    ...widgetProps,
  };

  return (
    <div className="w-full" style={{ minHeight: 800 }}>
      {/* We attach the ref directly to the custom element */}
      <realscout-office-listings ref={widgetRef} {...finalWidgetProps} />
    </div>
  );
} 