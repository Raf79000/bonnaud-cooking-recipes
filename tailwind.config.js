/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'niagara': {
        '50': '#f1fcf9',
        '100': '#cef9eb',
        '200': '#9df2d8',
        '300': '#65e3c2',
        '400': '#35cca9',
        '500': '#1cb090',
        '600': '#16a085',
        '700': '#147160',
        '800': '#155a4f',
        '900': '#164b42',
        '950': '#062d28',
      },
    },
  },
  plugins: [],
}

