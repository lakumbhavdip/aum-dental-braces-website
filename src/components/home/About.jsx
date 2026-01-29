import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative z-10"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
                                alt="Dental Team"
                                className="w-full object-cover h-[400px] md:h-[500px] lg:h-[600px] transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-100 rounded-full blur-3xl -z-10 opacity-50" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl -z-10 opacity-50" />

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 right-6 md:bottom-10 md:-right-6 bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 max-w-xs z-20 hidden sm:block border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold">
                                    <span className="font-bold text-xl">15+</span>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 leading-tight">Years<br />Experience</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                    <span className="font-bold text-xl">5k+</span>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 leading-tight">Happy<br />Patients</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <SectionTitle
                            subtitle="About Our Clinic"
                            title="We Care For Your Smile Like It's Our Own"
                            align="left"
                            className="mb-8"
                        />
                        <p className="text-gray-500 text-lg leading-relaxed mb-6">
                            Founded in 2010, AumDentalBraces has been at the forefront of dental excellence. We believe in a holistic approach to dentistry, considering not just your teeth, but your overall well-being.
                        </p>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Our clinic is designed to provide a calm, stress-free environment where you can feel at ease. Utilizing the latest technology from 3D imaging to laser dentistry, we ensure precise diagnoses and effective, painless treatments.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {['State-of-the-art Facility', 'Expert Dental Team', 'Emergency Care Available', 'Comfort Amenities'].map((item, i) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-500 flex-shrink-0">
                                        <CheckCircle2 size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>


                    </motion.div>
                </div>
            </div>

            {/* Background Pattern */}
            <svg className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-[0.03] pointer-events-none text-primary-900 w-[800px] h-[800px]" fill="currentColor" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" /></svg>
        </section>
    )
}

export default About;
