import { LANGUAGES } from '../utils/constants.js';

export default function LanguageSwitcher() {
  return `
    <div class="ml-4 border-l pl-4 border-gray-200">
      ${LANGUAGES.map(lang => `
        <button class="lang-button text-sm text-gray-500 hover:text-indigo-600 px-1 ${lang.code === 'es' ? 'active' : ''}" 
                onclick="switchLanguage('${lang.code}')">
          ${lang.code.toUpperCase()}
        </button>
        ${lang.code !== LANGUAGES[LANGUAGES.length-1].code ? '<span class="text-gray-300">|</span>' : ''}
      `).join('')}
    </div>
  `;
}