# Aline Joias | Catálogo Exclusivo

Vitrine digital desenvolvida para apresentar as coleções e peças exclusivas do ateliê **Aline Joias**[cite: 1]. O projeto foi estruturado com foco em elegância visual, navegação fluida em dispositivos móveis e atendimento consultivo direto via WhatsApp.

🔗 **Acesse o catálogo online:** [alinejoias.pages.dev](https://alinejoias.pages.dev)[cite: 1]

---

## Funcionalidades

- **Vitrine Responsiva:** Layout adaptado para smartphones, tablets e desktops, valorizando os detalhes e a fotografia de cada peça[cite: 1].
- **Filtragem Dinâmica:** Organização intuitiva das joias por categorias para facilitar a navegação dos clientes.
- **Atendimento Direto (WhatsApp):** Botões de contato integrados que direcionam o cliente diretamente para o atendimento personalizado.
- **Segurança e Performance:** Cabeçalhos de segurança HTTP (`CSP`, `X-Frame-Options`, `Permissions-Policy`, `Referrer-Policy`) configurados via `_headers` e distribuição global pela rede Cloudflare Pages.
- **Indexação SEO:** Propriedade verificada e configurada no Google Search Console[cite: 4].

---

## Tecnologias Utilizadas

- **HTML5** — Estruturação semântica e otimizada para buscadores.
- **CSS3** — Estilização editorial, tipografia refinada e design responsivo.
- **JavaScript (Vanilla)** — Lógica de exibição, filtros e interatividade do catálogo sem dependências externas.
- **Cloudflare Pages** — Hospedagem estática com SSL/HTTPS automático e deploy contínuo via GitHub.

---

## Estrutura do Projeto

```text
ALINEJOIAS/
├── image/                          # Imagens, ícones e fotografias das peças
├── _headers                        # Regras de cabeçalhos de segurança HTTP (Cloudflare)
├── google91d7f98610878277.html     # Arquivo de verificação do Google Search Console
├── index.html                      # Página principal do catálogo
├── script.js                       # Lógica de filtragem e interações
├── style.css                       # Folha de estilos e layout responsivo
└── README.md                       # Documentação do projeto
