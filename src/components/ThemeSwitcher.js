// components/LanguageSwitcher.js
import { LANGUAGES } from '../utils/constants.js';
import { getCurrentLanguage } from '../utils/language.js';   // nueva ayuda

export default function ThemeSwitcher() {
  const cur = getCurrentLanguage();           // 'es' | 'en'

  return `
    <div class="relative theme-dropdown">
      <button type="button" class="theme-button w-9 h-9 flex items-center justify-center rounded-full bg-indigo-50/70 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 hover:ring-2 hover:ring-indigo-500/40 transition cursor-pointer">
        <span class="sr-only" data-lang="altThemeButton">Elige el tema: claro, oscuro o predeterminado por el sistema</span>
        <i class="fa-solid fa-sun theme-icon text-lg"></i>
      </button>

      <ul class="theme-menu hidden absolute right-0 mt-3 w-40 rounded-lg shadow-lg bg-white/95 dark:bg-gray-900/95 backdrop-blur ring-1 ring-black/10 dark:ring-white/10 divide-y divide-gray-100 dark:divide-gray-800 select-none overflow-hidden">
        <li>
          <button data-theme="light" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700/60 cursor-pointer">
            <i class="fa-solid fa-sun"></i> Light
          </button>
        </li>
        <li>
          <button data-theme="dark" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700/60 cursor-pointer">
            <i class="fa-solid fa-moon"></i> Dark
          </button>
        </li>
        <li>
          <button data-theme="system" class="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700/60 cursor-pointer">
            <i class="fa-solid fa-desktop"></i> System
          </button>
        </li>
      </ul>
    </div>
  `;
}
