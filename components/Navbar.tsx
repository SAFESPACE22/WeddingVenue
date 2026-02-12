"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Venues", href: "/venues" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-primary/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-primary">
                        Ethereal Estates
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-primary transition-colors ${pathname === link.href ? "text-primary font-bold" : "text-gray-800"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="/contact" size="sm">
                        Book a Tour
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-primary/10 shadow-xl py-8 px-6 flex flex-col items-center space-y-6 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                        Book a Tour
                    </Button>
                </div>
            )}
        </nav>
    );
}
