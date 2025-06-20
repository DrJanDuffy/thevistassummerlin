'use client';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabaseClient';

interface SearchLog {
  id: string;
  created_at: string;
  query_text: string;
  parsed_filters: any;
}

async function fetchSearchLogs(): Promise<SearchLog[]> {
  const { data, error } = await supabase
    .from('search_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    throw new Error('Failed to fetch search logs');
  }
  return data;
}

export default function SearchAnalytics() {
  const { data: searchLogs, isLoading, error } = useQuery<SearchLog[]>({
    queryKey: ['searchLogs'],
    queryFn: fetchSearchLogs,
  });

  if (isLoading) return <div className="text-center p-8">Loading search analytics...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error loading data: {error.message}</div>;

  return (
    <div className="p-8">
      <h1 className="text-h2 mb-6">Search Query Analytics</h1>
      <p className="mb-8 text-muted-foreground">
        This table shows the 100 most recent natural language queries from users and how the AI interpreted them into structured filters.
      </p>
      <div className="bg-background border border-border rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Timestamp</th>
              <th className="p-4">User Query</th>
              <th className="p-4">AI Parsed Filters</th>
            </tr>
          </thead>
          <tbody>
            {searchLogs?.map((log: SearchLog) => (
              <tr key={log.id} className="border-b border-border last:border-b-0">
                <td className="p-4 align-top text-sm text-muted-foreground">
                  {new Date(log.created_at).toLocaleString()}
                </td>
                <td className="p-4 align-top font-medium">{log.query_text}</td>
                <td className="p-4 align-top">
                  <pre className="bg-input p-3 rounded-md text-sm whitespace-pre-wrap">
                    <code>{JSON.stringify(log.parsed_filters, null, 2)}</code>
                  </pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 