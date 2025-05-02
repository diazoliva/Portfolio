export default function Footer() {
  return `
    <footer class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 transition-colors duration-300">
      <div class="container mx-auto px-6 text-center">
        <div class="flex justify-center">
          <p data-lang="footerRights">
            © ${new Date().getFullYear()} Marcos Díaz Oliva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  `;
}
