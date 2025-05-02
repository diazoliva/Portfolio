import { translations } from './constants.js';

export function getCurrentLanguage() {
  return localStorage.getItem('lang') || 'es';
}

export function switchLanguage(lang) {
  document.documentElement.lang = lang;
  updateTextElements(lang);
  updatePlaceholders(lang);
  updateLanguageButtons(lang);
  toggleContactForms(lang);
  toggleCVButtons(lang);
  saveLanguagePreference(lang);
  updateMetaDescription(lang);
}

function updateTextElements(lang) {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.dataset.lang;
    if (translations[lang]?.[key]) {
      const iconElement = element.querySelector('.icon');
      const text = translations[lang][key];
      
      if (iconElement && element.firstChild?.nodeType === Node.TEXT_NODE) {
        element.firstChild.nodeValue = text + ' ';
      } else {
        element.textContent = text;
      }
    } else {
      console.warn(`🔍 Traducción no encontrada para: ${key} en [${lang}]`);
    }
  });
}

function updatePlaceholders(lang) {
  document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
    const key = element.dataset.langPlaceholder;
    if (translations[lang]?.[key]) {
      element.placeholder = translations[lang][key];
    }
  });
}

function updateLanguageButtons(lang) {
  document.querySelectorAll('.lang-button').forEach(button => {
    const buttonLang = button.getAttribute('data-lang-switch');
    const isActive = buttonLang === lang;
    button.classList.toggle('active', isActive);
  });

  document.querySelectorAll('.lang-current').forEach(el => el.textContent = lang.toUpperCase());

  // actualiza etiquetas de opciones
  document.querySelectorAll('.lang-option').forEach(opt => {
    const code = opt.dataset.langSwitch;
    const txt  = LANGUAGES.find(l => l.code === code)?.names[lang] || code;
    opt.querySelector('.lang-name').textContent = txt;
  });
  
}

function toggleContactForms(lang) {
  const formEs = document.getElementById('form-es');
  const formEn = document.getElementById('form-en');
  if (formEs && formEn) {
    formEs.classList.toggle('hidden', lang !== 'es');
    formEn.classList.toggle('hidden', lang !== 'en');
  }
}

function toggleCVButtons(lang) {
  const cvEsButton = document.getElementById('download-cv-es');
  const cvEnButton = document.getElementById('download-cv-en');
  if (cvEsButton && cvEnButton) {
    cvEsButton.classList.toggle('hidden', lang !== 'es');
    cvEnButton.classList.toggle('hidden', lang !== 'en');
  }
}

function saveLanguagePreference(lang) {
  localStorage.setItem('preferredLanguage', lang);
}
  
/**
 * Actualiza o crea la etiqueta <meta name="description"> según el idioma.
 * @param {string} lang Código de idioma ('es' o 'en').
 */
function updateMetaDescription(lang = document.documentElement.lang) {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  const content = lang === 'en'
    ? 'Portfolio of Marcos Díaz Oliva, specialized in IT project management, development, and systems optimization. Explore my biography and contact me.'
    : 'Portafolio de Marcos Díaz Oliva, especializado en gestión de proyectos TIC, desarrollo y optimización de sistemas. Explora mi biografía y contáctame.';
  meta.setAttribute('content', content);
}

export function initializeLanguage() {
  const preferredLanguage = localStorage.getItem('preferredLanguage');
  const browserLanguage = navigator.language || navigator.userLanguage;
  const langCode = (preferredLanguage || browserLanguage.split('-')[0]);
  const lang = langCode === 'en' ? 'en' : 'es';
  switchLanguage(lang);
}

export function setupLanguageDropdowns() {
  const dds = Array.from(document.querySelectorAll('.lang-dropdown'));
  if (!dds.length) return;

  const closeAll = () =>
    dds.forEach(d => d.querySelector('.lang-menu').classList.add('hidden'));

  document.addEventListener('click', e => {
    if (!e.target.closest('.lang-dropdown')) closeAll();
  });

  dds.forEach(dd => {
    const btn   = dd.querySelector('.lang-button');
    const menu  = dd.querySelector('.lang-menu');
    const items = dd.querySelectorAll('[data-lang-switch]');

    let pinned = false, timer;

    const open  = () => menu.classList.remove('hidden');
    const hide  = () => !pinned && menu.classList.add('hidden');
    const cancel = () => clearTimeout(timer);
    const schedule = () => { timer = setTimeout(hide, 120); };
    const togglePin = () => { pinned = !pinned; if (!pinned) hide(); };

    /* Hover */
    btn.addEventListener('mouseenter', () => { cancel(); open(); });
    menu.addEventListener('mouseenter', cancel);
    btn.addEventListener('mouseleave', schedule);
    menu.addEventListener('mouseleave', schedule);

    /* Click – pin/unpin */
    btn.addEventListener('click', e => { e.stopPropagation(); togglePin(); open(); });

    /* Selección de idioma */
    items.forEach(it => it.addEventListener('click', () => {
      const lang = it.dataset.langSwitch;
      window.switchLanguage(lang);     // ya expuesto en App.js
      pinned = false;
      hide();
    }));
  });
}
