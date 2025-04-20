import HomePage from './pages/Home.js';
import routes from './router.js';
import {setupSmoothScrolling, setupMobileMenu, setupLanguageSwitch} from './scripts/main.js';
import {initializeLanguage, switchLanguage} from './utils/language.js';

window.switchLanguage = switchLanguage;

document.title = "Marcos Díaz Oliva - Portfolio";
const app = document.getElementById('app');

const loadCommonStyles = () => {
  const head = document.head;
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = './assets/images/simple_logo.svg';
  favicon.type = 'image/icon type';

  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'true';

  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

  const googleFont = document.createElement('link');
  googleFont.rel = 'stylesheet';
  googleFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap';

  [favicon, preconnect1, preconnect2, fontAwesome, googleFont].forEach(el => head.appendChild(el));
};

// Actualización en loadPage()
export const loadPage = async () => {
  loadCommonStyles();

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
  setupLanguageSwitch();

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
