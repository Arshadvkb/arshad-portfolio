import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6 md:col-span-2">
            <h3 className="text-3xl font-heading font-bold tracking-tight flex items-center gap-2 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] group-hover:scale-150 transition-transform duration-300"></div>
              <span>Arshad<span className="text-muted-foreground font-normal">.Vkb</span></span>
            </h3>
            
            <p className="text-foreground/70 font-sans max-w-sm leading-relaxed">
              Architecting <strong className="text-foreground font-semibold">secure, scalable, and elegant</strong> digital solutions. Built for performance and reliability.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 flex flex-col md:items-start pl-0 md:pl-8">
            <h4 className="text-sm font-semibold tracking-wider text-muted-foreground">Navigation</h4>
            <div className="flex flex-col space-y-3">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="w-full text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-muted-foreground">Connect</h4>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/Arshadvkb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors w-max"
              >
                <div className="p-2 rounded-lg bg-card border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <Github className="h-4 w-4" />
                </div>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/arshad-vkb-b860a0323"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors w-max"
              >
                <div className="p-2 rounded-lg bg-card border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <Linkedin className="h-4 w-4" />
                </div>
                LinkedIn
              </a>
              <a
                href="mailto:arshadvkb969.com"
                className="group flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors w-max"
              >
                <div className="p-2 rounded-lg bg-card border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-medium text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Arshad VKB. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Engineered with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
