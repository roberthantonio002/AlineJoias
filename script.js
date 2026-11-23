'use strict';

/* ==========================================================
   ALINE JOIAS · Catálogo
   ========================================================== */

/* ---------- CONFIGURAÇÕES ---------- */
const WHATSAPP_NUMBER = '5549991023413';
const FALLBACK_PRODUCT_IMG = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700';
const LIMITE_INICIAL = 4; // Quantidade de joias exibidas antes de clicar em "Ver mais"

/* ---------- CATÁLOGO ----------
   Para esconder uma joia sem apagá-la: ativo: false
   Adicione o campo price: 'R$ 89,90' em cada peça */
const products = [
  {
    id: '1',
    ativo: true,
    name: 'Brinco trevo zircônia',
    category: 'Brincos',
    price: 'R$ 64,98',
    tagline: 'A intensidade e o brilho combinados com a delicadeza do afeto.',
    desc: 'Ponto de luz central cercado por corações cravejados com acabamento impecável. Perfeito para marcar ocasiões especiais com muito charme.',
    image: 'image/brincotrevo.jpg'
  },
  {
    id: '2',
    ativo: true,
    name: 'Brinco Snake',
    category: 'Brincos',
    price: 'R$ 84,90',
    tagline: 'Contemporâneo e luxuoso.',
    desc: 'Design texturizado e marcante que une imponência contemporânea e leveza para o seu visual cotidiano.',
    image: 'image/brincosnake.jpg'
  },
  {
    id: '3',
    ativo: true,
    name: 'Brinco trio estrela delicado',
    category: 'Brincos',
    price: 'R$ 89,90',
    tagline: 'Um símbolo clássico reimaginado com brilho intenso.',
    desc: 'Pingente sofisticado com harmonia perfeita entre o metal nobre e zircônias de alto padrão.',
    image: 'image/brincotrio.jpg'
  },
  {
    id: '4',
    ativo: true,
    name: 'Brinco argola grande cravejado em zircônia',
    category: 'Brincos',
    price: 'R$ 89,90',
    tagline: 'Elegância inspirada pelas linhas e detalhes sofisticados.',
    desc: 'Peça delicada e moderna para valorizar o seu pulso com extrema sofisticação em qualquer ocasião.',
    image: 'image/brincoargola.jpg'
  }
];

/* ---------- ELEMENTOS DA PÁGINA ---------- */
const grid = document.getElementById('productsGrid');
const loadMoreWrap = document.getElementById('loadMoreWrap');
const searchInput = document.getElementById('searchInput');
const filterWrap = document.querySelector('.filter-dropdown-wrap');
const filterToggle = document.getElementById('filterToggle');
const filterArrow = document.getElementById('filterArrow');
const filtersContainer = document.getElementById('categoryFilters');

const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalTagline = document.getElementById('modalTagline');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalWhatsapp = document.getElementById('modalWhatsappBtn');
const modalClose = document.getElementById('modalClose');

let activeCategory = 'Todas';
let mostrarTodas = false;
let ultimoFoco = null;

/* ---------- FUNÇÕES AUXILIARES ---------- */
function escapeHTML(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizar(texto) {
  return String(texto)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function mensagemWhatsApp(p) {
  if (p.whatsappText) return p.whatsappText;
  const infoPreco = p.price ? ` (${p.price})` : '';
  return `Olá! Gostaria de consultar a disponibilidade da peça “${p.name}”${infoPreco}.`;
}

function linkWhatsApp(p) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagemWhatsApp(p))}`;
}

/* ---------- RENDERIZAÇÃO ---------- */
function renderFiltros() {
  const ativos = products.filter(p => p.ativo !== false);
  const categorias = ['Todas', ...new Set(ativos.map(p => p.category))];

  if (!categorias.includes(activeCategory)) activeCategory = 'Todas';

  filtersContainer.innerHTML = categorias.map(cat => `
    <button type="button" class="filter-chip ${cat === activeCategory ? 'active' : ''}"
            data-category="${escapeHTML(cat)}" aria-pressed="${cat === activeCategory}">
      ${escapeHTML(cat)}
    </button>
  `).join('');
}

function cardHTML(p) {
  const id = escapeHTML(p.id);
  const nome = escapeHTML(p.name);
  const precoHTML = p.price ? `<p class="product-price">${escapeHTML(p.price)}</p>` : '';

  return `
    <article class="product">
      <button type="button" class="product-img-wrap" data-open-modal="${id}" aria-label="Ver detalhes de ${nome}">
        <img src="${escapeHTML(p.image)}" alt="" loading="lazy" decoding="async"
             data-fallback="${FALLBACK_PRODUCT_IMG}">
      </button>
      <div class="product-info">
        <span class="product-category">${escapeHTML(p.category)}</span>
        <h3><button type="button" class="product-title-btn" data-open-modal="${id}">${nome}</button></h3>
        ${precoHTML}
        <p class="product-tagline">“${escapeHTML(p.tagline)}”</p>
        <p class="product-desc">${escapeHTML(p.desc)}</p>
        <a href="${linkWhatsApp(p)}" target="_blank" rel="noopener noreferrer" class="whatsapp-cta">
          <img src="image/whatsapp.png" alt="" class="icon-whatsapp"> Consultar no WhatsApp
        </a>
      </div>
    </article>
  `;
}

function renderProdutos() {
  const busca = normalizar(searchInput.value.trim());

  const filtrados = products.filter(p => {
    if (p.ativo === false) return false;
    const daCategoria = activeCategory === 'Todas' || p.category === activeCategory;
    const naBusca = normalizar(p.name).includes(busca) || normalizar(p.desc).includes(busca);
    return daCategoria && naBusca;
  });

  // Se houver busca digitada, mostra todos os resultados encontrados; senão respeita o limite
  const usandoBusca = busca.length > 0;
  const itensParaExibir = (mostrarTodas || usandoBusca)
    ? filtrados
    : filtrados.slice(0, LIMITE_INICIAL);

  grid.innerHTML = itensParaExibir.length
    ? itensParaExibir.map(cardHTML).join('')
    : '<p class="empty-msg">Nenhuma joia encontrada.</p>';

  // Controla o botão de "Ver mais / Mostrar menos"
  if (!usandoBusca && filtrados.length > LIMITE_INICIAL) {
    const restantes = filtrados.length - LIMITE_INICIAL;
    loadMoreWrap.innerHTML = `
      <button type="button" class="btn secondary" id="toggleExpandBtn">
        ${mostrarTodas ? 'Recolher peças ▴' : `Ver mais peças (+${restantes}) ▾`}
      </button>
    `;
  } else {
    loadMoreWrap.innerHTML = '';
  }
}

/* ---------- MENU DE FILTROS ---------- */
function setMenuFiltros(aberto) {
  filtersContainer.classList.toggle('active', aberto);
  filterToggle.setAttribute('aria-expanded', String(aberto));
  filterArrow.textContent = aberto ? '▴' : '▾';
}

function setCategory(cat) {
  activeCategory = cat;
  mostrarTodas = false; // Reseta para o limite inicial ao trocar de categoria
  renderFiltros();
  renderProdutos();
  setMenuFiltros(false);
}

/* ---------- MODAL ---------- */
function abrirModal(id, opener) {
  const produto = products.find(p => p.id === id && p.ativo !== false);
  if (!produto) return;

  ultimoFoco = opener || null;

  modalImg.dataset.fallback = FALLBACK_PRODUCT_IMG;
  modalImg.src = produto.image;
  modalImg.alt = produto.name;
  modalCategory.textContent = produto.category;
  modalTitle.textContent = produto.name;
  modalTagline.textContent = `“${produto.tagline}”`;
  modalPrice.textContent = produto.price || '';
  modalPrice.style.display = produto.price ? 'block' : 'none';
  modalDesc.textContent = produto.desc;
  modalWhatsapp.href = linkWhatsApp(produto);

  modal.classList.add('active');
  document.body.classList.add('no-scroll');
  modalClose.focus();
}

function fecharModal() {
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
  if (ultimoFoco && ultimoFoco.isConnected) ultimoFoco.focus();
  ultimoFoco = null;
}

/* ---------- IMAGEM RESERVA ---------- */
function trocarPorFallback(img) {
  const reserva = img.dataset.fallback;
  if (!reserva) return;
  delete img.dataset.fallback;
  img.src = reserva;
}

document.addEventListener('error', e => {
  if (e.target instanceof HTMLImageElement) trocarPorFallback(e.target);
}, true);

/* ---------- EVENTOS ---------- */
searchInput.addEventListener('input', renderProdutos);

filterToggle.addEventListener('click', () => {
  setMenuFiltros(!filtersContainer.classList.contains('active'));
});

filtersContainer.addEventListener('click', e => {
  const chip = e.target.closest('.filter-chip');
  if (chip) setCategory(chip.dataset.category);
});

grid.addEventListener('click', e => {
  const gatilho = e.target.closest('[data-open-modal]');
  if (gatilho) abrirModal(gatilho.dataset.openModal, gatilho);
});

loadMoreWrap.addEventListener('click', e => {
  if (e.target.closest('#toggleExpandBtn')) {
    mostrarTodas = !mostrarTodas;
    renderProdutos();
  }
});

modalClose.addEventListener('click', fecharModal);

modal.addEventListener('click', e => {
  if (e.target === modal) fecharModal();
});

document.addEventListener('click', e => {
  if (!filterWrap.contains(e.target)) setMenuFiltros(false);
});

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (modal.classList.contains('active')) {
    fecharModal();
  } else {
    setMenuFiltros(false);
  }
});

/* ---------- INICIALIZAÇÃO ---------- */
renderFiltros();
renderProdutos();

document.querySelectorAll('img[data-fallback]').forEach(img => {
  if (img.complete && img.naturalWidth === 0) trocarPorFallback(img);
});

const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();