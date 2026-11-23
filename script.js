'use strict';

/* ==========================================================
   ALINE JOIAS · Catálogo
   ========================================================== */

/* ---------- CONFIGURAÇÕES ---------- */
const WHATSAPP_NUMBER = '5549991023413';
const FALLBACK_PRODUCT_IMG = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700';
const LIMITE_INICIAL = 4; // Quantidade de joias exibidas antes de clicar em "Ver mais"
const TEXTO_SEM_PRECO = 'Consulte o valor'; // Aparece quando a peça não tem preço

/* ---------- CATÁLOGO ----------
   Para esconder uma joia sem apagá-la: ativo: false
   VALOR: escreva em price exatamente como quer que apareça, ex.: price: 'R$ 89,90'
   Sem o campo price (ou price: ''), o site mostra "Consulte o valor".

   Modelo para uma peça nova (copie, cole antes do ] final e mude os dados;
   não esqueça a vírgula depois da peça anterior):
   {
     id: '5',
     ativo: true,
     name: 'Nome da peça',
     category: 'Brincos',
     price: 'R$ 00,00',
     tagline: 'Frase curta de destaque.',
     desc: 'Descrição da peça.',
     image: 'image/arquivo.jpg'
   }
*/
const products = [
  {
    id: '1',
    ativo: true,
    name: 'Brinco trevo zircônia',
    category: 'Brincos',
    price: 'R$ 64,98',
    tagline: 'A intensidade e o brilho combinados com a delicadeza do afeto.',
    desc: 'Impecável nos detalhes! O formato de trevo cravejado tem um brilho maravilhoso e um acabamento super fino. É daqueles brincos coringas que combinam com tudo.',
    image: 'image/brincotrevo.jpg'
  },
  {
    id: '2',
    ativo: true,
    name: 'Brinco Snake',
    category: 'Brincos',
    price: 'R$ 84,90',
    tagline: 'Contemporâneo e luxuoso.',
    desc: 'Para quem ama peças com personalidade, o Brinco Snake é a escolha ideal. A mistura do dourado polido com a cravação cria um efeito incrível e super atual.',
    image: 'image/brincosnake.jpg'
  },
  {
    id: '3',
    ativo: true,
    name: 'Brinco trio estrela delicado',
    category: 'Brincos',
    price: 'R$ 89,90',
    tagline: 'Ilumine o seu visual com a versatilidade deste trio encantador.',
    desc: 'Com três pares em tamanhos diferentes, este conjunto permite criar combinações modernas para o primeiro, segundo e terceiro furos. Uma semijoia leve e sofisticada.',
    image: 'image/brincotrio.jpg'
  },
  {
    id: '4',
    ativo: true,
    name: 'Brinco argola grande cravejado em zircônia',
    category: 'Brincos',
    price: 'R$ 89,90',
    tagline: 'O clássico reinventado com brilho intenso e presença marcante.',
    desc: 'Argola ampla com cravação impecável de zircônias que refletem a luz a cada movimento. Uma peça imponente e leve para elevar produções do dia a dia ou eventos.',
    image: 'image/brincoargola.jpg'
  },
  {
    id: '5',
    ativo: true,
    name: 'Brinco minimalista no ródio branco',
    category: 'Brincos',
    price: 'R$ 64,90',
    tagline: 'Sofisticação discreta e acabamento espelhado no ródio branco.',
    desc: 'Design clean e atemporal, pensado para mulheres que apreciam a elegância dos detalhes sutis. Perfeito para usar sozinho ou compor um mix moderno no segundo furo.',
    image: 'image/brincominimalista.jpg'
  },
  {
    id: '6',
    ativo: true,
    name: 'Brinco pedra verde cristalino',
    category: 'Brincos',
    price: 'R$ 69,98',
    tagline: 'O frescor e a nobreza do verde em uma lapidação encantadora.',
    desc: 'Destaque para a pedra verde translúcida que traz um ponto de cor sofisticado ao rosto. Uma peça vibrante e refinada para iluminar qualquer produção.',
    image: 'image/brincopedra.jpg'
  },
  {
    id: '7',
    ativo: true,
    name: 'Brinco gota elegance',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: 'Linhas fluidas que alongam e valorizam a feminilidade.',
    desc: 'Com formato clássico de gota e acabamento polido de alto brilho, este brinco une suavidade e requinte em uma peça versátil para todas as ocasiões.',
    image: 'image/brincogota.jpg'
  },
  {
    id: '8',
    ativo: true,
    name: 'Brinco ear cuff folhas de luxo',
    category: 'Brincos',
    price: 'R$ 69,98',
    tagline: 'Design orgânico que abraça a orelha com modernidade.',
    desc: 'Inspirado na delicadeza das folhas, este ear cuff desenha o contorno da orelha com brilho e sofisticação, trazendo um toque contemporâneo sem precisar de vários furos.',
    image: 'image/brincoear.jpg'
  },
  {
    id: '9',
    ativo: true,
    name: 'Colar coração ônix e Brinco gota ônix',
    category: 'Brincos e Colares',
    price: '',
    tagline: 'O contraste marcante e elegante da pedra ônix.',
    desc: 'Combinação sofisticada que une o colar com pingente de coração e o brinco em formato de gota na tonalidade ônix. Peças intensas e atemporais para looks cheios de estilo.',
    image: 'image/colarebrinco.jpg'
  },
  {
    id: '10',
    ativo: true,
    name: 'Brinco gala cristal',
    category: 'Brincos',
    price: 'R$ 89,90',
    tagline: 'Brilho deslumbrante pensado para momentos inesquecíveis.',
    desc: 'Com lapidação cristalina de alto impacto, o Brinco Gala é a escolha certa para festas, jantares e ocasiões especiais onde você deseja ser o centro das atenções.',
    image: 'image/brincogala.jpg'
  },
  {
    id: '11',
    ativo: true,
    name: 'Conjunto gota cristal',
    category: 'Conjuntos',
    price: 'R$ 149,99',
    tagline: 'Harmonia perfeita entre colar e brincos com brilho cristalino.',
    desc: 'Conjunto completo composto por colar e par de brincos com lapidação em gota cristal. Uma opção refinada e pronta para presentear ou transformar o seu visual com unidade e elegância.',
    image: 'image/conjuntogota.jpg'
  },
  {
    id: '12',
    ativo: true,
    name: 'Brinco ônix',
    category: 'Brincos',
    price: 'R$ 68,98',
    tagline: 'Sobriedade, força e elegância em cada detalhe.',
    desc: 'O tom profundo do ônix traz um ar de mistério e sofisticação clássica. Um brinco versátil que transita com facilidade do ambiente de trabalho a eventos noturnos.',
    image: 'image/brincoonix.jpg'
  },
  {
    id: '13',
    ativo: true,
    name: 'Brinco botão luxuoso',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: 'Estilo vintage com acabamento impecável e confortável.',
    desc: 'Modelo botão que se ajusta perfeitamente ao lóbulo, oferecendo conforto absoluto e um visual rico em detalhes. Ideal para quem busca presença sem abrir mão da praticidade.',
    image: 'image/brincobotao.jpg'
  },
  {
    id: '14',
    ativo: true,
    name: 'Colar aqua serene',
    category: 'Colares',
    price: 'R$ 99,90',
    tagline: 'A serenidade dos tons cristalinos iluminando o seu colo.',
    desc: 'Colar delicado com pedra em tonalidade suave e refrescante, perfeito para trazer leveza e um ponto de luz sutil ao decote.',
    image: 'image/colaraqua.jpg'
  },
  {
    id: '15',
    ativo: true,
    name: 'Colar corrente malha trevo crista',
    category: 'Colares',
    price: 'R$ 139,90',
    tagline: 'Caimento fluido com o charme icônico do trevo cristal.',
    desc: 'Corrente em malha maleável de brilho intenso acompanhada do pingente de trevo cristal. Uma peça sofisticada que pode ser usada sozinha ou em camadas.',
    image: 'image/colarcorrente.jpg'
  },
  {
    id: '16',
    ativo: true,
    name: 'Anel prata lavanda',
    category: 'Anéis',
    price: 'R$ 119,90',
    tagline: 'Romantismo e delicadeza em um tom lavanda encantador.',
    desc: 'Anel com acabamento prateado e pedra em tonalidade lavanda suave, ideal para adicionar um toque feminino, moderno e cheio de personalidade às mãos.',
    image: 'image/anelprata.jpg'
  },
  {
    id: '17',
    ativo: true,
    name: 'Brinco morganita flor rosa',
    category: 'Brincos',
    price: 'R$ 89,90',
    tagline: 'A suavidade da morganita rosa em um design floral apaixonante.',
    desc: 'Pétalas delicadas em tom rosa morganita que iluminam o rosto com romantismo e doçura. Uma semijoia encantadora para celebrar a feminilidade.',
    image: 'image/brincomorganita.jpg'
  },
  {
    id: '18',
    ativo: true,
    name: 'Anéis Lavanda, 18K e Solitário',
    category: 'Anéis',
    price: '',
    tagline: 'Três estilos clássicos para compor mixes cheios de brilho.',
    desc: 'Seleção versátil reunindo o charme do tom lavanda, o brilho do banho 18K e a elegância atemporal do modelo solitário. Consulte disponibilidade de numerações.',
    image: 'image/aneis1.jpg'
  },
  {
    id: '19',
    ativo: true,
    name: 'Anéis Coração, Medalha e Minimalista',
    category: 'Anéis',
    price: '',
    tagline: 'Símbolos de afeto e delicadeza para usar todos os dias.',
    desc: 'Combinação encantadora de anéis com detalhes de coração, medalha e traços minimalistas. Perfeitos para criar composições modernas nos dedos.',
    image: 'image/aneis3.jpg'
  },
  {
    id: '20',
    ativo: true,
    name: 'Anéis de Prata 925, Zircônia e  Laços 925',
    category: 'Anéis',
    price: '',
    tagline: 'A autenticidade da Prata 925 com detalhes românticos.',
    desc: 'Modelos confeccionados em Prata 925 com cravação de zircônias e design delicado de laços. Joias duráveis e cheias de charme para acompanhar você em todos os momentos.',
    image: 'image/aneis2.jpg'
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
  const precoHTML = p.price
    ? `<p class="product-price">${escapeHTML(p.price)}</p>`
    : `<p class="product-price consult">${TEXTO_SEM_PRECO}</p>`;

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
  modalPrice.textContent = produto.price || TEXTO_SEM_PRECO;
  modalPrice.classList.toggle('consult', !produto.price);
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