import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkSamples from "@/components/WorkSamples";
import Tutorials from "@/components/Tutorials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSamples />
        <Tutorials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}