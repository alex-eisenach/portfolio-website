import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-bg-darker">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <span className="text-xl font-bold font-heading gradient-text">Alex Eisenach</span>
                    <p className="text-text-muted text-sm mt-2">© 2025 Alex Eisenach. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/alex-eisenach" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/alex-eisenach-08a581224" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:alex.eisenach303@gmail.com" className="text-text-muted hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-text-muted text-sm flex items-center gap-2">
                    Made by <Heart size={14} className="text-red-500 fill-red-500" /> Alex Eisenach
                </div>
            </div>
        </footer>
    );
};

export default Footer;
