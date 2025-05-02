export default function ContactForm() {
  return `
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
  `;
}