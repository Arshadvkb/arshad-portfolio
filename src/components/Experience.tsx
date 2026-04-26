import { Briefcase, GraduationCap } from "lucide-react"
import { ScrollReveal } from "./ScrollReveal";

export const Experience = () => {
    const experiences = [
        {
            title: "10th",
            company: "St Mary's English Medium School Chevrambalam",
            duration: "2020",
            description: "Gained hands on experience in programming and problem-solving.",
            icon: <GraduationCap className="w-5 h-5 text-primary" />,
        },
        {
            title: "12th",
            company: "St Mary's English Medium School Chevrambalam",
            duration: "2022",
            description: "Specialized in Computer Science. Active member of the tech community and gained hands on experience in data structures and algorithms.",
            icon: <GraduationCap className="w-5 h-5 text-primary" />,
        },
        {
            title: "BSc Computer Science",
            company: "College of Applied Science Vazhakkad",
            duration: "2022 - 2025",
            description: "Specialized in Computer Science. Active member of the tech community and participated in various hackathons and coding competitions.",
            icon: <GraduationCap className="w-5 h-5 text-primary" />,
        }, 
        {
            title: "Python and Flutter Intern",
            company: "Regional Technologies",
            duration: "2025",
            description: "Developed cross-platform mobile applications using Flutter and built robust backend services with Python. Collaborated on full-stack projects to deliver scalable solutions.",
            icon: <Briefcase className="w-5 h-5 text-primary" />,
        },
    ]

  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden border-t border-white/5">
      <div className="container-width z-10 relative">
        <ScrollReveal>
          <div className="mb-24 flex flex-col items-start">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              <Briefcase className="w-4 h-4" /> Professional Ledger
            </div>
            <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic">
              Trace <span className="text-primary">Journey.</span>
            </h2>
            <p className="text-foreground/40 max-w-2xl text-xl font-light leading-relaxed">
              A chronological record of academic foundations and professional deployments.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Elegant Technical Vertical Line */}
          <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <ScrollReveal 
                key={index} 
                delay={0.2 * index} 
                direction={index % 2 === 0 ? 'right' : 'left'}
                distance={50}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} group`}
                >
                  {/* Technical Marker */}
                  <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-24 h-24 z-20">
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl rotate-45 scale-50 group-hover:rotate-90 group-hover:scale-75 group-hover:bg-primary/20 transition-all duration-700 border border-primary/20"></div>
                    <div className="relative w-12 h-12 rounded-xl bg-[#0A0A0A] border border-primary/40 flex items-center justify-center group-hover:border-primary transition-all duration-500 shadow-2xl">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                        {exp.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Card - Minimalist and Premium */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] p-10 flex flex-col bg-[#080808] border border-white/5 rounded-3xl hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(197,160,89,0.1)] ${index % 2 === 0 ? "md:text-left" : "md:text-left"}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                        {exp.duration}
                      </span>
                      <div className="h-px flex-grow bg-white/5 group-hover:bg-primary/20 transition-colors" />
                    </div>
                    
                    <h3 className="text-3xl font-black tracking-tight text-foreground uppercase italic group-hover:text-primary transition-colors mb-2">{exp.title}</h3>
                    <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/30 mb-8">{exp.company}</h4>
                    
                    <p className="text-foreground/50 leading-relaxed text-base font-light font-sans">
                      {exp.description}
                    </p>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen -z-0"></div>
    </section>
  );
};
