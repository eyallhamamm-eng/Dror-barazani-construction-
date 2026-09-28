import { Link } from "@tanstack/react-router";
import { business, mapsDirectionsUrl } from "../content/site";
import { useLang } from "../lib/i18n";
import { ArchMark } from "./icons";

export function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark bg-night text-sand">
      {/* Extra bottom padding keeps footer text clear of the floating buttons. */}
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <ArchMark className="h-12 w-[2.6rem] text-brass" />
              <p className="flex flex-col leading-none">
                <span className="font-display text-2xl">{t.brand.name}</span>
                <span className="mt-1 text-xs font-medium tracking-[0.22em] text-night-muted">INDOOR</span>
              </p>
            </div>
            <p className="mt-6 max-w-sm text-night-muted">{t.footer.about}</p>
          </div>

          <nav aria-label={t.nav.footerLabel}>
            <ul className="space-y-3">
              {t.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={`/${item.href}`} className="hover:text-brass hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="space-y-3 not-italic">
            <p>
              <a href={`tel:${business.phoneE164}`} className="hover:text-brass hover:underline" dir="ltr">
                {business.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brass hover:underline">
                {business.address[lang]}
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </p>
            {t.contact.hours.map((h) => (
              <p key={h.days} className="text-sm text-night-muted">
                {h.days}: {h.time}
              </p>
            ))}
          </address>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-sand/15 pt-8 text-sm text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.brand.name} INDOOR. {t.footer.rights}.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/accessibility" className="text-sand underline decoration-brass underline-offset-4 hover:text-brass">
                {t.footer.accessibility}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sand underline decoration-brass underline-offset-4 hover:text-brass">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sand underline decoration-brass underline-offset-4 hover:text-brass">
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <a href="#main" className="text-sand underline decoration-brass underline-offset-4 hover:text-brass">
                {t.footer.backToTop}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
