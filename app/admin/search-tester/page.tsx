'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { supabase } from '../../../lib/supabaseClient';

export default function SearchTester() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<any>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctedJson, setCorrectedJson] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleTestQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setAiResponse(null);
    setIsCorrect(null);
    setCorrectedJson('');
    setFeedbackSubmitted(false);

    const response = await fetch('/api/nlp-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (response.ok) {
      const data = await response.json();
      setAiResponse(data.filters);
      setCorrectedJson(JSON.stringify(data.filters, null, 2));
    } else {
      setAiResponse({ error: 'Failed to get a response from the AI.' });
    }
    setIsLoading(false);
  };
  
  const handleFeedback = async (correct: boolean) => {
    setIsCorrect(correct);
    if (correct) {
      await submitFeedback(true, aiResponse);
    }
  };
  
  const submitFeedback = async (isResponseCorrect: boolean, finalResponse: any) => {
    await supabase.from('search_training_data').insert([
      {
        query_text: query,
        ai_response: aiResponse,
        is_correct: isResponseCorrect,
        corrected_response: isResponseCorrect ? null : finalResponse,
      },
    ]);
    setFeedbackSubmitted(true);
  }

  const handleCorrectedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedJson = JSON.parse(correctedJson);
      submitFeedback(false, parsedJson);
    } catch (err) {
      alert("Invalid JSON format.");
    }
  };


  return (
    <div className="p-8">
      <h1 className="text-h2 mb-6">Adversarial Search Tester</h1>
      <p className="mb-8 text-muted-foreground">
        Use this tool to test how the AI interprets complex or ambiguous queries. Your feedback helps improve the model.
      </p>

      <form onSubmit={handleTestQuery} className="mb-8">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a tricky search query..."
            className="flex-grow bg-input text-foreground border-border border rounded-md p-3 text-lg"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Testing...' : 'Test Query'}
          </Button>
        </div>
      </form>

      {aiResponse && (
        <div className="p-4 border rounded-lg bg-background">
          <h3 className="text-h4 mb-4">AI Interpretation</h3>
          <pre className="bg-input p-3 rounded-md text-sm whitespace-pre-wrap">
            <code>{JSON.stringify(aiResponse, null, 2)}</code>
          </pre>
          
          {!feedbackSubmitted && (
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Was this interpretation correct?</h4>
              <div className="flex gap-4">
                <Button onClick={() => handleFeedback(true)} variant="outline">Yes, Correct</Button>
                <Button onClick={() => handleFeedback(false)} variant="destructive">No, Incorrect</Button>
              </div>
            </div>
          )}

          {isCorrect === false && !feedbackSubmitted && (
            <form onSubmit={handleCorrectedSubmit} className="mt-6">
              <h4 className="font-semibold mb-2">Provide the correct JSON:</h4>
              <textarea
                value={correctedJson}
                onChange={(e) => setCorrectedJson(e.target.value)}
                className="w-full h-48 bg-input text-foreground p-3 rounded-md border-border border"
              />
              <Button type="submit" className="mt-2">Submit Correction</Button>
            </form>
          )}

          {feedbackSubmitted && (
             <p className="mt-6 text-green-600 font-semibold">Thank you! Your feedback has been recorded.</p>
          )}
        </div>
      )}
    </div>
  );
} 