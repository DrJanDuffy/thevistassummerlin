'use client';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabaseClient';

export function LeadsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('leads')
        .select('id, name, email, phone, message, created_at')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div>Loading leads...</div>;
  if (error) return <div className="text-red-500">Error loading leads.</div>;
  if (!data || data.length === 0) return <div>No leads found.</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-widget">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Message</th>
            <th className="px-4 py-2 text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lead: any) => (
            <tr key={lead.id} className="border-t">
              <td className="px-4 py-2">{lead.name}</td>
              <td className="px-4 py-2">{lead.email}</td>
              <td className="px-4 py-2">{lead.phone}</td>
              <td className="px-4 py-2">{lead.message}</td>
              <td className="px-4 py-2 text-xs text-gray-500">{new Date(lead.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 