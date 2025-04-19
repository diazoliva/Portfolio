// --- Menú Móvil ---
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');

    if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenuIcon.src = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg';
                mobileMenuIcon.alt = 'Menu';
            } else {
                mobileMenuIcon.src = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/x.svg';
                mobileMenuIcon.alt = 'Cerrar';
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuIcon.src = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/menu.svg';
                    mobileMenuIcon.alt = 'Menu';
                }
            });
        });
    }

    // --- Scroll Suave para anclas ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1 && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    e.preventDefault();
                    const headerOffset = document.querySelector('nav')?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
            } else if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });

    // Ajustar scroll-margin-top para secciones
    const navHeight = document.querySelector('nav')?.offsetHeight || 70;
    document.querySelectorAll('[id]').forEach((section) => {
        if (section.tagName === 'SECTION' || section.classList.contains('scroll-target')) {
            section.style.scrollMarginTop = `${navHeight}px`;
        }
    });
});