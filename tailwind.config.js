/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Navy Base (for text, backgrounds)
        'navy': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b2c2db',
          300: '#8ba1ca',
          400: '#6481b9',
          500: '#3d60a8',
          600: '#2e4a86',
          700: '#1f3564',
          800: '#0f1f42',
          900: '#050a1a',
        },
        // Vibrant Cyan Accent (primary actions)
        'cyan': {
          50: '#f0fdfd',
          100: '#ccf7f7',
          400: '#06d6d6',
          500: '#00b8c4',
          600: '#0096a1',
        },
        // Electric Purple (secondary accents)
        'electric': {
          100: '#f3e8ff',
          500: '#9d4edd',
          600: '#7209b7',
          700: '#5a189a',
        },
        // Success Green
        'emerald': {
          100: '#d1fae5',
          400: '#2ecc71',
          500: '#27ae60',
          600: '#229954',
        },
        // Warm Orange (highlights)
        'amber': {
          100: '#fef3c7',
          400: '#f39c12',
          500: '#e67e22',
          600: '#d35400',
        },
      },
      backgroundImage: {
        // Premium gradients
        'gradient-primary': 'linear-gradient(135deg, #3d60a8 0%, #00b8c4 100%)',
        'gradient-purple': 'linear-gradient(135deg, #7209b7 0%, #9d4edd 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f1f42 0%, #1f3564 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #f0f4f8 0%, #ffffff 100%)',
        'gradient-glow': 'radial-gradient(circle at 30% 30%, rgba(61, 96, 168, 0.15) 0%, transparent 100%)',
      },
      boxShadow: {
        // Premium shadows (larger, more depth)
        'card-sm': '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-md': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.06)',
        'card-lg': '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08)',
        'card-xl': '0 12px 48px rgba(0, 0, 0, 0.12), 0 6px 24px rgba(0, 0, 0, 0.08)',
        'glow-cyan': '0 0 20px rgba(0, 184, 196, 0.3)',
        'glow-purple': '0 0 20px rgba(114, 9, 183, 0.3)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 184, 196, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 184, 196, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
