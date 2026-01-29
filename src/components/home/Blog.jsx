import React from 'react';
import SectionTitle from '../ui/SectionTitle';


const posts = [
    {
        title: 'Tips for a Brighter Smile',
        excerpt: 'Discover simple daily habits that can maintain your teeth whiteness naturally.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
        date: 'Jan 12, 2026',
        category: 'Dental Care'
    },
    {
        title: 'Why Regular Checkups Matter',
        excerpt: 'Preventing big issues starts with routine visits to your dentist. Here is why.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop',
        date: 'Jan 15, 2026',
        category: 'Health'
    },
    {
        title: 'Understanding Dental Implants',
        excerpt: 'Everything you need to know about the permanent solution for missing teeth.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop',
        date: 'Jan 20, 2026',
        category: 'Treatments'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    subtitle="Our Blog"
                    title="Latest News & Advice"
                    description="Stay informed with expert advice on maintaining your oral health."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group" tabIndex={0}>
                            <div className="relative h-56 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-primary-600 uppercase tracking-wider">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-400 text-sm mb-3">{post.date}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 group-focus:text-primary-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Blog;
