import { useEffect, useId, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Accessibility, ALargeSmall, Contrast, Link2, Minus, Plus, RotateCcw, X } from "lucide-react";
import { whatsappUrl } from "../content/site";
import { useLang } from "../lib/i18n";
import {
  DEFAULT_PREFS,
  TEXT_SCALES,
  applyPrefs,
  readPrefs,
  savePrefs,
  type A11yPrefs,
  type Contrast as ContrastMode,
} from "../lib/a11y-prefs";
import { WhatsAppIcon } from "./icons";

/**
 * Two floating controls in opposite bottom corners so neither ever covers the other:
 * WhatsApp at the inline end, the accessibility menu at the inline start.
 * Both flip sides with the page direction.
 */
export function FloatingControls() {
  const { t } = useLang();
  return (
    <aside aria-label={t.floating.label}>
      <WhatsAppButton />
      <AccessibilityWidget />
    </aside>
  );
}

function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      href={whatsappUrl(t.hero.whatsappText)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.floating.whatsapp} ${t.newTab}`}
      className="fab fixed bottom-5 end-5 z-50 bg-[#a87b42] text-night hover:bg-brass sm:bottom-6 sm:end-6"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}

function AccessibilityWidget() {
  const { t } = useLang();
  const a = t.a11y;
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_PREFS);
  const panelId = useId();
  const titleId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPrefs(readPrefs());
  }, []);

  function update(next: A11yPrefs) {
    setPrefs(next);
    applyPrefs(next);
    savePrefs(next);
  }

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("button:not([disabled])")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const scaleIndex = TEXT_SCALES.indexOf(prefs.scale as (typeof TEXT_SCALES)[number]);
  const setContrast = (mode: ContrastMode) =>
    update({ ...prefs, contrast: prefs.contrast === mode ? "none" : mode });

  const toggleRow =
    "flex w-full items-center gap-3 rounded-md border px-3.5 py-3 text-start text-[0.95rem] transition-colors";
  const onCls = "a11y-on border-ink bg-ink text-sand";
  const offCls = "border-field bg-paper text-ink hover:border-ink";

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? a.close : a.open}
        onClick={() => setOpen((v) => !v)}
        className="fab fixed bottom-5 start-5 z-50 bg-ink text-sand hover:bg-[#3a312a] sm:bottom-6 sm:start-6"
      >
        {open ? <X size={26} aria-hidden="true" /> : <Accessibility size={28} strokeWidth={1.7} aria-hidden="true" />}
      </button>

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="a11y-panel fixed bottom-24 start-4 z-50 max-h-[calc(100svh-8rem)] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-line bg-sand p-5 text-ink shadow-[0_24px_60px_-20px_rgb(28_23_19/0.5)] sm:start-6"
        >
          <h2 id={titleId} className="font-display text-2xl">
            {a.title}
          </h2>

          <fieldset className="mt-5">
            <legend className="flex items-center gap-2 text-sm font-medium text-muted">
              <ALargeSmall size={18} aria-hidden="true" />
              {a.textSize}
            </legend>
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => update({ ...prefs, scale: TEXT_SCALES[Math.max(0, scaleIndex - 1)] })}
                disabled={scaleIndex <= 0}
                aria-label={a.decrease}
                className="grid h-11 w-11 place-items-center rounded-md border border-field bg-paper hover:border-ink disabled:opacity-40"
              >
                <Minus size={18} aria-hidden="true" />
              </button>
              <output className="flex-1 text-center font-medium" aria-live="polite" aria-label={a.current}>
                {prefs.scale}%
              </output>
              <button
                type="button"
                onClick={() =>
                  update({ ...prefs, scale: TEXT_SCALES[Math.min(TEXT_SCALES.length - 1, scaleIndex + 1)] })
                }
                disabled={scaleIndex >= TEXT_SCALES.length - 1}
                aria-label={a.increase}
                className="grid h-11 w-11 place-items-center rounded-md border border-field bg-paper hover:border-ink disabled:opacity-40"
              >
                <Plus size={18} aria-hidden="true" />
              </button>
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="flex items-center gap-2 text-sm font-medium text-muted">
              <Contrast size={18} aria-hidden="true" />
              {a.contrast}
            </legend>
            <div className="mt-2 space-y-2">
              <button
                type="button"
                aria-pressed={prefs.contrast === "high"}
                onClick={() => setContrast("high")}
                className={`${toggleRow} ${prefs.contrast === "high" ? onCls : offCls}`}
              >
                <span className="h-5 w-5 shrink-0 rounded-full border border-current bg-[linear-gradient(90deg,#000_50%,#ff0_50%)]" aria-hidden="true" />
                {a.highContrast}
              </button>
              <button
                type="button"
                aria-pressed={prefs.contrast === "mono"}
                onClick={() => setContrast("mono")}
                className={`${toggleRow} ${prefs.contrast === "mono" ? onCls : offCls}`}
              >
                <span className="h-5 w-5 shrink-0 rounded-full border border-current bg-[linear-gradient(90deg,#222_50%,#bbb_50%)]" aria-hidden="true" />
                {a.monochrome}
              </button>
            </div>
          </fieldset>

          <button
            type="button"
            aria-pressed={prefs.links}
            onClick={() => update({ ...prefs, links: !prefs.links })}
            className={`${toggleRow} mt-5 ${prefs.links ? onCls : offCls}`}
          >
            <Link2 size={18} aria-hidden="true" />
            {a.links}
          </button>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
            <button
              type="button"
              onClick={() => update(DEFAULT_PREFS)}
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 font-medium underline decoration-brass underline-offset-4"
            >
              <RotateCcw size={16} aria-hidden="true" />
              {a.reset}
            </button>
            <Link
              to="/accessibility"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center px-2 text-sm underline decoration-brass underline-offset-4"
            >
              {a.statement}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
