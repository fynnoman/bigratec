import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Reha-Technik",
    body: "Rollstühle, Gehhilfen und Mobilitätslösungen mit individueller Anpassung in unserer Meisterwerkstatt vor Ort.",
    points: [
      "Aktiv- und Pflegerollstühle",
      "Rollatoren, Gehstöcke, Deltaräder",
      "Elektromobile & Antriebshilfen",
      "Reparatur- und Wartungsservice",
    ],
    tone: "sage",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&q=80",
  },
  {
    num: "02",
    title: "Homecare",
    body: "Vollständig eingerichtete Versorgung im vertrauten Zuhause — von der Beratung bis zur Lieferung, Aufbau und Einweisung.",
    points: [
      "Pflegebetten & Aufstehhilfen",
      "Antidekubitus-Systeme",
      "Sauerstoff- und Beatmungstherapie",
      "Ernährungsversorgung",
    ],
    tone: "blush",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=80",
  },
  {
    num: "03",
    title: "Orthopädietechnik",
    body: "Präzise Passformen für Alltag und Sport — nach Maß gefertigt, medizinisch fundiert, ohne Kompromiss beim Tragekomfort.",
    points: [
      "Bandagen & Orthesen",
      "Kompressionsstrümpfe nach Maß",
      "Einlagenversorgung",
      "Post-OP-Versorgung",
    ],
    tone: "clay",
    img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1400&q=80",
  },
  {
    num: "04",
    title: "Pflegehilfsmittel",
    body: "Der monatliche Pflegepaket-Service — Rezept einreichen, wir übernehmen Beschaffung und Direktabrechnung mit der Kasse.",
    points: [
      "Pflegebox bis 42 € / Monat",
      "Rezept-Service",
      "Beratung nach § 40 SGB XI",
      "Lieferung ins Haus",
    ],
    tone: "sage",
    img: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=1400&q=80",
  },
];

const toneMap: Record<string, string> = {
  sage: "rgba(138,162,144,0.55)",
  blush: "rgba(217,182,176,0.55)",
  clay: "rgba(201,184,162,0.55)",
};

export default function Services() {
  return (
    <section id="leistungen" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="tag-num">Leistungen</span>
            <h2 className="mt-4 font-display text-[44px] font-light leading-[1.02] tracking-tightest text-ink md:text-[64px]">
              Vier Bereiche.{" "}
              <span className="italic text-graphite">Ein Anspruch.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.55] text-graphite">
            Jede Versorgung beginnt mit einem Gespräch. Danach übernehmen wir
            Beschaffung, Anpassung und den administrativen Weg mit Ihrer
            Krankenkasse — Sie behalten den Kopf frei.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.num} {...s} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  num,
  title,
  body,
  points,
  tone,
  img,
  delay,
}: {
  num: string;
  title: string;
  body: string;
  points: string[];
  tone: string;
  img: string;
  delay: number;
}) {
  return (
    <article
      className="reveal group relative overflow-hidden rounded-[26px]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Halo behind card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-16 -z-10 opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
        style={{
          background: `radial-gradient(closest-side, ${toneMap[tone]}, transparent 70%)`,
        }}
      />

      <div className="glass glass-sheen relative flex h-full flex-col rounded-[26px] p-3 transition-transform duration-500 ease-out-strong group-hover:-translate-y-[3px]">
        {/* Image top */}
        <div className="relative h-64 w-full overflow-hidden rounded-[20px]">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(18,24,26,0.55) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)",
            }}
          />
          <div className="absolute left-4 top-4">
            <span
              className="glass-quiet rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wider text-ink"
              style={{ letterSpacing: "0.12em" }}
            >
              {num}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <h3 className="font-display text-[30px] font-light leading-[1.05] tracking-tightest text-cream md:text-[36px]">
              {title}
            </h3>
            <svg
              className="mb-1 opacity-90 transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 15L15 5M15 5H7M15 5v8"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Text below image */}
        <div className="px-5 pt-6 pb-4">
          <p className="max-w-md text-[15px] leading-[1.55] text-graphite">
            {body}
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-[13.5px] text-graphite"
              >
                <span
                  aria-hidden
                  className="mt-[7px] inline-block h-1 w-1 flex-none rounded-full"
                  style={{ background: toneMap[tone].replace("0.55", "0.9") }}
                />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
