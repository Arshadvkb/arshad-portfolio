import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { Navbar } from "@/components/Navbar";
import { Experience } from "@/components/Experience";
import { MouseTracker } from "@/components/MouseTracker";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary relative overflow-hidden">
        <ScrollProgress />
        <MouseTracker />
        <Navbar />
        <main className="flex flex-col gap-0 w-full">
          <Hero />
          
          <ScrollReveal delay={0.1}>
            <Skills />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Experience />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Projects />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </ThemeProvider>
  );
};

export default Index;
