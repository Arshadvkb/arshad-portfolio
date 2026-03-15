import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import ProfileImage from '../assets/profile.jpeg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-background">
      
      {/* Subtle ambient background glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute bottom-[0%] left-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="col-span-1 lg:col-span-7 space-y-8 animate-fade-up stagger-1 z-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary font-mono text-xs font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online // Arshad.VKB
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-foreground leading-[1.05]">
            Backend First<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">Fullstack</span><br/>
            Developer.
          </h1>

          <div className="border-l-2 border-primary/30 pl-6 py-1">
            <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed font-sans">
              I architect <strong className="text-foreground font-semibold">robust business logic</strong> and scalable infrastructure. Specializing in high-performance backends, seamless APIs, and elegant data layers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button 
              onClick={scrollToProjects} 
              className="premium-button flex items-center justify-center gap-2"
            >
              <Terminal className="w-5 h-5" /> View Architectures
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="premium-button-secondary"
            >
              Initiate Contact
            </button>
          </div>
        </div>

        {/* Visual/Image Element */}
        <div className="col-span-1 lg:col-span-5 relative mt-8 lg:mt-0 animate-fade-up stagger-3 flex justify-center lg:justify-end z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            
            {/* Soft backdrop blur card */}
            <div className="absolute inset-0 interactive-card rounded-2xl rotate-3 group-hover:rotate-6 scale-105 transition-all duration-500"></div>
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent p-1 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10">
                <img
                  src={ProfileImage}
                  alt="Arshad VKB"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
            
            {/* Status floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-panel rounded-lg p-4 shadow-xl flex items-center gap-3 animate-fade-up stagger-5 border-l-4 border-l-primary">
              <div className="bg-primary/20 p-2 rounded-md text-primary">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Focus</p>
                <p className="text-sm font-bold text-foreground">Backend Systems</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center animate-bounce">
        <ArrowDown className="text-primary/50 w-6 h-6" />
      </div>

      {/* Floating Network Links - Desktop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4 pr-6">
        <a href="https://github.com/arshadvkb" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:border-primary/50 hover:bg-card/80 text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/arshad-vkb-b860a0323" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:border-primary/50 hover:bg-card/80 text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:arshadvkb969@gmail.com" className="p-3 rounded-full glass-panel hover:border-primary/50 hover:bg-card/80 text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110">
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile Social Links */}
      <div className="mt-16 flex lg:hidden justify-center gap-4 z-30 relative pb-4">
         <a href="https://github.com/arshadvkb" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:border-primary/50 text-foreground/70 hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/arshad-vkb-b860a0323" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:border-primary/50 text-foreground/70 hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:arshadvkb969@gmail.com" className="p-3 rounded-full glass-panel hover:border-primary/50 text-foreground/70 hover:text-primary transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
