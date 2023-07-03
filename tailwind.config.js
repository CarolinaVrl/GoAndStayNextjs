/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'background-principal':'#FFFFFF',
        'color-primary':'#202F59',
        'color-secondary':'#5333ED',
        'dark':'#000000',
        'gray-1':'#DDE2E5',
        'gray-2':'#ACB5BD',
        'gray-4':'#495057',
      }
      
    },
  },
  plugins: [],
}
