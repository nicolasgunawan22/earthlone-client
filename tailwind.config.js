module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ['Poppins', 'sans-serif'],
      serif: ['"PT Serif"', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
}