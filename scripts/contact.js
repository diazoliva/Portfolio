document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los formularios
    const formEs = document.getElementById('form-es');
    const formEn = document.getElementById('form-en');

    // Manejar cambio de formulario al cambiar idioma
    function handleFormVisibility(lang) {
        if (formEs && formEn) {
            if (lang === 'es') {
                formEs.classList.remove('hidden');
                formEn.classList.add('hidden');
            } else if (lang === 'en') {
                formEs.classList.add('hidden');
                formEn.classList.remove('hidden');
            }
        }
    }

    // Escuchar cambios de idioma
    document.querySelectorAll('.lang-button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('onclick').includes("'es'") ? 'es' : 'en';
            handleFormVisibility(lang);
        });
    });

    // Inicializar visibilidad del formulario
    const currentLang = document.documentElement.lang || 'es';
    handleFormVisibility(currentLang);
});