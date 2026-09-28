import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_URL, dictionaries } from "../content/site";
import { socialMeta } from "../lib/seo";
import { useDocumentTitle, useLang } from "../lib/i18n";

const he = dictionaries.he;

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: socialMeta({
      title: he.statement.metaTitle,
      description: he.statement.metaDescription,
      path: "/accessibility",
    }),
    links: [{ rel: "canonical", href: `${SITE_URL}/accessibility` }],
  }),
  component: AccessibilityStatement,
});

function BackHome() {
  const { t, dir } = useLang();
  // Arrow points "back" toward the start edge: right in Hebrew, left in English.
  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft;
  return (
    <Link to="/" className="btn btn-ink">
      <Arrow size={18} aria-hidden="true" />
      {t.statement.back}
    </Link>
  );
}

function AccessibilityStatement() {
  const { t } = useLang();
  const s = t.statement;
  useDocumentTitle(s.metaTitle);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <BackHome />

      <h1 className="font-display mt-12 text-5xl sm:text-6xl">{s.title}</h1>
      <p className="mt-4 text-muted">
        {s.updated} <span className="font-medium text-ink">{s.updatedDate}</span>
      </p>

      <div className="mt-12 space-y-12">
        {s.sections.map((section) => (
          <section key={section.title} aria-labelledby={`st-${section.title}`}>
            <h2 id={`st-${section.title}`} className="font-display text-3xl">
              {section.title}
            </h2>
            {"body" in section &&
              section.body?.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-lg font-light leading-relaxed">
                  {p}
                </p>
              ))}
            {"list" in section && section.list && (
              <ul className="mt-5 list-disc space-y-2.5 ps-6 text-lg font-light leading-relaxed marker:text-brass-ink">
                {section.list.map((item) => (
                  <li key={item.slice(0, 24)}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

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
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <BackHome />
      </div>
    </article>
  );
}
