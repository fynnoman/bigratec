export default function About() {
  return (
    <section id="ueber-uns" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr,1.2fr] md:gap-24">
          {/* Left column — editorial statement */}
          <div className="reveal">
            <span className="tag-num">Über uns</span>
            <h2 className="mt-4 font-display text-[44px] font-light leading-[1.02] tracking-tightest text-ink md:text-[64px]">
              Ein Haus mit{" "}
              <span className="italic text-graphite">Handschrift.</span>
            </h2>

            <p className="mt-8 max-w-md text-[16px] leading-[1.6] text-graphite">
              BIGRAtec ist ein familiengeführtes Sanitätshaus in Saarbrücken.
              Was uns unterscheidet, ist nicht die Größe, sondern die Ruhe, mit
              der wir arbeiten. Jeder Patient bekommt einen Ansprechpartner,
              jede Anpassung wird geprüft, jede Lieferung persönlich übergeben.
            </p>
            <p className="mt-5 max-w-md text-[16px] leading-[1.6] text-graphite">
              Unsere Werkstatt sitzt im gleichen Haus wie unser Beratungsraum —
              kurze Wege, keine Zwischenhändler, keine Vertröstungen.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <ProofItem
                label="Zulassung"
                value="Alle gesetzlichen & privaten Krankenkassen"
              />
              <ProofItem
                label="Zertifizierung"
                value="Präqualifiziert nach § 126 SGB V"
              />
              <ProofItem
                label="Team"
                value="Meister im Orthopädie- & Reha-Technik-Handwerk"
              />
            </div>
          </div>

          {/* Right column — glass gallery / stats */}
          <div
            className="reveal relative"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="glass glass-sheen rounded-[26px] p-8 md:p-10">
              <div className="grid grid-cols-2 gap-8">
                <BigStat num="27" unit="Jahre" caption="Erfahrung im Saarland" />
                <BigStat num="12" unit="Kolleg:innen" caption="Beratung, Werkstatt, Homecare" />
                <BigStat num="3200+" unit="Anpassungen" caption="pro Jahr in eigener Werkstatt" />
                <BigStat num="< 24h" unit="Reaktion" caption="bei Homecare-Notfällen" />
              </div>

              <div className="divider-hair my-10" />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <span className="tag-num">Adresse</span>
                  <p className="mt-2 font-display text-[22px] font-light leading-tight text-ink">
                    Burbacher Str. 1
                    <br />
                    66115 Saarbrücken
                  </p>
                </div>
                <div>
                  <span className="tag-num">Öffnungszeiten</span>
                  <p className="mt-2 text-[14px] leading-relaxed text-graphite">
                    Mo – Do &nbsp; 09:00 – 13:00
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14:00 – 18:00
                    <br />
                    Freitag &nbsp;&nbsp;&nbsp; 09:00 – 13:00
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14:00 – 17:00
                    <br />
                    Samstag &nbsp;&nbsp;10:00 – 12:00
                    <br />
                    <span className="text-mist">In den Schulferien Sa geschlossen</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Colored halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 50%, rgba(217,182,176,0.35), transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-ink/[0.08] bg-white/40 px-4 py-3 backdrop-blur-md">
      <span className="tag-num mt-[3px] min-w-[100px]">{label}</span>
      <span className="text-[14px] text-ink">{value}</span>
    </div>
  );
}

function BigStat({
  num,
  unit,
  caption,
}: {
  num: string;
  unit: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-[52px] font-light leading-none tracking-tightest text-ink">
          {num}
        </span>
        <span className="text-[13px] text-graphite">{unit}</span>
      </div>
      <span className="text-[12.5px] leading-snug text-mist">{caption}</span>
    </div>
  );
}
