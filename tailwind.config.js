/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%' : { opacity:'0'},
          '100%': { opacity:'1'}
        }
      }
    },
  },
  plugins: [require('daisyui')],
  corePlugins: {
    // Disable the transform and opacity utilities if you don't need them elsewhere
    transform: false,
    opacity: false,
  },
}
