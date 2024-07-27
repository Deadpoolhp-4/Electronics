/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 4px 1px 1px rgba(0.3, 0.4, 0.3, 0.2)',
        'custom-hover': '0px 6px 3px 2px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'custom-bg': 'whitesmoke',
        'custom-arrow-bg': '#0A496C',
      },
      borderRadius: {
        // 'custom': '30px',
        // 'full': '50%',
      },
      fontSize: {
        'custom': '1rem',
        'arrow': '25px',
      },
    },
  },
  plugins: [],
}