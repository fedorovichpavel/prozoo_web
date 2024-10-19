import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

const expandArea = plugin(function ({ addUtilities }) {
  const default_ = {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const newUtilities = {
    '.expand-click-area-xs::before': {
      ...default_,
      width: '100%',
      height: '150%',
    },
    '.expand-click-area-xs-w::before': {
      ...default_,
      width: '150%',
      height: '100%',
    },
    '.expand-click-area-s::before': {
      ...default_,
      width: '150%',
      height: '150%',
    },
    '.expand-click-area-s-w::before': {
      ...default_,
      width: '200%',
      height: '150%',
    },
    '.expand-click-area-m::before': {
      ...default_,
      width: '200%',
      height: '200%',
    },
    '.expand-click-area-l::before': {
      ...default_,
      width: '250%',
      height: '250%',
    },
    '.expand-click-area-xl::before': {
      ...default_,
      width: '300%',
      height: '300%',
    }
  }

  addUtilities(newUtilities)
})


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000", // --dark
      "gray-dark": "#343a40",
      "gray-dark2": "#7a9388",
      "gray-dark3": "#646464",
      gray: "#d8e4df", // --gray
      "gray-light": "#eceef2", // --gray
      green: "#00c259", // --green
      green2: "#00c671", // --green
      'green-dark': "#81CF03", // --green
      'green-dark2': "#087616", // --green-dark2
      'green-light': "#ebf6f2", // --green-light
      'green-light2': "#EFF5F3", // --green-light2
      'green-light3': "#00a94d", // --green-light3
      'green-light4': "#dff1e9", // --green-light4
      'green-light5': "#F1F9F6", // --green-light4
      info: "#17a2b8", // --info
      warning: "#ffc107", // --warning
      danger: "#dc3545", // --danger
      light: "#f8f9fa", // --light
      dark: "#343a40", // --dark
    },
    screens: {
      xs: "0px", // --breakpoint-xs
      xsm: "425px", // --breakpoint-sm
      sm: "576px", // --breakpoint-sm
      md: "768px", // --breakpoint-md
      lg: "992px", // --breakpoint-lg
      xl: "1200px", // --breakpoint-xl
      xxl: "1600px", // --breakpoint-xxl
    },
    fontSize: {
      "header-S": [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
      ],
      "header-M": [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      "header-L": [
        "1.5rem",
        {
          lineHeight: "2rem",
          fontWeight: "700",
        },
      ],
      "header-XL": [
        "2rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.031rem",
          fontWeight: "800",
        },
      ],
      "header-XXL": [
        "2.5rem",
        {
          lineHeight: "3rem",
          letterSpacing: "-0.031rem",
          fontWeight: "800",
        },
      ],
      "body-XXXS": ["0.625rem", "1"],
      "body-XXS": ["0.75rem", "1.125rem"],
      "body-XS": ["0.8125rem", "1.25rem"],
      "body-S": ["0.875rem", "1.25rem"],
      "body-M": ["1rem", "1.5rem"],
      "body-MD": ["1.125rem", "1.625rem"],
      "body-L": ["1.25rem", "1.875rem"],
    },
    borderRadius: {
      none: "0",
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      DEFAULT: "1.25rem",
      mdm: "2.5rem",
      lg: "6.25rem",
    },
    extend: {
      borderWidth: {
        DEFAULT: "0.063rem",
      },
      boxShadow: {
        'round': '0 0 15px rgba(0, 0, 0, 0.1)',
        'round-green': 'inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(0, 194, 89, 0.6)',
      },
      inset: {
        unset: "unset",
      },
      spacing: {
        7.5: "1.875rem", // 30px
        12.5: "3.125rem", // 50px
        13: "3.4375rem", // 55px
        15: "3.75rem", // 60px
        25: "6.25rem", // 100px
        27.5: "6.875rem", // 110px
        30: "7.5rem", // 120px
        32.5: "8.125rem", // 130px
        37.5: "9.375rem", // 150px
        45: "11.25rem", // 180px
        50: "12.5rem", // 200px
        55: "13.75rem", // 220px
        65: "16.25rem", // 260px
        66: "16.75rem", // 268px
        68: "17.00rem", // 272px
        88: "22rem", // 352px
        90: "23rem", // 368px
        100: "25rem", // 400px
        104: "26rem", // 416px
        115: "28.75rem", // 460px
        120: "31.25rem", // 500px
        140: "35rem", // 560px
        150: "37.5rem", // 600px
        155: "38.75rem", // 620px
        170: "48rem", // 768px
        200: "50rem", // 800px
        235: "58.75rem", // 940px
        240: "60rem", // 960px
        290: "72.5rem", // 1160px
      },
      zIndex: {
        9999: "9999",
      },
      gridTemplateRows: {
        "main-page": "repeat(4, 50rem)",
      },
      backgroundImage: {
        "gradient-nav": "linear-gradient(90.15deg, #00AF51 21.94%, #9CF905 82.31%)",
        "gradient-button": "linear-gradient(105deg, #01CB5E 28.93%, #9DFA06 83.62%)",
        "gradient-reverse-button": "linear-gradient(255deg, #01CB5E 28.93%, #9DFA06 83.62%)",
      },
    },
  },
  plugins: [expandArea],
};
export default config;
