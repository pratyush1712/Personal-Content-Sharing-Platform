import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api routes
		 * 2. /_next (Next.js internals)
		 * 3. /_static (inside /public)
		 * 4. all root files inside /public (e.g. /favicon.ico)
		 */
		"/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"
	]
};

export default async function middleware(request: NextRequest) {
	const url = request.nextUrl;
	const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

	// Protect the /admin route in all environments
	if (url.pathname.includes("/admin")) {
		if (!session || session.email !== "pratyushsudhakar03@gmail.com") {
			// Redirect to /login if the user is not authenticated
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	return NextResponse.next();
}
