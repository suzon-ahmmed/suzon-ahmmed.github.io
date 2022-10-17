/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        // heroAfter: "url('/src/images/hero-after.svg')",
      },
      colors: {
        //dark background for code block
        'primary-header': '#741ce8',
        'heading-text': '#64ffda',
        //socil media icon
        'github': '#171515',
        'linkedin': '#1d66c2',
        'facebook': '#2677f2',
        'twiter': '#2ba1f2',
        'behance': '#2557ff',
        'youtube': '#FF0000',
      },
    },
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '4rem',
      //   lg: '8rem',
      //   xl: '10rem',
      //   '2xl': '14rem',
      // },
    },
  },

  plugins: [require('flowbite/plugin')],
};
