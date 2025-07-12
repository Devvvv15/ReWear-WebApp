/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // ✅ For App Router
    "./pages/**/*.{js,ts,jsx,tsx}",   // (If Pages folder exists)
    "./components/**/*.{js,ts,jsx,tsx}", // (If using components folder)
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-6px)" },
          "40%, 80%": { transform: "translateX(6px)" },
        },
      },
    },
  },
  plugins: [],
}
