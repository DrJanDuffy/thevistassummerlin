import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req: NextRequest) {
  const { name, email, phone, message, propertyId, agentId } = await req.json();

  // 1. Send to Follow Up Boss
  const fubRes = await fetch('https://api.followupboss.com/v1/people', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(process.env.FUB_API_KEY + ':').toString('base64')}`,
    },
    body: JSON.stringify({
      firstName: name,
      emails: [{ value: email }],
      phones: [{ value: phone }],
      // Add more fields as needed
      // You can also add property info as a custom field
    }),
  });

  if (!fubRes.ok) {
    const error = await fubRes.text();
    return NextResponse.json({ error }, { status: fubRes.status });
  }

  const fubData = await fubRes.json();

  // 2. Store in Supabase
  const { data, error } = await supabase.from('leads').insert([
    {
      name,
      email,
      phone,
      message,
      property_id: propertyId,
      agent_id: agentId,
      fub_id: fubData.id,
      status: 'new',
    },
  ]).select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ lead: data[0], fub: fubData });
} 