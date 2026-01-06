import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-4 rounded-xl border-gradient text-white hover:scale-105 transition-transform shadow-lg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <a href="#" className="hidden md:flex items-center gap-2 group">
                    <div className="p-2 gradient-bg rounded-lg group-hover:scale-110 transition-transform">
                        <Code2 size={24} color="white" />
                    </div>
                    <span className="text-xl font-bold font-heading tracking-tight text-white">Alex Eisenach</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 rounded-full border-gradient text-white font-bold text-sm hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full glass flex flex-col items-center gap-2 md:hidden overflow-hidden border-t border-white/10"
                    >
                        <div className="w-full p-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="w-full py-4 rounded-xl border-gradient text-center text-white font-bold text-base bg-white/5"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
