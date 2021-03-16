const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#9147ff",
      primaryV: colors.white,
      secondary: "#3b82f6",
      secondaryV: "#53535f",
      light: "#f7f7f8",
      dark: "#292929",
      darkPrimary: colors.white,
      darkPrimaryV: colors.black,
      darkSecondary: "#bfdbfe",
      darkSecondaryV: "#3b82f6",
      darkHeader: "#1f1f1f",
      success: "#22bb33",
      warning: "#ffc107",
      danger: "#dc3545",
      muted: "#6c757d",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      gray: colors.trueGray,
    },
    zIndex: {
      neg20: -20,
      neg10: -10,
      0: 0,
      10: 10,
      20: 20,
      auto: "auto",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  Vs: {
    extend: {},
  },
  plugins: [],
};
