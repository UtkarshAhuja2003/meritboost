import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:"#696969",
        bg: '#F1EDFD',
        bgalt:"#CED0C8",
        text:"#131118",
        textalt:"5C7F76"
      },
      fontFamily:{
        'font':"Ubuntu"
      }
    }
  },
  plugins: [],
}
export default config

