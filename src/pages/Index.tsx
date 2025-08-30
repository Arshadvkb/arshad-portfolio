
import React from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
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
    </div>
  );
};

export default Index;
