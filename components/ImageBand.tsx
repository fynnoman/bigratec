import ScrollImage from "./ScrollImage";

type Props = {
  src: string;
  alt: string;
  eyebrow?: string;
  headline?: string;
  caption?: string;
  height?: string; // tailwind class
};

export default function ImageBand({
  src,
  alt,
  eyebrow,
  headline,
  caption,
  height = "h-[75vh] md:h-[85vh]",
}: Props) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[100rem] px-4 md:px-8">
        <ScrollImage
          src={src}
          alt={alt}
          intensity={0.22}
          className={`w-full ${height}`}
          rounded="rounded-[32px]"
          sizes="100vw"
          overlay={
            headline ? (
              <div className="pointer-events-none flex h-full items-end p-8 md:p-14">
                <div className="max-w-2xl text-cream">
                  {eyebrow && (
                    <span
                      className="tag-num"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {eyebrow}
                    </span>
                  )}
                  <h3
                    className="mt-3 font-display text-[36px] font-light leading-[1.05] tracking-tightest md:text-[56px]"
                    style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
                  >
                    {headline}
                  </h3>
                  {caption && (
                    <p
                      className="mt-4 max-w-lg text-[15px] leading-relaxed"
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        textShadow: "0 2px 24px rgba(0,0,0,0.35)",
                      }}
                    >
                      {caption}
                    </p>
                  )}
                </div>
              </div>
            ) : null
          }
        />
      </div>
    </section>
  );
}
