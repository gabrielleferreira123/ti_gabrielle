// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.

// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
R: let visto = false;

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5
//   "5" === 5
//   "5" == 5
//   true === false
R: 5 === 5: true

"5" === 5: false

"5" == 5: true

true === false: false


// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
//       // ...
//     });
//   });
R: A variável apoiado foi declarada fora do forEach, tornando a compartilhada entre todos os botões. Clicar em qualquer botão altera essa variável global e afeta o estado dos demais.
Mover a declaração para dentro da função do forEach, criando um escopo próprio para cada botão:
document.querySelectorAll(".apoiar").forEach(function(botao) {
    let apoiado = false;
    botao.addEventListener("click", function() {
        // código do botão
    });
});

// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }
R: if (apoiado === false) {
botao.textContent = "Apoiado";
} else {
botao.textContent = apoiado;
}


// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.
R: <div class="cartao">
  <h3>Bebedouros do 2º andar quebrados</h3>
  <p>Estudantes precisam descer até o térreo durante o intervalo.</p>
  <button class="apoiar">Apoiar</button>
</div>

// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?
R: Definir o estado inicial daquele botão específico como let apoiado = true; (ou ler um atributo no HTML como data-apoiado="true").
Se você mudar essa variável para todos os cartões de uma vez, vai acabar atrapalhando o funcionamento dos outros. Como a maioria deles começa sem apoio, definir true desde o início faz o sistema entender que o seu primeiro clique serve para tirar o apoio, em vez de adicionar.