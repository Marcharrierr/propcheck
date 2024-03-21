/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-primary-propcheck": "#172E5E",
        "blue-nav": "#102E6E",
        "blue-text": "#2455BE",
        "Property-debt": "#762222",
        "blue-footer": "#1D2B49",
        "blue-tittle": "#102E6F",
      },
      maxWidth: {
        'cardList': '1000px',
        'maxcards': '1300px',
        'textproperty': '250px',
        'wReport': '1400px',
        },
      minWidth: {
        'lg': '50px',
        '350px': '250px',
        '400px': '300px',
        '320px': '290px',
        '800px': '620px',
        'search': '10px',
        'cardList': '1200px',
        'icon': '30px',
        "wcardReport": '300px',
        'list': '1000px',
        'propertiesList': '410px',
        'mincardmetrics': '1100px',
        'mincardmetricsMs': '450px'
      },
      Width: {
        '400px': '300px',
      },
      minHeight: {
        'lg': '220px',
        'lg-500': '200px',
        'icon': '15px',
      },
      screens: {
        'sm': '640px', // pantalla pequeña
        'md': '768px', // pantalla mediana
        'lg': '1024px', // pantalla grande
        'xl': '1280px', // pantalla extra grande
      },
      display: {
        'none-sm': 'none', // Oculta en pantallas pequeñas
        'block-md': 'block', // Muestra en pantallas medianas
      },
      borderRadius: {
        'large': '40px', // Redondeo de 30px
      },

    },
  },
  plugins: [],
}
