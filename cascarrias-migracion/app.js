const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const LANGS = ['es', 'en'];

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

function createLanguageSwitcher() {
  if (!nav || nav.querySelector('.lang-switch')) {
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'lang-switch';

  LANGS.forEach((lang) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lang-button';
    button.dataset.lang = lang;
    button.textContent = lang === 'es' ? 'CAS' : 'ENG';
    button.addEventListener('click', () => applyLanguage(lang));
    wrapper.appendChild(button);
  });

  nav.appendChild(wrapper);
}

function createAboutDropdown() {
  if (!nav) {
    return;
  }

  ensureBaseNavigation();

  buildDropdown('que-es-cascarrias.html', [
    {
      suffix: 'mision-vision-valores.html',
      es: 'Mision, Vision y Valores',
      en: 'Mission, Vision and Values',
    },
    {
      suffix: 'equipo.html',
      es: 'Equipo',
      en: 'Team',
    },
    {
      suffix: 'colaboraciones.html',
      es: 'Colaboraciones',
      en: 'Collaborations',
    },
  ]);

  buildDropdown('recursos.html', [
    {
      suffix: 'recursos/documental-feliz-vida-de-miseria.html',
      es: 'Documental "Feliz Vida de Miseria"',
      en: 'Documentary "Feliz Vida de Miseria"',
    },
    {
      suffix: 'recursos/archivo-audiovisual.html',
      es: 'Archivo audiovisual',
      en: 'Audiovisual archive',
    },
    {
      suffix: 'recursos/senderos-bioculturales.html',
      es: 'Senderos bioculturales',
      en: 'Biocultural trails',
    },
    {
      suffix: 'recursos/mapa-interactivo.html',
      es: 'Mapa interactivo',
      en: 'Interactive map',
    },
    {
      suffix: 'recursos/etnografia-ciudadana.html',
      es: 'Etnografia ciudadana',
      en: 'Citizen ethnography',
    },
  ]);
}

function ensureBaseNavigation() {
  const homeLink = Array.from(nav.querySelectorAll('a')).find((link) =>
    link.getAttribute('href')?.includes('index.html')
  );
  const basePath = homeLink
    ? (homeLink.getAttribute('href') || '').replace(/index\.html.*$/, '')
    : '';

  const requiredLinks = [
    { target: 'index.html', es: 'Inicio', en: 'Home' },
    { target: 'que-es-cascarrias.html', es: '¿Qué es Cascarrias?', en: 'What is Cascarrias?' },
    { target: 'noticias.html', es: 'Noticias', en: 'News' },
    { target: 'recursos.html', es: 'Recursos', en: 'Resources' },
    { target: 'contacto.html', es: 'Contacto', en: 'Contact' },
  ];

  requiredLinks.forEach((item) => {
    const exists = Array.from(nav.querySelectorAll('a')).some((link) =>
      link.getAttribute('href')?.includes(item.target)
    );

    if (!exists) {
      const link = document.createElement('a');
      link.href = `${basePath}${item.target}`;
      link.dataset.es = item.es;
      link.dataset.en = item.en;
      link.textContent = item.es;
      nav.appendChild(link);
    }
  });
}

function buildDropdown(linkTarget, submenuItems) {
  const triggerLink = Array.from(nav.querySelectorAll('a')).find((link) =>
    link.getAttribute('href')?.includes(linkTarget)
  );

  if (!triggerLink || triggerLink.closest('.nav-dropdown')) {
    return;
  }

  const href = triggerLink.getAttribute('href') || '';
  const basePath = href.replace(linkTarget, '');

  const dropdown = document.createElement('div');
  dropdown.className = 'nav-dropdown';

  triggerLink.classList.add('nav-dropdown-trigger');
  triggerLink.setAttribute('aria-haspopup', 'true');

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-dropdown-toggle';
  toggle.setAttribute('aria-label', 'Abrir submenus');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'v';

  const menu = document.createElement('div');
  menu.className = 'nav-dropdown-menu';

  submenuItems.forEach((item) => {
    const link = document.createElement('a');
    link.href = `${basePath}${item.suffix}`;
    link.dataset.es = item.es;
    link.dataset.en = item.en;
    link.textContent = item.es;
    menu.appendChild(link);
  });

  toggle.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  dropdown.appendChild(triggerLink);
  dropdown.appendChild(toggle);
  dropdown.appendChild(menu);

  nav.replaceChild(dropdown, triggerLink);
}

function applyLanguage(lang) {
  const selected = LANGS.includes(lang) ? lang : 'es';
  document.documentElement.lang = selected;
  localStorage.setItem('siteLanguage', selected);

  const titleKey = `title${selected.charAt(0).toUpperCase()}${selected.slice(1)}`;
  const descriptionKey = `description${selected.charAt(0).toUpperCase()}${selected.slice(1)}`;
  const pageTitle = document.body.dataset[titleKey];
  if (pageTitle) {
    document.title = pageTitle;
  }

  const pageDescription = document.body.dataset[descriptionKey];
  if (pageDescription) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
  }

  document.querySelectorAll('[data-es][data-en]').forEach((node) => {
    node.textContent = node.dataset[selected];
  });

  document.querySelectorAll('.lang-button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === selected);
  });
}

createAboutDropdown();
createLanguageSwitcher();
const savedLanguage = localStorage.getItem('siteLanguage') || 'es';
applyLanguage(savedLanguage);
