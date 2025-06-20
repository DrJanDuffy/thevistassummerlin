// Dummy comment to force Vercel clean redeploy: 2025-06-19T21:18Z
// This comment is to force Vercel to use the latest code and break any cache issues.
'use client';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabaseClient';
import { usePropertyFilterStore } from '@/components/propertyFilterStore';
import { CalendlyButton } from '@/components/CalendlyButton';
import { RealScoutWidget } from './RealScoutWidget';

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
        <div key={property.id} className="mb-6 bg-card text-card-foreground border border-border rounded-lg shadow-md p-4">
          <h3 className="text-h3">{property.address || 'Luxury Residence'}</h3>
          <p className="text-muted-foreground">{property.city}, {property.state}</p>
          <div className="my-4">
            <RealScoutWidget />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="font-bold text-lg text-primary">
              ${property.price ? new Intl.NumberFormat('en-US').format(property.price) : 'Contact for Price'}
            </div>
            <CalendlyButton url="https://calendly.com/your-scheduling-link" />
          </div>
        </div>
      ))}
    </div>
  );
} 