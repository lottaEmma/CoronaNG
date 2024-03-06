/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"], /*./src/**.{html,js}*/
  theme: {
    colors:{
        'uniblue':'#7D9AAA',
    },

    extend: {
      fontFamily: {
        mono: ['Inter var'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}
