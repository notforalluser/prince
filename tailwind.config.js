// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         dmBlue: '#0f5f8b',
//         dmTeal: '#2b9fb3',
//         dmLight: '#f5f6ea',
//         dmCream: '#efefe0',
//       },
//       fontFamily: {
//         lucida: [
//           '"Lucida Sans"',
//           '"Lucida Grande"',
//           '"Lucida Sans Unicode"',
//           'Verdana',
//           'Geneva',
//           'sans-serif'
//         ],
//       },
//     },
//   },
//   plugins: [],
// }



// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body font stack (used most across the site)
        lucida: [
          '"Lucida Sans"',
          '"Lucida Grande"',
          '"Lucida Sans Unicode"',
          'Verdana',
          'Geneva',
          'sans-serif'
        ],
        // Headings font stack (used for large titles, etc.)
        myriad: [
          '"Myriad Pro"',
          '"Myriad Web Pro Regular"',
          '"Lucida Grande"',
          'Geneva',
          '"Trebuchet MS"',
          'sans-serif'
        ],
        // Classic fallback fonts
        times: ['"Times New Roman"', 'Times', 'serif'],
        tahoma: ['Tahoma', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        sm: ['13px', '19px'], // Sets font-size to 13px and line-height to 19px
        md: ['14px', '22px'], // Sets font-size to 14px and line-height to 22px
      },
    },
  },
  plugins: [],
}
