import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                D
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none">AumDental<span className="text-primary-500">Braces</span></span>
                                <span className="text-xs tracking-wider uppercase text-gray-400">Specialist Clinic</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Providing top-quality dental care with a gentle touch. Your smile is our top priority.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '#home' },
                                { name: 'About Us', path: '#about' },
                                { name: 'Services', path: '#services' },
                                { name: 'Our Doctors', path: '#doctors' },
                                { name: 'Blog', path: '#blog' },
                                { name: 'Contact', path: '#contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.path} className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                                        <ArrowRight size={14} className="text-primary-500" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Pediatric Dentistry', 'Family Dentistry'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2">
                                        <ArrowRight size={14} className="text-primary-500" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} AumDentalBraces Clinic. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
