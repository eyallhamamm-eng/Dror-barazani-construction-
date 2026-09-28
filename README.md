# דרור ברזני · INDOOR: אתר תדמית

אתר דמו לקבלן שיפוצים בירושלים. עברית (RTL) כברירת מחדל ואנגלית (LTR) בלחיצה.

## טכנולוגיה

- **TanStack Start** (React 19 + Vite) עם **prerender**: כל עמוד נבנה מראש ל-HTML סטטי מלא, כך שמנועי חיפוש ותצוגות מקדימות בוואטסאפ ובפייסבוק מקבלים את כל התוכן ואת תגיות ה-Open Graph.
- **Tailwind CSS v4**, אייקונים מ-**lucide-react**.
- אין שרת ואין מסד נתונים. טופס יצירת הקשר פותח הודעת וואטסאפ מוכנה.

## פקודות

```bash
npm install
npm run dev      # פיתוח: http://localhost:3000
npm run build    # בנייה ל-dist/client (HTML סטטי + נכסים)
npm run images   # המרת התמונות מ-assets/photos ל-WebP ב-public/images
```

את התיקייה `dist/client` אפשר להעלות לכל אחסון סטטי (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## לפני עלייה לאוויר

- `src/content/site.ts`: להחליף את `SITE_URL` בדומיין האמיתי (משמש ל-canonical ול-Open Graph), וגם ב-`public/robots.txt` וב-`public/sitemap.xml`.
- לאשר את הכתובת (כרגע "אבא אבן 1/15, ירושלים").
- הצהרת הנגישות: למלא שם, טלפון ודוא"ל של רכז הנגישות ואת תאריך העדכון (`statement` ב-`src/content/site.ts`).
- מדיניות פרטיות ותנאי שימוש: למלא תאריך עדכון ודוא"ל (`privacy`, `terms` באותו קובץ). כדאי שעורך דין יעבור עליהם.
- אנליטיקס: הקוד של Vercel Web Analytics כבר באתר (בלי עוגיות, ולכן בלי באנר). צריך להפעיל אותו בדשבורד של Vercel, בלשונית Analytics של הפרויקט.

## עמודים

`/` · `/accessibility` · `/privacy` · `/terms` · `/thank-you` (אחרי שליחת הטופס, noindex) · `404.html` (לכל כתובת שלא קיימת)

הלוגו (קשת אבן ירושלמית) נבנה בקוד ב-`scripts/make-logo.mjs`. `npm run logo` מייצר מחדש את הלוגו, את `favicon.svg` ואת כל הפביקונים.

## מבנה

```
src/content/site.ts       כל הטקסטים בעברית ובאנגלית, פרטי העסק ותיאורי התמונות
src/routes/               עמוד הבית ו-/accessibility
src/components/           כותרת, Hero, סקשנים, יצירת קשר, פוטר, כפתורים צפים ותפריט נגישות
src/lib/                  שפה (i18n), העדפות נגישות, SEO ו-JSON-LD
assets/photos/            תמונות המקור של הפרויקטים
```
