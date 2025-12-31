import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
                        <span className="gradient-text">Distributed Systems&nbsp;&nbsp;|&nbsp;&nbsp;Embedded&nbsp;&nbsp;|&nbsp;&nbsp;AI&nbsp;&nbsp;|&nbsp;&nbsp;Full-Stack&nbsp;&nbsp;|&nbsp;&nbsp;xOps</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10">
                        I'm Alex Eisenach, a do-it-all software engineer with experience developing high and low level software in large-scale, high-volume systems.<br />
                        I thrive on tackling complex engineering challenges and delivering sleek, performant applications.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="#about" className="px-6 py-3 rounded-full gradient-bg text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                About
                            </a>
                            <a href="#experience" className="px-6 py-3 rounded-full gradient-bg text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                Experience
                            </a>
                            <a href="#projects" className="px-6 py-3 rounded-full gradient-bg text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                Projects
                            </a>
                            <a href="#certifications" className="px-6 py-3 rounded-full gradient-bg text-white font-bold hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                Certifications
                            </a>
                        </div>
                        <a href="#contact" className="px-8 py-4 rounded-full glass border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
