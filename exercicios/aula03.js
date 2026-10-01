// Aula 03 - Resolução dos Exercícios
// ==========================================

// ex1
// Se a linha <link rel="stylesheet" href="styles.css"> for apagada, a ligação entre o HTML e o estilo visual é quebrada[cite: 1, 5, 6]. 
// No navegador, a estrutura do HTML continuará a ser exibida, mas ficará totalmente "desformatada": sem cores de fundo, sem espaçamentos e sem bordas nos cartões, com todo o texto a preto e branco alinhado à esquerda[cite: 2, 6]. 
// O ficheiro styles.css continua na pasta, mas o navegador não o lê por falta da indicação no código[cite: 6].


// ex2
// Não, o atributo defer não era desnecessário[cite: 6]. 
// O código funcionou apenas porque o elemento <script> estava posicionado no fim do <body>, ou seja, após a montagem de toda a estrutura da página HTML[cite: 2, 6]. 
// O atributo defer é essencial porque instrui o navegador a executar o JavaScript somente depois do HTML estar completamente carregado, independentemente da posição onde a etiqueta esteja colocada (prevenindo falhas caso o script fique no <head>)[cite: 2, 6].


// ex3
/*
:root {
  --cor-urgente: #C00000;
  --cor-texto-escuro: #000000;
}

.cartao-urgente {
  border: 3px solid var(--cor-urgente);
}

.titulo-urgente {
  color: var(--cor-texto-escuro);
}
*/
//[cite: 2, 5, 6]


// ex4
// Para garantir que a separação dos três ficheiros (index.html, styles.css e script.js) foi concluída com sucesso[cite: 3, 4, 5]:
// 1. Confirmei no navegador se a página mantinha toda a sua formatação visual (cores de fundo, fontes e bordas)[cite: 2, 4, 5].
// 2. Testei a interatividade clicando no botão "Apoiar" para verificar se o estado alterava corretamente para "Apoiado"[cite: 4].
// 3. Verifiquei se os caminhos no atributo href="styles.css" (no <head>)[cite: 1, 2, 3] e no src="script.js" com o atributo defer (antes de fechar o </body>) estavam configurados para a mesma pasta[cite: 2, 3, 6].


// ex5
// Lista das 4 variáveis criadas no :root do ficheiro CSS com base nos seus papéis[cite: 2, 3, 5, 6]:
//
// 1. `--cor-principal`: Guarda a cor primária da aplicação (ex.: #1F4E79)[cite: 2, 3]. Descreve a função da cor na identidade visual, permitindo alterá-la futuramente num único local[cite: 2, 3, 6].
// 2. `--cor-destaque`: Utilizada para as bordas dos cartões e elementos de ênfase (ex.: #2E75B6)[cite: 2, 3, 4]. O nome identifica a função de destaque e não o tom específico[cite: 3, 6].
// 3. `--espaco-padrao`: Define o espaçamento interno/padding dos componentes (ex.: 16px)[cite: 3, 4]. Padroniza a margem em vários elementos em vez de repetir um valor absoluto[cite: 2, 3].
// 4. `--borda-arredondada`: Define o raio dos cantos (ex.: 8px) para os cartões e botões[cite: 3]. Descreve o papel do acabamento estético em toda a página[cite: 3, 6].