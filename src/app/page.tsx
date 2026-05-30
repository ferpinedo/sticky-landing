import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
import Features from "@/components/Features";
import Business from "@/components/Business";
import FreeSection from "@/components/FreeSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Examples />
        <Features />
        <Business />
        <FreeSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
