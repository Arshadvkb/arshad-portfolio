import { Briefcase, GraduationCap } from "lucide-react"

export const Experience = () => {
    const experiences = [

        {
            title: "10th",
            company: "St Mary's English Medium School Chevrambalam",
            duration: "2020",
            description:
                "Gained hands on experience in programming and problem-solving.",
            icon: <GraduationCap className="w-6 h-6 text-background" />,
        },
        {
            title: "12th",
            company: "St Mary's English Medium School Chevrambalam",
            duration: "2022",
            description:
                "Specialized in Computer Science. Active member of the tech community and gained hands on experience in data structures and algorithms.",
            icon: <GraduationCap className="w-6 h-6 text-background" />,
        },
        {
            title: "BSc Computer Science",
            company: "College of Applied Science Vazhakkad",
            duration: "2022 - 2025",
            description:
                "Specialized in Computer Science. Active member of the tech community and participated in various hackathons and coding competitions.",
            icon: <GraduationCap className="w-6 h-6 text-background" />,
        }, {
            title: "Python and Flutter Intern",
            company: "Regional Technologies",
            duration: "2025",
            description:
                "Developed cross-platform mobile applications using Flutter and built robust backend services with Python. Collaborated on full-stack projects to deliver scalable solutions.",
            icon: <Briefcase className="w-6 h-6 text-background" />,
        },
    ]

    return (
        <section id="experience" className="section-padding bg-background relative overflow-hidden">
            <div className="container-width z-10 relative">
                <div className="mb-20 fade-up border-b-2 border-primary pb-6 inline-block">
                    <h2 className="font-heading text-5xl md:text-7xl font-black mb-2 uppercase tracking-tighter">
                        Experience <span className="text-primary">&</span><br/>Education
                    </h2>
                    <p className="text-muted-foreground font-mono uppercase tracking-widest text-sm mt-4">
                        // Journey_Log.exe
                    </p>
                </div>

                <div className="relative max-w-4xl">
                    {/* Harsh Vertical Line */}
                    <div className="absolute left-[24px] md:left-1/2 top-4 bottom-0 w-[4px] bg-border md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    } group`}
                            >
                                {/* Marker */}
                                <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-primary z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-[4px_4px_0_hsl(var(--foreground))] border-2 border-foreground">
                                    {exp.icon}
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] brutal-card p-8 group-hover:bg-card/80 flex flex-col justify-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                    <div className={`mb-4 flex flex-col gap-2 ${index % 2 === 0 ? "items-start" : "md:items-end items-start"}`}>
                                        <span className="font-mono bg-foreground text-background px-3 py-1 font-bold text-sm uppercase tracking-wider inline-block">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                                    <h4 className="text-muted-foreground font-mono text-sm mb-6 pb-4 border-b border-border/50">{exp.company}</h4>
                                    <p className="text-foreground/80 leading-relaxed font-sans">{exp.description}</p>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="absolute top-1/4 right-0 text-primary opacity-5 font-heading text-[20vw] font-black leading-none pointer-events-none select-none overflow-hidden">
                EXP<br/>LOG
            </div>
        </section>
    )
}
