import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Redirect www to non-www
  if (url.hostname === 'www.thevistassummerlin.com') {
    url.hostname = 'thevistassummerlin.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  
  // Redirect HTTP to HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  
  // Type guard for geo property (Vercel Edge only)
  const geo = (request as any).geo;
  const country = geo?.country || 'US';
  // Example: Log or use country to personalize
  // console.log('Visitor country:', country);
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 