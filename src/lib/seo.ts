import { SITE_URL, business, dictionaries } from "../content/site";

const he = dictionaries.he;

/** Open Graph / Twitter tags. Prerendered in Hebrew, the site's primary language. */
export function socialMeta({ title, description, path }: { title: string; description: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/images/og-image.jpg`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "דרור ברזני INDOOR" },
    { property: "og:locale", content: "he_IL" },
    { property: "og:locale:alternate", content: "en_US" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: he.meta.ogAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#business`,
  name: "דרור ברזני - INDOOR קבלן שיפוצים בירושלים",
  alternateName: "Dror Barazani INDOOR",
  description: he.meta.description,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/og-image.jpg`,
  logo: `${SITE_URL}/favicon.svg`,
  telephone: business.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "אבא אבן 1/15",
    addressLocality: "ירושלים",
    addressCountry: "IL",
  },
  areaServed: { "@type": "City", name: "ירושלים" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "20:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "14:00" },
  ],
  knowsLanguage: ["he", "en"],
};
