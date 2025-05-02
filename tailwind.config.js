module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,html}',
    './src/styles/input.css'
  ],
  safelist: [
    'fa-sun','fa-moon','fa-desktop','fa-bars','fa-xmark',
    { pattern: /^bg-(yellow|purple|blue|indigo|gray)-(100|800)$/ },
  ],
  theme: { extend: {} },
  plugins: []
};
