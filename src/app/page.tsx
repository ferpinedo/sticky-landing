import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
// import Features from "@/components/Features";
import Business from "@/components/Business";
import FreeSection from "@/components/FreeSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { getHomeStructuredData } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Crea stickers para WhatsApp con AI",
  description:
    "Crea stickers para WhatsApp en segundos con inteligencia artificial. Manda una foto, describe tu idea o edita un sticker que ya tienes. Gratis, sin descargar otra app.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData data={getHomeStructuredData()} />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Examples />
        {/* <Features /> */}
        <Business />
        <FreeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
