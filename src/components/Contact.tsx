import { useId, useRef, useState, type FormEvent } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { business, mapsDirectionsUrl, whatsappUrl } from "../content/site";
import { useLang } from "../lib/i18n";
import { WhatsAppIcon } from "./icons";

type Errors = { name?: string; phone?: string };

const phonePattern = /^[+\d][\d\s-]{7,}$/;

export function Contact() {
  const { t, lang } = useLang();
  const f = t.contact.form;
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    phone: `${uid}-phone`,
    type: `${uid}-type`,
    area: `${uid}-area`,
    message: `${uid}-message`,
    messageHint: `${uid}-message-hint`,
    nameError: `${uid}-name-error`,
    phoneError: `${uid}-phone-error`,
  };
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = f.errorName;
    if (!phonePattern.test(phone)) next.phone = f.errorPhone;
    setErrors(next);
    if (next.name || next.phone) {
      setStatus("");
      document.getElementById(next.name ? ids.name : ids.phone)?.focus();
      return;
    }

    const lines = [
      f.messageIntro,
      `${f.name}: ${name}`,
      `${f.phone}: ${phone}`,
      `${f.type}: ${data.get("type")}`,
      data.get("area") ? `${f.area}: ${data.get("area")}` : "",
      data.get("message") ? `\n${data.get("message")}` : "",
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setStatus(f.sent);
  }

  const label = "mb-2 block text-[0.95rem] font-medium";

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-stone">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:px-8 lg:py-32">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 id="contact-title" className="font-display mt-4 text-4xl sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-lg text-lg font-light text-muted">{t.contact.intro}</p>

          <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor={ids.name} className={label}>
                {f.name} <span className="text-muted">{`(${f.required})`}</span>
              </label>
              <input
                id={ids.name}
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? ids.nameError : undefined}
                className="field"
              />
              {errors.name && (
                <p id={ids.nameError} className="mt-2 text-sm font-medium text-[#a4262c]">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={ids.phone} className={label}>
                {f.phone} <span className="text-muted">{`(${f.required})`}</span>
              </label>
              <input
                id={ids.phone}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                dir="ltr"
                required
                aria-required="true"
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? ids.phoneError : undefined}
                className="field rtl:text-right"
              />
              {errors.phone && (
                <p id={ids.phoneError} className="mt-2 text-sm font-medium text-[#a4262c]">
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={ids.type} className={label}>
                {f.type}
              </label>
              <select id={ids.type} name="type" className="field">
                {f.typeOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={ids.area} className={label}>
                {f.area}
              </label>
              <input id={ids.area} name="area" type="text" autoComplete="address-level2" className="field" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={ids.message} className={label}>
                {f.message}
              </label>
              <p id={ids.messageHint} className="-mt-1 mb-2 text-sm text-muted">
                {f.messageHint}
              </p>
              <textarea
                id={ids.message}
                name="message"
                rows={4}
                aria-describedby={ids.messageHint}
                className="field resize-y"
              />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-ink w-full sm:w-auto">
                <WhatsAppIcon size={20} />
                {f.submit}
              </button>
              <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm font-medium text-ink">
                {status}
              </p>
            </div>
          </form>
        </div>

        <aside aria-labelledby="details-title" className="on-dark self-start rounded-lg bg-night p-8 text-sand sm:p-10">
          <h3 id="details-title" className="font-display text-3xl">
            {t.contact.details.title}
          </h3>
          <ul className="mt-8 space-y-7">
            <li className="flex gap-4">
              <Phone size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <p className="text-sm text-night-muted">{t.contact.details.phone}</p>
                <div className="mt-1">
                  <a href={`tel:${business.phoneE164}`} className="text-link text-lg" dir="ltr">
                    {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <WhatsAppIcon size={20} className="mt-1 shrink-0 text-brass" />
              <div>
                <p className="text-sm text-night-muted">{t.contact.details.whatsapp}</p>
                <div className="mt-1">
                  <a
                    href={whatsappUrl(t.hero.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-lg"
                  >
                    {t.contact.details.whatsappCta}
                    <span className="sr-only"> {t.newTab}</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <p className="text-sm text-night-muted">{t.contact.details.address}</p>
                <div className="mt-1">
                  <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="group block">
                    <span className="text-link text-lg">{business.address[lang]}</span>
                    <span className="mt-1 block text-sm text-night-muted group-hover:text-sand">
                      {t.contact.details.directions}
                    </span>
                    <span className="sr-only"> {t.newTab}</span>
                  </a>
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-brass" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm text-night-muted">{t.contact.details.hours}</p>
                <div className="mt-2">
                  <ul className="space-y-1.5">
                    {t.contact.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6 border-b border-sand/10 pb-1.5">
                        <span>{h.days}</span>
                        <span className="text-night-muted">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
