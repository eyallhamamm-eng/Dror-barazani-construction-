import { useEffect, useId, useRef, useState } from "react";
import { Languages, Menu, Phone, X } from "lucide-react";
import { business } from "../content/site";
import { useLang } from "../lib/i18n";
import { ArchMark } from "./icons";

export function LangToggle() {
  const { lang, t, setLang } = useLang();
  const next = lang === "he" ? "en" : "he";
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/25 px-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-stone active:scale-[0.97]"
    >
      <Languages size={18} strokeWidth={1.6} aria-hidden="true" focusable="false" />
      {/* The label names the language you switch to, in that language. */}
      <span lang={next}>{t.langToggle.label}</span>
    </button>
  );
}

export function Brand() {
  const { t } = useLang();
  return (
    <a href="/" className="group inline-flex items-center gap-3 rounded-sm">
      <ArchMark className="h-9 w-7 shrink-0 text-brass-ink" />
      <span className="flex flex-col leading-none">
        <span className="font-display whitespace-nowrap text-[1.45rem] text-ink">{t.brand.name}</span>
        <span className="mt-1 whitespace-nowrap text-[0.75rem] font-medium tracking-[0.22em] text-muted">
          INDOOR
          <span className="hidden sm:inline">
            {" "}
            <span aria-hidden="true">·</span> <span className="tracking-normal">{t.brand.tagline}</span>
          </span>
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header id="site-header" className="header-material sticky top-0 z-40 border-b border-line/70">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-3 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Language switch sits in the top-right corner in both directions. */}
        <div className="shrink-0 rtl:order-first ltr:order-last">
          <LangToggle />
        </div>

        <Brand />

        <nav aria-label={t.nav.label} className="ms-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  className="py-2 text-[0.95rem] text-ink/85 underline-offset-8 transition-colors hover:text-ink hover:underline hover:decoration-brass"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`tel:${business.phoneE164}`}
          className="btn btn-ink hidden !min-h-11 !px-5 text-[0.95rem] xl:inline-flex"
        >
          <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
          <span dir="ltr">{business.phoneDisplay}</span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="ms-auto inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-stone lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div
        id={menuId}
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-sand px-4 pb-8 pt-4 shadow-[0_24px_40px_-24px_rgb(28_23_19/0.35)] lg:hidden"
      >
        <nav aria-label={t.nav.label}>
          <ul className="divide-y divide-line">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  onClick={() => setOpen(false)}
                  className="font-display block py-3.5 text-2xl text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${business.phoneE164}`} className="btn btn-ink mt-6 w-full">
          <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
          {t.nav.call} <span dir="ltr">{business.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
