/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.{html,js}",], /*./src/**.{html,js}*/
  theme: {
    colors:{
        'uniblue':'#7D9AAA',
    },

    extend: {
      fontFamily: {
        mono: ['Inter var'],
    },
    extend: {
         keyframes: {
           fadeIn: {
             "0%": { opacity: 0 },
             "100%": { opacity: 100 },
           },
         },
         animation: {
           fadeIn: "fadeIn 0.2s ease-in-out forwards",
         },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
  }
}
