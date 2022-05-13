// pages/_middleware.ts
import { getToken } from 'next-auth/jwt'

import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname === "/order" || 
        req.nextUrl.pathname === "/settings" ||
        req.nextUrl.pathname === "/wishlist" ||
        req.nextUrl.pathname === "/checkout"  ) {
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === "production",
        });
        if (!session){
            const url = req.nextUrl.clone()
            url.pathname = '/sign-in'
            return NextResponse.rewrite(url)
        }
    }
}