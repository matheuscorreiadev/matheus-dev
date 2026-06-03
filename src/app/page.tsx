import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Timeline from "@/src/components/Timeline";
import GitHubStats from "@/src/components/GitHubStats";
import Services from "@/src/components/Services";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import BackgroundEffects from "@/src/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative overflow-hidden transition-colors duration-300">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <GitHubStats />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
