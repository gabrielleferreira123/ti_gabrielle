// ==============================================================================
// 1. VERIFICAÇÃO DE CONTRASTE (RÉGUA DE 4,5:1)
// ==============================================================================

// Função para calcular a luminância relativa de uma cor hex
function getLuminance(hex) {
  const rgb = hex.replace("#", "").match(/.{2}/g).map(x => parseInt(x, 16) / 255);
  const [r, g, b] = rgb.map(c => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Função para calcular a razão de contraste
function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const max = Math.max(lum1, lum2);
  const min = Math.min(lum1, lum2);
  return (max + 0.05) / (min + 0.05);
}

// Execução e resposta da questão 1:
const pares = [
  { cor1: "#FFFFFF", cor2: "#1F4E79", ratio: getContrastRatio("#FFFFFF", "#1F4E79") }, // ~8.66:1 (Passa)
  { cor1: "#888888", cor2: "#FFFFFF", ratio: getContrastRatio("#888888", "#FFFFFF") }, // ~3.54:1 (REPROVA)
  { cor1: "#FFFFFF", cor2: "#C00000", ratio: getContrastRatio("#FFFFFF", "#C00000") }, // ~6.48:1 (Passa)
  { cor1: "#CCCCCC", cor2: "#FFFFFF", ratio: getContrastRatio("#CCCCCC", "#FFFFFF") }  // ~1.61:1 (REPROVA)
];

// REPROVAM NA RÉGUA DE 4,5:1:
// - #888888 no #FFFFFF (Razão: 3,54:1)
// - #CCCCCC no #FFFFFF (Razão: 1,61:1)


// ==============================================================================
// 2. ATRIBUTOS 'ALT' PARA IMAGENS
// ==============================================================================

const atributosAlt = {
  a: "Alunos em fila dobrando o corredor da cantina durante o intervalo.",
  b: "Logotipo da Escola", // Use "Logotipo da Escola - Página Inicial" se for um link
  c: "" // Vazio porque a imagem é puramente decorativa
};


// ==============================================================================
// 3. MOTIVO DO ERRO E CORREÇÃO DO EVENTO DO BOTÃO
// ==============================================================================

/*
 POR QUE DEIXA PESSOAS SEM SABER O QUE ACONTECEU:
 Alterar apenas a cor (style.backgroundColor) não envia nenhum aviso sonoro para
 leitores de tela usados por pessoas cegas ou com baixa visão. Além disso, pessoas
 com daltonismo podem não notar a alteração de cor.

 CORREÇÃO EM JAVASCRIPT:
*/

const botao = document.querySelector("#meuBotao");

if (botao) {
  botao.addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.textContent = "Confirmado"; // Atualiza o texto visualmente
    this.setAttribute("aria-label", "Ação concluída com sucesso"); // Feedback para leitor de tela
  });
}


// ==============================================================================
// 4. TRÊS CORREÇÕES DO index.html (SEÇÃO 8)
// ==============================================================================

/*
 O que foi alterado no HTML:
 1. Adicionado o atributo lang="pt-BR" na tag <html> para o leitor de tela pronunciar corretamente.
 2. Substituído o container <div> da navegação pela tag semântica <nav>.
 3. Adicionado o atributo alt com descrição textual em todas as tags <img>.
*/


// ==============================================================================
// 5. TABELA DE AUDITORIA E MELHORIAS PRIORIZADAS
// ==============================================================================

const tabelaAuditoria = [
  { item: "Texto Alternativo (alt)", status: "Reprovado", problema: "Imagens do cabeçalho sem atributo alt" },
  { item: "Contraste de Cores", status: "Reprovado", problema: "Texto cinza #888888 sobre fundo branco no rodapé" },
  { item: "Estrutura Semântica", status: "Reprovado", problema: "Títulos definidos com <p> em negrito em vez de <h2>" },
  { item: "Navegação por Teclado", status: "Aprovado", problema: "Nenhum (foco visível funcionando)" }
];

const melhoriasOrdenadas = [
  "1ª: Incluir atributo alt descritivo nas imagens (Acessibilidade)",
  "2ª: Ajustar o contraste da cor do texto do rodapé para no mínimo 4,5:1 (Acessibilidade)",
  "3ª: Substituir os parágrafos de destaque pelas tags de título <h2> e <h3> (Estrutura/Semântica)"
];

/*
 JUSTIFICATIVA DA ORDEM:
 A ordem prioriza a remoção imediata de barreiras críticas de acessibilidade (alt e contraste) 
 que impedem a leitura ou visualização por usuários com deficiência, deixando a organização 
 estrutural das tags para a etapa final.
*/