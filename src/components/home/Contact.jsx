import React, { useRef, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Mail, MapPin, Phone, Clock, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // ----------------------------------------------------------------------
        // TO GO LIVE:
        // 1. Sign up at https://www.emailjs.com/
        // 2. Create a new Email Service and Template
        // 3. Replace the strings below with your actual Service ID, Template ID, and Public Key
        // 4. Uncomment the emailjs.sendForm block and remove the simulation block
        // ----------------------------------------------------------------------

        const SERVICE_ID = 'service_u71k9t9';
        const TEMPLATE_ID = 'template_3rovdk4';
        const PUBLIC_KEY = 'un10_5OHFfGzQKsDg';

        // --- REAL IMPLEMENTATION ---
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setLoading(false);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                setLoading(false);
                setStatus('error');
                console.error(error.text);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Form */}
                    <div>
                        <SectionTitle
                            subtitle="Contact Us"
                            title="Book Your Visit"
                            align="left"
                            description="We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can."
                        />
                        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-inner">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input required name="first_name" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input required name="last_name" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <input required name="user_email" type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Service Interest</label>
                                <select name="service_interest" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white text-gray-600">
                                    <option>General Dentistry</option>
                                    <option>Cosmetic Dentistry</option>
                                    <option>Orthodontics</option>
                                    <option>Implants</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea required name="message" rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button className="w-full justify-center gap-2" size="lg" disabled={loading}>
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </Button>

                            {/* Success Message */}
                            {status === 'success' && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in shadow-sm border border-green-100">
                                    <CheckCircle size={20} className="text-green-500" />
                                    <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-4 bg-red-50 text-red-700 rounded-xl animate-fade-in border border-red-100">
                                    <p>Something went wrong. Please try again later.</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Info + Map */}
                    <div className="bg-primary-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col h-full justify-between">
                        {/* Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div>
                            <h3 className="text-2xl font-bold mb-2">Clinic Information</h3>
                            <p className="text-primary-100 mb-8">Visit us at our modern facility.</p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={20} className="text-secondary-300" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Location</p>
                                        <p className="text-primary-100">AumDentalBraces Specialist Clinic,<br />Chandkheda, Ahmedabad 382424</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Phone size={20} className="text-secondary-300" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Phone</p>
                                        <p className="text-primary-100">(+91) 83203 12500</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail size={20} className="text-secondary-300" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-primary-100">contact@aumdentalbraces.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Clock size={20} className="text-secondary-300" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Working Hours</p>
                                        <p className="text-primary-100">Mon - Fri: 8:00 AM - 7:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8 rounded-xl overflow-hidden h-48 bg-gray-800 border border-white/10 shadow-lg">
                            <iframe
                                title="map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chandkheda,+Ahmedabad,+Gujarat,+India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                className="filter hue-rotate-180 invert brightness-90 contrast-125"
                            ></iframe>
                        </div>
                        {/* Note: I added filter to map to make it look 'dark mode' consistent with the card, or close to it. */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
