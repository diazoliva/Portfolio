export function setupMobileMenu() {
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

export function setupLanguageSwitch() {
  document.querySelectorAll('[data-lang-switch]').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang-switch');
      switchLanguage(lang);
    });
  });
}

export function setupSmoothScrolling() {
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