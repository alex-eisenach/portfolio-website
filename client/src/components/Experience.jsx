import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Star, Settings, Rocket } from 'lucide-react';
import axios from 'axios';

const Experience = () => {
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get('/api/experience');
                setExperience(response.data);
            } catch (error) {
                console.error('Error fetching experience:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchExperience();
    }, []);

    if (loading) return null;

    return (
        <section id="experience">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 font-heading">Professional Experience</h2>
                    <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="glass pt-7 px-7 pb-10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex flex-col md:flex-col md:items-baseline justify-between gap-4 mb-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-3">{job.role}</h3>
                                    <div className="flex flex-wrap flex-col gap-x-6 gap-y-3 text-primary font-bold">
                                        <div className="flex items-center gap-1.5 underline decoration-primary/30 underline-offset-4">
                                            {job.company}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-text-muted font-medium">
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-text-muted font-medium">
                                            {job.period}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-24">
                                {/* Leadership & Impact */}
                                <div>
                                    <div className="flex items-center gap-2 mb-8 text-primary uppercase tracking-widest font-black text-s">
                                        <Star size={14} /> Leadership & Impact
                                    </div>
                                    <ul className="space-y-4">
                                        {job.leadership.map((lead, i) => (
                                            <li key={i} className="flex items-start gap-4 group/lead bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-all hover:bg-white/5">
                                                <div className="mt-1 text-primary shrink-0 group-hover/lead:scale-110 transition-transform">
                                                    <ChevronRight size={18} fill="currentColor" fillOpacity="0.2" />
                                                </div>
                                                <p className="text-text-muted leading-relaxed italic">{lead}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Core Responsibilities */}
                                <div>
                                    <div className="flex items-center gap-2 mb-8 text-secondary uppercase tracking-widest font-black text-s">
                                        <Settings size={14} /> Core Responsibilities
                                    </div>
                                    <ul className="space-y-4">
                                        {job.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-4 group/item bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-all hover:bg-white/5">
                                                <div className="mt-1 text-secondary shrink-0 group-hover/item:translate-x-1 transition-transform">
                                                    <ChevronRight size={18} />
                                                </div>
                                                <p className="text-text-muted leading-relaxed">{resp}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Delivered Projects */}
                                <div>
                                    <div className="flex items-center gap-2 mb-8 text-accent uppercase tracking-widest font-black text-s">
                                        <Rocket size={14} /> Delivered Projects
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {job.projects.map((project, i) => (
                                            <div key={i} className="p-5 bg-white/5 rounded-xl border border-white/5 hover:border-accent/20 transition-all hover:-translate-y-1">
                                                <p className="text-sm text-text-muted leading-relaxed">{project}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
