import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Layout, Terminal, Github, Brain, BookType } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Languages', icon: <BookType />, list: ['Python', 'C/C++', 'Javascript', 'MATLAB', 'Java'] },
        { name: 'Frontend', icon: <Layout />, list: ['React.js', 'Holoviz Panel', 'QT', 'Material UI', 'Observable Plot'] },
        { name: 'Backend', icon: <Terminal />, list: ['Node.js', 'Express.js', 'MSSQL', 'PostgreSQL', 'MongoDB', 'NGINX'] },
        { name: 'Data', icon: <Database />, list: ['JMP', 'Spark', 'NumPy', 'Pandas', 'Polars', 'RAPIDS'] },
        { name: 'AI/ML', icon: <Brain />, list: ['RAG', 'Stable Diffusion', 'Llama', 'PyTorch', 'TensorFlow', 'HuggingFace'] },
        { name: 'DevOps', icon: <Cpu />, list: ['Git', 'GitHub Actions', 'Docker', 'Argo CD', 'K3s'] },
    ];

    return (
        <section id="about" className="bg-bg-dark">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6 font-heading">About Me</h2>
                        <p className="text-text-muted text-lg mb-6">
                            I'm a software engineer with over 11 years of experience designing and maintaining large-scale distributed systems in high-precision automation environments. My foundation, a BS in Aerospace Engineering and MS in Mechanical Engineering (focused on User-Centered Design), taught me to think in interconnected systems, a skill that's made me exceptionally effective at building resilient, high-performance software.
                        </p>
                        <p className="text-text-muted text-lg mb-8">
                            Outside work, I build tools that solve personal challenges with professional-grade techniques: a locally-run AI image generation pipeline (MonAtelier) optimized for speed on consumer hardware using PyTorch and custom LoRAs; a full-stack MERN application (Golf League Tracker) with cloud deployment; and a Kubernetes-based home network stack (Domovoi) featuring WireGuard, Pi-hole, and ArgoCD. These projects reflect my drive to explore AI, full-stack development, and infrastructure while applying the same discipline I use in mission-critical production systems.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">11+</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider">Years Experience</span>
                            </div>
                            <div className="h-12 w-px bg-white/10 mx-4"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">MS</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider">Mechanical Engineering</span>
                            </div>
                            <div className="h-12 w-px bg-white/10 mx-4"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-bg-darker">BS</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider">Aerospace Engineering</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">4</span>
                                <span className="text-xs text-text-muted uppercase tracking-wider">Certifications</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass pt-7 px-7 pb-10 group hover:border-primary/50 transition-colors"
                            >
                                <div className="flex items-center justify-start gap-3 mb-3">
                                    <div className="text-secondary group-hover:scale-110 transition-transform flex items-center justify-center">
                                        {React.cloneElement(skill.icon, { size: 20 })}
                                    </div>
                                    <h3 className="font-bold text-primary uppercase tracking-wider" style={{ fontSize: '1.05rem' }}>{skill.name}</h3>
                                </div>
                                <ul className="text-xs text-text-muted space-y-2 text-center font-mono font-bold">
                                    {skill.list.map(s => <li key={s} className="flex items-center justify-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div>{s}</li>)}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
