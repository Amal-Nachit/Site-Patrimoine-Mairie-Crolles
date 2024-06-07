/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px",
  },
  extend: {
    fontFamily: {
      'arial': ["Arial", "serif"],
    },
  },
};
export const plugins = [];

