import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck } from "lucide-react";
import { business, dictionaries, whatsappUrl } from "../content/site";
import { useDocumentTitle, useLang } from "../lib/i18n";
import { BackHome } from "../components/LegalPage";

const he = dictionaries.he;

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: he.thankYou.metaTitle },
      { name: "description", content: he.thankYou.metaDescription },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { t } = useLang();
  const ty = t.thankYou;
  useDocumentTitle(ty.metaTitle);
  return (
    <section aria-labelledby="ty-title" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
      <CircleCheck size={52} strokeWidth={1.2} className="text-brass-ink" aria-hidden="true" />
      <p className="eyebrow mt-8">{ty.eyebrow}</p>
      <h1 id="ty-title" className="font-display mt-4 text-5xl sm:text-6xl">
        {ty.title}
      </h1>
      <p className="mt-6 text-xl font-light">{ty.text}</p>

      <h2 className="font-display mt-14 text-3xl">{ty.nextTitle}</h2>
      <ol className="mt-6 space-y-5">
        {ty.next.map((step, i) => (
          <li key={step.slice(0, 20)} className="flex gap-5 border-t border-line pt-5">
            <span className="font-display text-3xl leading-none text-brass-ink" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-lg font-light">{step}</p>
          </li>
        ))}
      </ol>

      <p className="mt-12 rounded-lg bg-stone p-6 text-lg">
        {ty.notOpened}{" "}
        <a href={whatsappUrl(t.hero.whatsappText)} target="_blank" rel="noopener noreferrer" className="text-link font-medium">
          {ty.openAgain}
          <span className="sr-only"> {t.newTab}</span>
        </a>{" "}
        {ty.orCall}{" "}
        <a href={`tel:${business.phoneE164}`} className="text-link font-medium" dir="ltr">
          {business.phoneDisplay}
        </a>
      </p>

      <div className="mt-12">
        <BackHome label={ty.home} />
      </div>
    </section>
  );
}
