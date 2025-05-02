// components/LanguageSwitcher.js
import { LANGUAGES } from '../utils/constants.js';
import { getCurrentLanguage } from '../utils/language.js';   // nueva ayuda

export default function LanguageSwitcher() {
  const cur = getCurrentLanguage();           // 'es' | 'en'

  return `
    <div class="relative lang-dropdown ml-4">
      <!-- Botón compacto SOLO código -->
      <button type="button"
              class="lang-button w-9 h-9 flex items-center justify-center
                     rounded-full bg-indigo-50/70 dark:bg-indigo-900/30
                     text-indigo-800 dark:text-indigo-200
                     hover:ring-2 hover:ring-indigo-500/40
                     transition cursor-pointer select-none">
        <span class="sr-only" data-lang="altLanguageButton">Elige el idioma a mostrar: español o inglés</span>
        <span class="lang-current text-sm font-semibold">${cur.toUpperCase()}</span>
      </button>

      <!-- Menú -->
      <ul class="lang-menu hidden absolute right-0 mt-3 w-44 rounded-lg shadow-lg
                 bg-white/95 dark:bg-gray-900/95 backdrop-blur
                 ring-1 ring-black/10 dark:ring-white/10
                 divide-y divide-gray-100 dark:divide-gray-800 select-none
                 overflow-hidden">
        ${LANGUAGES.map(l => `
          <li>
            <button data-lang-switch="${l.code}"
                    class="flex w-full items-center gap-2 px-4 py-2 text-sm
                           text-gray-800 dark:text-gray-200
                           hover:bg-indigo-50 dark:hover:bg-gray-700/60
                           cursor-pointer lang-option">
              <span class="text-lg">${l.flag ?? ''}</span>
              <span class="lang-name">${l.names[cur]}</span>
            </button>
          </li>`).join('')}
      </ul>
    </div>
  `;
}
