import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal, Instagram } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProfileImage from '../assets/profile.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-background">
      
      {/* Sleek architectural background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Refined luminous accents */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[5%] -right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-30 mix-blend-screen" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] bg-accent/5 rounded-full blur-[140px] pointer-events-none opacity-20 mix-blend-screen" 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Text Content - Focused and High-Impact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-7 space-y-12 z-20"
        >
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-xl glass-panel border-primary/20 text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Node: ARSHAD_VKB // Verified
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-tighter text-foreground leading-[0.85] uppercase"
            >
              Backend<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">Architect</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-foreground/50 leading-relaxed font-sans font-light max-w-xl"
            >
              Engineering <strong className="text-foreground font-semibold">robust infrastructures</strong> and high-performance server logic for the next generation of digital systems.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button 
              onClick={scrollToProjects} 
              className="premium-button group flex items-center justify-center gap-4 py-5 px-8 text-xs tracking-[0.2em] uppercase font-bold"
            >
              <Terminal className="w-4 h-4 group-hover:text-accent transition-colors" /> 
              View Architecture
            </button>
            <a 
              href="/resume.pdf" 
              download="Arshad_VKB_CV.pdf"
              className="premium-button-secondary flex items-center justify-center gap-4 py-5 px-8 text-xs tracking-[0.2em] uppercase font-bold border-primary/20 hover:border-primary/60 bg-primary/5 text-primary transition-all duration-300"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" /> 
              Download CV
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="premium-button-secondary py-5 px-8 text-xs tracking-[0.2em] uppercase font-bold border-white/5 hover:border-white/20 bg-transparent text-foreground/70"
            >
              Contact_Host
            </button>
          </motion.div>
        </motion.div>

        {/* Visual/Image Element - Minimalist and Precise */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:justify-end z-10"
        >
          <div className="relative w-full max-w-sm aspect-[3/4] group">
            
            {/* Precision corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-3xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            
            {/* Main Visual Frame */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative h-full w-full rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-[0_0_50px_-12px_rgba(197,160,89,0.1)] transition-all duration-700"
            >
              <img
                src={ProfileImage}
                alt="Arshad VKB"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
              />
              
              {/* Subtle tech overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
            
            {/* Floating Technical HUD */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 glass-panel border-primary/20 rounded-2xl p-6 shadow-2xl backdrop-blur-3xl border-l-4 border-l-primary min-w-[220px]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary ring-1 ring-primary/20">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">Deployment</p>
                  <p className="text-sm font-bold text-foreground">STABLE // LIVE</p>
                </div>
              </div>
            </motion.div>
            
          </div>
        </motion.div>

      </div>

      {/* Floating Network Links - Vertical Line Motif */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-8 items-center"
      >
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-primary/30" />
        <a href="https://github.com/arshadvkb" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground/30 hover:text-primary transition-all duration-300 hover:scale-125">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/arshad-vkb-b860a0323" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/30 hover:text-primary transition-all duration-300 hover:scale-125">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/arshadvkb/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-foreground/30 hover:text-primary transition-all duration-300 hover:scale-125">
          <Instagram className="w-5 h-5" />
        </a>
        <div className="w-px h-20 bg-gradient-to-t from-transparent via-primary/30 to-primary/30" />
      </motion.div>

      {/* Mobile Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-24 flex lg:hidden justify-center gap-6 z-30 relative pb-4"
      >
         <a href="https://github.com/arshadvkb" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-4 rounded-2xl glass-panel text-foreground/70 hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/arshad-vkb-b860a0323" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-4 rounded-2xl glass-panel text-foreground/70 hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/arshadvkb/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="p-4 rounded-2xl glass-panel text-foreground/70 hover:text-primary transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="mailto:arshadvkb969@gmail.com" aria-label="Email Arshad" className="p-4 rounded-2xl glass-panel text-foreground/70 hover:text-primary transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center"
      >
        <ArrowDown className="text-primary/50 w-6 h-6" />
      </motion.div>
      
    </section>
  );
};

export default Hero;
