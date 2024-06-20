/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px",
    "3xl": "1920px",
    "4xl": "2560px",
    "5xl": "3200px",
    "6xl": "3840px",
  },
  extend: {
    fontFamily: {
      'arial': ["Arial", "serif"],
    },
  },
};
export const plugins = [];

