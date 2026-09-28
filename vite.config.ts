import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    // Every route is server-rendered once at build time into static HTML,
    // so crawlers and link previews (WhatsApp, Facebook) get the full page.
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      pages: [
        // Written as /404.html, which Vercel and most static hosts serve for unknown URLs.
        { path: "/404", prerender: { outputPath: "/404", autoSubfolderIndex: false } },
        // Not linked anywhere (the contact form navigates to it), so list it explicitly.
        { path: "/thank-you" },
      ],
    }),
    viteReact(),
  ],
});
