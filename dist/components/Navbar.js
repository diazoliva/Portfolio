import { NAV_LINKS, LANGUAGES } from '../utils/constants.js';

export default function Navbar(isMenuHidden) {
  return `
    <nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 rounded-b-lg transition-colors duration-300">
      <div class="container mx-auto px-6 flex justify-between items-center">
      
        <a href="/" class="flex justify-center items-center dark:hidden transition-opacity duration-700 ease-in-out opacity-100 dark:opacity-0">
          <img src="./assets/images/purple_logo.webp" class="w-16 h-16 md:w-24 md:h-24 object-cover mr-2"/>
          <div class="font-bold text-xl text-indigo-800 dark:text-indigo-200" data-lang="navName">Marcos Díaz Oliva</div>
        </a>

        <a href="/" class="hidden justify-center items-center dark:flex transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100">
          <img src="./assets/images/dark_purple_logo.webp" class="w-16 h-16 md:w-24 md:h-24 object-cover mr-2"/>
          <div class="font-bold text-xl text-indigo-800 dark:text-indigo-200" data-lang="navName">Marcos Díaz Oliva</div>
        </a>

        ${!isMenuHidden ? `
          <div class="hidden xl:flex space-x-6 items-center">
            ${NAV_LINKS.map(link => `
              <a href="${link.href}" 
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 transition-colors duration-300 rounded-md px-3 py-2" 
                data-lang="${link.langKey}">
                ${link.text}
              </a>
            `).join('')}
            
            <LanguageSwitcher />
          </div>
        ` : ''}

        <div class="hidden xl:flex items-center space-x-2-200 pl-4">
          <!-- Theme dropdown -->
          <div class="relative theme-dropdown">
            <!-- Botón (solo icono) -->
            <button type="button"
                    class="theme-button w-9 h-9 flex items-center justify-center
                          rounded-full bg-indigo-50/70 dark:bg-indigo-900/30
                          text-indigo-800 dark:text-indigo-200
                          hover:ring-2 hover:ring-indigo-500/40
                          transition cursor-pointer">
                <i class="fa-solid fa-sun theme-icon text-lg"></i>
            </button>

            <!-- Menú -->
              <ul class="theme-menu hidden absolute right-0 mt-3 w-40 rounded-lg shadow-lg
                        bg-white/95 dark:bg-gray-900/95 backdrop-blur
                        ring-1 ring-black/10 dark:ring-white/10
                        divide-y divide-gray-100 dark:divide-gray-800 select-none
                        overflow-hidden">
              <li><button data-theme="light"
                          class="flex w-full items-center gap-2 px-4 py-2 text-sm
                            text-gray-800 dark:text-gray-200
                            hover:bg-indigo-50 dark:hover:bg-gray-700/60
                            cursor-pointer">
                    <i class="fa-solid fa-sun"></i> Light
                  </button></li>
              <li><button data-theme="dark"
                          class="flex w-full items-center gap-2 px-4 py-2 text-sm
                            text-gray-800 dark:text-gray-200
                            hover:bg-indigo-50 dark:hover:bg-gray-700/60
                            cursor-pointer">
                    <i class="fa-solid fa-moon"></i> Dark
                  </button></li>
              <li><button data-theme="system"
                          class="flex w-full items-center gap-2 px-4 py-2 text-sm
                            text-gray-800 dark:text-gray-200
                            hover:bg-indigo-50 dark:hover:bg-gray-700/60
                            cursor-pointer">
                    <i class="fa-solid fa-desktop"></i> System
                  </button></li>
            </ul>
          </div>

          <div class="max-xl:hidden flex items-center space-x-2-200 pl-4">
            <button class="lang-button text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 px-2 cursor-pointer active" data-lang-switch="es">ES</button>
            <span class="text-gray-300 dark:text-gray-600">|</span>
            <button class="lang-button text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 px-2 cursor-pointer" data-lang-switch="en">EN</button>
          </div>
        </div>

        <button id="mobile-menu-button" class="xl:hidden text-gray-600 dark:text-gray-400 focus:outline-none cursor-pointer transition-colors duration-300">
          <i id="mobile-menu-icon" class="fa-solid fa-bars inline-block align-middle max-lg:text-3xl md:text-5xl"></i>
        </button>
      </div>

      <div id="mobile-menu" class="xl:hidden hidden bg-gray-50 dark:bg-gray-800 py-2 rounded-b-lg shadow-lg transition-colors duration-300">
      ${!isMenuHidden ? `
        ${NAV_LINKS.map(link => `
          <a href="${link.href}" 
             class="text-center block px-6 py-2 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md mx-2" 
             data-lang="${link.langKey}Mobile">
            ${link.text}
          </a>
        `).join('')}
      ` : ''}
      <div class="flex justify-center items-center space-x-2-200 pl-4">
          <div class="flex mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 text-center">
          <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 flex justify-center">
            <select class="theme-select bg-gray-200 dark:bg-gray-700
                text-gray-800 dark:text-gray-200 text-sm
                rounded-md px-2 py-1 focus:outline-none">
              <option value="system" data-lang="themeSystem">Sistema</option>
              <option value="light"  data-lang="themeLight">Claro</option>
              <option value="dark"   data-lang="themeDark">Oscuro</option>
            </select>
          </div>
          <div class="flex justify-center items-center space-x-2-200 pl-4 ml-2">
            ${LANGUAGES.map(lang => `
              <button class="lang-button text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 px-2 cursor-pointer ${lang.code === 'es' ? 'active' : ''}" data-lang-switch="${lang.code}">
                ${lang.code.toUpperCase()}
              </button>
              ${lang.code !== LANGUAGES[LANGUAGES.length-1].code ? '<span class="text-gray-300 dark:text-gray-600">|</span>' : ''}
            `).join('')}
          </div>
          </div>
        </div>
      </div>
    </nav>
  `;
}