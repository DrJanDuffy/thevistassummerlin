"use client";
import { useState } from 'react';
import { RealScoutWidget } from '../components/RealScoutWidget';
import { PropertyFilter, usePropertyFilterStore } from '../components/PropertyFilter';
import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('../components/InteractiveMap').then(mod => mod.InteractiveMap), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />
});

// Define the Property type here to be used in state
interface Property {
  id: string;
  latitude: number;
  longitude: number;
  price: string;
  address: string;
}

export default function SearchPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const { priceMin, priceMax, bedsMin, bathsMin } = usePropertyFilterStore();

  const handleListingsLoaded = (loadedProperties: Property[]) => {
    // Assuming the event provides data in the correct format.
    // We might need to transform it if the structure is different.
    setProperties(loadedProperties);
  };

  return (
    <main className="flex h-screen-minus-navbar">
      {/* Left Column: Filters & Listings */}
      <div className="w-1/4 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <PropertyFilter />
        
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Listings</h2>
             <RealScoutWidget 
                price-min={priceMin}
                price-max={priceMax}
                beds-min={bedsMin}
                baths-min={bathsMin}
                listing-status="For Sale"
                property-types="SFR,MF,TC"
                onListingsLoaded={handleListingsLoaded}
             />
        </div>
      </div>

      {/* Right Column: Map */}
      <div className="w-3/4">
        <InteractiveMap properties={properties} />
      </div>
    </main>
  );
} 