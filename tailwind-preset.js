module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: ".5rem",
          xs: ".5rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3.5rem",
          "2xl": "6rem",
        },
      },
      borderRadius: {
        xl: "30px",
        xxl: "50px",
      },
      colors: {
        primary: {
          light: "#007bff",
          DEFAULT: "#100f3a",
          dark: "#009eeb",
        },
        secondary: {
          light: "#7a798c",
          DEFAULT: "#838293",
          dark: "#232323",
        },
        accent: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
        success: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
        warning: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      spacing: {
        30: "30px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
        110: "110px",
        120: "120px",
        130: "130px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    // require("daisyui"),
  ],
  // daisyUI config (optional)
  // daisyui: {
  //     styled: true,
  //     themes: true,
  //     themes: [
  //         {
  //             mytheme: {
  //                 primary: "#4B6BFB",
  //                 secondary: "#7B92B2",
  //                 accent: "#67CBA0",
  //                 neutral: "#181A2A",
  //                 "base-100": "#FFFFFF",
  //                 info: "#141c3a",
  //                 success: "#36D399",
  //                 warning: "#fcd34d",
  //                 error: "#ef4444",
  //                 black: "#000",
  //             },
  //         },
  //     ],
  //     base: true,
  //     utils: true,
  //     logs: true,
  //     rtl: false,
  //     prefix: "",
  //     darkTheme: "night",
  // },
};
