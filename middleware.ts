import { NextRequest, NextResponse } from 'next/server';
import { ALLOWED_IPS, PUBLIC_ROUTES, IP_CONFIG } from './src/config/ipConfig';

export function middleware(request: NextRequest) {
  // Skip IP protection if disabled
  if (!IP_CONFIG.ENABLE_IP_PROTECTION) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  
  // Skip middleware for public routes and static assets
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Get client IP address with multiple fallbacks
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
  const clientIp = forwarded?.split(',')[0]?.trim() || 
                   cfConnectingIp || 
                   realIp || 
                   'unknown';

  // Debug logging (only in development)
  if (IP_CONFIG.DEBUG_MODE) {
    console.log('🔍 IP Check:', {
      pathname,
      clientIp,
      forwarded,
      realIp,
      cfConnectingIp
    });
  }

  // Check if IP is allowed
  const isAllowed = ALLOWED_IPS.includes(clientIp);

  if (!isAllowed) {
    if (IP_CONFIG.DEBUG_MODE) {
      console.log('🚫 IP Blocked:', clientIp);
    }
    
    // Redirect to coming soon page
    const comingSoonUrl = new URL(IP_CONFIG.REDIRECT_URL, request.url);
    return NextResponse.redirect(comingSoonUrl);
  }

  if (IP_CONFIG.DEBUG_MODE) {
    console.log('✅ IP Allowed:', clientIp);
  }

  // Allow access
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
}; 