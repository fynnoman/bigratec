export default function Footer() {
  return (
    <footer className="relative pb-14 pt-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-quiet rounded-3xl px-6 py-6 md:px-10 md:py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #ffffff, #8AA290 70%)",
                }}
              />
              <p className="font-display text-[17px] tracking-tightest text-ink">
                BIGRA<span className="italic text-graphite">tec</span>{" "}
                <span className="text-mist"> GmbH &amp; Co. KG</span>
              </p>
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-graphite">
              <li>
                <a
                  href="#leistungen"
                  className="transition-colors hover:text-ink"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#ueber-uns"
                  className="transition-colors hover:text-ink"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="transition-colors hover:text-ink"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-ink">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-ink">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          <div className="divider-hair my-6" />

          <div className="flex flex-col gap-2 text-[12.5px] text-mist md:flex-row md:items-center md:justify-between">
            <p>
              Burbacher Str. 1 · 66115 Saarbrücken · Tel. 0681 62524 · info@bigratec.de
            </p>
            <p>© {new Date().getFullYear()} BIGRAtec GmbH &amp; Co. KG</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
