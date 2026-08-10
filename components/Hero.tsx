import ScrollImage from "./ScrollImage";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-28 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Kicker */}
        <div className="reveal flex items-center gap-3 text-graphite">
          <span aria-hidden className="inline-block h-px w-8 bg-graphite/50" />
          <span className="tag-num">
            Gesundheitstechnik · Saarbrücken · seit 1998
          </span>
        </div>

        {/* Editorial split: text left, image right */}
        <div className="mt-8 grid gap-10 md:grid-cols-[1.15fr,1fr] md:items-end md:gap-14">
          <div>
            <h1
              className="reveal max-w-[14ch] font-display text-[14vw] font-light leading-[0.95] tracking-tightest text-ink md:text-[104px]"
              style={{ transitionDelay: "60ms" }}
            >
              Präzise Versorgung.{" "}
              <span className="italic font-normal text-graphite">
                Persönlich begleitet.
              </span>
            </h1>

            <p
              className="reveal mt-8 max-w-xl text-[17px] leading-[1.55] text-graphite"
              style={{ transitionDelay: "140ms" }}
            >
              BIGRAtec versorgt Menschen im Saarland mit Reha-Technik, Homecare
              und orthopädischen Hilfsmitteln. Familiengeführt, fachlich
              präzise, mit hauseigener Werkstatt — damit jedes Detail dort
              sitzt, wo es gebraucht wird.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-3"
              style={{ transitionDelay: "200ms" }}
            >
              <a href="#kontakt" className="btn-primary">
                Termin vereinbaren
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#leistungen" className="btn-ghost">
                Leistungen ansehen
              </a>
            </div>
          </div>

          {/* Large hero image */}
          <div
            className="reveal relative"
            style={{ transitionDelay: "180ms" }}
          >
            <ScrollImage
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&q=80"
              alt="Persönliche Betreuung — geklammerte Hände"
              intensity={0.12}
              priority
              className="aspect-[4/5] md:aspect-[4/5.4]"
              rounded="rounded-[32px]"
              sizes="(min-width: 768px) 44vw, 100vw"
            />

            {/* Floating tag card on the image */}
            <div className="glass glass-sheen absolute -bottom-6 left-6 right-6 rounded-2xl px-5 py-4 md:left-8 md:right-auto md:max-w-[280px]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-2 w-2 flex-none rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #ffffff, #8AA290 70%)",
                    boxShadow: "0 0 0 4px rgba(138,162,144,0.18)",
                  }}
                />
                <div>
                  <p className="text-[13px] font-medium text-ink">
                    Termin bei Ihnen zu Hause
                  </p>
                  <p className="mt-0.5 text-[12px] text-mist">
                    Homecare-Beratung ohne Anfahrt
                  </p>
                </div>
              </div>
            </div>

            {/* Under-glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 60%, rgba(217,182,176,0.5), transparent 70%)",
              }}
            />
          </div>
        </div>

        {/* Floating stats card underneath */}
        <div
          className="reveal relative mx-auto mt-24 max-w-6xl"
          style={{ transitionDelay: "260ms" }}
        >
          <div className="glass glass-sheen rounded-[28px] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-4 md:gap-6">
              <HeroFact num="1998" label="Gegründet" sub="Über zwei Jahrzehnte im Saarland" />
              <HeroFact num="200+" label="Krankenkassen" sub="Direktabrechnung inklusive" />
              <HeroFact num="24 h" label="Notfallservice" sub="Für Bestandskunden erreichbar" />
              <HeroFact num="1 : 1" label="Anpassung" sub="Hauseigene Meisterwerkstatt" />
            </div>

            <div className="divider-hair my-10" />

            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="font-display text-2xl italic text-ink">
                „Wir arbeiten mit der Ruhe, die medizinische Versorgung verdient."
              </p>
              <span className="tag-num">— Team BIGRAtec</span>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-6 -bottom-8 -z-10 h-16 rounded-full opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 50%, rgba(138,162,144,0.35), transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function HeroFact({ num, label, sub }: { num: string; label: string; sub: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-display text-[44px] font-light leading-none tracking-tightest text-ink">
        {num}
      </span>
      <span className="text-[13px] font-medium text-ink">{label}</span>
      <span className="text-[12.5px] leading-snug text-mist">{sub}</span>
    </div>
  );
}
