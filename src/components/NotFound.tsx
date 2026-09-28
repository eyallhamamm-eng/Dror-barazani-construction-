import { whatsappUrl } from "../content/site";
import { useDocumentTitle, useLang } from "../lib/i18n";
import { ArchMark, WhatsAppIcon } from "./icons";
import { BackHome } from "./LegalPage";

/** Branded 404, used for the /404 route (served by the host as 404.html) and for unknown client-side routes. */
export function NotFound() {
  const { t } = useLang();
  const n = t.notFound;
  useDocumentTitle(n.metaTitle);
  return (
    <section aria-labelledby="nf-title" className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
      <ArchMark className="h-28 w-[6.1rem] text-brass-ink" />
      <p className="eyebrow mt-10">{n.eyebrow}</p>
      <h1 id="nf-title" className="font-display mt-4 text-5xl sm:text-6xl">
        {n.title}
      </h1>
      <p className="mt-6 max-w-lg text-lg font-light text-muted">{n.text}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <BackHome label={n.home} />
        <a
          href={whatsappUrl(t.hero.whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn border border-ink/30 text-ink hover:border-ink hover:bg-stone"
        >
          <WhatsAppIcon size={20} />
          {n.whatsapp}
          <span className="sr-only"> {t.newTab}</span>
        </a>
      </div>
    </section>
  );
}
