import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Award } from 'lucide-react';

const doctors = [
    {
        name: 'Dr. Niraj Vaghela',
        role: 'Chief Dentist & Surgeon',
        education: 'M.D.S (Orthodontics)- AIIMS',
        image: '/images/doctors/Dr Niraj Vaghela.png',
        experience: '10 Years',
        specialty: 'Braces and Aligner Specialist',
        awards: ['Former Senior Resident AIIMS']
    },
    {
        name: 'Dr. Priyawati Vaghela',
        role: 'Orthodontist',
        education: 'MDS (Orthodontics)- KGMU',
        image: '/images/doctors/default-female.jpg',
        experience: '7 Years',
        specialty: 'Orthodontics',
        awards: []
    },
    {
        name: 'Dr. Astha Jani',
        role: 'Maxillofacial & Facial Cosmetic Surgeon',
        education: 'MDS OMFS',
        image: '/images/doctors/Dr. Astha Jani.png', // Assuming user uploaded this exact filename
        experience: '7 Years', // Using this field for one fellowship
        specialty: 'Fellowship in Facial plastic surgery & Hair Transplantation', // Using this for the other fellowship
        awards: []
    },
    {
        name: 'Dr. David Miller',
        role: 'Cosmetic Dentist',
        image: '/images/doctors/default-male.jpg',
        experience: '10 Years',
        specialty: 'Aesthetic Dentistry',
        awards: ['Smile Design Expert']
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    className="w-full h-full object-contain bg-gray-100 transition-transform duration-500 group-hover:scale-105"
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
                                <p className="text-sm font-semibold text-gray-700 mb-1">{doctor.education}</p>
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
