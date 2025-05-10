
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimationObserver />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
