/** @type {import('tailwindcss').Config} */
module.exports = {
    // Modo oscuro bajo la clase `.dark` en <html>
    darkMode: 'class',
    // Dónde buscar tus clases Tailwind
    content: [
      './index.html',
      './App.js',
      './router.js',
      './pages/**/*.js',
      './components/**/*.js',
      './scripts/**/*.js',
      './utils/**/*.js',
      './styles/**/*.css'
    ],
    theme: {
      extend: {
        // Colores extra si los necesitas
        colors: {
          'brand-dark': '#1f2937',
        }
      }
    },
    plugins: []
  }
  