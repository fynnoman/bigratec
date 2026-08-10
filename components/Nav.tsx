"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`glass glass-sheen flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-500 ease-out-strong ${
          scrolled ? "scale-[0.98] shadow-xl" : "scale-100"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ffffff, #8AA290 70%)",
              boxShadow: "0 0 0 3px rgba(138,162,144,0.15)",
            }}
          />
          <span className="font-display text-[15px] tracking-tightest text-ink">
            BIGRA<span className="italic text-graphite">tec</span>
          </span>
        </a>

        <span className="mx-1 hidden h-4 w-px bg-ink/10 md:block" />

        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-[13.5px] text-graphite transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="btn-primary ml-1 !py-2 !text-[13px]"
        >
          Termin
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 6h7M6 2.5L9.5 6 6 9.5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
}
