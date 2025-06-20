import { create } from 'zustand';

interface PropertyFilters {
  city?: string;
  priceMin?: number;
  priceMax?: number;
}

interface PropertyFilterStore {
  filters: PropertyFilters;
  setFilter: (key: keyof PropertyFilters, value: string | number) => void;
  setFilters: (newFilters: Partial<PropertyFilters>) => void;
  clearFilters: () => void;
}

export const usePropertyFilterStore = create<PropertyFilterStore>((set) => ({
  filters: {},
  setFilter: (key, value) => set((state) => ({
    filters: { ...state.filters, [key]: value },
  })),
  setFilters: (newFilters) => set((state) => ({
    filters: { ...state.filters, ...newFilters },
  })),
  clearFilters: () => set({ filters: {} }),
})); 