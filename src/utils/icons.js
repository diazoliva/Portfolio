import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faSun, faMoon, faDesktop,   // theme switcher
  faBars, faXmark,            // mobile menu
  faChevronDown, faArrowRight,
  faPaperPlane,               // home
  faSuitcase, faCode, faLanguage, faScrewdriverWrench, faUsers, faDownload
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

library.add(
  faSun, faMoon, faDesktop, faBars, faXmark,
  faChevronDown, faArrowRight, faPaperPlane,
  faSuitcase, faCode, faLanguage, faScrewdriverWrench, faUsers,
  faGithub, faLinkedin, faUser, faDownload
);

export function initIcons () {
  dom.watch();
}