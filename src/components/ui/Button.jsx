import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}, ref) => {
    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30',
        secondary: 'bg-white text-primary-700 border-2 border-primary-100 hover:border-primary-600 hover:bg-primary-50',
        accent: 'bg-accent-gold text-white hover:bg-yellow-500 shadow-lg hover:shadow-yellow-500/30',
        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-primary-600',
        white: 'bg-white text-primary-700 hover:bg-gray-100 shadow-md'
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-12 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10 p-2 flex items-center justify-center'
    };

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
