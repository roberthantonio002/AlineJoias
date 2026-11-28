'use strict';

/* ==========================================================
   ALINE JOIAS · TEMA DE NATAL
   Este arquivo cuida da ativação do tema.
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
})();