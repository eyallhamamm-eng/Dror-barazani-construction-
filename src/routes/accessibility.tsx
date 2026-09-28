import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, dictionaries } from "../content/site";
import { socialMeta } from "../lib/seo";
import { useLang } from "../lib/i18n";
import { LegalPage } from "../components/LegalPage";

const he = dictionaries.he;

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: socialMeta({ title: he.statement.metaTitle, description: he.statement.metaDescription, path: "/accessibility" }),
    links: [{ rel: "canonical", href: `${SITE_URL}/accessibility` }],
  }),
  component: AccessibilityStatement,
});

function AccessibilityStatement() {
  const { t } = useLang();
  const s = t.statement;
  return (
    <LegalPage doc={s} updatedLabel={s.updated}>
      <section aria-labelledby="st-coordinator" className="rounded-lg border border-line bg-stone p-8">
        <h2 id="st-coordinator" className="font-display text-3xl">
          {s.coordinator.title}
        </h2>
        <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-lg">
          <dt className="text-muted">{s.coordinator.name}</dt>
          <dd>{s.coordinator.nameValue}</dd>
          <dt className="text-muted">{s.coordinator.phone}</dt>
          <dd>{s.coordinator.phoneValue}</dd>
          <dt className="text-muted">{s.coordinator.email}</dt>
          <dd>{s.coordinator.emailValue}</dd>
        </dl>
      </section>
    </LegalPage>
  );
}
