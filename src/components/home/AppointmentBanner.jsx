import React from 'react';
import Button from '../ui/Button';
import { CalendarCheck } from 'lucide-react';

const AppointmentBanner = () => {
    return (
        <section id="appointment" className="py-16 bg-primary-600 relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Smile?</h2>
                    <p className="text-primary-100 text-lg max-w-xl">
                        Book your appointment today and take the first step towards a healthier, brighter smile.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Button variant="accent" size="lg" className="shadow-xl shadow-primary-900/20 gap-2" onClick={() => {
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
                        <CalendarCheck size={20} />
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;
