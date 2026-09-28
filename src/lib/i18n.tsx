import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LANG, LANG_STORAGE_KEY, dictionaries, type Dict, type Lang } from "../content/site";

type LangContextValue = {
  lang: Lang;
  t: Dict;
  dir: "rtl" | "ltr";
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export const dirOf = (lang: Lang) => (lang === "he" ? "rtl" : "ltr");

function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "he" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

/**
 * The server always renders Hebrew. On the client we switch to the stored language after hydration;
 * the inline script in <head> has already set <html dir/lang> and hides the body until this runs,
 * so English visitors never see the Hebrew layout flash.
 */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStoredLang();
    if (stored) setLangState(stored);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dirOf(lang);
    html.classList.remove("lang-pending");
  }, [lang, ready]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice lasts for this page view only */
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: dictionaries[lang], dir: dirOf(lang), setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}

/** Keeps the tab title in the current language (the prerendered <title> is Hebrew). */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
