import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop',
        title: 'Creating Healthy Smiles for Life',
        subtitle: 'Experience world-class dental care in a relaxing environment.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
        title: 'Advanced Dental Technology',
        subtitle: 'State-of-the-art equipment for precise and painless treatments.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop',
        title: 'Expert Care You Can Trust',
        subtitle: 'Our team of specialists is dedicated to your oral health.',
    }
];

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    // Using global css for bullet customization usually
                }}
                loop={true}
                className="h-full w-full hero-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full w-full">
                        {/* Background Image with Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-3xl text-white pt-20"
                            >
                                <div className="inline-block px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-200 font-bold tracking-wider text-xs md:text-sm mb-6 uppercase">
                                    Welcome to AumDentalBraces
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight drop-shadow-sm">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-xl">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="shadow-xl shadow-primary-900/20 min-w-[180px]" onClick={() => {
                                        const el = document.getElementById('contact');
                                        if (el) {
                                            const headerOffset = 85;
                                            const elementPosition = el.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: "smooth"
                                            });
                                        }
                                    }}>
                                        Book Appointment
                                    </Button>
                                    <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary-900 hover:border-white min-w-[180px]" onClick={() => {
                                        const el = document.getElementById('contact');
                                        if (el) {
                                            const headerOffset = 85;
                                            const elementPosition = el.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: "smooth"
                                            });
                                        }
                                    }}>
                                        Contact Us
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s;
        }
        .hero-swiper .swiper-pagination-bullet-active {
            width: 30px;
            border-radius: 99px;
            background: #2dd4bf; 
        }
      `}</style>
        </section>
    );
};

export default Hero;
