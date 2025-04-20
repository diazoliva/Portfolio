export default function Footer() {
  return `
    <footer class="bg-gray-800 text-white py-6 rounded-t-lg">
      <div class="container mx-auto px-6 text-center">
        <div class="container flex justify-center">
          <p data-lang="footerRights">
            © ${new Date().getFullYear()} Marcos Díaz Oliva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  `;
}