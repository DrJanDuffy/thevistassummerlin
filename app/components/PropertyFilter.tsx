'use client';
import { create } from 'zustand';
import { Button } from './ui/Button';

// 1. Zustand Store for filters
interface FilterState {
  priceMin: string;
  priceMax: string;
  bedsMin: string;
  bathsMin: string;
  setPriceMin: (price: string) => void;
  setPriceMax: (price: string) => void;
  setBedsMin: (beds: string) => void;
  setBathsMin: (baths: string) => void;
  resetFilters: () => void;
}

export const usePropertyFilterStore = create<FilterState>((set) => ({
  priceMin: '500000',
  priceMax: '4000000',
  bedsMin: '0',
  bathsMin: '0',
  setPriceMin: (price) => set({ priceMin: price }),
  setPriceMax: (price) => set({ priceMax: price }),
  setBedsMin: (beds) => set({ bedsMin: beds }),
  setBathsMin: (baths) => set({ bathsMin: baths }),
  resetFilters: () => set({
    priceMin: '500000',
    priceMax: '4000000',
    bedsMin: '0',
    bathsMin: '0',
  }),
}));

// 2. SearchFilters Component
export function PropertyFilter() {
  const {
    priceMin,
    priceMax,
    bedsMin,
    bathsMin,
    setPriceMin,
    setPriceMax,
    setBedsMin,
    setBathsMin,
    resetFilters,
  } = usePropertyFilterStore();

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    resetFilters();
  };
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Filter Properties</h3>
      <form className="space-y-6">
        {/* Price Range */}
        <div className="space-y-2">
          <label className="font-semibold">Price Range</label>
          <div className="flex gap-2">
            <input type="number" value={priceMin} onChange={e => setPriceMin(e.target.value)} placeholder="Min" className="w-full p-2 border rounded-lg" />
            <input type="number" value={priceMax} onChange={e => setPriceMax(e.target.value)} placeholder="Max" className="w-full p-2 border rounded-lg" />
          </div>
        </div>
        
        {/* Beds & Baths */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-semibold">Min Beds</label>
            <input type="number" value={bedsMin} onChange={e => setBedsMin(e.target.value)} className="w-full p-2 border rounded-lg" />
          </div>
          <div className="space-y-2">
            <label className="font-semibold">Min Baths</label>
            <input type="number" value={bathsMin} onChange={e => setBathsMin(e.target.value)} className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button onClick={handleReset} variant="outline" className="w-full">Reset</Button>
          {/* The main widget will react to store changes, so a "Search" button is optional */}
        </div>
      </form>
    </div>
  );
} 