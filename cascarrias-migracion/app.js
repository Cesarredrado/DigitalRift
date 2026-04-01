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
  if (!nav || nav.querySelector('.nav-dropdown')) {
    return;
  }

  const aboutLink = Array.from(nav.querySelectorAll('a')).find((link) =>
    link.getAttribute('href')?.includes('que-es-cascarrias.html')
  );

  if (!aboutLink) {
    return;
  }

  const href = aboutLink.getAttribute('href') || '';
  const basePath = href.replace(/que-es-cascarrias\.html.*$/, '');

  const dropdown = document.createElement('div');
  dropdown.className = 'nav-dropdown';

  aboutLink.classList.add('nav-dropdown-trigger');
  aboutLink.setAttribute('aria-haspopup', 'true');
  dropdown.appendChild(aboutLink);

  const menu = document.createElement('div');
  menu.className = 'nav-dropdown-menu';

  const submenuItems = [
    {
      href: `${basePath}mision-vision-valores.html`,
      es: 'Mision, Vision y Valores',
      en: 'Mission, Vision and Values',
    },
    {
      href: `${basePath}equipo.html`,
      es: 'Equipo',
      en: 'Team',
    },
    {
      href: `${basePath}colaboraciones.html`,
      es: 'Colaboraciones',
      en: 'Collaborations',
    },
  ];

  submenuItems.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.dataset.es = item.es;
    link.dataset.en = item.en;
    link.textContent = item.es;
    menu.appendChild(link);
  });

  dropdown.appendChild(menu);

  const navLinks = Array.from(nav.querySelectorAll('a'));
  const homeLink = navLinks.find((link) => link.getAttribute('href')?.includes('index.html'));
  if (homeLink && homeLink.nextSibling) {
    nav.insertBefore(dropdown, homeLink.nextSibling);
  } else {
    nav.appendChild(dropdown);
  }
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
