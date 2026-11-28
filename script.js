'use strict';

/* ==========================================================
   ALINE JOIAS · Catálogo
   ========================================================== */

/* ---------- CONFIGURAÇÕES ---------- */
const NOME_LOJA = 'Aline Joias'; // usado na mensagem do botão geral do WhatsApp
const WHATSAPP_NUMBER = '5549991023413'; // 55 + DDD + número, sem espaços
const LIMITE_INICIAL = 4; // Quantidade de peças exibidas antes de clicar em "Ver mais"
const TEXTO_SEM_PRECO = 'Consulte o valor'; // Aparece quando a peça não tem preço

/* ---------- INFORMAÇÕES DA LOJA (preencha o que a loja oferece) ----------
   Só aparece no site o que estiver preenchido. Campo vazio ('') fica escondido.
   Exemplos: cidade: 'Atendemos [sua cidade] e região'
             entrega: 'Entregas combinadas pelo WhatsApp'
             pagamento: 'Pix e cartão de crédito'
             trocas: 'Trocas em até 7 dias após o recebimento'
             garantia: 'Garantia de 6 meses no banho'  */
const INFO_LOJA = {
  cidade: 'Preferencialmente atendemos Curitibanos',
  entrega: 'Para Curitibanos, entregamos pessoalmente.',
  pagamento: 'A combinar pelo WhatsApp',
  trocas: '',
  garantia: ''
};

/* ---------- CATÁLOGO ----------
   Para esconder uma peça sem apagá-la: ativo: false
   VALOR: escreva em price exatamente como quer que apareça, ex.: price: 'R$ 89,90'
   Sem o campo price (ou price: ''), o site mostra "Consulte o valor".

   Modelo para uma peça nova (copie, cole antes do ] final e mude os dados;
   não esqueça a vírgula depois da peça anterior):
   {
     id: '21',
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
    desc: 'Impecável nos detalhes! O formato de trevo cravejado tem um brilho maravilhoso e um acabamento superfino. É daqueles brincos coringas que combinam com tudo.',
    image: 'image/brincotrevo.jpg'
  },
  {
    id: '2',
    ativo: true,
    name: 'Brinco Snake',
    category: 'Brincos',
    price: 'R$ 84,90',
    tagline: 'Contemporâneo e luxuoso.',
    desc: 'Para quem ama peças com personalidade, o Brinco Snake é a escolha ideal. A mistura do dourado polido com a cravação cria um efeito incrível e superatual.',
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
    category: 'Conjuntos',
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
    name: 'Conjunto gota zircônia ',
    category: 'Conjuntos',
    price: 'R$ 149,99',
    tagline: 'Harmonia perfeita entre colar e brincos com brilho da zircônia.',
    desc: 'Conjunto completo composto por colar e par de brincos com lapidação em gota zircônia. Uma opção refinada e pronta para presentear ou transformar o seu visual com unidade e elegância.',
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
    name: 'Colar corrente malha trevo cristal',
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
    name: 'Conjunto pérola',
    category: 'Conjuntos',
    price: 'R$ 149,90',
    tagline: 'A elegância atemporal das pérolas em perfeita harmonia.',
    desc: 'Um clássico indispensável que exala sofisticação. Este conjunto une colar e brincos de pérolas com acabamento impecável, perfeito para ocasiões formais ou para dar um toque de classe ao visual diário.',
    image: 'image/conjuntoperola.jpg'
  },
  {
    id: '19',
    ativo: true,
    name: 'Conjunto coração cristal',
    category: 'Conjuntos',
    price: 'R$ 149,90',
    tagline: 'Romance e brilho em um design apaixonante.',
    desc: 'Composto por colar e brincos com pedras em formato de coração e lapidação cristalina, este conjunto é a escolha perfeita para expressar afeto e iluminar o seu visual com muita delicadeza.',
    image: 'image/conjuntocoracao.jpg'
  },
  {
    id: '20',
    ativo: true,
    name: 'Conjunto trevo ônix',
    category: 'Conjuntos',
    price: 'R$ 139,98',
    tagline: 'Sorte, estilo e o contraste marcante do ônix.',
    desc: 'Moderno e cheio de significado, este conjunto traz o formato icônico de trevo com detalhes na tonalidade ônix. Uma combinação sofisticada que eleva qualquer produção.',
    image: 'image/conjuntotrevoonix.jpg'
  },
  {
    id: '21',
    ativo: true,
    name: 'Anel cravejado da zircônia rosa',
    category: 'Anéis',
    price: 'R$ 119,90',
    tagline: 'Delicadeza e cor em uma cravação impecável.',
    desc: 'Este anel une o brilho das zircônias com a suavidade do tom rosa, criando um ponto de destaque encantador e feminino para as suas mãos.',
    image: 'image/anelcravejado.jpg'
  },
  {
    id: '22',
    ativo: true,
    name: 'Anel solitário',
    category: 'Anéis',
    price: 'R$ 89,98',
    tagline: 'A sofisticação minimalista do clássico solitário.',
    desc: 'Uma peça indispensável no porta-joias. O anel solitário traz uma gema central de destaque com design limpo e atemporal, perfeito para usar sozinho ou em mix de anéis.',
    image: 'image/anelsolitario.jpg'
  },
  {
    id: '23',
    ativo: true,
    name: 'Anel regulável',
    category: 'Anéis',
    price: 'R$ 109,98',
    tagline: 'Praticidade e versatilidade sem abrir mão do estilo.',
    desc: 'Com um design adaptável que se ajusta perfeitamente ao dedo, este anel regulável oferece conforto absoluto e um visual moderno para o dia a dia.',
    image: 'image/anelregulavel.jpg'
  },
  {
    id: '24',
    ativo: true,
    name: 'Anel solitário cravejado na zircônia',
    category: 'Anéis',
    price: 'R$ 119,98',
    tagline: 'Brilho intensificado com acabamento sofisticado.',
    desc: 'Uma releitura luxuosa do clássico solitário, apresentando o aro inteiramente cravejado em zircônias que refletem luz de todos os ângulos.',
    image: 'image/anelsolitariocravejado.jpg'
  },
  {
    id: '25',
    ativo: true,
    name: 'Anel coração',
    category: 'Anéis',
    price: 'R$ 119,98',
    tagline: 'O romantismo em evidência com muito brilho.',
    desc: 'Delicado e expressivo, este anel em formato de coração é ideal para quem ama carregar símbolos afetivos com elegância e sofisticação nas mãos.',
    image: 'image/anelcoracao.jpg'
  },
  {
    id: '26',
    ativo: true,
    name: 'Anel medalha',
    category: 'Anéis',
    price: 'R$ 89,90',
    tagline: 'Inspiração clássica com um toque contemporâneo.',
    desc: 'O anel medalha traz presença e estilo marcante. Uma peça versátil que transita perfeitamente entre produções casuais e composições elaboradas.',
    image: 'image/anelmedalha.jpg'
  },
  {
    id: '27',
    ativo: true,
    name: 'Anel minimalista',
    category: 'Anéis',
    price: 'R$ 89,90',
    tagline: 'A beleza na simplicidade dos detalhes.',
    desc: 'Clean, leve e sofisticado. Este anel minimalista é perfeito para quem aprecia um estilo discreto ou adora criar mix de anéis modernos e elegantes.',
    image: 'image/anelminimalista.jpg'
  },
  {
    id: '28',
    ativo: true,
    name: 'Anel ponto de luz prata 925',
    category: 'Anéis',
    price: 'R$ 139,99',
    tagline: 'O brilho sutil que ilumina as suas mãos.',
    desc: 'Confeccionado em prata 925 de alta qualidade, este anel apresenta uma gema central solitária que funciona como um verdadeiro ponto de luz delicado e eterno.',
    image: 'image/anelponto.jpg'
  },
  {
    id: '29',
    ativo: true,
    name: 'Anel cristal prata 925',
    category: 'Anéis',
    price: 'R$ 139,90',
    tagline: 'Pureza e brilho cristalino em prata 925.',
    desc: 'Unindo a durabilidade da prata 925 com o encanto de uma pedra de cristal lapidada, este anel oferece sofisticação e destaque refinado para qualquer look.',
    image: 'image/anelcristal.jpg'
  },
  {
    id: '30',
    ativo: true,
    name: 'Anel entre laços prata 925',
    category: 'Anéis',
    price: 'R$ 119,90',
    tagline: 'Design fluido e delicado inspirado em laços.',
    desc: 'Uma joia cheia de significado e charme. Confeccionado em prata 925, seu design em formato de laços entrelaçados traz um toque romântico e sofisticado às mãos.',
    image: 'image/anelentre.jpg'
  },
    {
    id: '31',
    ativo: true,
    name: 'Colar casal de filho',
    category: 'Colares',
    price: 'R$ 104,90',
    tagline: 'O amor de mãe eternizado em cada detalhe.',
    desc: 'Uma joia afetiva e delicada que simboliza o vínculo especial com os filhos. Com acabamento refinado, é a escolha perfeita para carregar quem você mais ama sempre perto do coração.',
    image: 'image/colarcasal.jpg'
  },
  {
    id: '32',
    ativo: true,
    name: 'Colar filho menino coração',
    category: 'Colares',
    price: 'R$ 69,90',
    tagline: 'Delicadeza e afeto em um símbolo inesquecível.',
    desc: 'Pingente encantador que une a figura do menino ao formato de coração, trazendo brilho suave e muito significado para o seu dia a dia ou para presentear uma mãe especial.',
    image: 'image/colarfilho.jpg'
  },
  {
    id: '33',
    ativo: true,
    name: 'Colar laço',
    category: 'Colares',
    price: 'R$ 129,90',
    tagline: 'Feminilidade e romantismo em um design encantador.',
    desc: 'Com linhas suaves e acabamento impecável, o colar laço traz um toque doce e sofisticado ao decote, sendo uma peça versátil para produções delicadas.',
    image: 'image/colarlaco.jpg'
  },
  {
    id: '34',
    ativo: true,
    name: 'Colar cavalo',
    category: 'Colares',
    price: 'R$ 84,90',
    tagline: 'Força, liberdade e elegância em uma peça cheia de personalidade.',
    desc: 'Pensado para quem ama o universo equestre ou busca um símbolo de liberdade e determinação, este colar combina traços delicados com brilho sutil.',
    image: 'image/colarcavalo.jpg'
  },
  {
    id: '35',
    ativo: true,
    name: 'Colar trevo malha',
    category: 'Colares',
    price: 'R$ 129,90',
    tagline: 'Caimento moderno com o charme icônico do trevo.',
    desc: 'A corrente em malha garante um visual contemporâneo e fluido, destacando o pingente de trevo com elegância. Perfeito para usar sozinho ou em composições.',
    image: 'image/colartrevo.jpg'
  },
  {
    id: '36',
    ativo: true,
    name: 'Colar aurora rose',
    category: 'Colares',
    price: 'R$ 114,90',
    tagline: 'A suavidade e o brilho romântico da tonalidade rosé.',
    desc: 'Inspirado nas cores do amanhecer, o Colar Aurora Rose ilumina o colo com delicadeza e sofisticação, harmonizando perfeitamente com diferentes tons de pele.',
    image: 'image/colaraurora.jpg'
  },
  {
    id: '37',
    ativo: true,
    name: 'Colar trevo ônix',
    category: 'Colares',
    price: 'R$ 89,90',
    tagline: 'Sorte e sobriedade no contraste elegante do ônix.',
    desc: 'Clássico e atemporal, este colar combina o formato de trevo com a profundidade da pedra ônix, criando uma peça marcante que valoriza qualquer produção.',
    image: 'image/colartrevoonix.jpg'
  },
  {
    id: '38',
    ativo: true,
    name: 'Colar trevo cristal',
    category: 'Colares',
    price: 'R$ 139,90',
    tagline: 'Brilho puro e refinamento em um design clássico.',
    desc: 'O pingente de trevo com acabamento cristalino reflete a luz com intensidade sutil, trazendo leveza e sofisticação para ocasiões diurnas ou noturnas.',
    image: 'image/colartrevocristal.jpg'
  },
  {
    id: '39',
    ativo: true,
    name: 'Colar rosa negra zircônia',
    category: 'Colares',
    price: 'R$ 149,90',
    tagline: 'Intensidade, mistério e luxo em cada pétala.',
    desc: 'Uma peça de presença marcante que une a beleza singular da rosa negra ao brilho sofisticado das zircônias. Ideal para mulheres que apreciam semijoias exclusivas.',
    image: 'image/colarrosa.jpg'
  },
  {
    id: '40',
    ativo: true,
    name: 'Colar filho menino ródio branco',
    category: 'Colares',
    price: 'R$ 89,90',
    tagline: 'Brilho espelhado no ródio branco celebrando o amor materno.',
    desc: 'Com acabamento nobre em ródio branco, este colar apresenta o pingente de menino com detalhes delicados e durabilidade superior para acompanhar todos os momentos.',
    image: 'image/colarfilhomenino.jpg'
  },
  {
    id: '41',
    ativo: true,
    name: 'Colar profissão letras ródio branco',
    category: 'Colares',
    price: 'R$ 84,98',
    tagline: 'Carregue com orgulho a paixão pela sua vocação.',
    desc: 'Com tipografia delicada e banho em ródio branco de alto brilho, este colar é a forma perfeita de expressar amor pela sua profissão ou presentear em formaturas.',
    image: 'image/colarprofissao.jpg'
  },
  {
    id: '42',
    ativo: true,
    name: 'Colar pedagogia violeta no ródio branco',
    category: 'Colares',
    price: 'R$ 84,99',
    tagline: 'Homenagem elegante à arte de educar e transformar.',
    desc: 'Confeccionado no ródio branco com detalhe na tonalidade violeta, símbolo da Pedagogia, este colar une significado profundo e acabamento refinado.',
    image: 'image/colarpedagogia.jpg'
  },
  {
    id: '43',
    ativo: true,
    name: 'Colar longuinho pedra ônix',
    category: 'Colares',
    price: 'R$ 74,90',
    tagline: 'Alongamento visual com o charme atemporal do ônix.',
    desc: 'Versátil e moderno, o comprimento alongado cria uma linha elegante no visual, destacando a pedra ônix como ponto focal sofisticado.',
    image: 'image/colarlonguinho.jpg'
  },
  {
    id: '44',
    ativo: true,
    name: 'Brinco pedra ônix tamanho PP',
    category: 'Brincos',
    price: 'R$ 24,90',
    tagline: 'Discrição e elegância em tamanho minimalista.',
    desc: 'Pequeno, leve e extremamente versátil. Ideal para o segundo ou terceiro furo, ou para quem prefere um ponto de cor escuro sutil no dia a dia.',
    image: 'image/brincopedrapp.jpg'
  },
  {
    id: '45',
    ativo: true,
    name: 'Brinco pedra ônix tamanho P',
    category: 'Brincos',
    price: 'R$ 29,90',
    tagline: 'O equilíbrio perfeito entre delicadeza e presença.',
    desc: 'No tamanho P, este brinco destaca o brilho profundo da pedra ônix com conforto absoluto, sendo um item coringa indispensável no porta-joias.',
    image: 'image/brincopedrap.jpg'
  },
  {
    id: '46',
    ativo: true,
    name: 'Brinco argola zircônia tamanho P',
    category: 'Brincos',
    price: 'R$ 55,98',
    tagline: 'Brilho contínuo em uma argola prática e delicada.',
    desc: 'Compacta e luminosa, esta argola cravejada em zircônias traz sofisticação imediata ao rosto, perfeita para uso diário ou composições modernas.',
    image: 'image/brincoargolap.jpg'
  },
  {
    id: '47',
    ativo: true,
    name: 'Brinco argola feche italiano',
    category: 'Brincos',
    price: 'R$ 54,98',
    tagline: 'Praticidade, segurança e acabamento impecável.',
    desc: 'Com fecho italiano que dispensa tarraxas e garante encaixe perfeito na orelha, esta argola une conforto superior e design clássico.',
    image: 'image/brincoargolafeche.jpg'
  },
  {
    id: '48',
    ativo: true,
    name: 'Brinco argola lisa tamanho M',
    category: 'Brincos',
    price: 'R$ 68,99',
    tagline: 'O essencial clássico com brilho polido espelhado.',
    desc: 'Uma argola de tamanho médio com superfície lisa e acabamento de alto padrão. A peça chave que combina com absolutamente todas as ocasiões.',
    image: 'image/brincoargolalisa.jpg'
  },
  {
    id: '49',
    ativo: true,
    name: 'Brinco argola navete tamanho P',
    category: 'Brincos',
    price: 'R$ 54,98',
    tagline: 'Lapidação navete trazendo charme e luminosidade sutil.',
    desc: 'Com pedras em formato navete que valorizam o contorno da argola, esta peça pequena oferece um brilho refinado e super elegante.',
    image: 'image/brincoargolanavetep.jpg'
  },
  {
    id: '50',
    ativo: true,
    name: 'Brinco argola navete tamanho G',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: 'Presença marcante com a sofisticação da lapidação navete.',
    desc: 'Em tamanho grande e leve, esta argola destaca o desenho alongado das pedras navete, criando um efeito luminoso deslumbrante a cada movimento.',
    image: 'image/brincoargolanaveteg.jpg'
  },
  {
    id: '51',
    ativo: true,
    name: 'Brinco argola zircônia F',
    category: 'Brincos',
    price: 'R$ 59,98',
    tagline: 'Design delicado com cravação brilhante de zircônias.',
    desc: 'Leve e versátil, esta argola traz o brilho intenso das zircônias em uma estrutura confortável para acompanhar você do trabalho ao lazer.',
    image: 'image/brincoargolazirconia.jpg'
  },
  {
    id: '52',
    ativo: true,
    name: 'Brinco triângulo zircônia',
    category: 'Brincos',
    price: 'R$ 44,90',
    tagline: 'Geometria moderna com um toque sutil de brilho.',
    desc: 'O formato triangular traz um ar contemporâneo e despojado, enquanto as zircônias garantem a delicadeza e o requinte da peça.',
    image: 'image/brincotriangulo.jpg'
  },
  {
    id: '53',
    ativo: true,
    name: 'Brinco coração argola',
    category: 'Brincos',
    price: 'R$ 59,98',
    tagline: 'O clássico da argola reinventado em formato romântico.',
    desc: 'Unindo a praticidade das argolas ao simbolismo apaixonante do coração, este brinco emoldura o rosto com suavidade e estilo.',
    image: 'image/brincocoracao.jpg'
  },
  {
    id: '54',
    ativo: true,
    name: 'Brinco cavalo',
    category: 'Brincos',
    price: 'R$ 59,98',
    tagline: 'Estilo e autenticidade inspirados na natureza.',
    desc: 'Com acabamento detalhado e tamanho confortável, este brinco celebra a elegância e a força do cavalo em uma semijoia cheia de charme.',
    image: 'image/brincocavalo.jpg'
  },
  {
    id: '55',
    ativo: true,
    name: 'Brinco gota zircônia negra',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: 'Sofisticação noturna e brilho intenso da zircônia negra.',
    desc: 'O formato clássico de gota ganha um toque de ousadia e luxo com a zircônia negra, refletindo nuances profundas e elegantes.',
    image: 'image/brincogotazirconia.jpg'
  },
  {
    id: '56',
    ativo: true,
    name: 'Brinco rosa negra',
    category: 'Brincos',
    price: 'R$ 79,98',
    tagline: 'Romantismo dramático com acabamento impecável.',
    desc: 'Esculpido com detalhes delicados de pétalas, o Brinco Rosa Negra é uma peça de destaque que traz personalidade e requinte imediato ao look.',
    image: 'image/brincorosa.jpg'
  },
  {
    id: '57',
    ativo: true,
    name: 'Brinco minimalista',
    category: 'Brincos',
    price: 'R$ 54,98',
    tagline: 'A elegância pura dos traços simples e modernos.',
    desc: 'Leve, discreto e atemporal. Perfeito para quem busca uma semijoia versátil para o cotidiano ou para harmonizar com colares mais elaborados.',
    image: 'image/brincominimalista2.jpg'
  },
  {
    id: '58',
    ativo: true,
    name: 'Brinco laço navete',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: 'Delicadeza feminina com o brilho refinado das pedras navete.',
    desc: 'O formato de laço ganha vida e luminosidade através da combinação de pedras navete, criando uma joia encantadora e sofisticada.',
    image: 'image/brincolaconavete.jpg'
  },
  {
    id: '59',
    ativo: true,
    name: 'Brinco coração delicado',
    category: 'Brincos',
    price: 'R$ 64,98',
    tagline: 'Suavidade e brilho em um detalhe apaixonante.',
    desc: 'Com proporções harmoniosas e acabamento polido, este brinco de coração ilumina o rosto com sutileza e romantismo.',
    image: 'image/brincocoracaodelicado.jpg'
  },
  {
    id: '60',
    ativo: true,
    name: 'Brinco argola quadrada tamanho P',
    category: 'Brincos',
    price: 'R$ 59,98',
    tagline: 'Linhas geométricas modernas em tamanho compacto.',
    desc: 'Uma releitura contemporânea da argola tradicional. O formato quadrado tamanho P oferece estilo e personalidade com total conforto.',
    image: 'image/brincoargolaquadradap.jpg'
  },
  {
    id: '61',
    ativo: true,
    name: 'Brinco argola quadrada tamanho M',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: 'Arquitetura moderna e elegância na medida certa.',
    desc: 'Com ângulos suaves e brilho impecável, a argola quadrada média destaca o rosto com sofisticação e um toque fashionista.',
    image: 'image/brincoargolaquadradam.jpg'
  },
  {
    id: '62',
    ativo: true,
    name: 'Brinco argola quadrada tamanho G',
    category: 'Brincos',
    price: 'R$ 84,98',
    tagline: 'Imponência e estilo contemporâneo de alto impacto.',
    desc: 'Para quem ama acessórios marcantes, esta argola quadrada grande combina leveza estrutural com um visual arrojado e elegante.',
    image: 'image/brincoargolaquadradag.jpg'
  },
  {
    id: '63',
    ativo: true,
    name: 'Brinco pérola ródio branco',
    category: 'Brincos',
    price: 'R$ 68,98',
    tagline: 'A união clássica entre a pérola e o brilho frio do ródio branco.',
    desc: 'Atemporal e refinado, este brinco combina a suavidade natural da pérola com o acabamento espelhado do ródio branco, ideal para ocasiões especiais.',
    image: 'image/brincoperola.jpg'
  },
  {
    id: '64',
    ativo: true,
    name: 'Brinco laço',
    category: 'Brincos',
    price: 'R$ 56,90',
    tagline: 'Um toque doce e elegante para o seu visual.',
    desc: 'Com acabamento liso e curvas delicadas, o Brinco Laço é uma peça leve e encantadora que traz feminilidade a qualquer produção.',
    image: 'image/brincolaco.jpg'
  },
  {
    id: '65',
    ativo: true,
    name: 'Brinco gota alongado',
    category: 'Brincos',
    price: 'R$ 69,98',
    tagline: 'Silhueta esguia que valoriza e alonga o pescoço.',
    desc: 'Com design fluido e sofisticado, o formato de gota alongada cria movimento elegante e leveza, perfeito para produções refinadas.',
    image: 'image/brincogotaalongado.jpg'
  },
  {
    id: '66',
    ativo: true,
    name: 'Brinco de zircônia argola média',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: 'Luminosidade intensa em uma argola versátil e clássica.',
    desc: 'Cravejada com zircônias de alto brilho, esta argola de tamanho médio é a escolha certa para iluminar o rosto com elegância em qualquer momento.',
    image: 'image/brincodezirconia.jpg'
  },
  {
    id: '67',
    ativo: true,
    name: 'Brinco pérola minimalista tamanho G',
    category: 'Brincos',
    price: 'R$ 64,98',
    tagline: 'Proporção marcante com a pureza clássica da pérola.',
    desc: 'Destaque para a pérola em tamanho maior com montagem minimalista, unindo presença visual e sobriedade em uma peça inesquecível.',
    image: 'image/brincoperolag.jpg'
  },
  {
    id: '68',
    ativo: true,
    name: 'Bracelete liso minimalista',
    category: 'Pulseiras',
    price: 'R$ 129,90',
    tagline: 'Sofisticação arquitetônica e brilho espelhado no pulso.',
    desc: 'Com design rígido, clean e acabamento polido impecável, este bracelete é uma peça coringa que eleva qualquer visual, usado sozinho ou em mix de pulseiras.',
    image: 'image/braceleteliso.jpg'
  },
  {
    id: '69',
    ativo: true,
    name: 'Bracelete zircônia ônix',
    category: 'Pulseiras',
    price: 'R$ 139,90',
    tagline: 'O contraste luxuoso entre o brilho da zircônia e a profundidade do ônix.',
    desc: 'Um bracelete de presença refinada que combina detalhes em zircônia com o tom intenso do ônix, trazendo elegância imediata ao pulso.',
    image: 'image/braceletezirconia.jpg'
  },

  /* infantis */
  {
    id: '70',
    ativo: true,
    name: 'Pulseira infantil borboleta',
    category: 'Infantis',
    price: 'R$ 54,98',
    tagline: 'Delicadeza e encanto pensados para as pequenas.',
    desc: 'Com pingente gracioso de borboleta e corrente leve, esta pulseira infantil oferece conforto, segurança e um brilho doce para momentos especiais.',
    image: 'image/pulseirainfantil.jpg'
  },
  {
    id: '71',
    ativo: true,
    name: 'Pulseira ródio branco',
    category: 'Pulseiras',
    price: 'R$ 54,98',
    tagline: 'Leveza, brilho intenso e conforto para o seu dia a dia.',
    desc: 'Semijoia hipoalergênica banhada a ródio branco, pensada para unir resistência e suavidade. Um acessório clássico que combina facilmente com relógios e outras pulseiras.',
    image: 'image/pulseirarodio.jpg'
  },
  {
    id: '72',
    ativo: true,
    name: 'Brinco trio delicado na prata 925',
    category: 'Brincos',
    price: 'R$ 129,90',
    tagline: 'Pureza da prata 925 em três opções encantadoras.',
    desc: 'Confeccionado em prata 925 legítima, este trio oferece versatilidade e segurança para as orelhas sensíveis, com designs delicados e atemporais.',
    image: 'image/brincotrioinfantil.jpg'
  },
  {
    id: '73',
    ativo: true,
    name: 'Brinco ponto de luz prata 925',
    category: 'Brincos',
    price: 'R$ 89,90',
    tagline: 'Um pequeno brilho eterno em prata 925.',
    desc: 'Clássico, leve e seguro. Feito em prata 925, este ponto de luz é ideal para quem busca delicadeza absoluta no dia a dia.',
    image: 'image/brincoponto.jpg'
  },
  {
    id: '74',
    ativo: true,
    name: 'Brinco coração vazado prata 925',
    category: 'Brincos',
    price: 'R$ 59,98',
    tagline: 'Contorno suave e romântico em prata 925.',
    desc: 'Com desenho leve de coração vazado e acabamento em prata 925, este brinco une conforto, durabilidade e um visual meigo.',
    image: 'image/brincocoracaovazado.jpg'
  },
  {
    id: '75',
    ativo: true,
    name: 'Brinco trio delicado',
    category: 'Brincos',
    price: 'R$ 54,98',
    tagline: 'Três pares cheios de charme para variar todos os dias.',
    desc: 'Conjunto leve e versátil com três modelos delicados, perfeito para o uso no dia a dia ou para composições sutis em múltiplos furos.',
    image: 'image/brincotriodelicado.jpg'
  },
  {
    id: '76',
    ativo: true,
    name: 'Brinco trio coração vazado',
    category: 'Brincos',
    price: 'R$ 64,98',
    tagline: 'Romantismo em dose tripla com leveza e conforto.',
    desc: 'Trio encantador de corações vazados em tamanhos graduais, proporcionando um ajuste confortável e um visual delicado.',
    image: 'image/brincotriocoracao.jpg'
  },
  {
    id: '77',
    ativo: true,
    name: 'Brinco Helo estrelinha',
    category: 'Infantis',
    price: 'R$ 54,98',
    tagline: 'Um toque mágico de brilho inspirado nas estrelas.',
    desc: 'Pequeno, leve e encantador, o Brinco Helo Estrelinha foi desenhado para trazer doçura e luminosidade com total conforto.',
    image: 'image/brincohelo.jpg'
  },
  {
    id: '78',
    ativo: true,
    name: 'Brinco coração botão',
    category: 'Infantis',
    price: 'R$ 54,98',
    tagline: 'Encaixe perfeito e suave para o dia a dia.',
    desc: 'Em formato botão que se acomoda suavemente à orelha sem enganchar, este brinco de coração oferece segurança e delicadeza.',
    image: 'image/brincocoracaobotao.jpg'
  },
  {
    id: '79',
    ativo: true,
    name: 'Brinco pontinho de luz negra',
    category: 'Infantis',
    price: 'R$ 39,90',
    tagline: 'Um detalhe discreto com brilho escuro sofisticado.',
    desc: 'Minimalista e versátil, este pontinho de luz traz a elegância do tom escuro em uma peça leve, ideal para uso contínuo ou segundo furo.',
    image: 'image/brincopontinho.jpg'
  },
  {
    id: '80',
    ativo: true,
    name: 'Brinco peixinho',
    category: 'Infantis',
    price: 'R$ 24,90',
    tagline: 'Diversão e delicadeza em um design lúdico.',
    desc: 'Com formato gracioso de peixinho e acabamento suave, é uma opção encantadora, leve e confortável para o público infantil.',
    image: 'image/brincopeixinho.jpg'
  },
  {
    id: '81',
    ativo: true,
    name: 'Coraçãozinho entrelaço',
    category: 'Infantis',
    price: 'R$ 39,98',
    tagline: 'Traços delicados que simbolizam carinho e união.',
    desc: 'Pequeno e cheio de significado, este brinco apresenta um coração entrelaçado com acabamento polido e confortável para todas as idades.',
    image: 'image/brincocoracaozinho.jpg'
  },
  {
    id: '82',
    ativo: true,
    name: 'Trevinho pedra ônix',
    category: 'Infantis',
    price: 'R$ 59,98',
    tagline: 'Um amuleto delicado de sorte e elegância.',
    desc: 'Em tamanho compacto e encantador, o trevinho com pedra ônix combina charme discreto, proteção simbólica e acabamento impecável.',
    image: 'image/brincotrevinho.jpg'
  },
  {
    id: '83',
    ativo: true,
    name: 'Brinco argola pérola',
    category: 'Brincos',
    price: 'R$ 76,98',
    tagline: '...',
    desc: '...',
    image: 'image/brincoargolaperola.jpg'
  },
  {
    id: '84',
    ativo: true,
    name: 'Brinco trevo madre pérola',
    category: 'Brincos',
    price: 'R$ 74,98',
    tagline: '...',
    desc: '...',
    image: 'image/brincotrevomadre.jpg'
  },
    {
    id: '85',
    ativo: true,
    name: 'Brinco infantil trevo colorido',
    category: 'Infantis',
    price: 'R$ 56,98',
    tagline: '...',
    desc: '...',
    image: 'image/brincoinfantiltrevo.jpg'
  },
   {
    id: '86',
    ativo: true,
    name: 'Brinco argola infantil ponto de luz ',
    category: 'Infantis',
    price: 'R$ 54,90',
    tagline: '...',
    desc: '...',
    image: 'image/brincoargolainfantil.jpg'
  }
];

/* ---------- FOTO INDISPONÍVEL ----------
   Se a foto de uma peça (ou da vendedora) não carregar, aparece este aviso neutro,
   em vez de uma foto de outra pessoa ou de outra joia. */
const IMG_INDISPONIVEL = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
  '<rect width="400" height="300" fill="#F7F2E8"/>' +
  '<text x="200" y="158" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#8A6420">Foto em breve</text>' +
  '</svg>'
);

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

function linkWhatsAppGeral() {
  const texto = `Olá! Vim pelo catálogo da ${NOME_LOJA} e gostaria de mais informações.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
}

// Mostra o número no formato (49) 99999-9999
function numeroFormatado() {
  const n = WHATSAPP_NUMBER.replace(/\D/g, '');
  const m = n.match(/^55(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : `+${n}`;
}

/* ---------- FOTO INDISPONÍVEL ---------- */
function trocarPorPlaceholder(img) {
  if (img.dataset.erro) return;
  img.dataset.erro = '1';
  img.src = IMG_INDISPONIVEL;
}

document.addEventListener('error', e => {
  const img = e.target;
  if (img instanceof HTMLImageElement && img.hasAttribute('data-foto')) trocarPorPlaceholder(img);
}, true);

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
        <img src="${escapeHTML(p.image)}" alt="" loading="lazy" decoding="async" data-foto>
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
    : '<p class="empty-msg">Nenhuma peça encontrada.</p>';

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

function renderInfoLoja() {
  const rotulos = {
    cidade: 'Atendimento',
    entrega: 'Entrega',
    pagamento: 'Pagamento',
    trocas: 'Trocas e devoluções',
    garantia: 'Garantia'
  };
  document.getElementById('storeInfo').innerHTML = Object.keys(rotulos)
    .filter(chave => INFO_LOJA[chave])
    .map(chave => `
      <div class="info-item">
        <h4>${rotulos[chave]}</h4>
        <p>${escapeHTML(INFO_LOJA[chave])}</p>
      </div>
    `).join('');
}

function configurarContato() {
  const geral = linkWhatsAppGeral();
  document.getElementById('wppGeral').href = geral;
  document.getElementById('wppFloat').href = geral;

  const rodape = document.getElementById('footerWpp');
  rodape.href = geral;
  rodape.textContent = numeroFormatado();
  document.getElementById('wppNumber').textContent = numeroFormatado();
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

  delete modalImg.dataset.erro;
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

// Mantém o foco do teclado (Tab) dentro da janela enquanto ela está aberta
function prenderFocoNoModal(e) {
  const focaveis = [...modal.querySelectorAll('a[href], button:not([disabled])')];
  if (!focaveis.length) return;

  const primeiro = focaveis[0];
  const ultimo = focaveis[focaveis.length - 1];
  const atual = document.activeElement;

  if (!modal.contains(atual)) {
    e.preventDefault();
    primeiro.focus();
  } else if (e.shiftKey && atual === primeiro) {
    e.preventDefault();
    ultimo.focus();
  } else if (!e.shiftKey && atual === ultimo) {
    e.preventDefault();
    primeiro.focus();
  }
}

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
  const modalAberto = modal.classList.contains('active');

  if (e.key === 'Tab' && modalAberto) {
    prenderFocoNoModal(e);
    return;
  }

  if (e.key !== 'Escape') return;
  if (modalAberto) {
    fecharModal();
  } else {
    setMenuFiltros(false);
  }
});

/* ---------- INICIALIZAÇÃO ---------- */
renderFiltros();
renderProdutos();
renderInfoLoja();
configurarContato();

document.querySelectorAll('img[data-foto]').forEach(img => {
  if (img.complete && img.naturalWidth === 0) trocarPorPlaceholder(img);
});

const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

/* ---------- MENU DO CELULAR ---------- */
(function () {
  const botao = document.getElementById('menuToggle');
  const menu = document.getElementById('mainNav');
  const btnColecao = document.getElementById('navColecaoBtn');
  const sub = document.getElementById('navSub');
  if (!botao || !menu) return;

  // Lista de categorias montada a partir das peças ativas (categorias novas entram sozinhas)
  function renderSub() {
    const ativas = products.filter(p => p.ativo !== false);
    const categorias = ['Todas', ...new Set(ativas.map(p => p.category))];
    sub.innerHTML = categorias.map(cat => {
      const qtd = cat === 'Todas' ? ativas.length : ativas.filter(p => p.category === cat).length;
      const rotulo = cat === 'Todas' ? 'Ver todas' : cat;
      return `<button type="button" class="nav-sub-item ${cat === activeCategory ? 'active' : ''}" data-cat="${escapeHTML(cat)}">${escapeHTML(rotulo)} <span>${qtd}</span></button>`;
    }).join('');
  }

  function definirSub(aberto) {
    if (!btnColecao || !sub) return;
    if (aberto) renderSub();
    sub.classList.toggle('open', aberto);
    btnColecao.setAttribute('aria-expanded', String(aberto));
  }

  function definir(aberto) {
    menu.classList.toggle('open', aberto);
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    if (!aberto) definirSub(false);
  }

  botao.addEventListener('click', () => definir(!menu.classList.contains('open')));

  if (btnColecao && sub) {
    btnColecao.addEventListener('click', () => definirSub(!sub.classList.contains('open')));

    // Escolher uma categoria: filtra a coleção, fecha o menu e rola até as peças
    sub.addEventListener('click', e => {
      const item = e.target.closest('[data-cat]');
      if (!item) return;
      searchInput.value = '';
      setCategory(item.dataset.cat);
      definir(false);
      const alvo = document.querySelector('.filter-bar');
      if (alvo) {
        const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        alvo.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' });
      }
    });
  }

  // Fecha ao escolher um link, ao tocar fora ou ao apertar Esc
  menu.addEventListener('click', e => { if (e.target.closest('a')) definir(false); });
  document.addEventListener('click', e => {
    if (!botao.contains(e.target) && !menu.contains(e.target)) definir(false);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') definir(false); });

  // Se a tela crescer (ex.: girar o celular), volta ao menu normal
  window.matchMedia('(min-width: 769px)').addEventListener('change', e => {
    if (e.matches) definir(false);
  });
})();