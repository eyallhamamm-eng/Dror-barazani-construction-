import { Phone, Star } from "lucide-react";
import { business, googleReviewsUrl, photoSrcSet, photos, whatsappUrl } from "../content/site";
import { useLang } from "../lib/i18n";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  const { t, lang } = useLang();
  const photo = photos.livingDoubleHeight;
  const mobile = photos.kitchenLed;

  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-night">
      {/*
        Phones get the portrait LED-kitchen photo, wider screens the landscape living room, so neither is
        cropped hard. Two <img> elements rather than <picture> so each keeps its own accurate alt text.
        The one hidden with display:none is lazy, so browsers don't download it.
      */}
      <img
        src={mobile.src}
        srcSet={photoSrcSet(mobile)}
        sizes="100vw"
        width={mobile.width}
        height={mobile.height}
        alt={mobile.alt[lang]}
        loading="lazy"
        decoding="async"
        className="hero-image absolute inset-0 -z-20 h-full w-full object-cover object-[50%_50%] md:hidden"
      />
      <img
        src={photo.src}
        srcSet={photoSrcSet(photo)}
        sizes="100vw"
        width={photo.width}
        height={photo.height}
        alt={photo.alt[lang]}
        loading="lazy"
        decoding="async"
        className="hero-image absolute inset-0 -z-20 hidden h-full w-full object-cover object-[50%_60%] md:block"
      />
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-end px-4 pb-28 pt-40 sm:px-6 lg:min-h-[44rem] lg:justify-center lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow rise rise-1 !text-sand">{t.hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="font-display rise rise-2 mt-5 text-[2.6rem] text-sand sm:text-6xl lg:text-[4.6rem]"
          >
            {t.hero.title}
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg font-light leading-relaxed text-sand sm:text-xl">
            {t.hero.lead}
          </p>

          <div className="rise rise-4 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl(t.hero.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brass"
            >
              <WhatsAppIcon size={20} />
              {t.hero.ctaPrimary}
              <span className="sr-only">{t.newTab}</span>
            </a>
            <a href={`tel:${business.phoneE164}`} className="btn btn-ghost-light">
              <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
              <span>
                {t.hero.ctaSecondary.replace(business.phoneDisplay, "")}
                <span dir="ltr">{business.phoneDisplay}</span>
              </span>
            </a>
          </div>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rise rise-4 mt-8 inline-flex items-center gap-3 text-sm text-sand"
          >
            <span className="flex gap-0.5 text-brass" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="sr-only">{t.hero.ratingAria}</span>
            <span aria-hidden="true" className="underline decoration-sand/40 underline-offset-4">
              {t.hero.rating}
            </span>
            <span className="sr-only">{t.newTab}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
