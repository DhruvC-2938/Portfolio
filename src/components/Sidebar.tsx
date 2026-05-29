import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    Home,
    User,
    Wrench,
    FolderGit2,
    Github,
    Mail,
} from 'lucide-react';

const links = [
    { icon: Home, id: 'hero', label: 'Home' },
    { icon: User, id: 'about', label: 'About' },
    { icon: Wrench, id: 'skills', label: 'Skills' },
    { icon: FolderGit2, id: 'projects', label: 'Projects' },
    { icon: Github, id: 'github', label: 'GitHub' },
    { icon: Mail, id: 'contact', label: 'Contact' },
];


const Sidebar = () => {
    const [isHero, setIsHero] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsHero(window.scrollY < 700);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">

            {links.map((link, index) => {
                const Icon = link.icon;

                return (
                    <motion.button
                        key={index}
                        onClick={() => scrollToSection(link.id)}
                        whileHover={{
                            scale: 1.15,
                            x: 5,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className={`group relative w-10 h-10 rounded-xl backdrop-blur-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border ${isHero
                                ? 'bg-white/5 border-white/10 text-white'
                                : 'bg-black/5 border-black/10 text-black'
                            }`}
                    >
                        <Icon size={20} />

                        {/* Tooltip */}
                        <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm text-white bg-black/90 backdrop-blur-xl px-3 py-1 rounded-lg pointer-events-none">
                            {link.label}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
};

export default Sidebar;