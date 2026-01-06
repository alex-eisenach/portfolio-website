import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const Certifications = () => {
    const [certs, setCerts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCerts = async () => {
            try {
                const response = await axios.get('/api/certifications');
                setCerts(response.data);
            } catch (error) {
                console.error('Error fetching certs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCerts();
    }, []);

    return (
        <section id="certifications" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 font-heading">Professional Certifications</h2>
                    <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {loading ? (
                        <div className="text-center">Loading...</div>
                    ) : (
                        certs.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative group overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full gradient-bg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-40 h-24 md:h-20 object-contain"
                                        style={{
                                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                            WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                        }}
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2 text-primary">
                                        <h3 className="text-xl font-bold">{cert.name}</h3>
                                    </div>
                                    <p className="text-secondary font-semibold text-sm mb-3 flex items-center gap-2">
                                        <CheckCircle2 size={14} /> Issued by {cert.issuer}
                                    </p>
                                    <p className="text-text-muted leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
