const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        veryperi: {
          '50': '#ebebff',
          '100': '#E7E7FA',
          '200': '#CFD0F6',
          '300': '#B0B1E6',
          '400': '#9192CD',
          '500': '#696AAD',
          '600': '#4C4D94',
          '700': '#34357C',
          '800': '#212264',
          '900': '#141453'
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        custom: '72px'
      }
    },
  },
  plugins: [],
}
