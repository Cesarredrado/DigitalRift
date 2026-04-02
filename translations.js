const translations = {
  es: {
    // Menú principal
    'nav.inicio': 'Inicio',
    'nav.quienes': 'Quiénes Somos',
    'nav.atlas': 'Evidence Atlas',
    'nav.recursos': 'Publicaciones',
    'nav.divulgacion': 'Divulgación',
    'nav.contacto': 'Contacto',
    
    // Index
    'index.proyecto': 'DigitalRift',
    'index.description': 'El proyecto DigitalRift busca comprender las implicaciones ambientales y socioeconómicas de las políticas públicas de Digitalización de la Agricultura.',
    'index.marcoLogico': '/MarcoLogico.drawio.png',
    'index.contactTitle': 'Contacto',
    'index.contactDescription': 'Para consultas del proyecto, escríbenos directamente por correo.',
    'index.contactButton': 'Enviar correo',
    'index.addressTitle': 'Dirección',
    'index.addressText': 'Instituto de Economía, Geografía y Demografía (IEGD)<br>Centro de Ciencias Humanas y Sociales (CCHS)<br>Centro Superior de Investigaciones Científicas (CSIC)<br>C. de Albansanz, 26, San Blas-Canillejas, 28037 Madrid',

    // Footer
    'footer.copyright': '© 2026 DigitalRift Project - IEGD-CSIC. Todos los derechos reservados.',
    
    // Quiénes somos
    'quienes.titulo': 'Quiénes Somos',
    'quienes.content': 'Equipo del IEGD-CSIC',

    // César
    'quienes.cesar.bio1': 'Investigador predoctoral JAE-PRE en el Instituto de Economía, Geografía y Demografía (IEGD-CSIC) y estudiante de doctorado en Ciencia y Tecnología Ambientales en la Universidad Autónoma de Barcelona (UAB). Su tesis, enmarcada dentro del proyecto DigitalRift, analiza las implicaciones ambientales y socioeconómicas de la digitalización de la agricultura en España y la Unión Europea.',
    'quienes.cesar.bio2': 'Como economista ecológico le interesan una amplia variedad de temas como la Diversidad biocultural, la Gobernanza del Agua, la Justicia Ambiental o la agricultura. En su trabajo emplea métodos mixtos e intenta incluir el arte como herramienta de investigación.',
    'quienes.cesar.bio3': 'También lidera el proyecto <a href="https://www.cascarrias.es" target="_blank" rel="noopener noreferrer">Cascarrias</a> para conservar y poner en valor la biodiversidad y el patrimonio inmaterial de la Ribera de Navarra.',

    // Soledad
    'quienes.sol.bio1': 'Investigadora Postdoctoral Ramón y Cajal e IP del proyecto DigitalRift. Sol es economista de formación, especializada en economía alimentaria y de la salud. Está interesada en el análisis de políticas y gobernanza para promover transiciones socioambientales saludables, particularmente en el ámbito de los sistemas alimentarios.',
    'quienes.sol.bio2': 'Soledad Cuevas es economista sanitaria de formación. La mayor parte de su investigación se centra en los sistemas alimentarios y los determinantes socioeconómicos o estructurales de la salud, y está muy orientada a la política o la acción. También se interesa por la economía política de las intervenciones destinadas a promover objetivos tanto medioambientales como sanitarios. En su investigación utiliza métodos mixtos y el pensamiento sistémico, incluidos el análisis de las partes interesadas y la modelización económica. También ha escrito sobre la evaluación económica de intervenciones complejas, One Health y Planetary Health. Le interesa utilizar la investigación para apoyar y fundamentar políticas y acciones transformadoras.',
    'quienes.sol.areas': 'Áreas específicas de interés incluyen:',
    'quienes.sol.area1': 'Política comercial, comportamiento corporativo y cadenas de valor global',
    'quienes.sol.area2': 'Impuestos ambientales, financiarización y mecanismos de financiación en las políticas alimentarias y climáticas',
    'quienes.sol.area3': 'Políticas de digitalización agraria',
    'quienes.sol.area4': 'Políticas de promoción de la agricultura urbana',

    // Daniel
    'quienes.dani.cargo': 'Científico Titular en el Instituto de Economía, Geografía y Demografía (IEGD-CSIC)',
    'quienes.dani.bio': 'Su carrera profesional es híbrida y combina la investigación, la consultoría, la formación y el activismo. Esta diversidad de actividades, junto con mi formación multidisciplinar (ecología, sociología) permite una rica combinación de puntos de vista y experiencias útiles para el enfoque transdisciplinar y pluriepistemológico de los sistemas alimentarios sostenibles y la investigación en agroecología, que actualmente desarrolla en investigación sobre Geografía Humana. Con altos conocimientos sobre la interacción entre investigación y política. Ha sido autor de las dos primeras recopilaciones sobre políticas alimentarias urbanas en España y ha publicado varios documentos de divulgación sobre el tema. En diálogo con las discusiones científicas internacionales, he investigado sobre los vínculos entre las políticas alimentarias locales y otros enfoques como la ecología política y la agroecología, a través de cuestiones específicas como la equidad de género; la acción climática; la salud y la seguridad alimentaria; la restauración del suelo agrícola urbano; la agrobiodiversidad; o la planificación alimentaria a escala de ciudad-región. Su enfoque híbrido sobre los sistemas y políticas alimentarias territorializadas le ha permitido participar en algunos procesos globales de gran impacto para mejorar el rendimiento de las políticas alimentarias locales en materia de acción climática: «Declaración de Glasgow sobre la Alimentación y el Clima» (presentada en la COP26), «El Desafío de Barcelona sobre la Buena Alimentación y el Clima», Pacto de Política Alimentaria Urbana de Milán (MUFPP) y el Ayuntamiento de Barcelona, y presentado en el 7º Foro Global del MUFPP (Barcelona 2021).',

    // Almudena
    'quienes.almu.cargo': 'Profesora Titular en la Universidad de Valladolid',
    'quienes.almu.bio': 'Ingeniera Agrónoma especialidad Economía y Sociología Agraria. Doctora en Economía Agraria Alimentaria y de los Recursos Naturales',
    
    // Recursos
    'recursos.titulo': 'Publicaciones',
    'recursos.publicaciones': 'Publicaciones',
    'recursos.publicacionesIntro': 'Listado de publicaciones del proyecto.',
    'recursos.availableFrom': 'Disponible en:',
    'recursos.protocolo': 'Protocolo',
    
    // Divulgación
    'divulgacion.titulo': 'Divulgación',
    'divulgacion.content': 'Próximamente...',
    'divulgacion.congresosTitulo': 'Presentaciones en congresos',
    'divulgacion.congreso1': '<span class="timeline-date">2026/04/24</span><span class="timeline-text"><strong>Systematic mapping of the implications of agricultural digitization policies in the European Union</strong>. XVI Congress of Agroecology and Ecological Agriculture. Pamplona (Spain). <span class="timeline-tag pending">Pendiente</span><br><span class="timeline-meta">Presentado por César Redrado.</span> <a href="https://www.eventos.agroecologia.net/" target="_blank" rel="noopener noreferrer">Web del congreso</a></span>',
    'divulgacion.congreso2': '<span class="timeline-date">2026/03/19</span><span class="timeline-text"><strong>Imaginaries of Agricultural Digitalisation: A Visual Atlas</strong>. IEGD Work In Progress (WIP) Seminars.<br><span class="timeline-meta">Presentado por César Redrado.</span></span>',
    'divulgacion.congreso3': '<span class="timeline-date">2026/02/26</span><span class="timeline-text"><strong>Systematic mapping of the implications of agricultural digitization policies in the European Union</strong>. III CCHS Predoctoral workshops.<br><span class="timeline-meta">Presentado por César Redrado.</span> <a href="https://cchs.csic.es/es/event/iii-jornadas-predoctorales-desenredando-pasado-creando-futuro-conversaciones-predoctorales" target="_blank" rel="noopener noreferrer">Web del evento</a></span>',
    'divulgacion.congreso4': '<span class="timeline-date">2025/11/10-14</span><span class="timeline-text"><strong>Regional Youth Workshop on the Intergovernmental Science-Policy Platform for Biodiversity and Ecosystem Services (IPBES) for Europe and Central Asia 2025</strong>. Isle of Vilm, Germany.<br><span class="timeline-meta">Presentado por César Redrado.</span> <a href="https://www.bfn.de/en/events-ina/regional-youth-workshop-ipbes-europe-and-central-asia-2025" target="_blank" rel="noopener noreferrer">Web del congreso</a></span>',
    'divulgacion.congreso5': '<span class="timeline-date">2025/07/08</span><span class="timeline-text"><strong>Implications of public policy interventions for the digitalisation of European Agriculture. A systematic map</strong>. European Society of Rural Sociology (ESRS) Congress 2025. Riga, Latvia.<br><span class="timeline-meta">Presentado por César Redrado.</span> <a href="https://esrs2025.rsu.lv/" target="_blank" rel="noopener noreferrer">Web del congreso</a></span>',
    'divulgacion.congreso6': '<span class="timeline-date">2025/07/08</span><span class="timeline-text"><strong>Developing evaluation guidelines for agricultural digitalisation policies</strong>. European Society of Rural Sociology (ESRS) Congress 2025. Riga, Latvia.<br><span class="timeline-meta">Presentado por Soledad Cuevas.</span> <a href="https://esrs2025.rsu.lv/" target="_blank" rel="noopener noreferrer">Web del congreso</a></span>',

    // Contacto
    'contacto.titulo': 'Contacto',
    'contacto.emailLabel': 'Correo electrónico:',
    'contacto.addressTitle': 'Dirección',
    'contacto.addressText': 'Instituto de Economía, Geografía y Demografía (IEGD)<br>Centro de Ciencias Humanas y Sociales (CCHS)<br>Centro Superior de Investigaciones Científicas (CSIC)<br>C. de Albansanz, 26, San Blas-Canillejas, 28037 Madrid',
    
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
    'nav.recursos': 'Publications',
    'nav.divulgacion': 'Dissemination',
    'nav.contacto': 'Contact',
    
    // Index
    'index.proyecto': 'DigitalRift',
    'index.description': 'The DigitalRift project seeks to understand the environmental and socio-economic implications of Public policies for the Digitalisation of Agriculture.',
    'index.marcoLogico': '/LogicalFramework.drawio.png',
    'index.contactTitle': 'Contact',
    'index.contactDescription': 'For project-related questions, contact us directly by email.',
    'index.contactButton': 'Send email',
    'index.addressTitle': 'Address',
    'index.addressText': 'Institute of Economics, Geography and Demography (IEGD)<br>Centre for Human and Social Sciences (CCHS)<br>Spanish National Research Council (CSIC)<br>C. de Albansanz, 26, San Blas-Canillejas, 28037 Madrid',

    // Footer
    'footer.copyright': '© 2026 DigitalRift Project - IEGD-CSIC. All rights reserved.',
    
    // Who are we
    'quienes.titulo': 'Who are we?',
    'quienes.content': 'IEGD-CSIC team and project collaborators',

    // César
    'quienes.cesar.bio1': 'JAE-PRE predoctoral researcher at the Institute of Economics, Geography and Demography (IEGD-CSIC) and PhD student in Environmental Science and Technology at the Autonomous University of Barcelona (UAB).',
    'quienes.cesar.bio2': 'As an ecological economist he is interested in a wide range of topics including biocultural diversity, water governance, environmental justice and agriculture.',
    'quienes.cesar.bio3': 'He also leads the <a href="https://www.cascarrias.es" target="_blank" rel="noopener noreferrer">Cascarrias</a> project to conserve and enhance the biodiversity and intangible heritage of the Ribera de Navarra.',

    // Soledad
    'quienes.sol.bio1': 'Ramón y Cajal Postdoctoral Researcher and PI of the DigitalRift project. Sol is an economist by training, specialised in food and health economics. She is interested in policy analysis and governance to promote healthy socio-environmental transitions, particularly in the context of food systems.',
    'quienes.sol.bio2': 'Soledad Cuevas is a health economist by training. The bulk of her research focuses on food systems and the socioeconomic or structural determinants of health, and is strongly policy- or action-oriented. She is also interested in the political economy of interventions aimed at promoting both environmental and health objectives. She obtained her PhD at LSHTM, where she studied the liberalisation of palm oil trade in India. After her doctorate and before returning to LSHTM, she worked at SOAS at the Centre for Environment, Development and Policy (CEDeP), and as an independent consultant. She works on the SHEFS project on Sustainable and Healthy Food Systems and the Pathfinder Initiative on applying climate change mitigation initiatives to promote a healthy transition to a carbon-free future. Her research uses mixed methods and systems thinking, including stakeholder analysis and economic modelling. She has also written on the economic evaluation of complex interventions, One Health and Planetary Health. She is interested in using research to support and inform transformative policies and actions. Geographic expertise: India, South Africa, the United Kingdom and Spain.',
    'quienes.sol.areas': 'Specific areas of interest include:',
    'quienes.sol.area1': 'Trade policy, corporate behaviour and global value chains',
    'quienes.sol.area2': 'Environmental taxes, financialisation and financing mechanisms in food and climate policies',
    'quienes.sol.area3': 'Agricultural digitalisation policies',
    'quienes.sol.area4': 'Urban agriculture promotion policies',

    // Daniel
    'quienes.dani.cargo': 'Tenured Scientist at the Institute of Economics, Geography and Demography (IEGD-CSIC)',
    'quienes.dani.bio': 'His professional career is hybrid, combining research, consultancy, training and activism. This diversity of activities, together with his multidisciplinary background (ecology, sociology), enables a rich combination of perspectives and experiences useful for a transdisciplinary and pluriepistemological approach to sustainable food systems and agroecology research, currently developed within Human Geography. He has extensive knowledge of the research-policy interface and authored the first two compilations on urban food policies in Spain. His hybrid approach to territorialised food systems and policies has enabled him to participate in high-impact global processes: the "Glasgow Declaration on Food and Climate" (COP26), the "Barcelona Good Food and Climate Challenge", the Milan Urban Food Policy Pact (MUFPP) and the 7th Global MUFPP Forum (Barcelona 2021).',

    // Almudena
    'quienes.almu.cargo': 'Associate Professor at the University of Valladolid',
    'quienes.almu.bio': 'Agricultural Engineer specialising in Agricultural Economics and Sociology. PhD in Agricultural, Food and Natural Resource Economics.',
    
    // Resources
    'recursos.titulo': 'Publications',
    'recursos.publicaciones': 'Publications',
    'recursos.publicacionesIntro': 'Project publications list.',
    'recursos.availableFrom': 'Available from:',
    'recursos.protocolo': 'Protocol',
    
    // Dissemination
    'divulgacion.titulo': 'Dissemination',
    'divulgacion.content': 'Coming soon...',
    'divulgacion.congresosTitulo': 'Conference Presentations',
    'divulgacion.congreso1': '<span class="timeline-date">2026/04/24</span><span class="timeline-text"><strong>Systematic mapping of the implications of agricultural digitization policies in the European Union</strong>. XVI Congress of Agroecology and Ecological Agriculture. Pamplona (Spain). <span class="timeline-tag pending">Pending</span><br><span class="timeline-meta">Presented by César Redrado.</span> <a href="https://www.eventos.agroecologia.net/" target="_blank" rel="noopener noreferrer">Conference website</a></span>',
    'divulgacion.congreso2': '<span class="timeline-date">2026/03/19</span><span class="timeline-text"><strong>Imaginaries of Agricultural Digitalisation: A Visual Atlas</strong>. IEGD Work In Progress (WIP) Seminars.<br><span class="timeline-meta">Presented by César Redrado.</span></span>',
    'divulgacion.congreso3': '<span class="timeline-date">2026/02/26</span><span class="timeline-text"><strong>Systematic mapping of the implications of agricultural digitization policies in the European Union</strong>. III CCHS Predoctoral workshops.<br><span class="timeline-meta">Presented by César Redrado.</span> <a href="https://cchs.csic.es/es/event/iii-jornadas-predoctorales-desenredando-pasado-creando-futuro-conversaciones-predoctorales" target="_blank" rel="noopener noreferrer">Event website</a></span>',
    'divulgacion.congreso4': '<span class="timeline-date">2025/11/10-14</span><span class="timeline-text"><strong>Regional Youth Workshop on the Intergovernmental Science-Policy Platform for Biodiversity and Ecosystem Services (IPBES) for Europe and Central Asia 2025</strong>. Isle of Vilm, Germany.<br><span class="timeline-meta">Presented by César Redrado.</span> <a href="https://www.bfn.de/en/events-ina/regional-youth-workshop-ipbes-europe-and-central-asia-2025" target="_blank" rel="noopener noreferrer">Conference website</a></span>',
    'divulgacion.congreso5': '<span class="timeline-date">2025/07/08</span><span class="timeline-text"><strong>Implications of public policy interventions for the digitalisation of European Agriculture. A systematic map</strong>. European Society of Rural Sociology (ESRS) Congress 2025. Riga, Latvia.<br><span class="timeline-meta">Presented by César Redrado.</span> <a href="https://esrs2025.rsu.lv/" target="_blank" rel="noopener noreferrer">Conference website</a></span>',
    'divulgacion.congreso6': '<span class="timeline-date">2025/07/08</span><span class="timeline-text"><strong>Developing evaluation guidelines for agricultural digitalisation policies</strong>. European Society of Rural Sociology (ESRS) Congress 2025. Riga, Latvia.<br><span class="timeline-meta">Presented by Soledad Cuevas.</span> <a href="https://esrs2025.rsu.lv/" target="_blank" rel="noopener noreferrer">Conference website</a></span>',

    // Contact
    'contacto.titulo': 'Contact',
    'contacto.emailLabel': 'Email:',
    'contacto.addressTitle': 'Address',
    'contacto.addressText': 'Institute of Economics, Geography and Demography (IEGD)<br>Centre for Human and Social Sciences (CCHS)<br>Spanish National Research Council (CSIC)<br>C. de Albansanz, 26, San Blas-Canillejas, 28037 Madrid',
    
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
      if (element.hasAttribute('data-i18n-html')) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  const srcElements = document.querySelectorAll('[data-i18n-src]');
  srcElements.forEach(element => {
    const key = element.getAttribute('data-i18n-src');
    if (translations[lang][key]) {
      element.src = translations[lang][key];
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
