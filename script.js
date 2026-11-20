'use strict';

/* ==========================================================
   ALINE JOIAS · Catálogo
   ========================================================== */

/* ---------- CONFIGURAÇÕES ---------- */
const WHATSAPP_NUMBER = '5549991023413';
const FALLBACK_PRODUCT_IMG = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700';

/* ---------- CATÁLOGO ----------
   Para esconder uma joia sem apagá-la: ativo: false
   A mensagem do WhatsApp é gerada sozinha a partir do nome.
   Se quiser uma mensagem diferente, acrescente whatsappText: '...' na joia. */
const products = [
  {
    id: '1',
    ativo: true,
    name: 'Conjunto Coração',
    category: 'Conjuntos',
    tagline: 'A intensidade e o brilho combinados com a delicadeza do afeto.',
    desc: 'Ponto de luz central cercado por corações cravejados com acabamento impecável. Perfeito para marcar ocasiões especiais com muito charme.',
    image: 'image/conjuntocoracao.png'
  },
  {
    id: '2',
    ativo: true,
    name: 'Colar Brilhante',
    category: 'Colares',
    tagline: 'Formas fluidas e sofisticadas para o dia a dia.',
    desc: 'Design texturizado e marcante que une imponência contemporânea e leveza para o seu visual cotidiano.',
    image: 'image/colarbrilhante.png'
  },
  {
    id: '3',
    ativo: true,
    name: 'Diamante Coração',
    category: 'Colares',
    tagline: 'Um símbolo clássico reimaginado com brilho intenso.',
    desc: 'Pingente sofisticado com harmonia perfeita entre o metal nobre e zircônias de alto padrão.',
    image: 'image/diamentecoracao.png'
  },
  {
    id: '4',
    ativo: true,
    name: 'Pulseira Elegance',
    category: 'Pulseiras',
    tagline: 'Elegância inspirada pelas linhas e detalhes sofisticados.',
    desc: 'Peça delicada e moderna para valorizar o seu pulso com extrema sofisticação em qualquer ocasião.',
    image: 'image/pulseira.png'
  }
];

/* ---------- ELEMENTOS DA PÁGINA ---------- */
const grid = document.getElementById('productsGrid');
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
const modalDesc = document.getElementById('modalDesc');
const modalWhatsapp = document.getElementById('modalWhatsappBtn');
const modalClose = document.getElementById('modalClose');

let activeCategory = 'Todas';
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

// Busca sem diferenciar maiúsculas nem acentos ("cólar" encontra "colar")
function normalizar(texto) {
  return String(texto)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function mensagemWhatsApp(p) {
  return p.whatsappText ||
    `Olá! Gostaria de consultar a disponibilidade e valores da peça “${p.name}”.`;
}

function linkWhatsApp(p) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagemWhatsApp(p))}`;
}

/* ---------- RENDERIZAÇÃO ---------- */
function renderFiltros() {
  const ativos = products.filter(p => p.ativo !== false);
  const categorias = ['Todas', ...new Set(ativos.map(p => p.category))];

  // Se a categoria escolhida deixou de existir (joia desativada), volta para "Todas"
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

  return `
    <article class="product">
      <button type="button" class="product-img-wrap" data-open-modal="${id}" aria-label="Ver detalhes de ${nome}">
        <img src="${escapeHTML(p.image)}" alt="" loading="lazy" decoding="async"
             data-fallback="${FALLBACK_PRODUCT_IMG}">
      </button>
      <div class="product-info">
        <span class="product-category">${escapeHTML(p.category)}</span>
        <h3><button type="button" class="product-title-btn" data-open-modal="${id}">${nome}</button></h3>
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

  grid.innerHTML = filtrados.length
    ? filtrados.map(cardHTML).join('')
    : '<p class="empty-msg">Nenhuma joia encontrada.</p>';
}

/* ---------- MENU DE FILTROS ---------- */
function setMenuFiltros(aberto) {
  filtersContainer.classList.toggle('active', aberto);
  filterToggle.setAttribute('aria-expanded', String(aberto));
  filterArrow.textContent = aberto ? '▴' : '▾';
}

function setCategory(cat) {
  activeCategory = cat;
  renderFiltros();
  renderProdutos();
  setMenuFiltros(false); // fecha o menu depois de escolher (útil no celular)
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

/* ---------- IMAGEM RESERVA (sem handlers inline, compatível com a CSP) ---------- */
function trocarPorFallback(img) {
  const reserva = img.dataset.fallback;
  if (!reserva) return;
  delete img.dataset.fallback; // evita laço infinito se a reserva também falhar
  img.src = reserva;
}

// O evento "error" não borbulha, por isso usamos a fase de captura
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

modalClose.addEventListener('click', fecharModal);

modal.addEventListener('click', e => {
  if (e.target === modal) fecharModal(); // clique fora da caixa
});

// Clique fora do menu de filtros fecha o menu
document.addEventListener('click', e => {
  if (!filterWrap.contains(e.target)) setMenuFiltros(false);
});

// Tecla Esc fecha o modal (ou, se ele estiver fechado, o menu de filtros)
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

// Imagens estáticas que já falharam antes de o script rodar (ex.: foto da vendedora)
document.querySelectorAll('img[data-fallback]').forEach(img => {
  if (img.complete && img.naturalWidth === 0) trocarPorFallback(img);
});

const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();