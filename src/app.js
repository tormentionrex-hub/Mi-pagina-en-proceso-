const state = {
    lang: 'es',
    greetingIndex: 0
};

const translations = {
    es: {
        greetings: [
            "¡Bienvenidx a mi casita! =w=",
            "¡Mis lenguajes favoritos son C y Go!",
            "Parezco un NPC con estos mensajes...",
            "Nop no uso Wordpress, odio PHP.",
            "Mi primer programa fue un bot de Discord en Python..."
        ],
        grid: [
            { icon: '<i class="fa-solid fa-ghost"></i>', label: "Sobre Mi", id: "about" },
            { icon: '<i class="fa-solid fa-folder-open"></i>', label: "Proyectos", id: "projects" },
            { icon: '<i class="fa-solid fa-at"></i>', label: "Contacto", id: "contact" },
            { icon: '<i class="fa-solid fa-coffee"></i>', label: "Donar :3", id: "donate" },
            { icon: '<i class="fa-brands fa-discord"></i>', label: "Discord", id: "discord" },
            { icon: '<i class="fa-brands fa-youtube"></i>', label: "Youtube", id: "youtube" }
        ]
    }
};

function renderGrid() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    const items = translations[state.lang].grid;
    grid.innerHTML = items.map(item => `
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

    const greetings = translations[state.lang].greetings;
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
