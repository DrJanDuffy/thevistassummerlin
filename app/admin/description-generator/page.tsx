'use client';
// Force rebuild: 2024-07-16 08:00:00 UTC
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function DescriptionGenerator() {
  const [propertyDetails, setPropertyDetails] = useState({
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    features: '',
    neighborhood: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPropertyDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedDescription('');
    setError('');

    try {
      const response = await fetch('/api/generate-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyDetails),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Something went wrong');
      }

      const data = await response.json();
      setGeneratedDescription(data.description);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-h2 mb-6">AI Property Description Generator</h1>
      <p className="mb-8 text-muted-foreground">
        Enter the key details of a property, and the AI will craft a beautiful, ready-to-use description for your listing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Input Form */}
        <form onSubmit={handleGenerate} className="space-y-6">
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-foreground mb-1">Bedrooms</label>
            <input type="number" name="bedrooms" id="bedrooms" value={propertyDetails.bedrooms} onChange={handleInputChange} className="w-full bg-input border-border border rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-foreground mb-1">Bathrooms</label>
            <input type="number" name="bathrooms" id="bathrooms" value={propertyDetails.bathrooms} onChange={handleInputChange} className="w-full bg-input border-border border rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="sqft" className="block text-sm font-medium text-foreground mb-1">Square Footage</label>
            <input type="number" name="sqft" id="sqft" value={propertyDetails.sqft} onChange={handleInputChange} className="w-full bg-input border-border border rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium text-foreground mb-1">Neighborhood / Area</label>
            <input type="text" name="neighborhood" id="neighborhood" value={propertyDetails.neighborhood} onChange={handleInputChange} className="w-full bg-input border-border border rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="features" className="block text-sm font-medium text-foreground mb-1">Key Features (comma-separated)</label>
            <textarea name="features" id="features" value={propertyDetails.features} onChange={handleInputChange} placeholder="e.g., newly renovated kitchen, ocean view, large backyard" rows={4} className="w-full bg-input border-border border rounded-md p-2" />
          </div>
          <Button type="submit" disabled={isLoading} size="lg">
            {isLoading ? 'Generating...' : 'Generate Description'}
          </Button>
        </form>

        {/* Output Area */}
        <div className="bg-background border rounded-lg p-6">
          <h3 className="text-h4 mb-4">Generated Description:</h3>
          {isLoading && <p className="text-muted-foreground">AI is writing...</p>}
          {error && <p className="text-destructive">{error}</p>}
          {generatedDescription && (
            <div className="prose prose-lg max-w-none text-foreground whitespace-pre-wrap">
              {generatedDescription}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 