import type { ReactNode } from "react";
import { HeadContent, Outlet, Scripts, createRootRoute, useRouterState } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import appCss from "../styles.css?url";
import { LangProvider, useLang } from "../lib/i18n";
import { bootScript } from "../lib/a11y-prefs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingControls } from "../components/Floating";
import { NotFound } from "../components/NotFound";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1c1713" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <LangProvider>
        <Shell />
      </LangProvider>
    </RootDocument>
  );
}

function Shell() {
  const { t } = useLang();
  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <RouteProgress />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <FloatingControls />
      {/* Cookieless page-view analytics; reports only once enabled in the Vercel dashboard. */}
      <Analytics />
    </>
  );
}

/** Thin brass bar across the top while a route is loading. */
function RouteProgress() {
  const loading = useRouterState({ select: (s) => s.status === "pending" });
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-x-0 top-0 z-[60] h-0.5 rtl:origin-right ltr:origin-left bg-brass transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        loading ? "scale-x-75 opacity-100" : "scale-x-100 opacity-0"
      }`}
    />
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    // Server output is always Hebrew/RTL; the boot script may switch dir/lang before first paint,
    // so attribute differences on <html> during hydration are expected.
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

