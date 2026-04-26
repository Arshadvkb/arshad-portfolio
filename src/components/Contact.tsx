import { useRef, useState } from "react"
import { Mail, MapPin, Phone, Send, TerminalSquare, Loader2, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "./ScrollReveal"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_at5h4z8",
        "template_nuz04dv",
        formRef.current,
        "duoZCLXYg_bOL50uA"
      );
      
      setIsSent(true);
      toast.success("TRANSMISSION_SUCCESSFUL", {
        description: "Data has been successfully pushed to the server.",
      });
      formRef.current.reset();
      
      // Reset sent state after 5 seconds to allow new messages
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("TRANSMISSION_FAILED", {
        description: "An error occurred during data sync. Please check your connection.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative border-t border-white/5 overflow-hidden">
      {/* Abstract Ambient Lights */}
      <div className="absolute top-0 left-0 w-1/2 h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="absolute bottom-0 right-0 w-1/2 h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none translate-x-1/2 translate-y-1/2 opacity-20" />

      <div className="container-width relative z-10">
        <ScrollReveal>
          <div className="mb-24 flex flex-col items-start">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              <Send className="w-4 h-4" /> Reach Out
            </div>
            <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic">
              Initiate <span className="text-primary">Sync.</span>
            </h2>
            <p className="text-foreground/40 max-w-2xl text-xl font-light leading-relaxed">
              Available for high-stakes backend consultations and full-cycle system deployments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Information */}
          <div className="space-y-16">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-10">
                <h3 className="text-sm font-black tracking-[0.4em] uppercase text-foreground/20 border-b border-white/5 pb-6">Direct_Links</h3>
                
                <div className="space-y-6">
                  <a href="mailto:arshadvkb969@gmail.com" className="flex items-center space-x-8 group p-6 rounded-3xl bg-[#080808] border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                    <div className="p-5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-2xl">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Protocol: SMTP</h4>
                      <p className="text-xl text-foreground font-black group-hover:text-primary transition-colors tracking-tight italic">arshadvkb969@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-8 p-6 rounded-3xl bg-[#080808] border border-white/5 group hover:border-primary/20 transition-all duration-500">
                    <div className="p-5 rounded-2xl bg-primary/5 text-primary shadow-2xl group-hover:bg-primary/10 transition-colors">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Node_Location</h4>
                      <p className="text-xl text-foreground font-black tracking-tight italic">Kerala, India // IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <div className="space-y-10">
                <h3 className="text-sm font-black tracking-[0.4em] uppercase text-foreground/20 border-b border-white/5 pb-6 flex items-center gap-4">
                  <TerminalSquare className="w-5 h-5 text-primary/40" /> Operations
                </h3>
                
                <div className="grid gap-4">
                  <div className="p-8 rounded-3xl bg-[#080808] border border-white/5 relative group cursor-default hover:border-primary/20 transition-all duration-500">
                    <div className="absolute top-8 right-8 font-mono text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none italic">01</div>
                    <h4 className="font-black text-lg mb-3 relative z-10 group-hover:text-primary transition-colors uppercase italic">Backend design</h4>
                    <p className="text-sm text-foreground/40 relative z-10 leading-relaxed font-light font-sans max-w-[280px]">Scalable server architecture, robust RESTful + GraphQL APIs, and complex business logic.</p>
                  </div>
                  
                  <div className="p-8 rounded-3xl bg-[#080808] border border-white/5 relative group cursor-default hover:border-primary/20 transition-all duration-500">
                    <div className="absolute top-8 right-8 font-mono text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none italic">02</div>
                    <h4 className="font-black text-lg mb-3 relative z-10 group-hover:text-primary transition-colors uppercase italic">Database Engineering</h4>
                    <p className="text-sm text-foreground/40 relative z-10 leading-relaxed font-light font-sans max-w-[280px]">Advanced SQL/NoSQL schema modeling, read/write optimization, and caching layers.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="p-10 md:p-14 bg-[#080808] border border-white/5 rounded-[40px] relative overflow-hidden group hover:border-primary/30 transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)]">
              {/* Form decorative background pattern */}
              <div className="absolute inset-0 grid-bg opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none opacity-50" />
              
              <h3 className="text-4xl font-black tracking-tighter mb-12 relative z-10 uppercase italic">Secure Message <span className="text-primary">Tunnel.</span></h3>
              <form ref={formRef} className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] ml-2">Identify_Host</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-5 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-500 font-sans font-light"
                      placeholder="Enter designation"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] ml-2">Response_Path</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-5 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-500 font-sans font-light"
                      placeholder="node@domain.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="subject" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] ml-2">Header_Param</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-5 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-500 font-sans font-light"
                    placeholder="Subject of transmission"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] ml-2">Message_Payload</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-5 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary/50 focus:bg-black/60 transition-all duration-500 font-sans font-light resize-none"
                    placeholder="Execute transmission sequence..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSending || isSent}
                  className="w-full premium-button group flex items-center justify-center gap-5 py-6 text-sm font-black tracking-[0.3em] uppercase italic disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>SYNCING... <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : isSent ? (
                    <>TRANSMITTED <CheckCircle2 className="w-5 h-5 text-accent" /></>
                  ) : (
                    <>
                      Transmit_Data
                      <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500 text-accent" /> 
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
