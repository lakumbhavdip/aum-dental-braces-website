import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const SectionTitle = ({
    subtitle,
    title,
    description,
    align = 'center',
    className
}) => {
    return (
        <div className={cn(
            "mb-12 md:mb-16",
            align === 'center' ? 'text-center' : 'text-left',
            className
        )}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block py-1 px-3 rounded-full bg-secondary-50 text-secondary-500 font-bold text-xs uppercase tracking-wider mb-4 border border-secondary-100/50"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className={cn(
                        "text-gray-500 text-lg md:text-xl max-w-2xl",
                        align === 'center' ? 'mx-auto' : ''
                    )}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle;
