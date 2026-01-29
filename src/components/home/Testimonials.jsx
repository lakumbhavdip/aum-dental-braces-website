import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from '../ui/SectionTitle';
import { Quote, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Emily Davis',
        date: '2 weeks ago',
        text: 'I was terrified of the dentist until I visited AumDentalBraces. The team is so gentle and professional. They explained everything clearly and made me feel completely at ease. Highly recommended!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
    },
    {
        name: 'James Wilson',
        date: '1 month ago',
        text: 'Top-notch facility with state-of-the-art equipment. Dr. Johnson did an amazing job with my implants. The recovery was faster than I expected. Thank you for giving me my smile back!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop'
    },
    {
        name: 'Sarah Martinez',
        date: '3 weeks ago',
        text: 'My kids actually look forward to their dental visits now! The pediatric team is wonderful and makes the experience fun. We wouldn\'t go anywhere else.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop'
    },
    {
        name: 'Michael Brown',
        date: '2 days ago',
        text: 'Professional, clean, and efficient. I went in for a cosmetic whitening and the results are stunning. The staff is friendly and organized.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-primary-50 relative overflow-hidden">
            {/* Decors */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-100 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionTitle
                    subtitle="Testimonials"
                    title="What Our Patients Say"
                    description="Read real stories from our satisfied patients about their experiences with us."
                />

                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16"
                >
                    {testimonials.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                                <Quote className="absolute top-8 right-8 text-primary-100 w-12 h-12 group-hover:text-primary-200 transition-colors" />

                                <div className="flex items-center gap-1 mb-6 text-accent-gold">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>

                                <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500 ring-offset-2" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <span className="text-xs text-gray-400 font-medium">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style>{`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            opacity: 1;
            transition: all 0.3s;
          }
          .swiper-pagination-bullet-active {
            background: #0d9488;
            width: 30px;
            border-radius: 99px;
          }
        `}</style>
            </div>
        </section>
    );
};

export default Testimonials;
