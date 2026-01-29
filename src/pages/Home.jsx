import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Doctors from '../components/home/Doctors';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';
import AppointmentBanner from '../components/home/AppointmentBanner';

const Home = () => {
    return (
        <main className="w-full overflow-hidden">
            <Hero />
            <Services />
            <About />
            <Doctors />
            <AppointmentBanner />
            <Gallery />
            <Testimonials />
            <Blog />
            <Contact />
        </main>
    );
};

export default Home;
