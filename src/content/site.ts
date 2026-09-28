// Business facts and all user-facing copy, in Hebrew (default) and English.
// Text is written for people, not keywords: short sentences, plural address in Hebrew.

export type Lang = "he" | "en";

export const LANGS: Lang[] = ["he", "en"];
export const DEFAULT_LANG: Lang = "he";
export const LANG_STORAGE_KEY = "indoor-lang";

// Replace with the production domain before launch (used for canonical + Open Graph URLs).
export const SITE_URL = "https://indoor-jerusalem.example";

/** Publication / last-update date of the accessibility statement, privacy policy and terms. */
export const LEGAL_UPDATED = "2026-09-28";

export const business = {
  phoneDisplay: "054-237-7390",
  phoneE164: "+972542377390",
  whatsappNumber: "972542377390",
  // Placeholder address until confirmed with the business.
  address: {
    he: "אבא אבן 1/15, ירושלים",
    en: "1/15 Abba Even St., Jerusalem",
    // Query sent to Google Maps; kept in Hebrew so Maps resolves the street reliably.
    mapsQuery: "אבא אבן 1, ירושלים",
  },
  rating: { value: "5.0", count: 19 },
};

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.address.mapsQuery,
)}`;

export const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "דרור ברזני INDOOR קבלן שיפוצים בירושלים",
)}`;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: Record<Lang, string>;
};

/** 1x and 2x (enhanced) WebP variants, for srcset. */
export function photoSrcSet(p: Photo) {
  return `${p.src} ${p.width}w, ${p.src.replace(/\.webp$/, "@2x.webp")} ${p.width * 2}w`;
}

// Every photo is a real project by the business. Alt text describes what is actually in the frame.
export const photos: Record<string, Photo> = {
  livingDoubleHeight: {
    src: "/images/living-double-height.webp",
    width: 1170,
    height: 833,
    alt: {
      he: "סלון בגובה כפול עם ריצוף גדול בדמוי שיש מבריק, ספריית קיר מעץ כהה ומטבח אפור-פחם. ברקע גלריה עם מעקה מתכת, מדרגות ונברשת תלויה",
      en: "Double-height living room with large glossy marble-look floor tiles, a dark wood wall unit and a charcoal kitchen. A gallery with a metal railing, stairs and a pendant chandelier in the background",
    },
  },
  kitchenDoubleHeight: {
    src: "/images/kitchen-u-charcoal.webp",
    width: 1170,
    height: 848,
    alt: {
      he: "מטבח בצורת U בגוון אפור-פחם עם משטח שיש בהיר וברז בגוון זהב, בחלל עם תקרה כפולה, ריצוף בדמוי שיש וארון קיר גבוה",
      en: "Charcoal U-shaped kitchen with a light marble worktop and a brass-tone tap, in a double-height space with marble-look flooring and a tall built-in cabinet",
    },
  },
  showerGlass: {
    src: "/images/shower-glass.webp",
    width: 1170,
    height: 838,
    alt: {
      he: "מקלחון זכוכית עם פרזול לבן, קירות בחיפוי אריחי שיש בהירים, קיר אחד באריחים כהים ותעלת ניקוז לינארית",
      en: "Glass shower enclosure with white fittings, light marble-look wall tiles, one dark tiled wall and a linear floor drain",
    },
  },
  bedroomLilac: {
    src: "/images/bedroom-lilac.webp",
    width: 1170,
    height: 820,
    alt: {
      he: "חדר שינה עם קירות בגוון לילך, ארון קיר אפור בהיר עם מגירות, דלתות פנים לבנות וריצוף אריחים גדולים",
      en: "Bedroom with lilac walls, a light grey built-in wardrobe with drawers, white interior doors and large floor tiles",
    },
  },
  studyStone: {
    src: "/images/study-stone-look.webp",
    width: 1170,
    height: 844,
    alt: {
      he: "חדר עבודה עם ארון גבוה ושולחן כתיבה עם מגירות בחיפוי דמוי אבן אפורה, מתחת לחלון אלומיניום",
      en: "Study with a tall cabinet and a desk with drawers finished in grey stone-look laminate, beneath an aluminium window",
    },
  },
  accessibleShower: {
    src: "/images/accessible-shower.webp",
    width: 1170,
    height: 843,
    alt: {
      he: "מקלחת נגישה עם מאחז מתקפל, מאחז בצורת L, ספסל ישיבה מחופה אריחים ונישה בקיר",
      en: "Accessible shower with a fold-down grab bar, an L-shaped grab bar, a tiled bench seat and a wall niche",
    },
  },
  accessibleToilet: {
    src: "/images/accessible-toilet.webp",
    width: 1170,
    height: 855,
    alt: {
      he: "שירותים נגישים עם אסלה תלויה, מאחז מתקפל על רגל תמיכה ומאחז קיר, על רקע אריחים מפוספסים",
      en: "Accessible toilet with a wall-hung WC, a fold-down grab bar on a floor post and a wall grab bar, against striped tiles",
    },
  },
  kitchenGalley: {
    src: "/images/kitchen-galley.webp",
    width: 1170,
    height: 854,
    alt: {
      he: "מטבח ארוך עם ארונות תחתונים לבנים, ארונות עליונים כהים וחיפוי בדמוי שיש, לצד קיר ארונות לבן לכל אורך המסדרון",
      en: "Long galley kitchen with white base units, dark wall cabinets and a marble-look backsplash, beside a full-length wall of white storage",
    },
  },
  kitchenIsland: {
    src: "/images/kitchen-island.webp",
    width: 1170,
    height: 861,
    alt: {
      he: "מטבח בגוון שמנת עם פסי ידיות שחורים, משטח אפור ואי מרכזי",
      en: "Cream kitchen with black handle rails, a grey worktop and a central island",
    },
  },
  openSpace: {
    src: "/images/open-space-kitchen.webp",
    width: 1170,
    height: 838,
    alt: {
      he: "חלל פתוח עם מטבח לבן ומשטח שחור, ריצוף גדול בגוון בטון אפור ומבט אל דלת הכניסה",
      en: "Open-plan space with a white kitchen and black worktop, large concrete-grey floor tiles and a view to the front door",
    },
  },
  stairs: {
    src: "/images/floating-stairs.webp",
    width: 1170,
    height: 1708,
    alt: {
      he: "מדרגות מרחפות עם שדרה מרכזית מפלדה שחורה ומדרכים מעץ מלא, מוארות בספוטים שקועים",
      en: "Floating staircase with a black steel central spine and solid wood treads, lit by recessed spotlights",
    },
  },
  kitchenLed: {
    src: "/images/kitchen-u-led.webp",
    width: 1170,
    height: 1517,
    alt: {
      he: "מטבח בצורת U עם חזיתות אפורות ולבנות מבריקות, תאורת לד מתחת לארונות העליונים ומשטח לבן",
      en: "U-shaped kitchen with glossy grey and white fronts, LED lighting under the wall cabinets and a white worktop",
    },
  },
  kitchenBlue: {
    src: "/images/kitchen-blue-shaker.webp",
    width: 734,
    height: 1456,
    alt: {
      he: "מטבח כחול בסגנון שייקר עם ידיות מתכת, ויטרינה פינתית במסגרת עץ וחיפוי אריחים לבנים",
      en: "Blue Shaker-style kitchen with metal handles, a wood-framed glass corner cabinet and white brick-tile backsplash",
    },
  },
};

// Order chosen so the masonry columns mix portrait and landscape shots.
export const galleryOrder: (keyof typeof photos)[] = [
  "kitchenDoubleHeight",
  "stairs",
  "showerGlass",
  "kitchenIsland",
  "kitchenBlue",
  "studyStone",
  "accessibleShower",
  "kitchenLed",
  "kitchenGalley",
  "bedroomLilac",
  "accessibleToilet",
  "openSpace",
  "livingDoubleHeight",
];

const he = {
  meta: {
    title: "דרור ברזני INDOOR | קבלן שיפוצים בירושלים",
    description:
      "דרור ברזני INDOOR, קבלן שיפוצים בירושלים. שיפוץ דירות, מטבחים, חדרי רחצה, ריצוף, נגרות והתאמות נגישות. טלפון: 054-237-7390",
    ogAlt: "סלון משופץ בגובה כפול עם ריצוף שיש מבריק",
  },
  skip: "דלג לתוכן הראשי",
  brand: { name: "דרור ברזני", tagline: "קבלן שיפוצים בירושלים" },
  nav: {
    label: "ניווט ראשי",
    footerLabel: "ניווט בתחתית העמוד",
    items: [
      { href: "#services", label: "שירותים" },
      { href: "#work", label: "עבודות" },
      { href: "#process", label: "איך עובדים" },
      { href: "#reviews", label: "ביקורות" },
      { href: "#contact", label: "צרו קשר" },
    ],
    openMenu: "פתיחת תפריט",
    closeMenu: "סגירת תפריט",
    call: "חייגו",
  },
  langToggle: { label: "English", aria: "Switch to English" },
  hero: {
    eyebrow: "דרור ברזני · INDOOR · ירושלים",
    title: "קבלן שיפוצים בירושלים",
    lead: "שיפוץ דירות ובתים פרטיים: מטבחים, חדרי רחצה, ריצוף ונגרות. פגישה ומדידה בבית, והצעת מחיר מפורטת לפני שמתחילים.",
    ctaPrimary: "שלחו הודעה בוואטסאפ",
    ctaSecondary: "חייגו 054-237-7390",
    rating: "5.0 בגוגל · 19 ביקורות",
    ratingAria: "דירוג 5.0 מתוך 5 בגוגל, על סמך 19 ביקורות",
    whatsappText: "שלום דרור, הגעתי מהאתר ואשמח לתאם פגישה לגבי שיפוץ.",
  },
  services: {
    eyebrow: "שירותים",
    title: "מה אנחנו עושים",
    intro: "עבודות שיפוץ בדירות ובבתים פרטיים בירושלים והסביבה.",
    items: [
      {
        title: "שיפוץ דירה מלא",
        text: "הריסה, חשמל, אינסטלציה, טיח וצבע.",
      },
      {
        title: "מטבחים",
        text: "פירוק המטבח הקיים, התקנת ארונות ומשטח, וחיבור למים ולחשמל.",
      },
      {
        title: "חדרי רחצה",
        text: "איטום, ריצוף וחיפוי, התקנת כלים סניטריים ומקלחונים.",
      },
      {
        title: "התאמות נגישות",
        text: "מקלחות ללא סף, מאחזים, מושבי מקלחת ושירותים נגישים.",
      },
      {
        title: "ריצוף וחיפוי",
        text: "ריצוף וחיפוי קירות באריחים בכל הגדלים.",
      },
      {
        title: "נגרות ומדרגות",
        text: "ארונות קיר, ספריות, דלתות פנים ומדרגות.",
      },
    ],
  },
  about: {
    eyebrow: "אודות",
    title: "דרור ברזני",
    paragraphs: [
      "דרור מגיע בעצמו לפגישה הראשונה, מודד ומכין הצעת מחיר מפורטת לפי סעיפים.",
      "במהלך העבודה הוא איש הקשר שלכם לכל שאלה.",
    ],
    quote: "דרור הגיע לתת הצעת מחיר מפורטת והוגנת. העבודה נעשתה בזמן שנקבע, ללא איחורים.",
    quoteBy: "מיכל גומל בלנק, ביקורת בגוגל",
  },
  process: {
    eyebrow: "איך עובדים",
    title: "שלבי העבודה",
    steps: [
      {
        title: "פגישה ומדידה",
        text: "דרור מגיע לבית, מודד ורושם מה צריך לעשות.",
      },
      {
        title: "הצעת מחיר",
        text: "הצעה מפורטת, עם מחיר לכל סעיף.",
      },
      {
        title: "ביצוע",
        text: "העבודה מתבצעת לפי לוח זמנים שסוכם מראש.",
      },
      {
        title: "מסירה",
        text: "בודקים יחד את העבודה, מתקנים מה שצריך ומוסרים.",
      },
    ],
  },
  gallery: {
    eyebrow: "עבודות",
    title: "עבודות שביצענו",
    intro: "תמונות מפרויקטים בירושלים והסביבה.",
  },
  reviews: {
    eyebrow: "ביקורות",
    title: "ביקורות בגוגל",
    summary: "5.0 מתוך 5, על סמך 19 ביקורות",
    source: "ביקורת בגוגל",
    all: "לכל הביקורות בגוגל",
    newTab: "(נפתח בכרטיסייה חדשה)",
    items: [
      {
        name: "ורדה",
        text: "דרור ברזני שיפץ את הדירה שלי שיפוץ גדול. עשה עבודה מצוינת והיה זמין לכל בקשה. אדיב מאוד ונעים! ממליצה בחום.",
      },
      {
        name: "גלי שבתאי",
        text: "חברת אינדור מספקת שירות מקצועי ביותר ויחס נעים. עבודת שיפוצים מדויקת ומהירה. דרור וכל הצוות אדיבים ונותנים מענה מיידי. ממליצה מאוד!",
      },
      {
        name: "מיכל גומל בלנק",
        text: "דרור הגיע לתת הצעת מחיר מפורטת והוגנת. העבודה נעשתה בזמן שנקבע, ללא איחורים, ללא בעיות ובצורה הכי מקצועית ומדויקת. ממליצה בחום.",
      },
    ],
  },
  contact: {
    eyebrow: "צרו קשר",
    title: "יצירת קשר",
    intro: "השאירו פרטים, וההודעה תישלח אלינו בוואטסאפ. אפשר גם להתקשר.",
    form: {
      name: "שם מלא",
      phone: "טלפון",
      type: "סוג העבודה",
      typeOptions: ["שיפוץ דירה מלא", "מטבח", "חדר רחצה", "התאמות נגישות", "ריצוף וחיפוי", "נגרות", "אחר"],
      area: "שכונה או יישוב",
      message: "כמה מילים על העבודה",
      messageHint: "לא חובה. למשל: גודל הדירה, מתי תרצו להתחיל",
      required: "שדה חובה",
      submit: "שליחה בוואטסאפ",
      errorName: "יש למלא שם",
      errorPhone: "יש למלא מספר טלפון תקין, לדוגמה 050-1234567",
      sent: "ההודעה נפתחה בוואטסאפ. יש ללחוץ על שליחה.",
      pending: "פותחים את וואטסאפ…",
      messageIntro: "שלום דרור, הגעתי מהאתר.",
    },
    details: {
      title: "פרטי התקשרות",
      phone: "טלפון",
      whatsapp: "וואטסאפ",
      whatsappCta: "שליחת הודעה",
      address: "כתובת",
      directions: "מסלול הגעה בגוגל מפות",
      hours: "שעות פעילות",
    },
    hours: [
      { days: "ראשון עד חמישי", time: "08:00 עד 20:00" },
      { days: "שישי", time: "08:00 עד 14:00" },
      { days: "שבת", time: "סגור" },
    ],
  },
  footer: {
    about: "קבלן שיפוצים בירושלים. מטבחים, חדרי רחצה, ריצוף, נגרות והתאמות נגישות.",
    accessibility: "הצהרת נגישות",
    rights: "כל הזכויות שמורות",
    backToTop: "חזרה לראש העמוד",
    privacy: "מדיניות פרטיות",
    terms: "תנאי שימוש",
  },
  floating: {
    label: "פעולות מהירות",
    whatsapp: "שליחת הודעת וואטסאפ לדרור ברזני",
  },
  a11y: {
    open: "תפריט נגישות",
    close: "סגירת תפריט הנגישות",
    title: "התאמות נגישות",
    textSize: "גודל טקסט",
    increase: "הגדלת טקסט",
    decrease: "הקטנת טקסט",
    current: "גודל נוכחי",
    contrast: "ניגודיות",
    highContrast: "ניגודיות גבוהה (שחור וצהוב)",
    monochrome: "מונוכרום (גווני אפור)",
    links: "הבלטת קישורים",
    reset: "איפוס הגדרות",
    statement: "להצהרת הנגישות",
    on: "פעיל",
    off: "כבוי",
  },
  newTab: "(נפתח בכרטיסייה חדשה)",
  statement: {
    metaTitle: "הצהרת נגישות | דרור ברזני INDOOR",
    metaDescription: "הצהרת הנגישות של אתר דרור ברזני INDOOR, קבלן שיפוצים בירושלים: רמת הנגישות, התאמות שבוצעו ופרטי רכז הנגישות.",
    back: "חזרה לעמוד הבית",
    title: "הצהרת נגישות",
    updated: "עודכן לאחרונה:",
    updatedDate: "28 בספטמבר 2026",
    updatedISO: LEGAL_UPDATED,
    sections: [
      {
        title: "מחויבות לנגישות",
        body: [
          "דרור ברזני INDOOR רואה חשיבות במתן שירות שוויוני לכל הלקוחות, כולל אנשים עם מוגבלות. השקענו מאמצים כדי שהאתר יהיה נוח לשימוש לכולם.",
          "האתר נבנה בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע\"ג-2013, ולתקן הישראלי ת\"י 5568, המבוסס על הנחיות WCAG 2.0 ברמה AA.",
        ],
      },
      {
        title: "מה עשינו באתר",
        list: [
          "האתר מוצג בעברית מימין לשמאל ובאנגלית משמאל לימין, עם החלפת שפה בלחיצה.",
          "אפשר לנווט בכל האתר באמצעות המקלדת. מקש Tab עובר בין הקישורים והכפתורים, ומסגרת בולטת מסמנת את הרכיב הפעיל.",
          "בראש כל עמוד יש קישור \"דלג לתוכן הראשי\".",
          "לכל תמונה יש טקסט חלופי שמתאר את תוכנה.",
          "הכותרות בנויות בהיררכיה תקינה, ולכל שדה בטופס יש תווית מקושרת.",
          "צבעי הטקסט והרקע עומדים ביחס ניגודיות של 4.5:1 לפחות.",
          "תפריט נגישות צף מאפשר להגדיל ולהקטין טקסט, לעבור לניגודיות גבוהה או למונוכרום, להבליט קישורים ולאפס את ההגדרות.",
          "האתר מכבד את הגדרת המערכת להפחתת תנועה.",
        ],
      },
      {
        title: "דפדפנים וטכנולוגיות מסייעות",
        body: [
          "האתר מיועד לגרסאות עדכניות של Chrome, Firefox, Safari ו-Edge, במחשב ובטלפון נייד, ולשימוש עם קוראי מסך.",
        ],
      },
      {
        title: "הסדרי נגישות בעסק",
        body: [
          "השירות שלנו ניתן בבית הלקוח. אם אתם זקוקים להתאמה כלשהי בפגישה או במהלך העבודה, ספרו לנו מראש ונדאג לה.",
        ],
      },
      {
        title: "נתקלתם בבעיה?",
        body: [
          "למרות המאמצים, ייתכן שחלקים מסוימים באתר עדיין אינם נגישים במלואם. אם נתקלתם בקושי, נשמח שתפנו לרכז הנגישות ונטפל בפנייה בהקדם.",
        ],
      },
    ],
    coordinator: {
      title: "רכז הנגישות",
      name: "שם:",
      nameValue: "[שם רכז הנגישות]",
      phone: "טלפון:",
      phoneValue: "[מספר טלפון]",
      email: "דוא\"ל:",
      emailValue: "[כתובת דוא\"ל]",
    },
  },
  notFound: {
    metaTitle: "העמוד לא נמצא | דרור ברזני INDOOR",
    metaDescription: "העמוד שחיפשתם לא קיים באתר דרור ברזני INDOOR, קבלן שיפוצים בירושלים.",
    eyebrow: "שגיאה 404",
    title: "העמוד לא נמצא",
    text: "ייתכן שהקישור שגוי או שהעמוד הוסר.",
    home: "חזרה לעמוד הבית",
    whatsapp: "שלחו הודעה בוואטסאפ",
  },
  thankYou: {
    metaTitle: "תודה | דרור ברזני INDOOR",
    metaDescription: "הפרטים שלכם נפתחו בוואטסאפ. דרור ברזני יחזור אליכם כדי לתאם פגישה.",
    eyebrow: "תודה",
    title: "ההודעה מוכנה לשליחה",
    text: "וואטסאפ נפתח בחלון חדש עם הפרטים שמילאתם. כדי שנקבל אותה, יש ללחוץ על שליחה.",
    nextTitle: "מה הלאה",
    next: [
      "דרור יחזור אליכם בשעות הפעילות לתיאום פגישה.",
      "בפגישה הוא ימדוד ויכין הצעת מחיר מפורטת.",
    ],
    notOpened: "וואטסאפ לא נפתח?",
    openAgain: "פתחו אותו כאן",
    orCall: "או התקשרו",
    home: "חזרה לעמוד הבית",
  },
  legal: {
    updated: "עודכן לאחרונה:",
    back: "חזרה לעמוד הבית",
  },
  privacy: {
    metaTitle: "מדיניות פרטיות | דרור ברזני INDOOR",
    metaDescription: "איך אתר דרור ברזני INDOOR מטפל במידע שלכם: מה נאסף, למה, ואיך מבקשים לעיין במידע או למחוק אותו.",
    title: "מדיניות פרטיות",
    updatedDate: "28 בספטמבר 2026",
    updatedISO: LEGAL_UPDATED,
    sections: [
      {
        title: "מי אנחנו",
        body: [
          "האתר שייך לדרור ברזני INDOOR, קבלן שיפוצים בירושלים. המדיניות הזו מסבירה איזה מידע עובר דרך האתר ומה אנחנו עושים איתו. היא נכתבה בהתאם לחוק הגנת הפרטיות, התשמ\"א-1981, ולתקנות שלו.",
        ],
      },
      {
        title: "איזה מידע נאסף",
        list: [
          "הפרטים שאתם ממלאים בטופס יצירת הקשר: שם, טלפון, סוג העבודה, אזור ותיאור קצר. האתר לא שומר אותם. הם עוברים ישירות להודעת וואטסאפ שאתם שולחים בעצמכם.",
          "העדפות תצוגה, כמו שפה והגדרות נגישות, נשמרות רק בדפדפן שלכם (localStorage) ולא נשלחות אלינו.",
          "נתוני שימוש כלליים ואנונימיים דרך Vercel Web Analytics: אילו עמודים נצפו, סוג המכשיר והמדינה. הכלי לא משתמש בעוגיות ולא מזהה אתכם אישית.",
          "שרת האחסון (Vercel) שומר יומני גישה טכניים, כמו כתובת IP, לצורכי אבטחה ותפעול.",
        ],
      },
      {
        title: "למה אנחנו משתמשים במידע",
        body: [
          "כדי לחזור אליכם, לתאם פגישה ולהכין הצעת מחיר. נתוני השימוש עוזרים לנו להבין אילו עמודים עובדים ואילו צריך לשפר. אנחנו לא מוכרים מידע ולא משתמשים בו לפרסום.",
        ],
      },
      {
        title: "שירותים חיצוניים",
        body: [
          "שיחות בוואטסאפ כפופות למדיניות הפרטיות של WhatsApp (Meta). קישורי ניווט נפתחים ב-Google Maps וכפופים למדיניות של Google. האתר מאוחסן אצל Vercel.",
        ],
      },
      {
        title: "עוגיות (Cookies)",
        body: [
          "האתר לא משתמש בעוגיות מעקב או פרסום, ולכן אין בו באנר עוגיות. אם זה ישתנה, נעדכן את המדיניות ונבקש את הסכמתכם לפני ההפעלה.",
        ],
      },
      {
        title: "הזכויות שלכם",
        body: [
          "אתם יכולים לבקש לעיין במידע שיש לנו עליכם, לתקן אותו או למחוק אותו. פנו אלינו בטלפון או בוואטסאפ ונטפל בבקשה תוך 30 יום.",
        ],
      },
      {
        title: "יצירת קשר בנושא פרטיות",
        list: ["טלפון: 054-237-7390", "דוא\"ל: [כתובת דוא\"ל]"],
      },
    ],
  },
  terms: {
    metaTitle: "תנאי שימוש | דרור ברזני INDOOR",
    metaDescription: "תנאי השימוש באתר דרור ברזני INDOOR, קבלן שיפוצים בירושלים.",
    title: "תנאי שימוש",
    updatedDate: "28 בספטמבר 2026",
    updatedISO: LEGAL_UPDATED,
    sections: [
      {
        title: "כללי",
        body: [
          "השימוש באתר כפוף לתנאים האלה. אם אתם לא מסכימים להם, אל תשתמשו באתר. התנאים מנוסחים בלשון רבים ומתייחסים לכל המגדרים.",
        ],
      },
      {
        title: "המידע באתר",
        body: [
          "התוכן באתר נועד לתת מושג על השירותים שלנו. הוא לא הצעת מחיר ולא התחייבות. מחיר, היקף עבודה ולוח זמנים נקבעים רק בהצעת מחיר כתובה, אחרי ביקור בבית.",
        ],
      },
      {
        title: "תמונות ותוכן",
        body: [
          "התמונות באתר צולמו בפרויקטים שביצענו. כל הזכויות בתמונות, בטקסטים ובעיצוב שמורות לדרור ברזני INDOOR. אין להעתיק אותם או להשתמש בהם בלי אישור בכתב.",
        ],
      },
      {
        title: "קישורים לאתרים אחרים",
        body: [
          "האתר מקשר לשירותים כמו וואטסאפ, Google Maps וביקורות גוגל. אנחנו לא אחראים לתוכן או לזמינות של אתרים חיצוניים.",
        ],
      },
      {
        title: "אחריות",
        body: [
          "אנחנו משתדלים שהמידע באתר יהיה מדויק ועדכני, אבל ייתכנו בו טעויות. האחריות על עבודות השיפוץ נקבעת בחוזה שנחתם מול כל לקוח.",
        ],
      },
      {
        title: "דין וסמכות שיפוט",
        body: ["על התנאים חל הדין הישראלי. סמכות השיפוט הבלעדית נתונה לבתי המשפט בירושלים."],
      },
      {
        title: "שינויים בתנאים",
        body: ["אנחנו רשאים לעדכן את התנאים מעת לעת. הנוסח המחייב הוא זה שמופיע באתר."],
      },
    ],
  },
};

type Dict = typeof he;

const en: Dict = {
  meta: {
    title: "Dror Barazani INDOOR | Renovation Contractor in Jerusalem",
    description:
      "Dror Barazani INDOOR, renovation contractor in Jerusalem. Home renovations, kitchens, bathrooms, tiling, carpentry and accessibility adaptations. Phone: 054-237-7390",
    ogAlt: "Renovated double-height living room with glossy marble flooring",
  },
  skip: "Skip to main content",
  brand: { name: "Dror Barazani", tagline: "Renovation contractor, Jerusalem" },
  nav: {
    label: "Main navigation",
    footerLabel: "Footer navigation",
    items: [
      { href: "#services", label: "Services" },
      { href: "#work", label: "Our work" },
      { href: "#process", label: "How it works" },
      { href: "#reviews", label: "Reviews" },
      { href: "#contact", label: "Contact" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    call: "Call",
  },
  langToggle: { label: "עברית", aria: "החלפה לעברית" },
  hero: {
    eyebrow: "Dror Barazani · INDOOR · Jerusalem",
    title: "Renovation contractor in Jerusalem",
    lead: "Renovations for apartments and private homes: kitchens, bathrooms, tiling and carpentry. A home visit to measure up, and a detailed quote before any work starts.",
    ctaPrimary: "Message us on WhatsApp",
    ctaSecondary: "Call 054-237-7390",
    rating: "5.0 on Google · 19 reviews",
    ratingAria: "Rated 5.0 out of 5 on Google, based on 19 reviews",
    whatsappText: "Hi Dror, I found you through your website and would like to talk about a renovation.",
  },
  services: {
    eyebrow: "Services",
    title: "What we do",
    intro: "Renovation work in apartments and private homes in and around Jerusalem.",
    items: [
      {
        title: "Full home renovation",
        text: "Demolition, electrics, plumbing, plastering and painting.",
      },
      {
        title: "Kitchens",
        text: "Removing the existing kitchen, fitting cabinets and worktops, and connecting water and power.",
      },
      {
        title: "Bathrooms",
        text: "Waterproofing, tiling, and fitting sanitary ware and shower enclosures.",
      },
      {
        title: "Accessibility adaptations",
        text: "Step-free showers, grab bars, shower seats and accessible toilets.",
      },
      {
        title: "Flooring and tiling",
        text: "Floor and wall tiling in all tile sizes.",
      },
      {
        title: "Carpentry and stairs",
        text: "Built-in wardrobes, shelving, interior doors and stairs.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Dror Barazani",
    paragraphs: [
      "Dror comes to the first meeting himself, measures up and prepares an itemised quote.",
      "While the work is under way, he is your contact for any question.",
    ],
    quote: "Dror came to give a detailed, fair quote. The work was done on the agreed schedule, with no delays.",
    quoteBy: "Michal Gomel Blank, Google review",
  },
  process: {
    eyebrow: "How it works",
    title: "How we work",
    steps: [
      {
        title: "Home visit",
        text: "Dror comes to your home, measures up and notes what needs doing.",
      },
      {
        title: "Quote",
        text: "A detailed quote with a price for each item.",
      },
      {
        title: "Work",
        text: "The work follows a schedule agreed in advance.",
      },
      {
        title: "Handover",
        text: "We check the work together, fix anything needed and hand over.",
      },
    ],
  },
  gallery: {
    eyebrow: "Our work",
    title: "Recent projects",
    intro: "Photos from projects in and around Jerusalem.",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "Google reviews",
    summary: "5.0 out of 5, based on 19 reviews",
    source: "Google review (translated from Hebrew)",
    all: "Read all reviews on Google",
    newTab: "(opens in a new tab)",
    items: [
      {
        name: "Varda",
        text: "Dror Barazani did a major renovation of my flat. He did an excellent job and was available for every request. Very kind and pleasant! Warmly recommended.",
      },
      {
        name: "Gali Shabtai",
        text: "INDOOR gives truly professional service and treats you well. Precise, fast renovation work. Dror and the whole team are courteous and respond right away. Highly recommended!",
      },
      {
        name: "Michal Gomel Blank",
        text: "Dror came to give a detailed, fair quote. The work was done on the agreed schedule, with no delays, no problems, and as professionally and precisely as it gets. Warmly recommended.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    intro: "Leave your details and the message will be sent to us on WhatsApp. You can also call.",
    form: {
      name: "Full name",
      phone: "Phone",
      type: "Type of work",
      typeOptions: ["Full home renovation", "Kitchen", "Bathroom", "Accessibility adaptations", "Flooring and tiling", "Carpentry", "Other"],
      area: "Neighbourhood or town",
      message: "A few words about the job",
      messageHint: "Optional. For example: size of the flat, when you'd like to start",
      required: "Required",
      submit: "Send on WhatsApp",
      errorName: "Please enter your name",
      errorPhone: "Please enter a valid phone number, for example 050-1234567",
      sent: "Your message is open in WhatsApp. Tap send to deliver it.",
      pending: "Opening WhatsApp…",
      messageIntro: "Hi Dror, I found you through your website.",
    },
    details: {
      title: "Contact details",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappCta: "Send a message",
      address: "Address",
      directions: "Directions in Google Maps",
      hours: "Opening hours",
    },
    hours: [
      { days: "Sunday to Thursday", time: "8:00 am to 8:00 pm" },
      { days: "Friday", time: "8:00 am to 2:00 pm" },
      { days: "Saturday", time: "Closed" },
    ],
  },
  footer: {
    about: "Renovation contractor in Jerusalem. Kitchens, bathrooms, tiling, carpentry and accessibility adaptations.",
    accessibility: "Accessibility statement",
    rights: "All rights reserved",
    backToTop: "Back to top",
    privacy: "Privacy policy",
    terms: "Terms of use",
  },
  floating: {
    label: "Quick actions",
    whatsapp: "Send Dror Barazani a WhatsApp message",
  },
  a11y: {
    open: "Accessibility menu",
    close: "Close accessibility menu",
    title: "Accessibility settings",
    textSize: "Text size",
    increase: "Increase text size",
    decrease: "Decrease text size",
    current: "Current size",
    contrast: "Contrast",
    highContrast: "High contrast (black and yellow)",
    monochrome: "Monochrome (greyscale)",
    links: "Highlight links",
    reset: "Reset settings",
    statement: "Accessibility statement",
    on: "On",
    off: "Off",
  },
  newTab: "(opens in a new tab)",
  statement: {
    metaTitle: "Accessibility Statement | Dror Barazani INDOOR",
    metaDescription: "Accessibility statement for the Dror Barazani INDOOR website, a renovation contractor in Jerusalem: conformance level, adjustments made and accessibility coordinator details.",
    back: "Back to home page",
    title: "Accessibility statement",
    updated: "Last updated:",
    updatedDate: "September 28, 2026",
    updatedISO: LEGAL_UPDATED,
    sections: [
      {
        title: "Our commitment",
        body: [
          "Dror Barazani INDOOR is committed to giving every client equal service, including people with disabilities. We have worked to make this website easy for everyone to use.",
          "The site was built in line with the Israeli Equal Rights for Persons with Disabilities (Service Accessibility Adjustments) Regulations, 2013, and Israeli Standard IS 5568, which is based on the WCAG 2.0 guidelines at level AA.",
        ],
      },
      {
        title: "What we've done",
        list: [
          "The site is available in Hebrew (right to left) and English (left to right), switchable with one click.",
          "The whole site can be used with a keyboard. The Tab key moves between links and buttons, and a clear outline marks the focused element.",
          "Every page starts with a \"Skip to main content\" link.",
          "Every image has alternative text describing what it shows.",
          "Headings follow a correct hierarchy, and every form field has a linked label.",
          "Text and background colours meet a contrast ratio of at least 4.5:1.",
          "A floating accessibility menu lets you enlarge or reduce text, switch to high contrast or monochrome, highlight links and reset your settings.",
          "The site respects your system's reduced-motion setting.",
        ],
      },
      {
        title: "Browsers and assistive technology",
        body: [
          "The site is designed for current versions of Chrome, Firefox, Safari and Edge, on desktop and mobile, and for use with screen readers.",
        ],
      },
      {
        title: "Accessibility of our service",
        body: [
          "We work in our clients' homes. If you need any adjustment for a meeting or during the work, let us know in advance and we'll arrange it.",
        ],
      },
      {
        title: "Found a problem?",
        body: [
          "Despite our efforts, some parts of the site may not yet be fully accessible. If you run into any difficulty, please contact our accessibility coordinator and we'll deal with it promptly.",
        ],
      },
    ],
    coordinator: {
      title: "Accessibility coordinator",
      name: "Name:",
      nameValue: "[Coordinator name]",
      phone: "Phone:",
      phoneValue: "[Phone number]",
      email: "Email:",
      emailValue: "[Email address]",
    },
  },
  notFound: {
    metaTitle: "Page not found | Dror Barazani INDOOR",
    metaDescription: "The page you were looking for doesn't exist on the Dror Barazani INDOOR website.",
    eyebrow: "Error 404",
    title: "Page not found",
    text: "The link may be wrong or the page may have been removed.",
    home: "Back to home page",
    whatsapp: "Message us on WhatsApp",
  },
  thankYou: {
    metaTitle: "Thank you | Dror Barazani INDOOR",
    metaDescription: "Your details are open in WhatsApp. Dror Barazani will get back to you to arrange a visit.",
    eyebrow: "Thank you",
    title: "Your message is ready to send",
    text: "WhatsApp has opened in a new window with your details. Tap send so we receive it.",
    nextTitle: "Next steps",
    next: [
      "Dror will get back to you during business hours to arrange a visit.",
      "At the visit he will measure up and prepare a detailed quote.",
    ],
    notOpened: "WhatsApp didn't open?",
    openAgain: "Open it here",
    orCall: "or call",
    home: "Back to home page",
  },
  legal: {
    updated: "Last updated:",
    back: "Back to home page",
  },
  privacy: {
    metaTitle: "Privacy Policy | Dror Barazani INDOOR",
    metaDescription: "How the Dror Barazani INDOOR website handles your information: what's collected, why, and how to ask to see or delete it.",
    title: "Privacy policy",
    updatedDate: "September 28, 2026",
    updatedISO: LEGAL_UPDATED,
    sections: [
      {
        title: "Who we are",
        body: [
          "This website belongs to Dror Barazani INDOOR, a renovation contractor in Jerusalem. This policy explains what information passes through the site and what we do with it. It follows the Israeli Privacy Protection Law, 1981, and its regulations.",
        ],
      },
      {
        title: "What we collect",
        list: [
          "The details you enter in the contact form: name, phone, type of work, area and a short description. The site doesn't store them. They go straight into a WhatsApp message that you send yourself.",
          "Display preferences, such as language and accessibility settings, are stored only in your browser (localStorage) and are never sent to us.",
          "General, anonymous usage data through Vercel Web Analytics: which pages were viewed, device type and country. It uses no cookies and doesn't identify you personally.",
          "Our hosting provider (Vercel) keeps technical access logs, such as IP addresses, for security and operations.",
        ],
      },
      {
        title: "How we use it",
        body: [
          "To get back to you, arrange a visit and prepare a quote. Usage data helps us see which pages work and which need improving. We don't sell information or use it for advertising.",
        ],
      },
      {
        title: "Third-party services",
        body: [
          "WhatsApp conversations are covered by WhatsApp's (Meta's) privacy policy. Directions open in Google Maps and are covered by Google's policy. The site is hosted by Vercel.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "The site doesn't use tracking or advertising cookies, so there's no cookie banner. If that changes, we'll update this policy and ask for your consent before switching anything on.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You can ask to see the information we hold about you, correct it or delete it. Contact us by phone or WhatsApp and we'll handle your request within 30 days.",
        ],
      },
      {
        title: "Privacy contact",
        list: ["Phone: 054-237-7390", "Email: [Email address]"],
      },
    ],
  },
  terms: {
    metaTitle: "Terms of Use | Dror Barazani INDOOR",
    metaDescription: "Terms of use for the Dror Barazani INDOOR website, a renovation contractor in Jerusalem.",
    title: "Terms of use",
    updatedDate: "September 28, 2026",
    updatedISO: LEGAL_UPDATED,
    sections: [
      {
        title: "General",
        body: ["Using this website means you accept these terms. If you don't agree with them, please don't use the site."],
      },
      {
        title: "Information on the site",
        body: [
          "The content here is meant to give you a sense of our services. It isn't a quote or a commitment. Price, scope and schedule are set only in a written quote, after a home visit.",
        ],
      },
      {
        title: "Photos and content",
        body: [
          "The photos on this site were taken on our own projects. All rights in the photos, text and design belong to Dror Barazani INDOOR. Please don't copy or reuse them without written permission.",
        ],
      },
      {
        title: "Links to other sites",
        body: [
          "The site links to services such as WhatsApp, Google Maps and Google reviews. We're not responsible for the content or availability of external sites.",
        ],
      },
      {
        title: "Liability",
        body: [
          "We try to keep the information on this site accurate and up to date, but it may contain errors. Warranty for renovation work is set out in the contract signed with each client.",
        ],
      },
      {
        title: "Governing law",
        body: ["These terms are governed by Israeli law. The courts of Jerusalem have exclusive jurisdiction."],
      },
      {
        title: "Changes",
        body: ["We may update these terms from time to time. The version published on this site is the one that applies."],
      },
    ],
  },
};

export const dictionaries: Record<Lang, Dict> = { he, en };
export type { Dict };
