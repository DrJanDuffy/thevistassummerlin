'use client';

import * as React from 'react';
import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

interface Property {
  id: string;
  latitude: number;
  longitude: number;
  price: string;
  address: string;
}

interface InteractiveMapClientProps {
  properties: Property[];
}

export default function InteractiveMapClient({ properties }: InteractiveMapClientProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Map
        initialViewState={{
          latitude: 36.1699, // Default to Las Vegas
          longitude: -115.1398,
          zoom: 10,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {properties.map(prop => (
          <Marker
            key={prop.id}
            latitude={prop.latitude}
            longitude={prop.longitude}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setSelectedProperty(prop);
            }}
          >
            <div className="w-6 h-6 bg-blue-600 border-2 border-white rounded-full cursor-pointer hover:bg-blue-800" />
          </Marker>
        ))}

        {selectedProperty && (
          <Popup
            anchor="top"
            latitude={selectedProperty.latitude}
            longitude={selectedProperty.longitude}
            onClose={() => setSelectedProperty(null)}
          >
            <div>
              <h3 className="font-bold">{selectedProperty.price}</h3>
              <p>{selectedProperty.address}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
} 