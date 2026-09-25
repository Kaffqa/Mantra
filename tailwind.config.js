/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E53935",
          blue: "#1E40AF",
          yellow: "#FACC15",
          black: "#1A1A2E",
          bg: "#FAFAFA",
          surface: "#FFFFFF",
        },
        character: {
          pink: "#F48FB1",
          green: "#4DB6AC",
          yellow: "#FFD54F",
          blue: "#5C6BC0",
          purple: "#B39DDB",
        },
      },
      fontFamily: {
        sans: ["Manrope_400Regular", "System"],
        medium: ["Manrope_500Medium", "System"],
        semibold: ["Manrope_600SemiBold", "System"],
        bold: ["Manrope_700Bold", "System"],
        extrabold: ["Manrope_800ExtraBold", "System"],
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        brutal: "4px 4px 0px #1A1A2E",
        "brutal-sm": "2px 2px 0px #1A1A2E",
        "brutal-lg": "6px 6px 0px #1A1A2E",
      },
    },
  },
  plugins: [],
};
