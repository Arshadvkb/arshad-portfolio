import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ThemeToggle"

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
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container-width flex items-center justify-between h-16">

                <a href="#" className="font-['Bruno_Ace'] font-bold text-xl tracking-tight hover:text-primary transition-colors">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap" />
                    ARSHAD VKB
                </a>


                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <ThemeToggle />
                    <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                        Hire Me
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground focus:outline-none p-2"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-in slide-in-from-top-5">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="w-full" onClick={() => {
                            setIsOpen(false);
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            Hire Me
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
