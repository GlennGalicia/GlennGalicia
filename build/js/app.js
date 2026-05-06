// Theme toggle
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Recordar preferencia guardada
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Cambiar tema al hacer click
toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});
