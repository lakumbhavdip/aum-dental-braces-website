import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Smile, Heart, Users, Anchor } from 'lucide-react';

const services = [
    {
        icon: Stethoscope,
        title: 'General Dentistry',
        description: 'Routine check-ups, cleanings, and preventive care to maintain optimal oral health.'
    },
    {
        icon: Sparkles,
        title: 'Cosmetic Dentistry',
        description: 'Transform your smile with whitening, veneers, and bonding tailored to you.'
    },
    {
        icon: Smile,
        title: 'Orthodontics',
        description: 'Modern braces and clear aligners to straighten teeth and correct bite issues effectively.'
    },
    {
        icon: Anchor,
        title: 'Dental Implants',
        description: 'Permanent, natural-looking replacements for missing teeth that restore function.'
    },
    {
        icon: Heart,
        title: 'Pediatric Dentistry',
        description: 'Gentle, compassionate, and fun dental care focused on children of all ages.'
    },
    {
        icon: Users,
        title: 'Family Dentistry',
        description: 'Comprehensive oral care services for your entire family under one convenient roof.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    subtitle="Our Expertise"
                    title="Comprehensive Dental Services"
                    description="We offer a full range of dental treatments using the latest technology to ensure your comfort and results."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            tabIndex={0}
                            id={service.title.toLowerCase().replace(/\s+/g, '-')}
                        >
                            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white group-focus:bg-primary-600 group-focus:text-white transition-colors">
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 group-focus:text-primary-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
