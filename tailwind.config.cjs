/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',

      gray: {
        900: '#121214',
        800: '#18181B',
        700: '#202024',
        600: '#2A2634',
        500: '#29292E',
        400: '#323238',
        300: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      cyan: {
        400: '#AAE6FB',
        500: '#81D8F7',
      },

      red: {
        500: '#EF4444',
        700: '#AA2834',
      },

      green: {
        300: '#00B37E',
        500: '#00875F',
        700: '#015F43',
      },

      yellow: {
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
      },

      violet: {
        900: '#4C1D95',
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
