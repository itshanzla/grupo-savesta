/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#111827', // Gray 900
          secondary: '#1f2937', // Gray 800
        },
        charcoal: '#374151', // Gray 700
        slate: '#6b7280', // Gray 500
        accent: '#10b981', // Emerald 500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
