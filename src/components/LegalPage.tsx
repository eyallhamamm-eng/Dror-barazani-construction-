import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDocumentTitle, useLang } from "../lib/i18n";

type Section = { title: string; body?: string[]; list?: string[] };

export type LegalDoc = {
  metaTitle: string;
  title: string;
  updatedDate: string;
  updatedISO: string;
  sections: Section[];
};

export function BackHome({ label }: { label: string }) {
  const { dir } = useLang();
  // Arrow points "back" toward the start edge: right in Hebrew, left in English.
  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft;
  return (
    <Link to="/" className="btn btn-ink">
      <Arrow size={18} aria-hidden="true" />
      {label}
    </Link>
  );
}

/** Shared layout for the accessibility statement, privacy policy and terms pages. */
export function LegalPage({ doc, updatedLabel, children }: { doc: LegalDoc; updatedLabel: string; children?: ReactNode }) {
  const { t } = useLang();
  useDocumentTitle(doc.metaTitle);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <BackHome label={t.legal.back} />

      <h1 className="font-display mt-12 text-5xl sm:text-6xl">{doc.title}</h1>
      <p className="mt-4 text-muted">
        {updatedLabel} <time dateTime={doc.updatedISO} className="font-medium text-ink">
          {doc.updatedDate}
        </time>
      </p>

      <div className="mt-12 space-y-12">
        {doc.sections.map((section, i) => (
          <section key={section.title} aria-labelledby={`legal-${i}`}>
            <h2 id={`legal-${i}`} className="font-display text-3xl">
              {section.title}
            </h2>
            {section.body?.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-lg font-light leading-relaxed">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="mt-5 list-disc space-y-2.5 ps-6 text-lg font-light leading-relaxed marker:text-brass-ink">
                {section.list.map((item) => (
                  <li key={item.slice(0, 24)}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {children}
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <BackHome label={t.legal.back} />
      </div>
    </article>
  );
}
