import AuroraBackground from "@/components/AuroraBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ImageBand from "@/components/ImageBand";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <main className="relative">
        <Hero />

        <ImageBand
          src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=2400&q=80"
          alt="Modernes Klinikteam am Bildschirm — digitale Versorgungsplanung"
          eyebrow="Fachlich präzise"
          headline="Ein Team, das zuhört. Werkstatt, die liefert."
          caption="Beratung, Anpassung und Reparatur passieren im selben Haus — kurze Wege, klare Absprachen, keine Zwischenhändler."
        />

        <Services />

        <ImageBand
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=2400&q=80"
          alt="Zwei Hände halten sich — Menschlichkeit im Detail"
          eyebrow="Menschlich, verlässlich"
          headline="Versorgung ist Vertrauenssache."
          caption="Wir kennen unsere Patient:innen mit Namen. Wir wissen, was zuletzt geliefert wurde, wer welche Anpassung braucht — und wann Sie einen Rückruf erwarten."
          height="h-[65vh] md:h-[75vh]"
        />

        <About />

        <Gallery />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
