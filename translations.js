const translations = {
  es: {
    // Menú principal
    'nav.inicio': 'Inicio',
    'nav.quienes': 'Quiénes Somos',
    'nav.atlas': 'Evidence Atlas',
    'nav.recursos': 'Recursos y Publicaciones',
    'nav.divulgacion': 'Divulgación',
    
    // Index
    'index.proyecto': 'Proyecto',
    'index.description': 'El proyecto DigitalRift busca comprender las implicaciones ambientales y socioeconómicas de las políticas públicas de Digitalización de la Agricultura.',
    
    // Quiénes somos
    'quienes.titulo': 'Quiénes Somos',
    'quienes.content': 'Equipo del IEGD-CSIC',
    
    // Recursos
    'recursos.titulo': 'Recursos y Publicaciones',
    'recursos.publicaciones': 'Publicaciones',
    'recursos.protocolo': 'Protocolo',
    
    // Divulgación
    'divulgacion.titulo': 'Divulgación',
    'divulgacion.content': 'Equipo del IEGD-CSIC',
    
    // EviAtlas
    'atlas.sobre': 'Sobre este Evidence Atlas',
    'atlas.cerrar': 'Cerrar',
    'atlas.volver': '← Volver',
    'atlas.info': 'info',
  },
  en: {
    // Main menu
    'nav.inicio': 'Home',
    'nav.quienes': 'Who are we?',
    'nav.atlas': 'Evidence Atlas',
    'nav.recursos': 'Resources and Publications',
    'nav.divulgacion': 'Dissemination',
    
    // Index
    'index.proyecto': 'Project',
    'index.description': 'The DigitalRift project seeks to understand the environmental and socio-economic implications of Public policies for the Digitalisation of Agriculture.',
    
    // Who are we
    'quienes.titulo': 'Who are we?',
    'quienes.content': 'Team from IEGD-CSIC',
    
    // Resources
    'recursos.titulo': 'Resources and Publications',
    'recursos.publicaciones': 'Publications',
    'recursos.protocolo': 'Protocol',
    
    // Dissemination
    'divulgacion.titulo': 'Dissemination',
    'divulgacion.content': 'Team from IEGD-CSIC',
    
    // EviAtlas
    'atlas.sobre': 'About this Evidence Atlas',
    'atlas.cerrar': 'Close',
    'atlas.volver': '← Back',
    'atlas.info': 'info',
  }
};

// Obtener idioma guardado o usar español por defecto
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'es';
}

// Cambiar idioma
function changeLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
    updateLanguageSwitcher(lang);
  }
}

// Aplicar traducciones a todos los elementos
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Actualizar selector de idioma
function updateLanguageSwitcher(lang) {
  const langLinks = document.querySelectorAll('.idiomas a');
  langLinks.forEach(link => {
    link.style.fontWeight = link.getAttribute('data-lang') === lang ? 'bold' : 'normal';
    link.style.opacity = link.getAttribute('data-lang') === lang ? '1' : '0.6';
  });
}

// Inicializar traducciones cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);
  updateLanguageSwitcher(currentLang);
  
  // Agregar event listeners a los botones de idioma
  const langLinks = document.querySelectorAll('.idiomas a[data-lang]');
  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
});
