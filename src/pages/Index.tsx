import { ThemeProvider } from "@/components/theme-provider";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { Navbar } from "@/components/Navbar";
import { Experience } from "@/components/Experience";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex flex-col gap-0 w-full">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </ThemeProvider>
  );
};

export default Index;
