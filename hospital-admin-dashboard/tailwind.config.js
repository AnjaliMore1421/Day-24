/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e293b",
        lightBg: "#f1f5f9",
        darkBg: "#020617",
        card: "#ffffff",
        darkCard: "#0f172a"
      }
    }
  },
  plugins: []
};
