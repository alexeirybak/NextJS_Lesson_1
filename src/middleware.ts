import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", request.url));
//   }

//   return NextResponse.next();
// }

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.rewrite(new URL("/hello", request.url));
//   }

//   return NextResponse.next();
// }

// export function middleware(request: NextRequest) {
//   const response = NextResponse.next();

//   const theme = request.cookies.get("theme");

//   if (!theme) {
//     response.cookies.set("theme", "dark");
//   }

//   return response;
// }

export function middleware() {
  const response = NextResponse.next();

  response.headers.set("X-Custom-Header", "Hello from middleware");
  return response;
}
