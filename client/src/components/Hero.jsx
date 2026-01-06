import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />

            <div className="container relative z-10 px-4 md:px-8">
                <div className="flex flex-col items-center">
                    {/* Top Section: Skills and Reduced Profile Image */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32 mb-32 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <div className="mb-6 text-secondary font-mono text-base tracking-[0.4em] uppercase opacity-80">Specializing In</div>
                            <ul className="space-y-6">
                                {['Distributed Systems', 'Embedded', 'AI', 'Full-Stack', 'xOps'].map((skill, index) => (
                                    <motion.li
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                        className="flex items-center gap-6 text-3xl md:text-6xl lg:text-8xl font-black tracking-tighter group cursor-default"
                                    >
                                        <div className="h-2 w-12 md:w-16 bg-gradient-to-r from-primary to-secondary rounded-full opacity-40 group-hover:w-24 group-hover:opacity-100 transition-all duration-500" />
                                        <span className="gradient-text leading-none">{skill}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative shrink-0"
                        >
                            <div className="relative w-64 md:w-96 lg:w-112">
                                {/* Ambient glow behind image */}
                                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-75" />
                                <div className="hexagon-container">
                                    <div className="hexagon-border" />
                                    <div className="hexagon-content">
                                        <img
                                            src="/profile.png"
                                            alt="Alex Eisenach"
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section: Intro Text and Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <div className="space-y-12 mb-24"> {/* Increased space between paragraphs */}
                            <p className="text-xl md:text-3xl text-text-muted leading-relaxed font-light">
                                I'm Alex Eisenach, a do-it-all software engineer with experience developing high and low level software in large-scale, high-volume systems.
                            </p>
                            <p className="text-xl md:text-3xl text-text-muted leading-relaxed font-light italic opacity-90">
                                I thrive on tackling complex engineering challenges and delivering sleek, performant applications.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-16"> {/* Increased gap before contact link */}
                            <div className="flex flex-wrap items-center justify-center gap-8">
                                <a href="#about" className="px-8 py-4 rounded-full gradient-bg text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                    About
                                </a>
                                <a href="#experience" className="px-8 py-4 rounded-full gradient-bg text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                    Experience
                                </a>
                                <a href="#projects" className="px-8 py-4 rounded-full gradient-bg text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                    Projects
                                </a>
                                <a href="#certifications" className="px-8 py-4 rounded-full gradient-bg text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                                    Certifications
                                </a>
                            </div>
                            <div className="pt-8">
                                <a href="#contact" className="px-12 py-5 rounded-full glass border-white/10 text-white font-bold text-xl hover:bg-white/10 transition-all">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
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
