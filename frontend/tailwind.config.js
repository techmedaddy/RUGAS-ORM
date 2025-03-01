/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo-600
        secondary: "#1E293B", // Slate-800
        accent: "#F59E0B", // Amber-500
        background: "#F8FAFC", // Light background
        foreground: "#1F2937", // Dark text
      },
    },
  },
  plugins: [],
};
