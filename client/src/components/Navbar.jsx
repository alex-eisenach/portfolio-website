import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 gradient-bg rounded-lg group-hover:scale-110 transition-transform">
                        <Code2 size={24} color="white" />
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight text-white">Alex Eisenach</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://www.linkedin.com/in/alex-eisenach-08a581224"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full gradient-bg text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
                    >
                        LinkedIn
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-text-main" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full glass p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://www.linkedin.com/in/alex-eisenach-08a581224"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl gradient-bg text-center text-white font-bold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        LinkedIn
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
