import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import ProfileImage from '../assets/profile.jpeg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-background">
      
      {/* Decorative background grid and borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-border opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-border opacity-50" />
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-border opacity-20" />
        <div className="absolute top-0 right-[10%] w-[1px] h-full bg-border opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Text Content */}
        <div className="col-span-1 lg:col-span-7 space-y-8 animate-fade-up stagger-1 z-20">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-transparent border-2 border-primary text-primary font-mono text-xs font-bold uppercase tracking-widest relative">
            <span className="h-2 w-2 bg-primary animate-pulse inline-block"></span>
            System Online // Arshad.VKB
            <div className="absolute -bottom-[2px] -right-[2px] w-2 h-2 bg-primary"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-foreground leading-[0.9] uppercase">
            Backend First<br/>
            <span className="text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px hsl(var(--foreground))' }}>Fullstack</span><br/>
            <span className="text-primary">Developer</span>
          </h1>

          <div className="pl-0 md:pl-8 border-l-4 border-primary">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-sans">
              I Architect <strong className="text-foreground font-bold">Robust</strong> Business Logic. Specializing in high-performance backends, scalable databases, and seamless fullstack integrations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button 
              onClick={scrollToProjects} 
              className="brutal-button px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Code className="w-5 h-5" /> Execute: View_Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-mono text-sm uppercase tracking-wider bg-secondary text-secondary-foreground border-2 border-transparent hover:border-foreground transition-all duration-200 w-full sm:w-auto"
            >
              Connect_Node
            </button>
          </div>
        </div>

        {/* Visual/Image Element */}
        <div className="col-span-1 lg:col-span-5 relative mt-12 lg:mt-0 animate-fade-up stagger-3 flex justify-center lg:justify-end z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Dark abstract offset block */}
            <div className="absolute -inset-4 bg-primary translate-x-4 translate-y-4 shadow-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="absolute -inset-4 border-2 border-foreground -translate-x-4 -translate-y-4 z-0 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-6"></div>
            
            {/* The Image */}
            <img
              src={ProfileImage}
              alt="Arshad VKB"
              className="relative z-10 w-full h-full object-cover filter grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
            />
            
            {/* Little corner accents */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-primary z-20"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-primary z-20"></div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col gap-6 items-center">
        <div className="w-[1px] h-24 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-primary animate-pulse"></div>
        </div>
        <a href="https://github.com/arshadvkb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/arshad-vkb-b860a0323" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:arshadvkb969@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Social Links */}
      <div className="mt-16 flex md:hidden justify-center gap-6 z-30 relative pb-12">
        <a href="https://github.com/arshadvkb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/arshad-vkb-b860a0323" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:arshadvkb969@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
