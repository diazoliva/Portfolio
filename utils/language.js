import { translations } from './constants.js';

export function switchLanguage(lang) {
  document.documentElement.lang = lang;
  updateTextElements(lang);
  updatePlaceholders(lang);
  updateLanguageButtons(lang);
  toggleContactForms(lang);
  toggleCVButtons(lang);
  saveLanguagePreference(lang);
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

export function initializeLanguage() {
  const preferredLanguage = localStorage.getItem('preferredLanguage');
  const browserLanguage = navigator.language || navigator.userLanguage;
  const langCode = (preferredLanguage || browserLanguage.split('-')[0]);
  const lang = langCode === 'en' ? 'en' : 'es';
  switchLanguage(lang);
}