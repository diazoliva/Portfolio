(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const C="modulepreload",A=function(t){return"/"+t},w={},q=function(e,a,n){let o=Promise.resolve();if(a&&a.length>0){let s=function(l){return Promise.all(l.map(c=>Promise.resolve(c).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),p=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=s(a.map(l=>{if(l=A(l),l in w)return;w[l]=!0;const c=l.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${g}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":C,c||(d.as="script"),d.crossOrigin="",d.href=l,p&&d.setAttribute("nonce",p),document.head.appendChild(d),c)return new Promise((m,u)=>{d.addEventListener("load",m),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return o.then(s=>{for(const i of s||[])i.status==="rejected"&&r(i.reason);return e().catch(r)})},S=[{href:"#sobre-mi",langKey:"navAbout",text:"Sobre Mí"},{href:"#proyectos",langKey:"navProjects",text:"Proyectos"},{href:"#experiencia",langKey:"navExperience",text:"Experiencia"},{href:"#habilidades",langKey:"navSkills",text:"Habilidades"},{href:"contact",langKey:"navContact",text:"Contacto"}],E=[{code:"es",flag:"🇪🇸",names:{es:"Español",en:"Spanish"}},{code:"en",flag:"🇬🇧",names:{es:"Inglés",en:"English"}}],f={es:{contactTitlePage:"Marcos Díaz Oliva - Contacto",navName:"Marcos Díaz Oliva",navAbout:"Sobre Mí",navProjects:"Proyectos",navExperience:"Experiencia",navSkills:"Habilidades",navContact:"Contacto",navAboutMobile:"Sobre Mí",navProjectsMobile:"Proyectos",navExperienceMobile:"Experiencia",navSkillsMobile:"Habilidades",navContactMobile:"Contacto",altArrowAboutMeButton:"Desplazarse a la sección Sobre Mí",altThemeButton:"Elige el tema: claro, oscuro o predeterminado por el sistema",altLanguageButton:"Elige el idioma a mostrar: español o inglés",altMobileMenuButton:"Abrir o cerrar menú desplegable",altLightLogoImage:"Logo en modo claro",altDarkLogoImage:"Logo en modo oscuro",altBackgroundHeaderImage:"Imagen de fondo del encabezado. Aparece el Ministerio de Vivienda y Agenda Urbana",altPersonalImage:"Foto personal",altProyect1Image:"Servicio web de Tests, imagen de presentación",altProyect2Image:"Web scripting para Estadística de Datos, imagen de presentación",altProyect3Image:"Simulación Dispositivo IoT, imagen de presentación",heroTitle:"Hola, soy Marcos",heroSubtitle:"Gestor de Proyectos Informáticos",heroContactButton:"Contáctame",aboutTitle:"Sobre Mí",aboutParagraph1:"Experiencia inicial en proyectos reales de desarrollo y gestión de equipos. Lideré el desarrollo Backend en Valuat, logrando una mejora de hasta el 50% en el rendimiento de los endpoints respecto a la tecnología anterior y hasta un 30% en las llamadas a base de datos. Como gestor de proyectos, presto servicio a dos Subdirecciones Generales, gestionando equipos de 3 empresas distintas.",aboutParagraph2:"[Añade más detalles si lo deseas, como tus intereses, hobbies relevantes o tu filosofía de trabajo.]",projectsTitle:"Proyectos Destacados",project1AltImage:"[Imagen de Proyecto 1]",project1Title:"Servicio web de Tests",project1Desc:"Desarrollado con Laravel, PHP, MySQL, MongoDB.",project2AltImage:"[Imagen de Proyecto 2]",project2Title:"Web scripting para Estadística de Datos",project2Desc:"Desarrollado con Python, Xampp, MySQL.",project3AltImage:"[Imagen de Proyecto 3]",project3Title:"Simulación Dispositivo IoT",project3Desc:"Desarrollado con Python, Google Cloud, HTML5, CSS3, JS, MariaDB.",projectSeeMore:"Ver más",projectSourceCode:"Código Fuente",experienceTitle:"Experiencia Profesional",exp1Title:"Gestor de proyectos informáticos - Ministerio de Vivienda y Agenda Urbana",exp1Dates:"Octubre 2024 - Actualidad",exp1Task1:"Coordino 4 equipos de trabajo pertenecientes a 3 empresas distintas en materia de desarrollo, mantenimiento y soporte que prestan servicio a 2 Subdirecciones Generales.",exp1Task2:"Participo en la mejora de procesos mediante la implementación de metodologías que permiten un mayor control y eficiencia ante las tareas de desarrollo, soporte y mantenimiento de los distintos equipos de trabajo.",exp1Task3:"Gestiono las acciones necesarias para el mantenimiento de los sistemas en colaboración con el equipo especializado en sistemas y comunicaciones.",exp1Task4:"Analizo las herramientas y soluciones actuales para encontrar mejoras a implementar en los sistemas en relación, mayoritariamente, al rendimiento y la experiencia de usuario.",exp1Task5:"Diseño informes que permiten una visualización general práctica de cada uno de los sistemas informáticos y equipos gestionados.",exp1Task6:"Elaboro estadísticas haciendo uso de la herramienta de Google Analytics, como parte de la gestión del sistema con información anualizada y la elaboración de informes personalizados.",exp2Title:"Analista Programador Backend - Valuat",exp2Dates:"Noviembre 2021 - Febrero 2023",exp2Task1:"Implementé la metodología de trabajo Scrum con desarrollos en sprints de dos semanas que permitió una mayor eficiencia y rapidez del mismo.",exp2Task2:"Mejoré la eficiencia del sistema BackEnd hasta un 35% en su conjunto respecto al sistema antiguo, a partir del análisis y diseño.",exp3Title:"Gestor de Sistemas Informáticos en Prácticas - Instituto Nacional de Administración Pública",exp3Dates:"Junio 2024 - Octubre 2024",exp3Task1:"Formación orientada a la práctica",exp3Task2:"Curso en Gobernanza de datos e igualdad",skillsTitle:"Habilidades",skillsTechTitle:"Habilidades Técnicas",skillsOtherTech:"[Otra Habilidad]",skillsLangTitle:"Idiomas",skillsLangSpanish:"Español:",skillsLangSpanishLevel:"Nativo",skillsLangEnglish:"Inglés:",skillsLangEnglishLevel:"Fluido",skillsLangOther:"[Otro Idioma]:",skillsLangOtherLevel:"[Nivel]",skillsToolsTitle:"Herramientas",skillsOtherTool:"[Otra Herramienta]",skillsSoftTitle:"Habilidades Blandas",skillsSoftComm:"Comunicación",skillsSoftTeam:"Trabajo en equipo",skillsSoftProblem:"Resolución de problemas",skillsSoftAdapt:"Adaptabilidad",contactTitle:"Contacto",contactIntro:"¿Interesado/a en saber más? ¡No dudes en contactarme!",contactDownloadPrompt:"También puedes descargar mi CV:",contactMail:"Contáctame",contactDownloadButtonES:"Descargar CV",contactDownloadButtonEN:"Descargar CV (Inglés)",footerRights:"© 2025 Marcos Díaz Oliva. Todos los derechos reservados.",contactFormTitle:"Ponte en Contacto",contactFormIntro:"¿Tienes alguna pregunta o propuesta? Rellena el formulario.",contactFormLabelName:"Nombre completo",contactFormInputName:"Tu nombre y apellidos",contactFormLabelMail:"Correo electrónico",contactFormInputMail:"tu@email.com",contactFormLabelPhone:"Número de teléfono",contactFormLabelOptional:"(Opcional)",contactFormInputPhone:"+34 600 000 000",contactFormLabelMessage:"Mensaje",contactFormInputMessage:"Escribe aquí tu consulta o mensaje...",contactFormSend:"Enviar",themeLight:"Claro",themeDark:"Oscuro",themeSystem:"Sistema"},en:{contactTitlePage:"Contact - Marcos Díaz Oliva",navName:"Marcos Díaz Oliva",navAbout:"About Me",navProjects:"Projects",navExperience:"Experience",navSkills:"Skills",navContact:"Contact",navAboutMobile:"About Me",navProjectsMobile:"Projects",navExperienceMobile:"Experience",navSkillsMobile:"Skills",navContactMobile:"Contact",altArrowAboutMeButton:"Scroll to About Me section",altThemeButton:"Choose the theme: light, dark, or system default",altMobileMenuButton:"Open or close dropdown menu",altLanguageButton:"Choose the language to display: Spanish or English",altLightLogoImage:"Light mode logo",altDarkLogoImage:"Dark mode logo",altBackgroundHeaderImage:"Header background image. The Ministry of Housing and Urban Agenda appears",altPersonalImage:"Personal photo",altProyect1Image:"Web Test Service image presentation",altProyect2Image:"Data Statistics Web Scripting image presentation",altProyect3Image:"IoT Device Simulation image presentation",heroTitle:"Hi, I'm Marcos",heroSubtitle:"IT Project Manager",heroContactButton:"Contact me",aboutTitle:"About Me",aboutParagraph1:"Initial experience in real development and team management projects. I led the Backend development at Valuat, achieving an improvement of up to 50% in endpoint performance compared to the previous technology and up to 30% in database calls. As a project manager, I provide service to two General Subdirectorates, managing teams from 3 different companies.",aboutParagraph2:"[Add more details if you wish, such as relevant interests, hobbies, or your work philosophy.]",projectsTitle:"Featured Projects",project1AltImage:"[Image of Project 1]",project1Title:"Web Test Service",project1Desc:"Developed with Laravel, PHP, MySQL, MongoDB.",project2AltImage:"[Image of Project 2]",project2Title:"Data Statistics Web Scripting",project2Desc:"Developed with Python, Xampp, MySQL.",project3AltImage:"[Image of Project 3]",project3Title:"IoT Device Simulation",project3Desc:"Developed with Python, Google Cloud, HTML5, CSS3, JS, MariaDB.",projectSeeMore:"See more",projectSourceCode:"Source Code",experienceTitle:"Work Experience",exp1Title:"IT Project Manager - Ministry of Housing and Urban Agenda",exp1Dates:"October 2024 - Present",exp1Task1:"Coordinate 4 work teams belonging to 3 different companies in development, maintenance, and support that provide service to 2 General Subdirectorates.",exp1Task2:"Participate in process improvement through the implementation of methodologies that allow for greater efficiency and speed in the development, support, and maintenance tasks of the different work teams.",exp1Task3:"Manage the necessary actions for system maintenance in collaboration with the specialized systems and communications team.",exp1Task4:"Analyze current tools and solutions to find improvements to implement in the systems, mainly related to performance and user experience.",exp1Task5:"Design reports that provide a practical general view of each of the IT systems and managed teams.",exp1Task6:"Prepare statistics using the Google Analytics tool, as part of system management with annualized information and the preparation of personalized reports.",exp2Title:"Backend Developer - Valuat",exp2Dates:"November 2021 - February 2023",exp2Task1:"Implemented the Scrum work methodology with development in two-week sprints that allowed for greater efficiency and speed.",exp2Task2:"Improved the overall efficiency of the Backend system by up to 35% compared to the old system, based on analysis and design.",exp3Title:"Intern IT Systems Manager - National Institute of Public Administration",exp3Dates:"June 2024 - October 2024",exp3Task1:"Practice-oriented training",exp3Task2:"Course on Data Governance and Equality",skillsTitle:"Skills",skillsTechTitle:"Technical Skills",skillsOtherTech:"[Other Skill]",skillsLangTitle:"Languages",skillsLangSpanish:"Spanish:",skillsLangSpanishLevel:"Native",skillsLangEnglish:"English:",skillsLangEnglishLevel:"Fluent",skillsLangOther:"[Other Language]:",skillsLangOtherLevel:"[Level]",skillsToolsTitle:"Tools",skillsSoftTitle:"Soft Skills",skillsSoftComm:"Communication",skillsSoftTeam:"Teamwork",skillsSoftProblem:"Problem Solving",skillsSoftAdapt:"Adaptability",contactTitle:"Contact",contactIntro:"Interested in learning more? Feel free to contact me!",contactDownloadPrompt:"You can also download my CV:",contactMail:"Contact me",contactDownloadButtonES:"Download CV (Spanish)",contactDownloadButtonEN:"Download CV",footerRights:"© 2025 Marcos Díaz Oliva. All rights reserved.",contactFormTitle:"Get in Touch",contactFormIntro:"Have a question or proposal? Fill out the form.",contactFormLabelName:"Full Name",contactFormInputName:"Your full name",contactFormLabelMail:"Email address",contactFormInputMail:"you@email.com",contactFormLabelPhone:"Phone number",contactFormLabelOptional:"(Optional)",contactFormInputPhone:"+1 555 000 0000",contactFormLabelMessage:"Message",contactFormInputMessage:"Write your inquiry or message here...",contactFormSend:"Send",themeLight:"Light",themeDark:"Dark",themeSystem:"System"}};function I(){return localStorage.getItem("lang")||"es"}function P(t){document.documentElement.lang=t,B(t),F(t),O(t),z(t),N(t),H(t),V(t)}function B(t){document.querySelectorAll("[data-lang]").forEach(e=>{var n,o;const a=e.dataset.lang;if((n=f[t])!=null&&n[a]){const r=e.querySelector(".icon"),s=f[t][a];r&&((o=e.firstChild)==null?void 0:o.nodeType)===Node.TEXT_NODE?e.firstChild.nodeValue=s+" ":e.textContent=s}else console.warn(`🔍 Traducción no encontrada para: ${a} en [${t}]`)})}function F(t){document.querySelectorAll("[data-lang-placeholder]").forEach(e=>{var n;const a=e.dataset.langPlaceholder;(n=f[t])!=null&&n[a]&&(e.placeholder=f[t][a])})}function O(t){document.querySelectorAll(".lang-button").forEach(e=>{const n=e.getAttribute("data-lang-switch")===t;e.classList.toggle("active",n)}),document.querySelectorAll(".lang-current").forEach(e=>e.textContent=t.toUpperCase()),document.querySelectorAll(".lang-option").forEach(e=>{var o;const a=e.dataset.langSwitch,n=((o=E.find(r=>r.code===a))==null?void 0:o.names[t])||a;e.querySelector(".lang-name").textContent=n})}function z(t){const e=document.getElementById("form-es"),a=document.getElementById("form-en");e&&a&&(e.classList.toggle("hidden",t!=="es"),a.classList.toggle("hidden",t!=="en"))}function N(t){const e=document.getElementById("download-cv-es"),a=document.getElementById("download-cv-en");e&&a&&(e.classList.toggle("hidden",t!=="es"),a.classList.toggle("hidden",t!=="en"))}function H(t){localStorage.setItem("preferredLanguage",t)}function V(t=document.documentElement.lang){let e=document.querySelector('meta[name="description"]');e||(e=document.createElement("meta"),e.name="description",document.head.appendChild(e));const a=t==="en"?"Portfolio of Marcos Díaz Oliva, specialized in IT project management, development, and systems optimization. Explore my biography and contact me.":"Portafolio de Marcos Díaz Oliva, especializado en gestión de proyectos TIC, desarrollo y optimización de sistemas. Explora mi biografía y contáctame.";e.setAttribute("content",a)}function $(){const t=localStorage.getItem("preferredLanguage"),e=navigator.language||navigator.userLanguage,n=(t||e.split("-")[0])==="en"?"en":"es";P(n)}function G(){const t=Array.from(document.querySelectorAll(".lang-dropdown"));if(!t.length)return;const e=()=>t.forEach(a=>a.querySelector(".lang-menu").classList.add("hidden"));document.addEventListener("click",a=>{a.target.closest(".lang-dropdown")||e()}),t.forEach(a=>{const n=a.querySelector(".lang-button"),o=a.querySelector(".lang-menu"),r=a.querySelectorAll("[data-lang-switch]");let s=!1,i;const p=()=>o.classList.remove("hidden"),l=()=>!s&&o.classList.add("hidden"),c=()=>clearTimeout(i),g=()=>{i=setTimeout(l,120)},d=()=>{s=!s,s||l()};n.addEventListener("mouseenter",()=>{c(),p()}),o.addEventListener("mouseenter",c),n.addEventListener("mouseleave",g),o.addEventListener("mouseleave",g),n.addEventListener("click",m=>{m.stopPropagation(),d(),p()}),r.forEach(m=>m.addEventListener("click",()=>{const u=m.dataset.langSwitch;window.switchLanguage(u),s=!1,l()}))})}function T(){const t=I();return`
    <div class="relative lang-dropdown ml-4">
      <!-- Botón compacto SOLO código -->
      <button type="button"
              class="lang-button w-9 h-9 flex items-center justify-center
                     rounded-full bg-indigo-50/70 dark:bg-indigo-900/30
                     text-indigo-800 dark:text-indigo-200
                     hover:ring-2 hover:ring-indigo-500/40
                     transition cursor-pointer select-none">
        <span class="sr-only" data-lang="altLanguageButton">Elige el idioma a mostrar: español o inglés</span>
        <span class="lang-current text-sm font-semibold">${t.toUpperCase()}</span>
      </button>

      <!-- Menú -->
      <ul class="lang-menu hidden absolute right-0 mt-3 w-44 rounded-lg shadow-lg
                 bg-white/95 dark:bg-gray-900/95 backdrop-blur
                 ring-1 ring-black/10 dark:ring-white/10
                 divide-y divide-gray-100 dark:divide-gray-800 select-none
                 overflow-hidden">
        ${E.map(e=>`
          <li>
            <button data-lang-switch="${e.code}"
                    class="flex w-full items-center gap-2 px-4 py-2 text-sm
                           text-gray-800 dark:text-gray-200
                           hover:bg-indigo-50 dark:hover:bg-gray-700/60
                           cursor-pointer lang-option">
              <span class="text-lg">${e.flag??""}</span>
              <span class="lang-name">${e.names[t]}</span>
            </button>
          </li>`).join("")}
      </ul>
    </div>
  `}function L(){return I(),`
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
  `}q(()=>import("./icons-D3WAK82v.js"),[]).then(t=>t.initIcons());function j(t){return`
    <nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 rounded-b-lg transition-colors duration-300">
      <div class="container mx-auto px-6 flex justify-between items-center">
      
        <a href="/" class="flex justify-center items-center dark:hidden transition-opacity duration-700 ease-in-out opacity-100 dark:opacity-0">
          <img src="./assets/images/purple_logo.webp" width="96" height="96" fetchpriority="high" class="w-16 h-16 md:w-24 md:h-24 object-cover mr-2" data-lang-alt="altLightLogoImage" alt="Logo de la página en modo claro que incluye una D y una O superpuestas"/>
          <div class="font-bold text-xl text-indigo-800 dark:text-indigo-200" data-lang="navName">Marcos Díaz Oliva</div>
        </a>

        <a href="/" class="hidden justify-center items-center dark:flex transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100">
          <img src="./assets/images/dark_purple_logo.webp" width="96" height="96" fetchpriority="high" class="w-16 h-16 md:w-24 md:h-24 object-cover mr-2" data-lang-alt="altDarkLogoImage" alt="Logo de la página en modo oscuro que incluye una D y una O superpuestas"/>
          <div class="font-bold text-xl text-indigo-800 dark:text-indigo-200" data-lang="navName">Marcos Díaz Oliva</div>
        </a>

        ${t?"":`
          <div class="hidden xl:flex space-x-6 items-center">
            ${S.map(e=>`
              <a href="${e.href}" 
                class="text-gray-600 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 transition-colors duration-300 rounded-md px-3 py-2" 
                data-lang="${e.langKey}">
                ${e.text}
              </a>
            `).join("")}
          </div>
        `}

        <div class="hidden xl:flex items-center space-x-3 pl-4">
          ${L()}
          ${T()}
        </div>

        <button id="mobile-menu-button" class="xl:hidden text-gray-600 dark:text-gray-400 focus:outline-none cursor-pointer transition-colors duration-300">
          <span class="sr-only" data-lang="altMobileMenuButton">Abrir o cerrar menú desplegable</span>
          <i id="mobile-menu-icon" class="fa-solid fa-bars inline-block align-middle max-lg:text-3xl md:text-5xl"></i>
        </button>
      </div>

      <div id="mobile-menu" class="xl:hidden hidden bg-gray-50 dark:bg-gray-800 py-2 rounded-b-lg shadow-lg transition-colors duration-300">
        ${t?"":`
          ${S.map(e=>`
            <a href="${e.href}" 
              class="text-center block px-6 py-2 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-md mx-2" 
              data-lang="${e.langKey}Mobile">
              ${e.text}
            </a>
          `).join("")}
        `}

        <div class="flex justify-center items-center space-x-3 mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          ${L()}
          ${T()}
        </div>
      </div>
    </nav>
  `}function M(){return`
    <footer class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 rounded-t-lg transition-colors duration-300">
      <div class="container mx-auto px-6 text-center">
        <div class="flex justify-center">
          <p data-lang="footerRights">
            © ${new Date().getFullYear()} Marcos Díaz Oliva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  `}function b(){return`
    ${j()}

    <header class="relative pt-20 pb-[60px] rounded-b-xl shadow-xl overflow-hidden">
        <picture class="absolute inset-0 z-0">
            <source srcset="/assets/images/MIVAU.webp" type="image/webp">
            <img src="/assets/images/MIVAU.webp" fetchpriority="high" width="1600" height="900" class="w-full h-full object-cover object-center" data-lang-alt="altBackgroundHeaderImage" alt="Foto de Ministerio de Vivienda y Agenda Urbana">
        </picture>
        <div class="absolute inset-0 z-10 pointer-events-none" style="background:linear-gradient(rgba(120,120,131,0.8), rgba(99,94,151,0.8));"></div>
        <div class="absolute inset-0 z-20 rounded-b-xl pointer-events-none bg-gradient-to-b from-indigo-900/50 to-gray-400/50 dark:from-gray-900 dark:to-black/80 transition-opacity"></div>
        <div class="relative z-30 container mx-auto px-6 text-center text-gray-50 dark:text-gray-200">
            <img src="/assets/images/personal.webp" width="160" height="160" fetchpriority="high" alt="Foto personal" data-lang-alt="altPersonalImage" class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"/>
            <h1 class="text-4xl md:text-5xl font-bold mb-2" data-lang="heroTitle"> Hola, soy Marcos </h1>
            <p class="text-xl md:text-2xl mb-8" data-lang="heroSubtitle"> Gestor de Proyectos Informáticos </p>
            <a href="contact" class="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md" data-lang="heroContactButton"> Contáctame </a>
            <a href="#sobre-mi" class="block mx-auto mt-12 cursor-pointer animate-bounce text-3xl text-white dark:text-gray-200">
                <span class="sr-only" data-lang="altArrowAboutMeButton"> Desplazarse a la sección: Sobre mí </span>
                <i class="fa-solid fa-chevron-down"></i>
            </a>
        </div>
    </header>

    <main class="container mx-auto px-6 pt-4 pb-6 flex-grow bg-gray-50 dark:bg-gray-800 mb-6">
        <section id="sobre-mi" class="mb-4 pt-12">
            <h2 class="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-indigo-200" data-lang="aboutTitle">Sobre Mí</h2>
            <div class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
                <div class="md:w-2/3">
                    <p class="text-lg text-gray-800 dark:text-gray-200" data-lang="aboutParagraph1">
                        Experiencia inicial en proyectos reales de desarrollo y gestión de equipos. Lideré el desarrollo Backend en Valuat, logrando una mejora de hasta el 50% en el rendimiento de los endpoints respecto a la tecnología anterior y hasta un 30% en las llamadas a base de datos. Como gestor de proyectos, presto servicio a dos Subdirecciones Generales, gestionando equipos de 3 empresas distintas.
                    </p>
                </div>
                 <div class="md:w-1/3 flex justify-center">
                     <i class="fa-regular fa-user text-8xl dark:text-gray-200"></i>
                 </div>
            </div>
        </section>

        <section id="proyectos" class="mb-4 pt-12">
            <h2 class="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-indigo-200" data-lang="projectsTitle">Proyectos Destacados</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                    <picture>
                        <source srcset="./assets/images/project_1.webp" type="image/webp">
                        <img src="/assets/images/project_1.webp" loading="lazy" width="600" height="400" data-lang-alt="altProyect1Image" alt="[Imagen de Proyecto 1]" data-lang-alt="project1AltImage" class="w-full h-48 object-cover">
                    </picture>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100" data-lang="project1Title">Servicio web de Tests</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4" data-lang="project1Desc">
                            Desarrollado con Laravel, PHP, MySQL, MongoDB.
                        </p>
                        <a href="#" class="text-indigo-900 dark:text-indigo-200 hover:underline font-medium inline-flex items-center">
                            <span data-lang="projectSeeMore">Ver más</span> <i class="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                        <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 ml-4 inline-flex items-center" title="Código Fuente" data-lang-title="projectSourceCode">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                    <picture>
                        <source srcset="/assets/images/project_2.webp" type="image/webp">
                        <img src="/assets/images/project_2.webp" loading="lazy" width="600" height="400" data-lang-alt="altProyect2Image" alt="[Imagen de Proyecto 2]" data-lang-alt="project2AltImage" class="w-full h-48 object-cover">
                    </picture>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100" data-lang="project2Title">Web scripting para Estadística de Datos</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4" data-lang="project2Desc">
                            Desarrollado con Python, Xampp, MySQL.
                        </p>
                        <a href="#" class="text-indigo-900 dark:text-indigo-200 hover:underline font-medium inline-flex items-center">
                             <span data-lang="projectSeeMore">Ver más</span> <i class="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                         <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 ml-4 inline-flex items-center" title="Código Fuente" data-lang-title="projectSourceCode">
                             <i class="fa-brands fa-github"></i>
                         </a>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                    <picture>
                        <source srcset="/assets/images/project_3.webp" type="image/webp">
                        <img src="/assets/images/project_3.webp" loading="lazy" width="600" height="400" data-lang-alt="altProyect3Image" alt="[Imagen de Proyecto 3]" data-lang-alt="project3AltImage" class="w-full h-48 object-cover">
                     </picture>
                     <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100" data-lang="project3Title">Videojuego Gálaga</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4" data-lang="project3Desc">
                            [Breve descripción del proyecto, tecnologías usadas y tu rol.]
                        </p>
                        <a href="#" class="text-indigo-900 dark:text-indigo-200 hover:underline font-medium inline-flex items-center">
                             <span data-lang="projectSeeMore">Ver más</span> <i class="fa-solid fa-arrow-right ml-2"></i>
                        </a>
                         <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 ml-4 inline-flex items-center" title="Código Fuente" data-lang-title="projectSourceCode">
                             <i class="fa-brands fa-github"></i>
                         </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="experiencia" class="mb-4 pt-12">
            <h2 class="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-indigo-200" data-lang="experienceTitle">Experiencia Profesional</h2>
            <div class="space-y-8">
                <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex gap-4 items-start">
                    <i class="fa-solid fa-suitcase dark:text-gray-100 mt-2 flex-shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100" data-lang="exp1Title">Gestor de proyectos informáticos - Ministerio de Vivienda y Agenda Urbana</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-2" data-lang="exp1Dates">Octubre 2024 - Actualidad</p>
                        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            <li data-lang="exp1Task1">Coordino 4 equipos de trabajo pertenecientes a 3 empresas distintas en materia de desarrollo, mantenimiento y soporte que prestan servicio a 2 Subdirecciones Generales.</li>
                            <li data-lang="exp1Task2">Participo en la mejora de procesos mediante la implementación de metodologías que permiten un mayor control y eficiencia ante las tareas de desarrollo, soporte y mantenimiento de los distintos equipos de trabajo.</li>
                            <li data-lang="exp1Task3">Gestiono las acciones necesarias para el mantenimiento de los sistemas en colaboración con el equipo especializado en sistemas y comunicaciones.</li>
                             <li data-lang="exp1Task4">Analizo las herramientas y soluciones actuales para encontrar mejoras a implementar en los sistemas en relación, mayoritariamente, al rendimiento y la experiencia de usuario.</li>
                             <li data-lang="exp1Task5">Diseño informes que permiten una visualización general práctica de cada uno de los sistemas informáticos y equipos gestionados.</li>
                             <li data-lang="exp1Task6">Elaboro estadísticas haciendo uso de la herramienta de Google Analytics, como parte de la gestión del sistema con información anualizada y la elaboración de informes personalizados.</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex gap-4 items-start">
                    <i class="fa-solid fa-suitcase dark:text-gray-100 mt-2 flex-shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100" data-lang="exp3Title">Gestor de Sistemas Informáticos en Prácticas - Instituto Nacional de Administración Pública</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-2" data-lang="exp3Dates">Junio 2024 - Octubre 2024</p>
                         <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            <li data-lang="exp3Task1">Formación orientada a la práctica</li>
                            <li data-lang="exp3Task2">Curso en Gobernanza de datos e igualdad</li>
                        </ul>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex gap-4 items-start">
                    <i class="fa-solid fa-suitcase dark:text-gray-100 mt-2 flex-shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100" data-lang="exp2Title">Analista Programador Backend - Valuat</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-2" data-lang="exp2Dates">Noviembre 2021 - Febrero 2023</p>
                        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            <li data-lang="exp2Task1">Implementé la metodología de trabajo Scrum con desarrollos en sprints de dos semanas que permitió una mayor eficiencia y rapidez del mismo.</li>
                            <li data-lang="exp2Task2">Mejoré la eficiencia del sistema BackEnd hasta un 35% en su conjunto respecto al sistema antiguo, a partir del análisis y diseño.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="habilidades" class="mb-4 pt-12">
            <h2 class="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-indigo-200" data-lang="skillsTitle">Habilidades</h2>
            <div class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                            <i class="fa-solid fa-code"></i>
                            <span data-lang="skillsTechTitle">Habilidades Técnicas</span>
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">Laravel</span>
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">Java</span>
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">PHP</span>
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">MariaDB</span>
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                            <span class="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">Elasticsearch</span>
                            </div>
                    </div>
                    <div>
                         <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                            <i class="fa-solid fa-language"></i>
                            <span data-lang="skillsLangTitle">Idiomas</span>
                        </h3>
                         <div class="space-y-2">
                            <p class="dark:text-gray-200"><strong data-lang="skillsLangSpanish">Español:</strong> <span data-lang="skillsLangSpanishLevel" class="text-gray-800 dark:text-gray-200">Nativo</span></p>
                            <p class="dark:text-gray-200"><strong data-lang="skillsLangEnglish">Inglés:</strong> <span data-lang="skillsLangEnglishLevel" class="text-gray-800 dark:text-gray-200">Fluido</span></p>
                         </div>
                    </div>
                     <div>
                         <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                            <span data-lang="skillsToolsTitle">Herramientas</span>
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Google Analytics</span>
                            <span class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Google Cloud</span>
                            <span class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Scrum</span>
                            <span class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Xampp</span>

                            </div>
                    </div>
                     <div>
                         <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                             <i class="fa-solid fa-users"></i>
                             <span data-lang="skillsSoftTitle">Habilidades Blandas</span>
                         </h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium" data-lang="skillsSoftComm">Comunicación</span>
                            <span class="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium" data-lang="skillsSoftTeam">Trabajo en equipo</span>
                            <span class="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium" data-lang="skillsSoftProblem">Resolución de problemas</span>
                            <span class="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium" data-lang="skillsSoftAdapt">Adaptabilidad</span>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contacto" class="mb-4 pt-12">
            <h2 class="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-indigo-200" data-lang="contactTitle">Contacto</h2>
            <div class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center">
                <p class="text-lg mb-6 text-gray-800 dark:text-gray-200" data-lang="contactIntro">
                    ¿Interesado/a en saber más? ¡No dudes en contactarme!
                </p>
                <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-6">
                     <a href="contact" class="text-gray-600 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 transition duration-300 flex items-center gap-2">
                        <i class="fa-solid fa-paper-plane"></i>
                         <span data-lang="contactMail">Contáctame</span>
                     </a>
                     <a href="https://www.linkedin.com/in/marcos-diaz-oliva/" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 transition duration-300 flex items-center gap-2">
                        <i class="fa-brands fa-linkedin"></i>
                         LinkedIn
                     </a>
                     <a href="https://github.com/diazoliva" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-indigo-900 dark:hover:text-indigo-200 transition duration-300 flex items-center gap-2">
                        <i class="fa-brands fa-github"></i>
                         GitHub
                     </a>
                     </div>
                 <p class="text-gray-500 dark:text-gray-400 mb-4" data-lang="contactDownloadPrompt">También puedes descargar mi CV:</p>
                 <div class="flex justify-center gap-4">
                    <a id="download-cv-es" href=".assets/documents/CV_ES.pdf" download="CV_Marcos_ES.pdf" class="items-center justify-center bg-indigo-800 dark:bg-indigo-300 text-white px-5 py-2 rounded-lg hover:bg-indigo-900 dark:hover:bg-indigo-100 dark:text-gray-900 transition duration-300 shadow-md">
                        <span data-lang="contactDownloadButtonES" class="mr-2">Descargar CV</span>
                        <i class="fas fa-download"></i>
                    </a>
                    <a id="download-cv-en" href="/assets/documents/CV_EN.pdf" download="CV_Marcos_EN.pdf" class="items-center justify-center bg-indigo-800 dark:bg-indigo-300 text-white px-5 py-2 rounded-lg hover:bg-indigo-900 dark:hover:bg-indigo-100 dark:text-gray-900 transition duration-300 shadow-md">
                        <span data-lang="contactDownloadButtonEN" class="mr-2">Download CV</span>
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>
        </section>

    </main>

    ${M()}
  `}function _(){return`
    <form id="form" name="contact" method="POST" netlify class="space-y-6" autocomplete="on">
      <input type="hidden" name="form-name" value="contact-es" />
      <div>
        <label for="nombre-completo" data-lang="contactFormLabelName" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Nombre completo</label>
        <input type="text" name="nombre-completo" id="nombre-completo" autocomplete="name" required data-lang-placeholder="contactFormInputName" placeholder="Tu nombre y apellidos" class="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:border-indigo-800 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="correo" data-lang="contactFormLabelMail" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Correo electrónico</label>
        <input type="email" name="correo" id="correo" autocomplete="email" required data-lang-placeholder="contactFormInputMail" placeholder="tu@email.com" class="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:border-indigo-800 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="telefono" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          <span data-lang="contactFormLabelPhone">Número de teléfono</span>
          <span data-lang="contactFormLabelOptional" class="text-xs text-gray-500 dark:text-gray-400">(Opcional)</span>
        </label>
        <input type="tel" name="telefono" id="telefono" autocomplete="tel" data-lang-placeholder="contactFormInputPhone" placeholder="+34 600 000 000" class="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:border-indigo-800 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="mensaje" data-lang="contactFormLabelMessage" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Mensaje</label>
        <textarea id="mensaje" name="mensaje" autocomplete="off" rows="5" required data-lang-placeholder="contactFormInputMessage" placeholder="Escribe aquí tu consulta o mensaje..." class="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:border-indigo-800 transition duration-150 ease-in-out sm:text-sm"></textarea>
      </div>
      <div class="text-center pt-4">
        <button type="submit" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-800 dark:bg-indigo-300 hover:bg-indigo-900 dark:hover:bg-indigo-100 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 transition duration-300 shadow-md cursor-pointer">
          <span data-lang="contactFormSend"> Enviar </span>
          <i class="fa-solid fa-paper-plane ml-2"></i>
        </button>
      </div>
    </form>
  `}function U(){return`
    ${j(!0)}
    
    <main class="container mx-auto px-6 pt-5 md:pt-10 pb-10 md:pb-10 flex-grow bg-gray-50 dark:bg-gray-800 mb-6">
      <div class="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 md:p-10 rounded-xl shadow-lg">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-800 dark:text-indigo-200" data-lang="contactFormTitle">
          Ponte en Contacto
        </h2>
        <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-10" data-lang="contactFormIntro">
          ¿Tienes alguna pregunta o propuesta? Rellena el formulario.
        </p>
        
        ${_()}
      </div>
    </main>
    
    ${M()}
  `}const W={"/":b,"/index.html":b,"/contact":U};function R(){const t=document.getElementById("mobile-menu-button"),e=document.getElementById("mobile-menu"),a=document.getElementById("mobile-menu-icon");t&&e&&a&&(t.addEventListener("click",()=>{e.classList.toggle("hidden");const n=!e.classList.contains("hidden");a.src=n?"https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/x.svg":"https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg",a.alt=n?"Cerrar":"Menu"}),e.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{e.classList.add("hidden"),a.src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg",a.alt="Menu"})}))}function K(){var e;document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(n){var r;const o=this.getAttribute("href");if(o.length>1&&o.startsWith("#")){const s=document.querySelector(o);if(s){n.preventDefault();const i=((r=document.querySelector("nav"))==null?void 0:r.offsetHeight)||70,l=s.getBoundingClientRect().top+window.pageYOffset-i;window.scrollTo({top:l,behavior:"smooth"})}}else o==="#"&&(n.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})});const t=((e=document.querySelector("nav"))==null?void 0:e.offsetHeight)||70;document.querySelectorAll("section").forEach(a=>{a.style.scrollMarginTop=`${t}px`})}const x="theme",Q="dark",v=window.matchMedia("(prefers-color-scheme: dark)"),J={light:"fa-sun",dark:"fa-moon",system:"fa-desktop"};function D(t){document.querySelectorAll(".theme-icon").forEach(e=>{const a=t==="system"?v.matches?"dark":"light":t;e.classList.remove("fa-sun","fa-moon","fa-desktop"),e.classList.add(J[a])})}function y(t){const e=v.matches,a=t==="dark"||t==="system"&&e;document.documentElement.classList.toggle(Q,a),D(t)}function X(){const t=localStorage.getItem(x)||"system";y(t),v.addEventListener("change",()=>{(localStorage.getItem(x)||"system")==="system"&&y("system")})}function Y(){const t=Array.from(document.querySelectorAll(".theme-dropdown"));if(!t.length)return;const e=()=>t.forEach(a=>a.querySelector(".theme-menu").classList.add("hidden"));document.addEventListener("click",a=>{a.target.closest(".theme-dropdown")||e()}),t.forEach(a=>{const n=a.querySelector(".theme-button"),o=a.querySelector(".theme-menu"),r=a.querySelectorAll("[data-theme]");let s=!1;const i=()=>o.classList.remove("hidden"),p=()=>!s&&o.classList.add("hidden"),l=()=>{s=!s,s||p()};let c;const g=()=>{c=setTimeout(p,120)},d=()=>clearTimeout(c);n.addEventListener("mouseenter",()=>{d(),i()}),o.addEventListener("mouseenter",d),n.addEventListener("mouseleave",g),o.addEventListener("mouseleave",g),n.addEventListener("click",m=>{m.stopPropagation(),l(),i()}),r.forEach(m=>m.addEventListener("click",()=>{const u=m.dataset.theme;localStorage.setItem("theme",u),y(u),s=!1,p()}))}),D(localStorage.getItem(x)||"system")}"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");window.switchLanguage=P;const h=document.getElementById("app"),k=async()=>{const t=window.location.pathname,e=W[t]||b,a=300;h.classList.add("opacity-0","transition-opacity","duration-300"),await new Promise(n=>setTimeout(n,a)),h.innerHTML=e(),window.scrollTo({top:0,behavior:"smooth"}),R(),K(),$(),G(),X(),Y(),h.offsetWidth,h.classList.remove("opacity-0")};document.addEventListener("click",t=>{const e=t.target.closest("[data-link]");if(e){t.preventDefault();const a=e.getAttribute("href");history.pushState(null,"",a),k()}});window.addEventListener("popstate",k);k();
