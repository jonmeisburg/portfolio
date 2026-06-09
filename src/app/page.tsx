import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkSamples from "@/components/WorkSamples";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <WorkSamples />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Featured />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
