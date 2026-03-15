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
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container-width flex items-center justify-between h-20">

                <a href="#" className="font-heading font-bold text-xl tracking-tight flex items-center gap-2 group">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] group-hover:scale-150 transition-transform duration-300"></div>
                    <span>Arshad<span className="text-muted-foreground font-normal">.Vkb</span></span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></span>
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="premium-button text-sm px-5 py-2"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 flex flex-col p-4 shadow-lg animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        className="mt-4 w-full premium-button"
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
