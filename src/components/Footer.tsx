import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-24">
          
          {/* Brand Section */}
          <div className="space-y-8 md:col-span-2">
            <h3 className="text-4xl font-heading font-black tracking-tighter flex items-center gap-4 group cursor-default">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))] group-hover:scale-125 transition-transform duration-500"></div>
              <span className="uppercase italic tracking-tighter">Arshad<span className="text-primary">.</span>Vkb</span>
            </h3>
            
            <p className="text-foreground/40 font-sans max-w-sm leading-relaxed text-lg font-light">
              Engineering <strong className="text-foreground font-semibold">robust infrastructures</strong> and high-performance server logic for the next generation of digital systems.
            </p>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/5 text-primary border border-primary/10 text-[10px] font-black uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Node Status: Verified // Active
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-foreground/20 italic">Navigation</h4>
            <div className="flex flex-col space-y-4">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="w-full text-foreground/50 hover:text-primary transition-all duration-300 flex items-center gap-3 text-xs font-bold uppercase tracking-widest group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
                  {link}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                download="Arshad_VKB_CV.pdf"
                className="w-full text-foreground/50 hover:text-primary transition-all duration-300 flex items-center gap-3 text-xs font-bold uppercase tracking-widest group"
              >
                <span className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
                Resume.pdf
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-foreground/20 italic">Command_Center</h4>
            <div className="flex flex-col space-y-5">
              <a
                href="https://github.com/Arshadvkb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-primary transition-all w-max"
              >
                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Github className="h-4 w-4" />
                </div>
                GIT_HUB
              </a>
              <a
                href="https://linkedin.com/in/arshad-vkb-b860a0323"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-primary transition-all w-max"
              >
                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Linkedin className="h-4 w-4" />
                </div>
                LINKED_IN
              </a>
              <a
                href="https://www.instagram.com/arshadvkb/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-primary transition-all w-max"
              >
                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Instagram className="h-4 w-4" />
                </div>
                INSTAGRAM
              </a>
              <a
                href="mailto:arshadvkb969.com"
                className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-primary transition-all w-max"
              >
                <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/5 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                MAIL_SYNC
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">
          <p>
            © {new Date().getFullYear()} ARSHAD VKB // DEPLOYED_VER_1.0.4
          </p>
          <p className="flex items-center gap-4 group cursor-default">
            Built with <span className="text-primary group-hover:scale-110 transition-transform">Architectural Precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
