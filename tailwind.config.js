/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        slab: ['"Roboto Slab"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      colors: (theme) => ({
        "university-green": "#33691E",
        "soft-gray": "#D8D3D3",
        gray: "#A8A3A3",
      }),
    },
  },
  plugins: [],
};
