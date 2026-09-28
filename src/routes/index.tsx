import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, dictionaries } from "../content/site";
import { localBusinessJsonLd, socialMeta } from "../lib/seo";
import { useDocumentTitle, useLang } from "../lib/i18n";
import { Hero } from "../components/Hero";
import { About, Gallery, Process, Reviews, Services } from "../components/Sections";
import { Contact } from "../components/Contact";

const he = dictionaries.he;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: socialMeta({ title: he.meta.title, description: he.meta.description, path: "/" }),
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: "/images/living-double-height.webp", fetchPriority: "high" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();
  useDocumentTitle(t.meta.title);
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
}
