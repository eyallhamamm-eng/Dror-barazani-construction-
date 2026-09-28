// Settings for the floating accessibility menu, persisted in localStorage and applied as classes on <html>.

export const A11Y_STORAGE_KEY = "indoor-a11y";

export const TEXT_SCALES = [100, 112.5, 125, 137.5, 150] as const;

export type Contrast = "none" | "high" | "mono";

export type A11yPrefs = {
  scale: number;
  contrast: Contrast;
  links: boolean;
};

export const DEFAULT_PREFS: A11yPrefs = { scale: 100, contrast: "none", links: false };

export function readPrefs(): A11yPrefs {
  try {
    const raw = localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return DEFAULT_PREFS;
    const parsed = JSON.parse(raw) as Partial<A11yPrefs>;
    return {
      scale: TEXT_SCALES.includes(parsed.scale as (typeof TEXT_SCALES)[number]) ? (parsed.scale as number) : 100,
      contrast: parsed.contrast === "high" || parsed.contrast === "mono" ? parsed.contrast : "none",
      links: parsed.links === true,
    };
  } catch {
    return DEFAULT_PREFS;
  }
}

export function applyPrefs(prefs: A11yPrefs) {
  const html = document.documentElement;
  html.style.fontSize = prefs.scale === 100 ? "" : `${prefs.scale}%`;
  html.classList.toggle("a11y-hc", prefs.contrast === "high");
  html.classList.toggle("a11y-mono", prefs.contrast === "mono");
  html.classList.toggle("a11y-links", prefs.links);
}

export function savePrefs(prefs: A11yPrefs) {
  try {
    localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* storage unavailable */
  }
}

/**
 * Runs inline in <head> before first paint: applies the stored language direction and
 * accessibility settings so there's no flash of the wrong layout. Kept dependency-free on purpose.
 */
export const bootScript = `(function(){try{var d=document.documentElement;var l=localStorage.getItem("indoor-lang");if(l==="en"){d.lang="en";d.dir="ltr";d.classList.add("lang-pending");setTimeout(function(){d.classList.remove("lang-pending")},1500);}var p=JSON.parse(localStorage.getItem("${A11Y_STORAGE_KEY}")||"null");if(p){if(p.scale&&p.scale!==100)d.style.fontSize=p.scale+"%";if(p.contrast==="high")d.classList.add("a11y-hc");if(p.contrast==="mono")d.classList.add("a11y-mono");if(p.links)d.classList.add("a11y-links");}}catch(e){}})();`;
