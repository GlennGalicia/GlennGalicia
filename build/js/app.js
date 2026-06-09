// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Recordar preferencia guardada
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Cambiar tema al hacer click
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// Idioma guardado
let currentLang = localStorage.getItem('lang') || 'es';

// Aplicar al cargar
applyLanguage(currentLang);
syncLangToggle(currentLang);

// Click
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('lang-toggle').classList.toggle('en');
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});

function syncLangToggle(lang) {
    const toggle = document.getElementById('lang-toggle');
    if (lang === 'en') toggle.classList.add('en');
}

function applyLanguage(lang) {

    document.documentElement.lang = lang
    // textContent para texto plano
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = translations[lang][el.dataset.i18n] || '';
    });

    // innerHTML para elementos con etiquetas internas
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        el.innerHTML = translations[lang][el.dataset.i18nHtml] || '';
    });
}
