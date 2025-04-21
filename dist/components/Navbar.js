import { switchLanguage } from '../utils/language.js';
import { NAV_LINKS, LANGUAGES } from '../utils/constants.js';

export default function Navbar() {
  return `
    <nav class="bg-white shadow-md sticky top-0 z-50 rounded-b-lg">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <a href="/" class="flex justify-center items-center">
                <img src="./assets/images/purple_logo.png" class="w-16 h-16 md:w-24 md:h-24 object-cover mr-2"/>
                <div class="font-bold text-xl text-indigo-800" data-lang="navName">Marcos Díaz Oliva</div>
            </a>
        
            <div class="hidden xl:flex space-x-6 items-center">
                ${NAV_LINKS.map(link => `
                    <a href="${link.href}" class="text-gray-600 hover:text-indigo-900 transition duration-300 rounded-md px-3 py-2" data-lang="${link.langKey}">
                    ${link.text}
                    </a>
                `).join('')}
                
                <LanguageSwitcher />
            </div>
            <div class="max-xl:hidden flex items-center space-x-2-200 pl-4">
                <button class="lang-button text-sm text-gray-500 hover:text-indigo-900 px-2 cursor-pointer active" data-lang-switch="es">
                    ES
                </button>
                <span class="text-gray-300">|</span>
                <button class="lang-button text-sm text-gray-500 hover:text-indigo-900 px-2 cursor-pointer" data-lang-switch="en">
                    EN
                </button>
            </div>
            
            <button id="mobile-menu-button" class="xl:hidden text-gray-600 focus:outline-none cursor-pointer">
                <img id="mobile-menu-icon" src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg" alt="Menu" class="inline-block align-middle max-lg:w-7 md:w-10">
            </button>
        </div>
      
      <div id="mobile-menu" class="xl:hidden hidden bg-white py-2 rounded-b-lg shadow-lg">
        ${NAV_LINKS.map(link => `
          <a href="${link.href}" class="text-center block px-6 py-2 text-gray-600 hover:bg-indigo-50 rounded-md mx-2" data-lang="${link.langKey}Mobile">
            ${link.text}
          </a>
        `).join('')}
        
        <div class="mt-2 pt-2 border-t border-gray-100 text-center">
          ${LANGUAGES.map(lang => `
            <button class="lang-button text-sm text-gray-500 hover:text-indigo-900 px-2 cursor-pointer ${lang.code === 'es' ? 'active' : ''}" 
                    data-lang-switch="${lang.code}">
              ${lang.name}
            </button>
            ${lang.code !== LANGUAGES[LANGUAGES.length-1].code ? '<span class="text-gray-300">|</span>' : ''}
          `).join('')}
        </div>
      </div>
    </nav>
  `;
}