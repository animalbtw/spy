import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const requestHeaders = new Headers(req.headers)

    // Add new request headers
    requestHeaders.set('request-url', req.url);
  
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }