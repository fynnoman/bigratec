"use client";

import { useState } from "react";

export default function NewsStrip() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="fixed inset-x-0 top-[88px] z-40 flex justify-center px-4">
      <div className="glass glass-sheen flex max-w-3xl items-center gap-4 rounded-full px-4 py-2.5 pr-2">
        <span
          aria-hidden
          className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #ffffff, #D9B6B0 70%)",
            boxShadow: "0 0 0 3px rgba(217,182,176,0.2)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 3.5v2.5M6 8.2v0.1"
              stroke="#12181A"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <p className="text-[13px] leading-snug text-ink">
          <span className="font-medium">Aktuelles ·</span>{" "}
          <span className="text-graphite">
            Geänderte Öffnungszeiten in KW 30 — Mo bis Fr 09:00–13:00 und
            14:00–17:00 Uhr.
          </span>
        </p>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Hinweis schließen"
          className="ml-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors duration-200 hover:bg-ink/5"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 3l6 6M9 3l-6 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
