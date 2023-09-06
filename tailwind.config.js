/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx,mp4}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,mp4}',
    './src/app/assets/**/*.{svg,png,jpg,jpeg,mp4}'
  ],
  purge: {
    content: [
      './src/app/*.js',
      './src/app/**/*.js',
      './src/components/*.js',
      './src/components/**/*.js',
      './src/sections/*.js',
      './public/*'
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        resolute: ['var(--font-resolute)'],
        version: ['var(--font-version)'],
        appliedSans: ['var(--font-applied-sans)']
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      }
    },
  },
  plugins: [],
}
