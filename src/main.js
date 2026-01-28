import { translations } from './data/translations.js';

let currentLang = navigator.language.startsWith('es') ? 'es' : 'en';

const state = {
    currentPath: 'home',
    lang: currentLang
};

function t(key) {
    const keys = key.split('.');
    let result = translations[state.lang];
    for (const k of keys) {
        if (!result[k]) return key;
        result = result[k];
    }
    return result;
}

function renderSidebar() {
    const nav = document.getElementById('nav-links');
    const links = [
        { id: 'home', key: 'page.sidebar.home' },
        { id: 'about', key: 'page.sidebar.about' },
        { id: 'music', key: 'page.sidebar.music' },
        { id: 'games', key: 'page.sidebar.games' },
        { id: 'projects', key: 'page.sidebar.proyects' },
        { id: 'contact', key: 'page.sidebar.contact' }
    ];

    nav.innerHTML = links.map(link => `
        <a href="#${link.id}" class="${state.currentPath === link.id ? 'active' : ''}" data-id="${link.id}">
            ${t(link.key)}
        </a>
    `).join('');

    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            state.currentPath = e.target.getAttribute('data-id');
            window.location.hash = state.currentPath;
            updateView();
            renderSidebar();
        });
    });
}

function renderHome() {
    const greetings = t('page.home.greeting');
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    return `
        <h1 class="title">Kimu's Underground</h1>
        <p style="text-align:center;">${randomGreeting}</p>
        <div class="links-list" style="max-width: 600px; margin: 2rem auto;">
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-family: 'departure-mono', monospace;">
                <li><a href="#about" style="text-decoration: none;">> ${t('page.home.links.about')}</a></li>
                <li><a href="#projects" style="text-decoration: none;">> ${t('page.home.links.projects')}</a></li>
                <li><a href="#contact" style="text-decoration: none;">> ${t('page.home.links.contact')}</a></li>
            </ul>
        </div>
    `;
}

function renderAbout() {
    return `
        <h1 class="title">${t('page.about.title')}</h1>
        <div class="about-container">
            <div class="stats-box" style="border: 2px solid var(--color-border); padding: 1rem; margin-bottom: 2rem; background: var(--color-warning);">
                <p><strong>${t('page.about.stats.nick')}:</strong> Kimu</p>
                <p><strong>${t('page.about.stats.level')}:</strong> 19</p>
                <p><strong>${t('page.about.stats.rank')}:</strong> Smol Developer</p>
            </div>
            <div class="presentation">
                <p>${t('page.about.presentation')}</p>
            </div>
            <h2 class="title" style="font-size: 1.5rem; margin-top: 2rem;">${t('page.about.story-01')}</h2>
            <p>I started programming on my phone... yes, a phone. Writing Discord bots in Python was my gateway drug to this underground world.</p>
        </div>
    `;
}

function updateView() {
    const container = document.getElementById('view-container');
    let html = '';

    switch (state.currentPath) {
        case 'home': html = renderHome(); break;
        case 'about': html = renderAbout(); break;
        default: html = `<h1>${state.currentPath.toUpperCase()}</h1><p>Work in progress...</p>`; break;
    }

    container.innerHTML = html;
}

// Initial Render
window.addEventListener('hashchange', () => {
    state.currentPath = window.location.hash.replace('#', '') || 'home';
    updateView();
    renderSidebar();
});

state.currentPath = window.location.hash.replace('#', '') || 'home';
renderSidebar();
updateView();
