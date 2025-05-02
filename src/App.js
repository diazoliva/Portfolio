import HomePage from './pages/Home.js';
import routes from './router.js';
import {setupSmoothScrolling, setupMobileMenu} from './scripts/main.js';
import {initializeLanguage, switchLanguage, setupLanguageDropdowns} from './utils/language.js';
import { initTheme, setupThemeDropdowns } from './utils/theme.js';
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js');
}

// para poder llamarlo desde el HTML
window.switchLanguage = switchLanguage;
const app = document.getElementById('app');

// Actualización en loadPage()
export const loadPage = async () => {
  const path = window.location.pathname;
  const page = routes[path] || HomePage;

  const fadeDuration = 300;

  // Aplicar clase de salida
  app.classList.add('opacity-0', 'transition-opacity', 'duration-300');

  // Esperar animación de salida
  await new Promise(resolve => setTimeout(resolve, fadeDuration));

  // Cambiar el contenido
  app.innerHTML = page();

  // Scroll al top (paso 2, ya lo dejamos aquí)
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setupMobileMenu();
  setupSmoothScrolling();
  initializeLanguage();
  setupLanguageDropdowns();
  initTheme();
  setupThemeDropdowns();

  // Forzar reflujo para que la transición entre
  void app.offsetWidth;

  // Aplicar clase de entrada
  app.classList.remove('opacity-0');
};

// Interceptar clicks en <a data-link>
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-link]');
  if (target) {
    e.preventDefault();
    const href = target.getAttribute('href');
    history.pushState(null, '', href);
    loadPage();
  }
});

// Navegación con botón atrás / adelante
window.addEventListener('popstate', loadPage);

// Carga inicial
loadPage();
