import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, dictionaries } from "../content/site";
import { socialMeta } from "../lib/seo";
import { useLang } from "../lib/i18n";
import { LegalPage } from "../components/LegalPage";

const he = dictionaries.he;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: socialMeta({ title: he.privacy.metaTitle, description: he.privacy.metaDescription, path: "/privacy" }),
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  return <LegalPage doc={t.privacy} updatedLabel={t.legal.updated} />;
}
