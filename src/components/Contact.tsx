import React from 'react';
import { Mail, MessageSquare, Calendar, MapPin, Phone, Download } from 'lucide-react';

const Contact = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Arshad_VKB_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="section-padding bg-background w-full border-t-2 border-border relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20"></div>
      
      <div className="container-width z-10 relative">
        <div className="mb-20 fade-up border-b-2 border-primary pb-6 inline-block">
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Initialize <span className="text-primary">&</span><br/>Connect
          </h2>
          <p className="text-muted-foreground font-mono uppercase tracking-widest text-sm mt-4">
            // ping_request.sh
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="brutal-card p-10 group bg-card hover:bg-[#151515] flex flex-col">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-border">
              <div className="p-3 bg-primary text-primary-foreground shadow-[4px_4px_0_hsl(var(--foreground))] border-2 border-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Access_Points</h3>
            </div>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-center gap-6 group/item cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-border bg-background group-hover/item:border-primary group-hover/item:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Comm_Link_01</div>
                  <div className="font-sans text-lg font-bold group-hover/item:text-primary transition-colors">+91 907 477 3366</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group/item cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-border bg-background group-hover/item:border-primary group-hover/item:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Comm_Link_02</div>
                  <div className="font-sans text-lg font-bold group-hover/item:text-primary transition-colors">arshadvkb969@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group/item cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-border bg-background group-hover/item:border-primary group-hover/item:text-primary transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Location_Data</div>
                  <div className="font-sans text-lg font-bold group-hover/item:text-primary transition-colors">Calicut, Kerala</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group/item cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-border bg-background group-hover/item:border-primary group-hover/item:text-primary transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Status</div>
                  <div className="font-sans text-lg font-bold text-primary">Awaiting Instructions</div>
                </div>
              </div>
            </div>

            <div className="pt-10 mt-6 border-t-2 border-border">
              <button className="brutal-button w-full py-5 flex items-center justify-center gap-3 text-lg font-bold" onClick={handleDownloadCV}>
                <Download className="w-5 h-5" /> Extract_Dataset [CV]
              </button>
            </div>
          </div>

          {/* Services / What I Offer */}
          <div className="brutal-card p-10 group bg-card hover:bg-[#151515] flex flex-col">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-border">
              <h3 className="text-3xl font-black uppercase tracking-tight pl-4 border-l-4 border-primary">Protocols</h3>
            </div>
            
            <div className="space-y-6 flex-grow">
              <div className="p-6 border border-border bg-background hover:border-primary transition-colors relative overflow-hidden group/service cursor-default">
                <div className="absolute top-0 right-0 p-2 font-mono text-5xl font-black text-border opacity-50 group-hover/service:text-primary/20 transition-colors pointer-events-none">01</div>
                <h4 className="font-black text-xl uppercase tracking-tight mb-2 relative z-10 group-hover/service:text-primary transition-colors">Full-Stack Development</h4>
                <p className="font-mono text-sm text-foreground/70 relative z-10 leading-relaxed">End-to-end web and mobile application development architecture and deployment.</p>
              </div>
              
              <div className="p-6 border border-border bg-background hover:border-primary transition-colors relative overflow-hidden group/service cursor-default">
                <div className="absolute top-0 right-0 p-2 font-mono text-5xl font-black text-border opacity-50 group-hover/service:text-primary/20 transition-colors pointer-events-none">02</div>
                <h4 className="font-black text-xl uppercase tracking-tight mb-2 relative z-10 group-hover/service:text-primary transition-colors">IoT Solutions</h4>
                <p className="font-mono text-sm text-foreground/70 relative z-10 leading-relaxed">Smart automation systems, hardware interconnectivity, and sensor integration frameworks.</p>
              </div>
              
              <div className="p-6 border border-border bg-background hover:border-primary transition-colors relative overflow-hidden group/service cursor-default">
                <div className="absolute top-0 right-0 p-2 font-mono text-5xl font-black text-border opacity-50 group-hover/service:text-primary/20 transition-colors pointer-events-none">03</div>
                <h4 className="font-black text-xl uppercase tracking-tight mb-2 relative z-10 group-hover/service:text-primary transition-colors">Technical Consulting</h4>
                <p className="font-mono text-sm text-foreground/70 relative z-10 leading-relaxed">Architecture design, technology stack optimization, and performance scaling strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
