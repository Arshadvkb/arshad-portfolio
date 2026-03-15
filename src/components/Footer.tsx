import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t-4 border-border relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-8 text-primary/5 font-mono text-[10vw] font-black leading-none pointer-events-none select-none overflow-hidden origin-bottom-right rotate-90 translate-x-1/4">
        END_OF_PAGE
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6 md:col-span-2">
            <h3 className="text-4xl font-heading font-black uppercase tracking-tighter">
              Arshad<span className="text-primary">.Vkb</span>
            </h3>
            <div className="pl-4 border-l-2 border-primary">
              <p className="text-foreground/80 font-sans max-w-sm">
                Engineering <strong className="text-primary font-bold">Unforgettable</strong> Digital Experiences with passion and precision. Let's build something bold.
              </p>
            </div>
            <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-mono text-xs uppercase tracking-widest border border-border">
              STATUS: <span className="text-primary">ONLINE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 flex flex-col md:items-start pl-0 md:pl-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Directory</h4>
            <div className="flex flex-col space-y-3">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="w-full font-mono uppercase tracking-wider text-foreground hover:text-primary hover:translate-x-2 transition-all duration-200 flex items-center gap-2"
                >
                  <span className="text-primary/50 text-xs">/</span>{link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Network</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/Arshadvkb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono uppercase text-sm border-2 border-transparent hover:border-primary p-2 -ml-2 transition-all duration-300 w-max"
              >
                <span className="bg-foreground text-background p-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Github className="h-4 w-4" /></span>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/arshad-vkb-b860a0323"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono uppercase text-sm border-2 border-transparent hover:border-primary p-2 -ml-2 transition-all duration-300 w-max"
              >
                <span className="bg-foreground text-background p-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Linkedin className="h-4 w-4" /></span>
                LinkedIn
              </a>
              <a
                href="mailto:arshadvkb969.com"
                className="group flex items-center gap-3 font-mono uppercase text-sm border-2 border-transparent hover:border-primary p-2 -ml-2 transition-all duration-300 w-max"
              >
                <span className="bg-foreground text-background p-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Mail className="h-4 w-4" /></span>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border mb-8 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-background px-4 font-mono text-xs text-muted-foreground">v2.0.0</div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-mono text-muted-foreground uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} // Arshad VKB
          </p>
          <p className="flex items-center gap-2">
            System <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block"></span> Operational
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
