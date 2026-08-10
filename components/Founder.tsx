import ScrollImage from "./ScrollImage";

const timeline = [
  {
    year: "2000 – 2011",
    place: "Firma Pohlig · Traunstein",
    detail:
      "Spezialisierung auf Kinderorthopädie in einem der renommiertesten Häuser Süddeutschlands.",
  },
  {
    year: "2011 – 2016",
    place: "Firma Doppler · Uniklinikum Homburg",
    detail:
      "Werkstattleitung am Universitätsklinikum — Versorgung im medizinischen Alltag.",
  },
  {
    year: "seit 01/2017",
    place: "BIGRAtec · Saarbrücken",
    detail:
      "Übernahme der BIGRAtec GmbH & Co. KG als Inhaber und Orthopädiemechanikermeister.",
  },
];

export default function Founder() {
  return (
    <section id="handschrift" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1fr,1.15fr] md:items-center md:gap-20">
          {/* Portrait / atmospheric image */}
          <div className="reveal relative">
            <ScrollImage
              src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1400&q=80"
              alt="Orthopädietechnik im Detail — Handwerk und Präzision"
              intensity={0.14}
              className="aspect-[4/5] w-full"
              rounded="rounded-[32px]"
              sizes="(min-width: 768px) 44vw, 100vw"
            />

            {/* Signature card overlay */}
            <div className="glass glass-sheen absolute -bottom-6 left-6 right-6 rounded-2xl px-5 py-4 md:right-auto md:max-w-[300px]">
              <span className="tag-num">Inhaber & Meister</span>
              <p className="mt-1.5 font-display text-[22px] font-light leading-tight text-ink">
                Fouad Ababneh
              </p>
              <p className="mt-1 text-[12.5px] text-mist">
                Orthopädiemechanikermeister, Inhaber seit 2017
              </p>
            </div>

            {/* Halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 50%, rgba(138,162,144,0.35), transparent 70%)",
              }}
            />
          </div>

          {/* Text column */}
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <span className="tag-num">Handschrift</span>
            <h2 className="mt-4 font-display text-[44px] font-light leading-[1.02] tracking-tightest text-ink md:text-[60px]">
              Erfolg zwischen{" "}
              <span className="italic text-graphite">Innovation</span> und{" "}
              <span className="italic text-graphite">Kundennähe.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-[1.65] text-graphite">
              <p>
                Am 1. Januar 2017 übernahm Fouad Ababneh die BIGRAtec GmbH &
                Co. KG. Sein Handwerk lernte der Orthopädiemechanikermeister
                unter anderem elf Jahre bei der Firma Pohlig in Traunstein —
                mit Schwerpunkt Kinderorthopädie — sowie fünf Jahre als
                Werkstattleiter bei Doppler im Uniklinikum Homburg.
              </p>
              <p>
                BIGRAtec betreut Menschen ganzheitlich: Kompressionstherapie,
                Orthopädietechnik, Rehatechnik und Sanitätsfachhandel
                verbinden sich mit einem Beratungs- und Serviceangebot, das
                individuell auf jeden Patienten zugeschnitten ist.
              </p>
              <p>
                Möglich wird das durch unser Team. Ihre fachliche Ausbildung,
                ihre Freundlichkeit und ihre saubere Auftragsabwicklung machen
                uns zu einem geschätzten Partner für Kliniken, Ärzt:innen,
                Patient:innen und Kostenträger — im Mittelpunkt steht immer
                der Nutzen für den Menschen, der zu uns kommt.
              </p>
            </div>

            {/* Timeline */}
            <ol className="mt-10 space-y-4">
              {timeline.map((t) => (
                <li
                  key={t.year}
                  className="grid grid-cols-[110px,1fr] items-baseline gap-4 border-l border-ink/10 pl-5"
                >
                  <span className="tag-num">{t.year}</span>
                  <div>
                    <p className="text-[14px] font-medium text-ink">
                      {t.place}
                    </p>
                    <p className="mt-0.5 text-[13.5px] leading-snug text-graphite">
                      {t.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
