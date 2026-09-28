import { createFileRoute } from "@tanstack/react-router";
import { dictionaries } from "../content/site";
import { NotFound } from "../components/NotFound";

const he = dictionaries.he;

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: he.notFound.metaTitle },
      { name: "description", content: he.notFound.metaDescription },
      { name: "robots", content: "noindex" },
    ],
    // Runs before hydration so the router can map the requested URL onto this route (see router.tsx).
    scripts: [{ children: "window.__INDOOR_404__=location.pathname;" }],
  }),
  component: NotFound,
});
