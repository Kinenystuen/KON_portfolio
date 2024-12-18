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
        whiteRgba: "rgba(255,255,255, 0.6)",
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
        secondary: {
          DEFAULT: "#C3BDDD",
          100: "#f3f2f8",
          200: "#e7e5f1",
          300: "#dbd7eb",
          400: "#cfcae4",
          500: "#c3bddd",
          600: "#9c97b1",
          700: "#757185",
          800: "#4e4c58",
          900: "#27262c"
        },
        secondary: {
          DEFAULT: "#a6d3a0",
          100: "#edf6ec",
          200: "#dbedd9",
          300: "#cae5c6",
          400: "#b8dcb3",
          500: "#a6d3a0",
          600: "#85a980",
          700: "#647f60",
          800: "#425440",
          900: "#212a20"
        },
        color3: {
          DEFAULT: "#031926",
          100: "#cdd1d4",
          200: "#9aa3a8",
          300: "#68757d",
          400: "#354751",
          500: "#031926",
          600: "#02141e",
          700: "#020f17",
          800: "#010a0f",
          900: "#010508"
        },

        color4: {
          // dark blue
          DEFAULT: "#6369d1",
          100: "#e0e1f6",
          200: "#c1c3ed",
          300: "#a1a5e3",
          400: "#8287da",
          500: "#6369d1",
          600: "#4f54a7",
          700: "#3b3f7d",
          800: "#282a54",
          900: "#14152a"
        },
        color4: {
          // dark violet
          DEFAULT: "#acacde",
          100: "#eeeef8",
          200: "#dedef2",
          300: "#cdcdeb",
          400: "#bdbde5",
          500: "#acacde",
          600: "#8a8ab2",
          700: "#676785",
          800: "#454559",
          900: "#22222c"
        },
        green: {
          DEFAULT: "#3e885b",
          100: "#d8e7de",
          200: "#b2cfbd",
          300: "#8bb89d",
          400: "#65a07c",
          500: "#3e885b",
          600: "#326d49",
          700: "#255237",
          800: "#193624",
          900: "#0c1b12"
        },
        orange: {
          DEFAULT: "#FFA630",
          100: "#ffedd6",
          200: "#ffdbac",
          300: "#ffca83",
          400: "#ffb859",
          500: "#ffa630",
          600: "#cc8526",
          700: "#99641d",
          800: "#664213",
          900: "#33210a"
        },
        customGreen: {
          DEFAULT: "#136f63",
          100: "#d0e2e0",
          200: "#a1c5c1",
          300: "#71a9a1",
          400: "#428c82",
          500: "#136f63",
          600: "#0f594f",
          700: "#0b433b",
          800: "#082c28",
          900: "#041614"
        },
        secondary: {
          DEFAULT: "#C3BDDD",
          100: "#f1f8fc",
          200: "#e4f2f9",
          300: "#d6ebf6",
          400: "#c9e5f3",
          500: "#bbdef0",
          600: "#96b2c0",
          700: "#708590",
          800: "#4b5960",
          900: "#252c30"
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
      fontSize: {
        "6xl": "10rem"
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
