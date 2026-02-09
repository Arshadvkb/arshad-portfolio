import { Briefcase, GraduationCap } from "lucide-react"

export const Experience = () => {
    const experiences = [

        {
            title: "10th",
            company: "St Mary's English Medium School Chevrambalam",
            duration: "2020",
            description:
                "Gained hands on experience in programming and problem-solving.",
            icon: <GraduationCap className="w-5 h-5 text-primary" />,
        },
        {
            title: "12th",
            company: "St Mary's English Medium School Chevrambalam",
            duration: "2022",
            description:
                "Specialized in Computer Science. Active member of the tech community and gained hands on experience in data structures and algorithms.",
            icon: <GraduationCap className="w-5 h-5 text-primary" />,
        },
        {
            title: "BSc Computer Science",
            company: "College of Applied Science Vazhakkad",
            duration: "2022 - 2025",
            description:
                "Specialized in Computer Science. Active member of the tech community and participated in various hackathons and coding competitions.",
            icon: <GraduationCap className="w-5 h-5 text-primary" />,
        }, {
            title: "Python and Flutter Intern",
            company: "Regional Technologies",
            duration: "2025",
            description:
                "Developed cross-platform mobile applications using Flutter and built robust backend services with Python. Collaborated on full-stack projects to deliver scalable solutions.",
            icon: <Briefcase className="w-5 h-5 text-primary" />,
        },
    ]

    return (
        <section id="experience" className="section-padding bg-muted/30">
            <div className="container-width">
                <div className="text-center mb-16 fade-up">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Experience & Education</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My professional journey and academic background.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Icon Marker */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-sm z-10">
                                    {exp.icon}
                                </div>

                                {/* Content Card */}
                                <div className="ml-20 md:ml-0 md:w-1/2 p-6 glass-card rounded-xl hover:-translate-y-1 transition-transform">
                                    <span className="text-sm text-primary font-semibold mb-2 block">{exp.duration}</span>
                                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                    <h4 className="text-muted-foreground text-sm mb-4 font-medium">{exp.company}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{exp.description}</p>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
