import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="glass pt-7 px-7 pb-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 gradient-bg"></div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 font-heading">Get In Touch</h2>
                            <p className="text-text-muted text-lg mb-10">
                                I'm currently looking for a new opportunity. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:alex.eisenach303@gmail.com" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                                        <Mail />
                                    </div>
                                    <span className="font-medium">alex.eisenach303@gmail.com</span>
                                </a>
                                <a href="https://www.linkedin.com/in/alex-eisenach-08a581224" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                                        <Linkedin />
                                    </div>
                                    <span className="font-medium">linkedin.com/in/alex-eisenach</span>
                                </a>
                                <a href="https://github.com/alex-eisenach" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                                        <Github />
                                    </div>
                                    <span className="font-medium">github.com/alex-eisenach</span>
                                </a>
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-primary">Subject</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-white" placeholder="Inquiry about role" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-primary">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none text-white" placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-xl gradient-bg text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
