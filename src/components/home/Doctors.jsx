import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Award } from 'lucide-react';

const doctors = [
    {
        name: 'Dr. Sarah Johnson',
        role: 'Chief Dentist & Surgeon',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
        experience: '15 Years',
        specialty: 'Implantology',
        awards: ['Best Surgeon 2023', 'Top Dentist']
    },
    {
        name: 'Dr. Michael Chen',
        role: 'Orthodontist',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
        experience: '12 Years',
        specialty: 'Orthodontics',
        awards: ['Invisalign Diamond Provider']
    },
    {
        name: 'Dr. Emily Williams',
        role: 'Pediatric Specialist',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
        experience: '8 Years',
        specialty: 'Pediatric Dentistry',
        awards: ['Kids Choice Award']
    }
];

const Doctors = () => {
    return (
        <section id="doctors" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    subtitle="Our Team"
                    title="Meet Our Specialists"
                    description="Highly qualified professionals dedicated to delivering the best dental care."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"
                            tabIndex={0}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors"><Facebook size={18} /></a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors"><Twitter size={18} /></a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors"><Linkedin size={18} /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                                <p className="text-primary-600 font-medium mb-4">{doctor.role}</p>

                                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                                    <div className="text-center border-r border-gray-100">
                                        <span className="block text-gray-400 text-xs uppercase tracking-wider">Experience</span>
                                        <span className="block font-semibold text-gray-800">{doctor.experience}</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-gray-400 text-xs uppercase tracking-wider">Focus</span>
                                        <span className="block font-semibold text-gray-800">{doctor.specialty}</span>
                                    </div>
                                </div>

                                {doctor.awards.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500">
                                        <Award size={16} className="text-accent-gold" />
                                        <span>{doctor.awards[0]}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
