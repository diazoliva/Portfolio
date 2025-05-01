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
  const checkbox = document.getElementById('theme-toggle');
  if (!checkbox) return;
  // Inicializa estado del checkbox según el tema actual
  checkbox.checked = document.documentElement.classList.contains(DARK_CLASS);
  // Cuando cambie, llama a toggleDarkMode
  checkbox.addEventListener('change', toggleDarkMode);
}
