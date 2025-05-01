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
          <label for="theme-toggle" class="relative inline-block w-20 h-10 cursor-pointer ml-4">
            <input type="checkbox" id="theme-toggle" class="sr-only"/>
            <!-- Track -->
            <div class="absolute inset-0 rounded-full bg-yellow-200 dark:bg-blue-900 transition-colors duration-300 ease-in-out"></div>
            <!-- Knob -->
            <div class="absolute left-1 top-1 w-8 h-8 rounded-full bg-yellow-400 dark:bg-blue-400 transform transition-all duration-300 ease-in-out dark:translate-x-10 relative">
              <!-- Sun -->
              <i class="fas fa-sun absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base transition-opacity duration-200 ease-in-out opacity-100 dark:opacity-0"></i>
              <!-- Moon -->
              <i class="fas fa-moon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base transition-opacity duration-200 ease-in-out opacity-0 dark:opacity-100"></i>
            </div>
          </label>

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
        <div class="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 text-center">
          ${LANGUAGES.map(lang => `
            <button class="lang-button text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 px-2 cursor-pointer ${lang.code === 'es' ? 'active' : ''}" data-lang-switch="${lang.code}">
              ${lang.code.toUpperCase()}
            </button>
            ${lang.code !== LANGUAGES[LANGUAGES.length-1].code ? '<span class="text-gray-300 dark:text-gray-600">|</span>' : ''}
          `).join('')}
        </div>
      </div>
    </nav>
  `;
}