import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/api/projects');
                // Map images to project ids (mocking static local images)
                const imageMap = {
                    1: '/projects/bondi.png',
                    2: '/projects/domovoi.png',
                    3: '/projects/graffiti.png',
                    4: '/projects/monatelier.png'
                };
                const projectsWithImages = response.data.map(p => ({
                    ...p,
                    image: imageMap[p.id] || 'https://via.placeholder.com/600x400'
                }));
                setProjects(projectsWithImages);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <div className="text-center py-20">Loading Projects...</div>;

    return (
        <section id="projects" className="bg-bg-dark">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 font-heading">Independent Projects</h2>
                    <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass overflow-hidden group hover:-translate-y-2 transition-all duration-300 border-white/5"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-darker to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl text-main font-bold mb-2">{project.title}</h3>
                                <p className="text-text-muted text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-semibold tracking-wider uppercase text-sharp gradient-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
