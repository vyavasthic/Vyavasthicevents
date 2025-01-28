/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // small screens (mobile)
        md: "768px", // medium screens (tablet)
        lg: "1024px", // large screens (laptop)
        xl: "1280px", // extra large screens (desktop)
        custom: "860px", // custom breakpoint for 860px
      },
    },
  },
  plugins: [],
};
