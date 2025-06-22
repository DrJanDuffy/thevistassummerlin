'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const InteractiveMapClient = dynamic(() => import('./InteractiveMapClient'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />,
});

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// A property type to be defined more concretely later
interface Property {
  id: string;
  latitude: number;
  longitude: number;
  price: string;
  address: string;
}

interface InteractiveMapProps {
  properties: Property[];
}

export function InteractiveMap({ properties }: InteractiveMapProps) {
  return <InteractiveMapClient properties={properties} />;
} 