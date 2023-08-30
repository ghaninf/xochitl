/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{svg,png,jpg,jpeg,mp4}'
  ],
  purge: {
    content: [
      './src/app/*.js',
      './src/app/**/*.js',
      './src/components/*.js',
      './src/components/**/*.js',
      './src/sections/*.js',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        resolute: ['var(--font-resolute)'],
        version: ['var(--font-version)'],
        appliedSans: ['var(--font-applied-sans)']
      }
    },
  },
  plugins: [],
}
