'use strict';

/* ==========================================================
   ALINE JOIAS · TEMA DE NATAL
   Este arquivo cuida da neve e da ativação do tema.
   As peças continuam no script.js.
   ========================================================== */

/* ---------- CONFIGURAÇÕES (EDITE AQUI) ---------- */
const NATAL_ATIVO = true;               // false = tira o tema de Natal agora
const NATAL_DATA_FIM = '2027-01-06';    // depois desta data o site volta ao normal sozinho (AAAA-MM-DD)

(function () {
  const corpo = document.body;

  /* ---------- DATA DE HOJE EM BRASÍLIA ---------- */
  function hojeBrasilia() {
    const [ano, mes, dia] = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(new Date()).split('-').map(Number);
    return { ano, mes, dia, texto: `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}` };
  }

  const hoje = hojeBrasilia();

  // Fora do período (ou desligado): remove o tema e deixa o site normal
  if (!NATAL_ATIVO || hoje.texto > NATAL_DATA_FIM) {
    corpo.classList.remove('tema-natal');
    return;
  }

  /* ---------- NEVE ---------- */
  const neve = document.createElement('div');
  neve.className = 'natal-neve';
  neve.setAttribute('aria-hidden', 'true');

  const quantidade = window.matchMedia('(max-width: 768px)').matches ? 18 : 34;
  for (let i = 0; i < quantidade; i++) {
    const floco = document.createElement('span');
    floco.className = 'floco';
    floco.textContent = '✦';
    floco.style.setProperty('--x', `${Math.random() * 100}%`);
    floco.style.setProperty('--s', `${10 + Math.random() * 14}px`);
    floco.style.setProperty('--o', (0.55 + Math.random() * 0.4).toFixed(2));
    floco.style.setProperty('--t', `${9 + Math.random() * 10}s`);
    floco.style.setProperty('--a', `-${(Math.random() * 18).toFixed(1)}s`);
    floco.style.setProperty('--dx', `${(Math.random() * 120 - 60).toFixed(0)}px`);
    neve.appendChild(floco);
  }
  corpo.appendChild(neve);

  // Botão para quem prefere sem movimento (a escolha fica guardada no aparelho)
  const botaoNeve = document.createElement('button');
  botaoNeve.type = 'button';
  botaoNeve.className = 'natal-neve-btn';
  botaoNeve.textContent = '✦';
  corpo.appendChild(botaoNeve);

  function lerEscolha() {
    try { return localStorage.getItem('natalNeve') !== '0'; } catch (e) { return true; }
  }

  function definirNeve(ligada, guardar) {
    neve.classList.toggle('off', !ligada);
    botaoNeve.setAttribute('aria-pressed', String(ligada));
    botaoNeve.setAttribute('aria-label', ligada ? 'Desligar a neve' : 'Ligar a neve');
    botaoNeve.title = ligada ? 'Desligar a neve' : 'Ligar a neve';
    if (guardar) {
      try { localStorage.setItem('natalNeve', ligada ? '1' : '0'); } catch (e) { /* ignora */ }
    }
  }

  definirNeve(lerEscolha(), false);
  botaoNeve.addEventListener('click', () => definirNeve(neve.classList.contains('off'), true));
})();