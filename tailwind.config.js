/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "#F6F7FB",
      dark: "#1A1E2C",
      gray: "#8E94A7",
      typographyBody: "#5D606B",
      lightGray: "#E7E9F0",
      stroke: "#EBEBF9",
      stroke1: "#EBD7D7",
      white: "#FFFFFF",
      green: "#00D555",
      blue: "#0346F2",
      orange: "#F2994A",
      lightBlue: "#04C3FF",
    },
  },
  plugins: [],
};
