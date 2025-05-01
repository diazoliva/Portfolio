const THEME_KEY = 'theme';
const DARK_CLASS = 'dark';

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

// Aplica el tema al cargar la página
export function initDarkMode() {
  const stored = getStoredTheme();
  const theme = stored || getPreferredTheme();
  document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark');
}

// Alterna entre light / dark y guarda la preferencia
export function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle(DARK_CLASS);
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

// Conecta el checkbox con la función toggleDarkMode
export function setupThemeToggle() {
  // Selecciona todos los toggles (escritorio y móvil)
  const toggles = Array.from(document.querySelectorAll('.theme-toggle'));
  if (!toggles.length) return;

  // Determina el tema inicial
  const isDark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Función para actualizar la apariencia de un toggle
  function updateToggleUI(toggle, darkMode) {
    const knob = toggle.parentElement.querySelector('.toggle-knob');
    knob.classList.toggle('translate-x-8', darkMode);

    const sunIcon = knob.querySelector('.icon-sun');
    const moonIcon = knob.querySelector('.icon-moon');
    sunIcon.style.opacity = darkMode ? '0' : '1';
    moonIcon.style.opacity = darkMode ? '1' : '0';
  }

  // Inicializa cada toggle y le añade el listener
  toggles.forEach(toggle => {
    toggle.checked = isDark;
    updateToggleUI(toggle, isDark);

    toggle.addEventListener('change', () => {
      const darkMode = toggle.checked;

      // Aplica el tema al <html>
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.theme = darkMode ? 'dark' : 'light';

      // Mantén ambos toggles sincronizados
      toggles.forEach(t => {
        t.checked = darkMode;
        updateToggleUI(t, darkMode);
      });
    });
  });
}
