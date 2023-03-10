/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '360px',
      xs2: '414px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        grayishBlue: 'hsl(233, 8%, 62%)',
        lightGrayishBlue: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        whiteOut: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
