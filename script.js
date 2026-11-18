const products = [
    {
        id: '1',
        name: 'Conjunto Coração',
        category: 'Conjuntos',
        tagline: 'A intensidade e o brilho combinados com a delicadeza do afeto.',
        desc: 'Ponto de luz central cercado por corações cravejados com acabamento impecável.',
        image: 'image/conjuntocoracao.png',
        whatsappText: 'Olá! Gostaria de consultar a disponibilidade e valores do Conjunto Coração.'
    },
    {
        id: '2',
        name: 'Colar Brilhante',
        category: 'Colares',
        tagline: 'Formas fluidas e sofisticadas para o dia a dia.',
        desc: 'Design texturizado e marcante que une imponência contemporânea e leveza.',
        image: 'image/colarbrilhante.png',
        whatsappText: 'Olá! Gostaria de consultar a disponibilidade e valores do Colar Brilhante.'
    },
    {
        id: '3',
        name: 'Diamante Coração',
        category: 'Colares',
        tagline: 'Um símbolo clássico reimaginado com brilho intenso.',
        desc: 'Pingente sofisticado com harmonia perfeita entre o metal nobre e zircônias.',
        image: 'image/diamentecoracao.png',
        whatsappText: 'Olá! Gostaria de consultar a disponibilidade e valores do Diamante Coração.'
    },
    {
        id: '4',
        name: 'Pulseira Elegance',
        category: 'Pulseiras',
        tagline: 'Elegância inspirada pelas linhas e detalhes sofisticados.',
        desc: 'Peça delicada e moderna para valorizar o seu visual em qualquer ocasião.',
        image: 'image/pulseira.png',
        whatsappText: 'Olá! Gostaria de consultar a disponibilidade e valores da Pulseira Elegance.'
    }
];

let activeCategory = 'Todas';

function renderApp() {
    const categories = ['Todas', ...new Set(products.map(p => p.category))];
    
    const filtersContainer = document.getElementById('categoryFilters');
    filtersContainer.innerHTML = categories.map(cat => `
        <button class="filter-chip ${activeCategory === cat ? 'active' : ''}" onclick="setCategory('${cat}')">
            ${cat}
        </button>
    `).join('');

    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => {
        const matchesCategory = activeCategory === 'Todas' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const grid = document.getElementById('productsGrid');
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Nenhuma joia encontrada.</p>';
        return;
    }

    grid.innerHTML = filtered.map(p => `
        <article class="product-card">
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.src='https://via.placeholder.com/600x450?text=Foto'">
            </div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-tagline">"${p.tagline}"</p>
                <p class="product-desc">${p.desc}</p>
                <a href="https://wa.me/5500000000000?text=${encodeURIComponent(p.whatsappText)}" target="_blank" class="whatsapp-cta">
                    <img src="image/whatsapp.png" alt="WhatsApp" class="icon-img"> Consultar no WhatsApp
                </a>
            </div>
        </article>
    `).join('');
}

function setCategory(cat) {
    activeCategory = cat;
    renderApp();
}

document.getElementById('searchInput').addEventListener('input', renderApp);
renderApp();