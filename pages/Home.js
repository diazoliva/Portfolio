import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default function HomePage() {
  return `
    ${Navbar()}

    <header class="relative bg-cover bg-center bg-no-repeat pt-20 pb-15 rounded-b-xl shadow-xl" style="background-image: linear-gradient(rgba(120, 120, 131, 0.8), rgba(99, 94, 151, 0.8)), url(./assets/images/MIVAU.webp);">
        <div class="absolute inset-0 rounded-b-xl bg-gradient-to-b opacity-50 from-indigo-900 to-gray-400 opacity-60 dark:from-gray-900 dark:to-black dark:opacity-80 transition-opacity duration-500"></div>
        <div class="relative container mx-auto px-6 text-center text-gray-50 dark:text-gray-200">
            <img src="./assets/images/personal.webp" alt="Foto personal" data-lang-alt="heroAltImage" class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"/>
            <h1 class="text-4xl md:text-5xl font-bold mb-2" data-lang="heroTitle"> Hola, soy Marcos </h1>
            <p class="text-xl md:text-2xl mb-8" data-lang="heroSubtitle"> Gestor de Proyectos Informáticos </p>
            <a href="contact" class="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md"> Contáctame </a>
            <a href="#sobre-mi" class="block mx-auto mt-12 cursor-pointer animate-bounce text-3xl text-white dark:text-gray-200">
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
                    <img src="https://placehold.co/600x400/e0e7ff/4f46f5?text=Proyecto+1" alt="[Imagen de Proyecto 1]" data-lang-alt="project1AltImage" class="w-full h-48 object-cover">
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
                    <img src="https://placehold.co/600x400/dbeafe/3b82f6?text=Proyecto+2" alt="[Imagen de Proyecto 2]" data-lang-alt="project2AltImage" class="w-full h-48 object-cover">
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
                     <img src="https://placehold.co/600x400/ccfbf1/14b8a6?text=Proyecto+3" alt="[Imagen de Proyecto 3]" data-lang-alt="project3AltImage" class="w-full h-48 object-cover">
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
                    <a id="download-cv-es" href="./assets/documents/CV_ES.pdf" download="CV_Marcos_ES.pdf" class="items-center justify-center bg-indigo-800 dark:bg-indigo-300 text-white px-5 py-2 rounded-lg hover:bg-indigo-900 dark:hover:bg-indigo-100 dark:text-gray-900 transition duration-300 shadow-md">
                        <span data-lang="contactDownloadButtonES" class="mr-2">Descargar CV</span>
                        <i class="fas fa-download"></i>
                    </a>
                    <a id="download-cv-en" href="./assets/documents/CV_EN.pdf" download="CV_Marcos_EN.pdf" class="items-center justify-center bg-indigo-800 dark:bg-indigo-300 text-white px-5 py-2 rounded-lg hover:bg-indigo-900 dark:hover:bg-indigo-100 dark:text-gray-900 transition duration-300 shadow-md">
                        <span data-lang="contactDownloadButtonEN" class="mr-2">Download CV</span>
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>
        </section>

    </main>

    ${Footer()}
  `;
}
