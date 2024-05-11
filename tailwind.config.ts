import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        // light: {
        //   layout: {},
        //   colors: {
        //     primary: "#ffffff",
        //     secondary: "#B8BBC0",
        //     dark: "#141E2E",
        //     red: "#E50045",
        //     green: "#70A75C;",
        //     blue: "#1171FF",
        //   },
        //   backgroundColor: {
        //     white: "#ffffff",
        //     dark: "#141E2E",
        //     secondary: "#37404D",
        //     red: "#E50045",
        //     darkLight: "#1B273A",
        //     darkLighter: "#243042",
        //     green: "#70A75C;",
        //     blue: "#1171FF",
        //   },
        // },
        dark: {
          layout: {},
          colors: {
            primary: "#ffffff",
            secondary: "#073849",
            blue_dark_secondary: "#141E2E",
            // dark: "#141E2E",
            // red: "#FF6C6C",
            // green: "#70A75C",
            navBar: "#0f224a",
            footer: "#0f224a",
            blue_light: "#0061af",
            blue_dark: "#18242e",
            // yellow: "#FFCB05",
            section: "#31445a"
          },
          // backgroundColor: {
          //   white: "#ffffff",
          //   dark: "#141E2E",
          //   secondary: "#37404D",
          //   red: "#E50045",
          //   darkLight: "#1B273A",
          //   darkLighter: "#243042",
          //   green: "#70A75C;",
          //   blue: "#1171FF",
          // },
        },
      },
    }),
  ],
};
export default config;
