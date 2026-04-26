import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "/resume.pdf", download: true },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-2xl border-b border-primary/10 shadow-2xl" : "bg-transparent"
                }`}
        >
            <div className="container-width flex items-center justify-between h-24">

                <a href="#" className="font-heading font-black text-2xl tracking-tighter flex items-center gap-3 group">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary))] group-hover:scale-125 transition-transform duration-500"></div>
                    <span className="uppercase italic">Arshad<span className="text-primary">.</span>Vkb</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                download={link.download ? "Arshad_VKB_CV.pdf" : undefined}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50 hover:text-primary transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 rounded-full"></span>
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="premium-button text-xs px-8 py-3 uppercase tracking-widest font-bold"
                    >
                        Initiate_Sync
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground focus:outline-none p-3 rounded-xl hover:bg-primary/10 transition-colors border border-white/5"
                    >
                        {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-24 left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-primary/10 flex flex-col p-6 shadow-2xl animate-in slide-in-from-top-4 duration-500">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                download={link.download ? "Arshad_VKB_CV.pdf" : undefined}
                                className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <button
                        className="mt-6 w-full premium-button py-5 text-sm uppercase tracking-[0.2em]"
                        onClick={() => {
                            setIsOpen(false);
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Contact Me
                    </button>
                </div>
            )}
        </nav>
    )
}
