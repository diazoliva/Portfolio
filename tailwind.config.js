module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,html}',   // ← Vite empaqueta todo en src
    './src/styles/input.css'     // ✅ si usas @apply en CSS
  ],
  safelist: [
    'fa-sun','fa-moon','fa-desktop','fa-bars','fa-xmark',
    { pattern: /^bg-(yellow|purple|blue|indigo|gray)-(100|800)$/ },
  ],
  theme: { extend: {} },
  plugins: []
};
