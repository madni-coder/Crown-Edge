import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const isLoggedIn = request.cookies.get("admin_auth")?.value === "true";

    // Protect all /admin routes except the login page itself
    if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !isLoggedIn) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Already logged in → skip login page
    if (pathname === "/admin/login" && isLoggedIn) {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    // Forward pathname so server layouts can read it
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", pathname);
    return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
    matcher: ["/admin/:path*"],
};
