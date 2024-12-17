/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: {
          DEFAULT: "#8FA984",
          100: "#e9eee6",
          200: "#d2ddce",
          300: "#bccbb5",
          400: "#a5ba9d",
          500: "#8fa984",
          600: "#72876a",
          700: "#56654f",
          800: "#394435",
          900: "#1d221a"
        },
        customGreenDark: {
          DEFAULT: "#5c7457",
          100: "#dee3dd",
          200: "#bec7bc",
          300: "#9dac9a",
          400: "#7d9079",
          500: "#5c7457",
          600: "#4a5d46",
          700: "#374634",
          800: "#252e23",
          900: "#121711"
        },

        customBg: "#F7F9FA",
        customBgDark: {
          DEFAULT: "#2c2c2c",
          100: "#d5d5d5",
          200: "#ababab",
          300: "#808080",
          400: "#565656",
          500: "#2c2c2c",
          600: "#232323",
          700: "#1a1a1a",
          800: "#121212",
          900: "#090909"
        },
        whiteFont: {
          DEFAULT: "#F7F9FA",
          100: "#fdfefe",
          200: "#fcfdfd",
          300: "#fafbfc",
          400: "#f9fafb",
          500: "#f7f9fa",
          600: "#c6c7c8",
          700: "#949596",
          800: "#636464",
          900: "#313232"
        },
        customDarkBlue: {
          DEFAULT: "#292F36"
        },
        customDarkBlueDark: {
          DEFAULT: "#0A0F1D "
        }
      },
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        body: ["Nunito", "sans-serif"],
        other: ["Amatic SC", "cursive"]
      },
      height: {
        90: "22.5rem"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      container: {
        center: true,
        padding: "1rem"
      },
      scale: {
        ...require("tailwindcss/defaultTheme").scale,
        115: "1.15",
        175: "1.75",
        200: "2",
        300: "3"
      },
      animation: {
        zoom: "zoom 0.6s ease-in-out",
        fadeInScale: "fadeInScale 0.5s ease-out forwards",
        appear: "fadeIn 0.5s ease-out forwards"
      },
      keyframes: {
        zoom: {
          from: {
            transform: "scale(0)"
          },
          to: {
            transform: "scale(1)"
          }
        },
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
            transformOrigin: "center center"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-motion")]
};
