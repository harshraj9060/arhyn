import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedTech from "@/components/TrustedTech";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Industries from "@/components/Industries";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollButtons from "@/components/ScrollButtons";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustedTech />
        <About />
        <Services />
        <WhyChoose />
        <Industries />
        <Journey />
        <Projects />
        <Team />
        <FAQ />
        <Contact />
        <ScrollButtons />
      </main>
      <Footer />
    </>
  );
}
