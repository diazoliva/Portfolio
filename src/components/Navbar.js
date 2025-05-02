import { NAV_LINKS } from '../utils/constants.js';
import LanguageSwitcher from './LanguageSwitcher.js';
import ThemeSwitcher from './ThemeSwitcher.js';
import(/* webpackChunkName: "fa-icons" */ '../utils/icons.js')
  .then(mod => mod.initIcons());

export default function Navbar(isMenuHidden) {
  return `
    <nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div class="container mx-auto px-6 flex justify-between items-center">
      
        <a href="/" class="flex justify-center items-center dark:hidden transition-opacity duration-700 ease-in-out opacity-100 dark:opacity-0">
          <img src="./assets/images/purple_logo.webp" width="96" height="96" fetchpriority="high" class="w-16 h-16 md:w-24 md:h-24 object-cover mr-2" data-lang-alt="altLightLogoImage" alt="Logo de la página en modo claro que incluye una D y una O superpuestas"/>
          <div class="font-bold text-xl text-indigo-800 dark:text-indigo-200" data-lang="navName">Marcos Díaz Oliva</div>
        </a>

        <a href="/" class="hidden justify-center items-center dark:flex transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100">
          <img src="./assets/images/dark_purple_logo.webp" width="96" height="96" fetchpriority="high" class="w-16 h-16 md:w-24 md:h-24 object-cover mr-2" data-lang-alt="altDarkLogoImage" alt="Logo de la página en modo oscuro que incluye una D y una O superpuestas"/>
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
          </div>
        ` : ''}

        <div class="hidden xl:flex items-center space-x-3 pl-4">
          ${ThemeSwitcher()}
          ${LanguageSwitcher()}
        </div>

        <button id="mobile-menu-button" class="xl:hidden text-gray-600 dark:text-gray-400 focus:outline-none cursor-pointer transition-colors duration-300">
          <span class="sr-only" data-lang="altMobileMenuButton">Abrir o cerrar menú desplegable</span>
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

        <div class="flex justify-center items-center space-x-3 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          ${ThemeSwitcher()}
          ${LanguageSwitcher()}
        </div>
      </div>
    </nav>
  `;
}