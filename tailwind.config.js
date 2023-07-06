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
        'app-background-principal':'#FFFFFF',
        'app-color-primary':'#202F59',
        'app-color-secondary':'#5333ED',
        'app-dark':'#000000',
        'app-gray-1':'#DDE2E5',
        'app-gray-2':'#ACB5BD',
        'app-gray-4':'#495057',
      }
      
    },
  },
  plugins: [],
}
