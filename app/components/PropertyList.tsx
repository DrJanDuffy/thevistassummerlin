// Trigger redeploy: 2025-06-18
// This comment is to force Vercel to use the latest code and break any cache issues.
'use client';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabaseClient';
import { usePropertyFilterStore } from '@/components/propertyFilterStore';
import { CalendlyButton } from '@/components/CalendlyButton';
import { Card } from './ui/Card';

export function PropertyList() {
  const filters = usePropertyFilterStore((state) => state.filters);
  const { data, isLoading, error } = useQuery({
    queryKey: ['properties', filters],
    queryFn: async () => {
      let query = supabase.from('properties').select('*');
      if (filters.city) query = query.eq('city', filters.city);
      if (filters.priceMin) query = query.gte('price', filters.priceMin);
      if (filters.priceMax) query = query.lte('price', filters.priceMax);
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div>Loading properties...</div>;
  if (error) return <div className="text-red-500">Error loading properties.</div>;
  if (!data || data.length === 0) return <div>No properties found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((property: any) => (
        <Card key={property.id} className="p-6 flex flex-col gap-2">
          <div className="font-bold text-lg">{property.address || 'Property'}</div>
          <div className="text-gray-600">{property.city}, {property.state}</div>
          <div className="text-primary font-semibold">${property.price?.toLocaleString() || 'N/A'}</div>
          <div className="text-sm text-gray-500">{property.beds} beds • {property.baths} baths</div>
          <div className="flex-1" />
          <CalendlyButton url="https://calendly.com/drjanduffy/showing" />
        </Card>
      ))}
    </div>
  );
} 