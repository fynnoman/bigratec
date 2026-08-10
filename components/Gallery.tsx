import ScrollImage from "./ScrollImage";

const items = [
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&q=80",
    alt: "Nähe im Detail",
    caption: "Menschlich, verlässlich",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=1400&q=80",
    alt: "Beschaffung im Regal",
    caption: "Rezept & Beschaffung",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=80",
    alt: "Persönliche Beratung",
    caption: "Vor-Ort-Termine",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1400&q=80",
    alt: "Klinische Kontrolle",
    caption: "Ambulante Kontrollen",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80",
    alt: "Empfang & Aufnahme",
    caption: "Empfang & Aufnahme",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
  },
];

export default function Gallery() {
  return (
    <section id="momente" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="tag-num">Momente</span>
            <h2 className="mt-4 font-display text-[44px] font-light leading-[1.02] tracking-tightest text-ink md:text-[64px]">
              Der Alltag,{" "}
              <span className="italic text-graphite">unaufgeregt.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.55] text-graphite">
            Kein Marketing-Bilderbuch. So sieht Versorgung bei uns aus — leise,
            fachlich, im Rhythmus unserer Patient:innen.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[100rem] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {items.map((it, i) => (
            <div
              key={i}
              className={`reveal ${it.span}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <ScrollImage
                src={it.src}
                alt={it.alt}
                intensity={0.16}
                className={`w-full ${it.aspect}`}
                rounded="rounded-[24px]"
                sizes="(min-width: 768px) 40vw, 100vw"
                overlay={
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                    <span
                      className="text-[13px] font-medium text-cream"
                      style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
                    >
                      {it.caption}
                    </span>
                    <span
                      className="tag-num"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
