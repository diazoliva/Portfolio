import HomePage from './pages/Home.js';
import routes from './router.js';
import {initializeLanguage, switchLanguage, setupLanguageDropdowns} from './utils/language.js';
import { initTheme, setupThemeDropdowns } from './utils/theme.js';
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js');
}

function setupMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');

  if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenuIcon.src = isOpen
        ? 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/x.svg'
        : 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg';
      mobileMenuIcon.alt = isOpen ? 'Cerrar' : 'Menu';
    });

    // Cerrar menú al hacer clic en una opción
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuIcon.src = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg';
        mobileMenuIcon.alt = 'Menu';
      });
    });
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          e.preventDefault();
          const headerOffset = document.querySelector('nav')?.offsetHeight || 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      } else if (targetId === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // Ajustar scroll-margin-top para secciones
  const navHeight = document.querySelector('nav')?.offsetHeight || 70;
  document.querySelectorAll('section').forEach(section => {
    section.style.scrollMarginTop = `${navHeight}px`;
  });
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
