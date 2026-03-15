import { Mail, MapPin, Phone, Send, TerminalSquare } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background relative border-t border-white/5 overflow-hidden">
      {/* Abstract Ambient Lights */}
      <div className="absolute top-0 left-0 w-1/2 h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/2 h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="container-width relative z-10">
        <div className="mb-16 fade-up flex flex-col justify-center items-center text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-muted-foreground font-mono text-xs mb-4">
            <Send className="w-3 h-3 text-primary" /> Reach Out
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Initiate <span className="text-primary">Contact</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl text-lg mt-4">
            Available for freelance opportunities, system architecture consulting, and backend development roles. Let's discuss your technical requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="interactive-card p-8">
              <h3 className="text-2xl font-bold tracking-tight mb-8">Direct Comm Link</h3>
              
              <div className="space-y-6">
                <a href="mailto:arshadvkb969@gmail.com" className="flex items-center space-x-5 group p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="p-4 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email Protocol</h4>
                    <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">arshadvkb969@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center space-x-5 p-4">
                  <div className="p-4 rounded-full bg-secondary text-primary shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Server Location</h4>
                    <p className="text-lg text-foreground font-medium">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <TerminalSquare className="w-6 h-6 text-primary" /> Core Capabilities
              </h3>
              
              <div className="grid gap-4">
                <div className="interactive-card p-6 flex flex-col relative group cursor-default">
                  <div className="absolute top-6 right-6 font-mono text-3xl font-black text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">01</div>
                  <h4 className="font-bold text-lg mb-2 relative z-10 group-hover:text-primary transition-colors">Backend & API Design</h4>
                  <p className="text-sm text-foreground/70 relative z-10 leading-relaxed font-sans mt-auto">Scalable server architecture, robust RESTful + GraphQL APIs, and complex business logic.</p>
                </div>
                
                <div className="interactive-card p-6 flex flex-col relative group cursor-default">
                  <div className="absolute top-6 right-6 font-mono text-3xl font-black text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">02</div>
                  <h4 className="font-bold text-lg mb-2 relative z-10 group-hover:text-primary transition-colors">Database Architecture</h4>
                  <p className="text-sm text-foreground/70 relative z-10 leading-relaxed font-sans mt-auto">Advanced SQL/NoSQL schema modeling, read/write optimization, and caching layers.</p>
                </div>
                
                <div className="interactive-card p-6 flex flex-col relative group cursor-default">
                  <div className="absolute top-6 right-6 font-mono text-3xl font-black text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">03</div>
                  <h4 className="font-bold text-lg mb-2 relative z-10 group-hover:text-primary transition-colors">Fullstack Integration</h4>
                  <p className="text-sm text-foreground/70 relative z-10 leading-relaxed font-sans mt-auto">Seamless bridging between high-performance data layers and elegant client applications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="interactive-card p-8 md:p-10 relative overflow-hidden h-max">
            {/* Form decorative element */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />
            
            <h3 className="text-2xl font-bold tracking-tight mb-8 relative z-10">Secure Message Channel</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Name_ID</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Enter designation"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email_Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Subject_Line</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="Query parameters"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Payload</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Execute transmission..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full premium-button justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> 
                Transmit Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
