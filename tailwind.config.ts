import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0A',
          text: '#FAFAFA',
          'text-secondary': '#A1A1AA',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        light: {
          bg: '#FFFFFF',
          'bg-alt': '#F5F5F5',
          text: '#1A1A1A',
          'text-secondary': '#525252',
          border: '#E5E5E5',
        },
        accent: {
          DEFAULT: '#C9A962', // Латунь (проверено на контраст > 4.5:1 с #0A0A0A)
          hover: '#B8954A',
          active: '#A07D3F',
        },
        success: '#22C55E',
        error: '#EF4444',
      },
      fontFamily: {
        heading: ['"Bodoni Moda"', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      borderRadius: {
        none: '0',
        sm: '4px',
      }
    },
  },
  plugins: [],
}
export default config