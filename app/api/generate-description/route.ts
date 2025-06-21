import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// This function will decide which AI client to use
const getAIClient = () => {
  if (process.env.AI_PROVIDER === 'perplexity') {
    return new OpenAI({
      apiKey: process.env.PERPLEXITY_API_KEY!,
      baseURL: 'https://api.perplexity.ai',
    });
  }
  // Default to OpenAI
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });
};

const openai = getAIClient();

export async function POST(req: NextRequest) {
  const { bedrooms, bathrooms, sqft, features, neighborhood } = await req.json();

  if (!bedrooms || !bathrooms || !sqft || !features) {
    return NextResponse.json({ error: 'Missing required property details.' }, { status: 400 });
  }

  const prompt = `
    You are an expert real estate copywriter. Your task is to write a compelling, eloquent, and enticing property description based on the following details.
    The tone should be luxurious, aspirational, and professional. Highlight the key features and paint a picture of the lifestyle a potential buyer could have.
    Do not just list the features; weave them into a narrative.
    
    Property Details:
    - Bedrooms: ${bedrooms}
    - Bathrooms: ${bathrooms}
    - Square Footage: ${sqft}
    - Neighborhood: ${neighborhood || 'a desirable area'}
    - Key Features: ${features}

    Write the property description now.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: process.env.AI_PROVIDER === 'perplexity' ? 'llama-3-sonar-large-32k-online' : 'gpt-4o',
      messages: [{ role: 'system', content: prompt }],
      temperature: 0.7,
      max_tokens: 500,
    });

    const description = completion.choices[0].message?.content;
    
    if (!description) {
      throw new Error("AI did not return a valid description.");
    }

    return NextResponse.json({ description });

  } catch (error) {
    console.error('Error generating description:', error);
    return NextResponse.json({ error: 'Failed to generate description.' }, { status: 500 });
  }
} 