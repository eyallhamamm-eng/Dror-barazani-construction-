import type { ReactNode } from "react";
import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { LangProvider, useLang } from "../lib/i18n";
import { bootScript } from "../lib/a11y-prefs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingControls } from "../components/Floating";

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
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  component: RootComponent,
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
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <FloatingControls />
    </>
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

