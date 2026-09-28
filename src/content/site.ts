// Business facts and all user-facing copy, in Hebrew (default) and English.
// Text is written for people, not keywords: short sentences, plural address in Hebrew.

export type Lang = "he" | "en";

export const LANGS: Lang[] = ["he", "en"];
export const DEFAULT_LANG: Lang = "he";
export const LANG_STORAGE_KEY = "indoor-lang";

// Replace with the production domain before launch (used for canonical + Open Graph URLs).
export const SITE_URL = "https://indoor-jerusalem.example";

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

export type ServiceIcon = "house" | "kitchen" | "shower" | "accessible" | "tiles" | "carpentry";

const he = {
  meta: {
    title: "דרור ברזני INDOOR | קבלן שיפוצים בירושלים",
    description:
      "שיפוץ דירות ובתים בירושלים: מטבחים, חדרי רחצה, ריצוף, נגרות והתאמות נגישות. הצעת מחיר מפורטת ועבודה בזמן שנקבע. 5.0 בגוגל. 054-237-7390",
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
    title: "שיפוצים בירושלים שנגמרים בתאריך שנקבע",
    lead: "מטבחים, חדרי רחצה, ריצוף ונגרות, בדירה אחת או בבית שלם. דרור מגיע למדוד, נותן הצעת מחיר מפורטת ונשאר זמין בטלפון עד המסירה.",
    ctaPrimary: "שלחו הודעה בוואטסאפ",
    ctaSecondary: "חייגו 054-237-7390",
    rating: "5.0 בגוגל · 19 ביקורות",
    ratingAria: "דירוג 5.0 מתוך 5 בגוגל, על סמך 19 ביקורות",
    whatsappText: "שלום דרור, הגעתי מהאתר ואשמח לתאם פגישה לגבי שיפוץ.",
  },
  services: {
    eyebrow: "מה אנחנו עושים",
    title: "שיפוץ מהשלד ועד הידית",
    intro: "צוות אחד מבצע את כל שלבי העבודה, כך שאין צורך לתאם בין בעלי מקצוע ולחכות שכל אחד יגיע.",
    items: [
      {
        icon: "house" as ServiceIcon,
        title: "שיפוץ דירה מלא",
        text: "הריסה, חשמל ואינסטלציה, טיח וצבע. מתכננים את כל הדירה מראש ומבצעים לפי סדר קבוע.",
      },
      {
        icon: "kitchen" as ServiceIcon,
        title: "מטבחים",
        text: "תכנון, פירוק המטבח הישן, התקנת ארונות ומשטחים וחיבור לחשמל ולמים.",
      },
      {
        icon: "shower" as ServiceIcon,
        title: "חדרי רחצה",
        text: "איטום לפני כל חיפוי, מקלחוני זכוכית ותעלות ניקוז לינאריות שמשאירות את הרצפה יבשה.",
      },
      {
        icon: "accessible" as ServiceIcon,
        title: "התאמות נגישות",
        text: "מקלחות ללא סף, מאחזים, ספסלי ישיבה ושירותים נגישים, לבני משפחה מבוגרים או לאחר פציעה.",
      },
      {
        icon: "tiles" as ServiceIcon,
        title: "ריצוף וחיפוי",
        text: "אריחים בפורמט גדול, דמוי שיש ודמוי בטון, עם פוגות ישרות ומפלסים מדויקים.",
      },
      {
        icon: "carpentry" as ServiceIcon,
        title: "נגרות ומדרגות",
        text: "ארונות קיר, ספריות, דלתות פנים ומדרגות עץ ופלדה, בהתאמה למידות הבית.",
      },
    ],
  },
  about: {
    eyebrow: "מי מגיע אליכם",
    title: "מי שנותן את המחיר מלווה את העבודה",
    paragraphs: [
      "דרור ברזני מגיע לפגישה הראשונה בעצמו. הוא מודד, שואל מה חשוב לכם, ומכין הצעת מחיר מפורטת סעיף אחרי סעיף, כך שאין הפתעות באמצע.",
      "במהלך העבודה יש לכם כתובת אחת. שאלה על אריח, שינוי במיקום של שקע או עדכון על ההתקדמות: מתקשרים לדרור ומקבלים תשובה.",
    ],
    quote: "דרור הגיע לתת הצעת מחיר מפורטת והוגנת. העבודה נעשתה בזמן שנקבע, ללא איחורים.",
    quoteBy: "מיכל גומל בלנק, ביקורת בגוגל",
  },
  process: {
    eyebrow: "איך עובדים",
    title: "ארבעה שלבים, תאריך אחד",
    steps: [
      {
        title: "שיחה ופגישה בבית",
        text: "מספרים לנו מה רוצים לשנות. דרור מגיע, מודד ומצלם.",
      },
      {
        title: "הצעת מחיר מפורטת",
        text: "כל סעיף עם מחיר משלו. אפשר להוריד, להוסיף ולהשוות.",
      },
      {
        title: "לוח זמנים ועבודה",
        text: "קובעים תאריך התחלה ותאריך מסירה, ועובדים לפיהם.",
      },
      {
        title: "מסירה נקייה",
        text: "עוברים יחד על כל פרט, מתקנים מה שצריך ומוסרים דירה נקייה.",
      },
    ],
  },
  gallery: {
    eyebrow: "עבודות",
    title: "מהשטח",
    intro: "תמונות מפרויקטים של INDOOR בירושלים והסביבה. חלקן צולמו ביום המסירה, לפני שהדיירים נכנסו.",
  },
  reviews: {
    eyebrow: "ביקורות",
    title: "מה אומרים עלינו בגוגל",
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
    title: "ספרו לנו מה אתם רוצים לשפץ",
    intro: "ממלאים את הפרטים, וההודעה נפתחת בוואטסאפ מוכנה לשליחה. מעדיפים לדבר? התקשרו.",
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
      errorName: "כתבו את שמכם כדי שנדע למי לחזור",
      errorPhone: "כתבו מספר טלפון תקין, למשל 050-1234567",
      sent: "ההודעה נפתחה בוואטסאפ. נותר רק ללחוץ על שליחה.",
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
    updatedDate: "[תאריך עדכון]",
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
          "האתר נבדק בגרסאות העדכניות של Chrome, Firefox, Safari ו-Edge, במחשב ובטלפון נייד, ומותאם לשימוש עם קוראי מסך.",
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
};

type Dict = typeof he;

const en: Dict = {
  meta: {
    title: "Dror Barazani INDOOR | Renovation Contractor in Jerusalem",
    description:
      "Home renovations in Jerusalem: kitchens, bathrooms, tiling, carpentry and accessibility adaptations. Detailed quotes and work finished on the agreed date. Rated 5.0 on Google.",
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
    title: "Jerusalem renovations, finished on the date we agreed",
    lead: "Kitchens, bathrooms, tiling and carpentry, for a single room or a whole house. Dror measures up in person, gives you an itemised quote and stays a phone call away until handover.",
    ctaPrimary: "Message us on WhatsApp",
    ctaSecondary: "Call 054-237-7390",
    rating: "5.0 on Google · 19 reviews",
    ratingAria: "Rated 5.0 out of 5 on Google, based on 19 reviews",
    whatsappText: "Hi Dror, I found you through your website and would like to talk about a renovation.",
  },
  services: {
    eyebrow: "What we do",
    title: "From bare walls to the last handle",
    intro: "One team handles every stage, so you're not coordinating trades or waiting for the next one to show up.",
    items: [
      {
        icon: "house",
        title: "Full home renovation",
        text: "Demolition, electrics and plumbing, plastering and paint. The whole flat is planned up front and built in a fixed order.",
      },
      {
        icon: "kitchen",
        title: "Kitchens",
        text: "Planning, stripping out the old kitchen, fitting cabinets and worktops, and connecting power and water.",
      },
      {
        icon: "shower",
        title: "Bathrooms",
        text: "Waterproofing before any tile goes on, glass shower enclosures and linear drains that keep the floor dry.",
      },
      {
        icon: "accessible",
        title: "Accessibility adaptations",
        text: "Step-free showers, grab bars, shower seats and accessible toilets, for older relatives or after an injury.",
      },
      {
        icon: "tiles",
        title: "Flooring and tiling",
        text: "Large-format, marble-look and concrete-look tiles, laid with straight joints and true levels.",
      },
      {
        icon: "carpentry",
        title: "Carpentry and stairs",
        text: "Built-in wardrobes, shelving, interior doors, and wood-and-steel staircases made to fit your home.",
      },
    ],
  },
  about: {
    eyebrow: "Who you'll deal with",
    title: "The person who quotes is the person who delivers",
    paragraphs: [
      "Dror Barazani comes to the first meeting himself. He measures, asks what matters to you, and writes an itemised quote line by line, so nothing comes as a surprise halfway through.",
      "While the work is under way you have one point of contact. A question about a tile, moving a socket, or just an update on progress: call Dror and you'll get an answer.",
    ],
    quote: "Dror came to give a detailed, fair quote. The work was done on the agreed schedule, with no delays.",
    quoteBy: "Michal Gomel Blank, Google review",
  },
  process: {
    eyebrow: "How it works",
    title: "Four steps, one date",
    steps: [
      {
        title: "A call and a home visit",
        text: "Tell us what you want to change. Dror comes over to measure and take photos.",
      },
      {
        title: "An itemised quote",
        text: "Every line has its own price, so you can add, remove and compare.",
      },
      {
        title: "Schedule and build",
        text: "We fix a start date and a handover date, and work to them.",
      },
      {
        title: "A clean handover",
        text: "We walk through every detail together, fix anything that needs it and leave the place clean.",
      },
    ],
  },
  gallery: {
    eyebrow: "Our work",
    title: "On site",
    intro: "Photos from INDOOR projects in and around Jerusalem. Some were taken on handover day, before the owners moved in.",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What clients say on Google",
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
    title: "Tell us what you'd like to renovate",
    intro: "Fill in your details and the message opens in WhatsApp, ready to send. Rather talk? Give us a call.",
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
      errorName: "Enter your name so we know who to get back to",
      errorPhone: "Enter a valid phone number, for example 050-1234567",
      sent: "Your message is open in WhatsApp. Just tap send.",
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
    updatedDate: "[Update date]",
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
          "The site has been checked in current versions of Chrome, Firefox, Safari and Edge, on desktop and mobile, and is designed to work with screen readers.",
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
};

export const dictionaries: Record<Lang, Dict> = { he, en };
export type { Dict };
