/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',  // Ultra Light Blue
                    100: '#dbeafe', // Pale Blue
                    200: '#bfdbfe', // Water Blue
                    300: '#93c5fd', // Light Blue
                    400: '#60a5fa', // Soft Blue
                    500: '#3b82f6', // Standard Blue
                    600: '#2563eb', // Royal Blue (Primary Action)
                    700: '#1d4ed8', // Deep Blue
                    800: '#1e40af', // Dark Blue
                    900: '#1e3a8a', // Navy Blue
                    950: '#172554', // Darkest Navy (Footer/Header)
                },
                secondary: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280', // Cool Gray
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827', // Almost Black
                },
                accent: {
                    gold: '#f59e0b', // Slightly warmer amber/gold
                    blue: '#2563eb', // Matches primary-600
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
