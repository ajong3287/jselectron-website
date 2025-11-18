import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Zenith-inspired Dark Theme Color Palette
        'primary-blue': '#184292',   // Zenith brand blue
        'dark-bg': '#0A0E1A',        // Deep dark background
        'dark-section': '#1A1F2E',   // Section background
        'dark-text': '#E5E7EB',      // Light text on dark
        'light-text': '#9CA3AF',     // Secondary text
        'accent-blue': '#3B82F6',    // Bright accent blue
        'gradient-start': '#1E3A8A', // Gradient start (dark blue)
        'gradient-end': '#3B82F6',   // Gradient end (bright blue)
      },
      fontFamily: {
        sans: ['Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #0A0E1A 0%, #1A1F2E 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
