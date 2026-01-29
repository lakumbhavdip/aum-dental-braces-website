import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598256989494-026345177091?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop'
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    subtitle="Our Clinic"
                    title="See Our World-Class Facility"
                    description="Take a visual tour of our modern, comfortable, and hygienic clinic environment."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className={`relative rounded-2xl overflow-hidden shadow-md group cursor-pointer ${i === 0 || i === 4 ? 'md:col-span-2 md:row-span-2 h-full' : 'col-span-1 row-span-1'
                                }`}
                            tabIndex={0}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${i}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white border border-white px-4 py-2 rounded-full uppercase text-xs tracking-wider font-bold">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
