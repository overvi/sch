/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
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
        container: "83.5rem",
        "container-tight": "78rem",
      },
      backgroundImage: {
        header: "url(/src/assets/images/background.png)",
        "header-mobile": "url(/src/assets/images/banner-mobile.webp)",
        action: "url(/src/assets/images/call-to-action.webp)",
        schools: "url(/src/assets/images/schools.webp)",
        "banner-content-image":
          "url(/src/assets/images/banner-content-image.png)",
      },
      screens: {
        md: "765px",
        "mid-lg": "850px",
      },
    },
  },
  plugins: [],
};
