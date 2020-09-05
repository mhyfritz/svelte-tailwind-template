const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        current: "currentColor", // tailwindui currently doesn't include this
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
