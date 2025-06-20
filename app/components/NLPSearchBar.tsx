'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { usePropertyFilterStore } from './propertyFilterStore';

export function NLPSearchBar() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const setFilters = usePropertyFilterStore((state) => state.setFilters);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/nlp-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      
      // Update the global filter state with the AI-parsed filters
      setFilters(data.filters);

    } catch (error) {
      console.error("NLP Search Error:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-background/80 backdrop-blur-sm border border-border p-4 rounded-lg shadow-lg">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., 'Modern 4-bedroom homes with a pool under $1.5M'"
          className="flex-grow bg-input text-foreground border-none focus:ring-2 focus:ring-accent rounded-md p-3 text-lg"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-2 ml-1">
        Powered by AI ✨
      </p>
    </div>
  );
} 