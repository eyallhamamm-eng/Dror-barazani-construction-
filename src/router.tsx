import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

declare global {
  interface Window {
    /** Set by the prerendered 404.html: the unknown path the host served it for. */
    __INDOOR_404__?: string;
  }
}

const notFoundPath = () => (typeof window === "undefined" ? undefined : window.__INDOOR_404__);

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    // Static hosts answer any unknown URL with 404.html (prerendered from /404). Map that URL to
    // the /404 route inside the router so hydration matches, while the address bar keeps what was typed.
    rewrite: {
      input: ({ url }) => {
        const path = notFoundPath();
        if (path && path !== "/404" && url.pathname === path) {
          url.pathname = "/404";
          return url;
        }
      },
      output: ({ url }) => {
        const path = notFoundPath();
        if (path && path !== "/404" && url.pathname === "/404") {
          url.pathname = path;
          return url;
        }
      },
    },
  });
}
