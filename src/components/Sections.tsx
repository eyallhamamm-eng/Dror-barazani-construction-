import { Star } from "lucide-react";
import { galleryOrder, googleReviewsUrl, photos } from "../content/site";
import { useLang } from "../lib/i18n";
import { ServiceGlyph } from "./icons";

function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="font-display mt-4 text-4xl sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-md text-lg font-light text-muted">{intro}</p>}
    </div>
  );
}

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <SectionHeading
          id="services-title"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          intro={t.services.intro}
          className="lg:sticky lg:top-32 lg:self-start"
        />
        <ul className="grid border-t border-line sm:grid-cols-2">
          {t.services.items.map((s, i) => (
            <li
              key={s.title}
              className={`border-b border-line py-8 sm:px-6 ${i % 2 === 0 ? "sm:border-e sm:ps-0" : "sm:pe-0"}`}
            >
              <ServiceGlyph name={s.icon} size={28} strokeWidth={1.3} className="text-brass-ink" />
              <h3 className="font-display mt-5 text-[1.7rem] leading-tight">{s.title}</h3>
              <p className="mt-3 text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  const { t, lang } = useLang();
  const photo = photos.stairs;
  return (
    <section aria-labelledby="about-title" className="bg-stone">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-32">
        {/* Signature: project photo framed as a Jerusalem-stone arch, with a brass outline echoing it. */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="arch-outline absolute -inset-3 sm:-inset-4" aria-hidden="true" />
          <div className="arch relative aspect-[3/4] shadow-[0_30px_60px_-30px_rgb(28_23_19/0.5)]">
            <img
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt[lang]}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="mt-7 space-y-5 text-lg font-light leading-relaxed text-ink/90">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <figure className="mt-10 border-s-2 border-brass ps-6">
            <blockquote className="font-display text-2xl italic leading-snug sm:text-[1.75rem]">
              <p>{t.about.quote}</p>
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted">{t.about.quoteBy}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useLang();
  return (
    <section id="process" aria-labelledby="process-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading id="process-title" eyebrow={t.process.eyebrow} title={t.process.title} />
      {/* A real sequence, so the steps are an ordered list and carry numbers. */}
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {t.process.steps.map((step, i) => (
          <li key={step.title} className="relative border-t border-ink/80 pt-6">
            <span className="font-display block text-5xl text-brass-ink" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Gallery() {
  const { t, lang } = useLang();
  return (
    <section id="work" aria-labelledby="work-title" className="bg-stone">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading id="work-title" eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
        <ul className="masonry mt-14 columns-2 md:columns-3 lg:columns-4" role="list">
          {galleryOrder.map((key) => {
            const p = photos[key];
            return (
              <li key={key} className="masonry-item">
                <img
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  alt={p.alt[lang]}
                  loading="lazy"
                  decoding="async"
                  className="shadow-card block h-auto w-full rounded-md shadow-[0_12px_28px_-16px_rgb(28_23_19/0.45)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02]"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Reviews() {
  const { t } = useLang();
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading id="reviews-title" eyebrow={t.reviews.eyebrow} title={t.reviews.title} />
        <div className="flex items-center gap-3">
          <span className="flex gap-0.5 text-brass-ink" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <p className="text-muted">{t.reviews.summary}</p>
        </div>
      </div>

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {t.reviews.items.map((r) => (
          <li key={r.name} className="flex">
            <figure className="flex w-full flex-col rounded-lg border border-line bg-paper p-8">
              <span className="font-display text-6xl leading-none text-brass" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-lg font-light leading-relaxed">
                <p>{r.text}</p>
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <span className="block font-medium">{r.name}</span>
                <span className="text-sm text-muted">{t.reviews.source}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <a
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link mt-10 inline-block font-medium"
      >
        {t.reviews.all}
        <span className="sr-only"> {t.newTab}</span>
      </a>
    </section>
  );
}
