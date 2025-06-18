import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Type guard for geo property (Vercel Edge only)
  const geo = (request as any).geo;
  const country = geo?.country || 'US';
  // Example: Log or use country to personalize
  // console.log('Visitor country:', country);
  return NextResponse.next();
} 