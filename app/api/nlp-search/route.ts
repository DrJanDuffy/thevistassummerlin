import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { supabase } from '../../../lib/supabaseClient';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: 'system',
          content: `You are an expert real estate search assistant. Your task is to parse a user's natural language query and convert it into a structured JSON object. The JSON object should only contain the following keys: "price_min", "price_max", "bedrooms_min", "bathrooms_min", and "features" (which should be an array of strings). If a value is not specified in the query, do not include the key in the JSON object. For features, identify keywords like "pool", "garage", "modern", "gated", "single-story". Example: for the query "show me modern 4-bedroom homes with a pool under $1.5M", the output should be {"price_max": 1500000, "bedrooms_min": 4, "features": ["modern", "pool"]}`
        },
        {
          role: 'user',
          content: query,
        },
      ],
      response_format: { type: "json_object" },
    });

    const result = completion.choices[0].message?.content;
    
    if (!result) {
      throw new Error("AI did not return a valid result.");
    }

    const filters = JSON.parse(result);

    // Log the search query and parsed filters to the database
    try {
      const { error: logError } = await supabase
        .from('search_logs')
        .insert([{ query_text: query, parsed_filters: filters }]);
      
      if (logError) {
        console.error('Failed to log search query:', logError);
        // We don't want to fail the whole request if logging fails,
        // so we'll just log the error and continue.
      }
    } catch (dbError) {
      console.error('Database logging error:', dbError);
    }

    // Here, you would typically use these filters to query your database.
    // For now, we will return the parsed filters.
    console.log("Parsed Filters:", filters);

    return NextResponse.json({ filters });

  } catch (error) {
    console.error('Error processing NLP query:', error);
    return NextResponse.json({ error: 'Failed to process search query.' }, { status: 500 });
  }
} 