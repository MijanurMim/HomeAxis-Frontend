/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "background-color": "#EEEEEE",
      },
      spacing: {
        126: "26rem",
        130: "30rem",
        133: "32rem",
        144: "60rem",
        333: "100rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
