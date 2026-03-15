import { Briefcase, GraduationCap } from "lucide-react"

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
        <section id="experience" className="section-padding bg-background relative overflow-hidden">
            <div className="container-width z-10 relative">
                <div className="mb-20 fade-up flex flex-col items-center justify-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-muted-foreground font-mono text-xs mb-4">
                        <Briefcase className="w-3 h-3 text-primary" /> Career Path
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Experience <span className="text-primary">&</span> Education
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Elegant Glowing Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} group`}
                            >
                                {/* Marker */}
                                <div className="absolute left-[16px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 z-20">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/40 transition-colors"></div>
                                    <div className="relative w-10 h-10 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                        {exp.icon}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] interactive-card p-8 flex flex-col justify-center ${index % 2 === 0 ? "md:text-left" : "md:text-left md:items-end"}`}>
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-semibold tracking-wide mb-4 w-max">
                                        {exp.duration}
                                    </span>
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                                    <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                                    <p className={`text-foreground/70 leading-relaxed text-sm ${index % 2 === 0 ? "" : "md:text-right"}`}>
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Subtle glow underneath timeline */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen -z-0"></div>
        </section>
    )
}
