/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/js/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        // heroAfter: "url('/src/images/hero-after.svg')",
        beforeImg: "url('/src/images/r-a.svg')",

      },
      colors: {
        primaryBg: "#0a192f",
        //dark background for code block
        "primary-header": "#741ce8",
        //socil media icon
        github: "#171515",
        linkedin: "#1d66c2",
        facebook: "#2677f2",
        twiter: "#2ba1f2",
        behance: "#2557ff",
        youtube: "#FF0000",
      },
      fontFamily: {
        // fontAwesome: ["Font Awesome 6 Free", "Font Awesome 6 Brands"],
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

  // plugins: [require("flowbite/plugin")],
};
