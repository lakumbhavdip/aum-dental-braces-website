import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Services', path: '#services' },
        { name: 'Doctors', path: '#doctors' },
        { name: 'Testimonials', path: '#testimonials' },
        { name: 'Gallery', path: '#gallery' },
        { name: 'Blog', path: '#blog' },
        { name: 'Contact', path: '#contact' },
    ];

    const handleScroll = (e, path) => {
        e.preventDefault();
        setIsOpen(false);
        setTimeout(() => {
            const element = document.getElementById(path.replace('#', ''));
            if (element) {
                const headerOffset = 85;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 100);
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
                    : 'bg-white md:bg-transparent py-3 md:py-6'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
                        D
                    </div>
                    <div className="flex flex-col">
                        <span className={cn("text-xl font-bold leading-none tracking-tight",
                            scrolled ? "text-gray-900" : "text-gray-900 md:text-white"
                        )}>
                            AumDental<span className="text-primary-500">Braces</span>
                        </span>
                        <span className={cn("text-[10px] tracking-[0.2em] uppercase font-medium mt-1",
                            scrolled ? "text-gray-500" : "text-gray-500 md:text-white/80"
                        )}>
                            Specialist Clinic
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-1 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group",
                                    scrolled
                                        ? "text-gray-600 hover:text-primary-600"
                                        : "text-white/90 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 pl-4 border-l border-gray-200/20">
                        <a href="tel:+1234567890" className={cn("flex items-center gap-2 text-sm font-bold tracking-wide group", scrolled ? "text-gray-700" : "text-white")}>
                            <div className="w-8 h-8 rounded-full bg-primary-100/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all">
                                <Phone size={16} />
                            </div>
                            <span>(+91) 83203 12500</span>
                        </a>
                        <Button variant={scrolled ? "primary" : "accent"} size="md" className="gap-2 shadow-xl shadow-accent-gold/20" onClick={() => document.getElementById('contact').scrollIntoView()}>
                            <Calendar size={18} />
                            Book Now
                        </Button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden absolute w-full left-0 top-full shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-lg font-medium text-gray-600 py-3 px-4 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                    onClick={(e) => handleScroll(e, link.path)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-gray-100 my-2" />
                            <a href="tel:+1234567890" className="flex items-center gap-3 text-lg font-medium text-gray-800 py-3 px-4">
                                <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                (+91) 83203 12500
                            </a>
                            <div className="pt-2">
                                <Button className="w-full justify-center gap-2" onClick={(e) => handleScroll(e, '#contact')}>
                                    <Calendar size={20} />
                                    Book Appointment
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
