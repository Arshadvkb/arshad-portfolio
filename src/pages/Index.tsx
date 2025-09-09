
import React from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AIAssistant } from '@/components/AIAssistant';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <AIAssistant />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
