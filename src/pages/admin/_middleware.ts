import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '../../middleware/auth'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
   /* if (!isAuthenticated()) {
        const url = req.nextUrl.clone()
        url.pathname = '/admin/sign-in'
        return NextResponse.rewrite(url)
    }*/
}