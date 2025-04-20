export default function ContactForm() {
  return `
    <form id="form-es" name="contact-es" method="POST" netlify class="space-y-6">
      <input type="hidden" name="form-name" value="contact-es" />
      <div>
        <label for="nombre-completo-es" class="block text-sm font-medium text-gray-700 mb-1" data-lang="contactLabelName">Nombre completo</label>
        <input type="text" name="nombre-completo" id="nombre-completo-es" required placeholder="Tu nombre y apellidos" data-lang-placeholder="contactPlaceholderName" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="correo-es" class="block text-sm font-medium text-gray-700 mb-1" data-lang="contactLabelEmail">Correo electrónico</label>
        <input type="email" name="correo" id="correo-es" required placeholder="tu@email.com" data-lang-placeholder="contactPlaceholderEmail" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="telefono-es" class="block text-sm font-medium text-gray-700 mb-1">
          <span data-lang="contactLabelPhone">Número de teléfono</span>
          <span class="text-xs text-gray-500" data-lang="contactPhoneOptional">(Opcional)</span>
        </label>
        <input type="tel" name="telefono" id="telefono-es" placeholder="+34 600 000 000" data-lang-placeholder="contactPlaceholderPhone" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="mensaje-es" class="block text-sm font-medium text-gray-700 mb-1" data-lang="contactLabelMessage">Mensaje</label>
        <textarea id="mensaje-es" name="mensaje" rows="5" required placeholder="Escribe aquí tu consulta o mensaje..." data-lang-placeholder="contactPlaceholderMessage" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"></textarea>
      </div>
      <div class="text-center pt-4">
        <button type="submit" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-md" data-lang="contactSubmitButton">
          Enviar
        </button>
      </div>
    </form>

    <form id="form-en" name="contact-en" method="POST" netlify class="space-y-6 hidden">
      <input type="hidden" name="form-name" value="contact-en" />
      <div>
        <label for="nombre-completo-en" class="block text-sm font-medium text-gray-700 mb-1" data-lang="contactLabelName">Full name</label>
        <input type="text" name="full-name" id="nombre-completo-en" required placeholder="Your first and last name" data-lang-placeholder="contactPlaceholderName" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="correo-en" class="block text-sm font-medium text-gray-700 mb-1" data-lang="contactLabelEmail">Email address</label>
        <input type="email" name="email" id="correo-en" required placeholder="you@email.com" data-lang-placeholder="contactPlaceholderEmail" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="telefono-en" class="block text-sm font-medium text-gray-700 mb-1">
          <span data-lang="contactLabelPhone">Phone number</span>
          <span class="text-xs text-gray-500" data-lang="contactPhoneOptional">(Optional)</span>
        </label>
        <input type="tel" name="phone" id="telefono-en" placeholder="+1 555 000 000" data-lang-placeholder="contactPlaceholderPhone" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm">
      </div>
      <div>
        <label for="mensaje-en" class="block text-sm font-medium text-gray-700 mb-1" data-lang="contactLabelMessage">Message</label>
        <textarea id="mensaje-en" name="message" rows="5" required placeholder="Write your inquiry or message here..." data-lang-placeholder="contactPlaceholderMessage" class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"></textarea>
      </div>
      <div class="text-center pt-4">
        <button type="submit" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-md" data-lang="contactSubmitButton">
          Send Message
        </button>
      </div>
    </form>
  `;
}