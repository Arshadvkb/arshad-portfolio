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
        { name: "Skills", href: "#skills", label: "01" },
        { name: "Experience", href: "#experience", label: "02" },
        { name: "Projects", href: "#projects", label: "03" },
        { name: "Contact", href: "#contact", label: "04" },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background border-b-2 border-border" : "bg-transparent"
                }`}
        >
            <div className="container-width flex items-center justify-between h-20">

                <a href="#" className="font-heading font-black text-2xl tracking-tighter uppercase relative group">
                    <span className="text-primary mr-1 opacity-0 group-hover:opacity-100 transition-opacity">*</span>
                    Arshad<span className="text-primary">.Vkb</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-0 border-2 border-border bg-background">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 px-6 py-3 border-r-2 border-border text-sm font-mono uppercase tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-colors group"
                        >
                            <span className="text-[10px] opacity-50 group-hover:opacity-100">{link.label}</span>
                            {link.name}
                        </a>
                    ))}
                    <button 
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-colors"
                    >
                        INITIATE://HIRE
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground focus:outline-none p-3 border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b-2 border-border flex flex-col">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-6 py-4 border-b border-border text-sm font-mono uppercase tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex justify-between items-center group"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>{link.name}</span>
                            <span className="text-xs opacity-50 group-hover:opacity-100 text-primary">{link.label}</span>
                        </a>
                    ))}
                    <button 
                        className="w-full text-left px-6 py-6 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-bold hover:bg-foreground hover:text-background transition-colors"
                        onClick={() => {
                            setIsOpen(false);
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        INITIATE://HIRE
                    </button>
                </div>
            )}
        </nav>
    )
}
