import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ContactForm from '../components/ContactForm.js';

export default function ContactPage() {
  return `
    ${Navbar(true)}
    
    <main class="container mx-auto px-6 pt-5 md:pt-10 pb-10 md:pb-10 flex-grow">
      <div class="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-800" data-lang="contactFormTitle">
          Ponte en Contacto
        </h2>
        <p class="text-lg text-center text-gray-600 mb-8 md:mb-10" data-lang="contactFormIntro">
          ¿Tienes alguna pregunta o propuesta? Rellena el formulario.
        </p>
        
        ${ContactForm()}
      </div>
    </main>
    
    ${Footer()}
  `;
}