import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["fr", "en"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "fr";

// Countries where French is the primary official language
const FRENCH_COUNTRIES = new Set(["FR", "BE", "CH", "LU", "MC", "CD", "CI", "SN", "CM", "MG", "BF", "ML", "NE", "TG", "BJ", "RW", "BI", "MU", "SC", "KM", "DJ", "GA", "CG", "CF", "TD", "GN", "GW"]);

function detectLocale(request: NextRequest): Locale {
  // 1. Cookie preference (set when user manually switches language)
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && LOCALES.includes(cookie as Locale)) return cookie as Locale;

  // 2. IP country headers (Vercel / Cloudflare)
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry");
  if (country) return FRENCH_COUNTRIES.has(country) ? "fr" : "en";

  // 3. Accept-Language header
  const accept = request.headers.get("accept-language") || "";
  if (/\bfr\b/i.test(accept)) return "fr";
  if (accept.trim()) return "en";

  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals, static files, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-z]{2,5}$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Detect if pathname already has a locale prefix
  const localeInPath = LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  const locale = localeInPath ?? detectLocale(request);

  // Attach locale to response headers so root layout can read it
  const response = localeInPath
    ? NextResponse.next()
    : (() => {
        const url = request.nextUrl.clone();
        url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
        return NextResponse.redirect(url);
      })();

  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)" ],
};
