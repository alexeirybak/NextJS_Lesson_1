import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(["/user-profile"]);

// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) {
//     await auth.protect();
//   }
// });

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (
    isAdminRoute(req) &&
    (await auth()).sessionClaims?.metadata?.role !== "admin"
  ) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  if (!userId && !isPublicRoute(req)) {
    // Кастомная логика
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

//NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
//CLERK_SECRET_KEY=...

//NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
//NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

//NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/userPanel
//NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/userPanel

//NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/user-profile
//NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/userPanel
