// middleware.js
import { NextResponse } from 'next/server';

export function proxy(request) {
  // 1. Get the path the user or tool is trying to access
  const path = request.nextUrl.pathname;

  // 2. Define which routes need protection
  const isProtectedUIRoute = path.startsWith('/dashboard') || path.startsWith('/settings');
  const isProtectedAPIRoute = path.startsWith('/api/secure-data');

  // 3. Extract the token. 
  // Browsers usually send this via Cookies. 
  // Postman/external tools usually send this via the 'Authorization' Header.
  const tokenFromCookie = request.cookies.get('auth-token')?.value;
  const tokenFromHeader = request.headers.get('authorization')?.split(' ')[1]; // Expects "Bearer <token>"
  
  const token = tokenFromCookie || tokenFromHeader;

  // 4. If there is NO token, block the request
  if (!token) {
    
    // Scenario A: Someone is hitting your API from Postman or a frontend fetch
    if (isProtectedAPIRoute) {
      return NextResponse.json(
        { success: false, message: 'Access Denied. No token provided.' },
        { status: 401 }
      );
    }

    // Scenario B: Someone is typing the URL into their browser
    if (isProtectedUIRoute) {
      // Send them to the login page, and append where they were trying to go
      // so you can send them back there after they log in!
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', path);
      
      return NextResponse.redirect(loginUrl);
    }
  }

  // 5. If the token exists, you can optionally verify it here 
  // (e.g., using a lightweight library like 'jose' to decode a JWT).
  // For this example, if they have a token, we let them through.

  return NextResponse.next();
}

console.log("Middleware loaded: Proxy is active.");

// 6. Optimize performance by telling Next.js exactly which paths this middleware should run on
export const config = {
  matcher: [
    "/users/:path*",
  ],
};