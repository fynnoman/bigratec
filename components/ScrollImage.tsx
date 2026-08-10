"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  intensity?: number; // 0..1 — how much parallax movement
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
  overlay?: React.ReactNode;
};

/**
 * Scroll-linked parallax image. The image itself translates within a fixed
 * frame while the viewport scrolls. Uses transform (hardware-accelerated)
 * with Motion's useSpring-smoothed scroll for buttery movement without jank.
 */
export default function ScrollImage({
  src,
  alt,
  intensity = 0.15,
  className = "",
  rounded = "rounded-[28px]",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  style,
  overlay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const px = 100 * intensity;
  const y = useTransform(scrollYProgress, [0, 1], [`-${px}px`, `${px}px`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.08, 1.15]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={style}
    >
      <motion.div
        style={{ y, scale, willChange: "transform" }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>

      {/* Warm color overlay that ties images to the palette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,24,26,0.05) 0%, rgba(18,24,26,0) 40%, rgba(217,182,176,0.12) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 100%, rgba(18,24,26,0.35), transparent 60%)",
        }}
      />
      {/* Edge highlight to match glass language */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
        }}
      />

      {overlay && <div className="absolute inset-0">{overlay}</div>}
    </div>
  );
}
