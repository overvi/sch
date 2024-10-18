/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        colors: "#191C20",
        gray: {
          400: "#73777F",
        },
      },
      maxWidth: {
        container: "78rem",
      },
      backgroundImage: {
        header: "url(/src/assets/images/banner.webp)",
        "header-mobile": "url(/src/assets/images/banner-mobile.webp)",
        action: "url(/src/assets/images/call-to-action.webp)",
        schools: "url(/src/assets/images/schools.webp)",
      },
      screens: {
        md: "765px",
        "mid-lg": "850px",
      },
    },
  },
  plugins: [],
};
