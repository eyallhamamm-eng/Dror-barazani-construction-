import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, dictionaries } from "../content/site";
import { socialMeta } from "../lib/seo";
import { useLang } from "../lib/i18n";
import { LegalPage } from "../components/LegalPage";

const he = dictionaries.he;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: socialMeta({ title: he.terms.metaTitle, description: he.terms.metaDescription, path: "/terms" }),
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  return <LegalPage doc={t.terms} updatedLabel={t.legal.updated} />;
}
