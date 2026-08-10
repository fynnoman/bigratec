"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <span className="tag-num">Kontakt</span>
          <h2 className="mt-4 font-display text-[44px] font-light leading-[1.02] tracking-tightest text-ink md:text-[64px]">
            Sprechen wir{" "}
            <span className="italic text-graphite">in Ruhe.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-[1.6] text-graphite">
            Rufen Sie uns an, schreiben Sie eine kurze Nachricht oder kommen
            Sie ohne Termin vorbei. Wir nehmen uns Zeit — auch bevor irgendein
            Rezept ausgestellt ist.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-[1fr,1.3fr]" style={{ transitionDelay: "80ms" }}>
          {/* Contact card */}
          <div className="glass glass-sheen rounded-[26px] p-8 md:p-10">
            <ContactRow
              label="Telefon"
              value="0681 62524"
              href="tel:+4968162524"
            />
            <div className="divider-hair my-6" />
            <ContactRow
              label="E-Mail"
              value="info@bigratec.de"
              href="mailto:info@bigratec.de"
            />
            <div className="divider-hair my-6" />
            <ContactRow
              label="Fax"
              value="0681 62530"
            />
            <div className="divider-hair my-6" />
            <div>
              <span className="tag-num">Anfahrt</span>
              <p className="mt-2 font-display text-[22px] font-light leading-tight text-ink">
                Burbacher Str. 1<br />
                66115 Saarbrücken
              </p>
              <a
                href="https://maps.google.com/?q=Burbacher+Str.+1+66115+Saarbr%C3%BCcken"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-graphite transition-colors hover:text-ink"
              >
                Auf der Karte öffnen
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 6h7M6 2.5L9.5 6 6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="divider-hair my-6" />
            <div>
              <span className="tag-num">Öffnungszeiten</span>
              <dl className="mt-3 grid grid-cols-[110px,1fr] gap-y-1.5 text-[13.5px] text-graphite">
                <dt className="text-ink">Mo – Do</dt>
                <dd>09:00 – 13:00 · 14:00 – 18:00</dd>
                <dt className="text-ink">Freitag</dt>
                <dd>09:00 – 13:00 · 14:00 – 17:00</dd>
                <dt className="text-ink">Samstag</dt>
                <dd>10:00 – 12:00</dd>
              </dl>
              <p className="mt-3 text-[12.5px] text-mist">
                In den Schulferien Samstags geschlossen.
              </p>
            </div>
          </div>

          {/* Form card */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-strong glass-sheen relative overflow-hidden rounded-[26px] p-8 md:p-10"
          >
            <span className="tag-num">Kontaktformular</span>
            <div className="mt-6 grid gap-5">
              <Field label="Name" name="name" placeholder="Ihr Name" />
              <Field
                label="E-Mail"
                name="email"
                type="email"
                placeholder="ihre@adresse.de"
              />
              <Field
                label="Telefon (optional)"
                name="phone"
                type="tel"
                placeholder="0681 …"
              />
              <div className="flex flex-col gap-2">
                <label className="tag-num" htmlFor="msg">
                  Nachricht
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  required
                  rows={4}
                  placeholder="Kurz worum es geht — Rezept, Beratung, Termin …"
                  className="w-full resize-none rounded-2xl border border-ink/10 bg-white/60 px-4 py-3 text-[14.5px] text-ink placeholder:text-mist focus:border-ink/30 focus:outline-none focus:ring-0 backdrop-blur-md transition-colors duration-200"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-[26ch] text-[12px] leading-snug text-mist">
                Mit dem Absenden stimmen Sie unserer Datenverarbeitung nach
                DSGVO zu.
              </p>
              <button type="submit" className="btn-primary">
                {sent ? "Danke — wir melden uns" : "Nachricht senden"}
                {!sent && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Success sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: sent ? 1 : 0,
                background:
                  "radial-gradient(80% 60% at 50% 100%, rgba(138,162,144,0.25), transparent 60%)",
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-baseline justify-between gap-4">
      <span className="tag-num">{label}</span>
      <span className="font-display text-[22px] font-light tracking-tightest text-ink">
        {value}
      </span>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="block rounded-lg transition-colors duration-200 hover:text-ink"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="tag-num" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={type !== "tel"}
        placeholder={placeholder}
        className="w-full rounded-full border border-ink/10 bg-white/60 px-5 py-3 text-[14.5px] text-ink placeholder:text-mist focus:border-ink/30 focus:outline-none focus:ring-0 backdrop-blur-md transition-colors duration-200"
      />
    </div>
  );
}
