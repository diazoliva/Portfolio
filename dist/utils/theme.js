const THEME_KEY  = 'theme';              // 'light' | 'dark' | 'system'
const DARK_CLASS = 'dark';
const mq         = window.matchMedia('(prefers-color-scheme: dark)');
const ICONS      = { light: 'fa-sun', dark: 'fa-moon', system: 'fa-desktop' };

/* --- helpers ------------------------------------------------------------ */
function setButtonIcons(theme) {
  document.querySelectorAll('.theme-icon').forEach(icon => {
    icon.className = `fa-solid ${ICONS[theme]} theme-icon text-lg`;
  });
}

export function applyTheme(theme) {
  const prefersDark = mq.matches;
  const isDark      = theme === 'dark' ||
                      (theme === 'system' && prefersDark);

  document.documentElement.classList.toggle(DARK_CLASS, isDark);
  setButtonIcons(theme);
}

/* --- se llama al arrancar la app --------------------------------------- */
export function initTheme() {
  const stored = localStorage.getItem(THEME_KEY) || 'system';
  applyTheme(stored);

  // Si la opción es “Sistema”, reacciona cuando el SO cambie
  mq.addEventListener('change', () => {
    if ((localStorage.getItem(THEME_KEY) || 'system') === 'system') {
      applyTheme('system');
    }
  });
}

/* --- enlaza todos los dropdowns ---------------------------------------- */
export function setupThemeDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll('.theme-dropdown'));
  if (!dropdowns.length) return;

  // Cerrar todos (helper)
  const closeAll = () =>
    dropdowns.forEach(d => d.querySelector('.theme-menu').classList.add('hidden'));

  // Cerrar si se hace clic fuera
  document.addEventListener('click', e => {
    if (!e.target.closest('.theme-dropdown')) closeAll();
  });

  dropdowns.forEach(drop => {
    const btn   = drop.querySelector('.theme-button');
    const menu  = drop.querySelector('.theme-menu');
    const items = drop.querySelectorAll('[data-theme]');
    let   pinned = false;          // ⇢ true cuando el usuario hace clic

    /* ---------- abrir / cerrar ---------- */
    const open  = () => menu.classList.remove('hidden');
    const hide  = () => !pinned && menu.classList.add('hidden');
    const togglePin = () => { pinned = !pinned; if (!pinned) hide(); };
    
    let leaveTimer;
    const scheduleHide = () => { leaveTimer = setTimeout(hide, 240); };
    const cancelHide   = () => clearTimeout(leaveTimer);

    /* -- ① HOVER --------------------------------------------------------- */
    btn.addEventListener('mouseenter', () => { cancelHide(); open(); });
    menu.addEventListener('mouseenter', cancelHide);
    btn.addEventListener('mouseleave', scheduleHide);
    menu.addEventListener('mouseleave', scheduleHide);

    /* -- ② CLICK  (anclar / desanclar) ----------------------------------- */
    btn.addEventListener('click', e => {
      e.stopPropagation();
      togglePin();
      open();            // asegúrate de que esté visible tras el clic
    });

    /* -- ③ selección de tema -------------------------------------------- */
    items.forEach(it =>
      it.addEventListener('click', () => {
        const value = it.dataset.theme;
        localStorage.setItem('theme', value);
        applyTheme(value);
        pinned = false;          // al elegir se desancla
        hide();
      }),
    );
  });

  // Sincroniza iconos iniciales
  setButtonIcons(localStorage.getItem(THEME_KEY) || 'system');
}