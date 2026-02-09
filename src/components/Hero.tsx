
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden bg-background">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-up">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital Experiences</span> that Matter.
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          I'm <span className="font-semibold text-foreground">Arshad VKB</span>, a Full-Stack Developer passionate about crafting clean, scalable, and user-centric applications. Specializing in modern web and mobile technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button onClick={scrollToProjects} size="lg" className="h-12 px-8 text-base font-medium rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium rounded-full border-2 hover:bg-secondary/50 transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </div>

        <div className="pt-12 flex justify-center gap-6">
          <a href="https://github.com/arshadvkb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/arshad-vkb-b860a0323" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:arshadvkb969@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
