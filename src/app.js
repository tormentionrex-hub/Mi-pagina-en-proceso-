import { translations } from './data/translations.js';

const state = {
    lang: 'es',
    greetingIndex: 0
};

function renderGrid() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;

    const links = translations[state.lang].page.home.links;
    const gridItems = [
        { icon: '<i class="fa-solid fa-ghost"></i>', label: links.about, id: "about" },
        { icon: '<i class="fa-solid fa-folder-open"></i>', label: links.projects, id: "projects" },
        { icon: '<i class="fa-solid fa-at"></i>', label: links.contact, id: "contact" },
        { icon: '<i class="fa-solid fa-coffee"></i>', label: links.donate, id: "donate" },
        { icon: '<i class="fa-brands fa-discord"></i>', label: links["my-server"], id: "discord" },
        { icon: '<i class="fa-brands fa-youtube"></i>', label: links.youtube, id: "youtube" }
    ];

    grid.innerHTML = gridItems.map(item => `
        <a href="#${item.id}" class="grid-item">
            <div class="icon">${item.icon}</div>
            <span class="label">${item.label}</span>
        </a>
    `).join('') + `
        <div class="hamburger-btn">
            <div class="hamburger-icon"></div>
        </div>
    `;
}

function rotateGreeting() {
    const textEl = document.getElementById('carousel-text');
    if (!textEl) return;

    const greetings = translations[state.lang].page.home.greeting;
    state.greetingIndex = (state.greetingIndex + 1) % greetings.length;

    textEl.style.opacity = 0;
    setTimeout(() => {
        textEl.textContent = greetings[state.greetingIndex];
        textEl.style.opacity = 1;
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    setInterval(rotateGreeting, 3000);
});

