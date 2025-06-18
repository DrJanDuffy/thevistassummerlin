'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePropertyFilterStore } from './propertyFilterStore';

const filterSchema = z.object({
  city: z.string().optional(),
  priceMin: z.string().optional(),
  priceMax: z.string().optional(),
});

type FilterValues = z.infer<typeof filterSchema>;

export function PropertyFilter() {
  const setFilter = usePropertyFilterStore((state) => state.setFilter);
  const clearFilters = usePropertyFilterStore((state) => state.clearFilters);
  const { register, handleSubmit, reset } = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
  });

  const onSubmit = (values: FilterValues) => {
    setFilter('city', values.city || '');
    setFilter('priceMin', values.priceMin ? Number(values.priceMin) : 0);
    setFilter('priceMax', values.priceMax ? Number(values.priceMax) : 0);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-4 mb-6">
      <input {...register('city')} placeholder="City" className="border rounded px-3 py-2" />
      <input {...register('priceMin')} placeholder="Min Price" type="number" className="border rounded px-3 py-2" />
      <input {...register('priceMax')} placeholder="Max Price" type="number" className="border rounded px-3 py-2" />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Filter</button>
      <button type="button" onClick={() => { clearFilters(); reset(); }} className="bg-gray-200 px-4 py-2 rounded">Clear</button>
    </form>
  );
} 