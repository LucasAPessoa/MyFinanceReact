/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //Theme colors
        background: "rgba(var(--background))",
        text: "rgba(var(--text))",
        title: "rgba(var(--title))",
        navBarShadow: "rgba(var(--navBarShadow))",
      },
    },
  },
  plugins: [],
};
