/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: "#4f46e5",
        Emerald: "#10b981",
        Tealt: "#115e59",
        Amber: "#fffbeb",
        Cyan: "#0e7490",
        Teal: "#0f766e",
        Teall: "#f0fdfa",
      },
    },
  },
  plugins: [],
};
