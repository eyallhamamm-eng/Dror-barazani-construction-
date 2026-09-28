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
    }),
    viteReact(),
  ],
});
