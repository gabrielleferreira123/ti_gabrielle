1. Escreva a linha que cria uma variável chamada visto guardando o valor falso:
R: let visto = false;

2. Diga o que cada comparação devolve, true ou false:
R: 5 === 5: true

"5" === 5: false

"5" == 5: true

true === false: false

3. O trecho abaixo roda sem dar erro, mas apoiar um cartão bagunça os outros. Diga por quê e escreva
// a correção: 
R: A variável apoiado foi declarada fora do forEach, tornando a compartilhada entre todos os botões. Clicar em qualquer botão altera essa variável global e afeta o estado dos demais.
Mover a declaração para dentro da função do forEach, criando um escopo próprio para cada botão:
document.querySelectorAll(".apoiar").forEach(function(botao) {
    let apoiado = false;
    botao.addEventListener("click", function() {
        // código do botão
    });
});

4. Complete o if/else para que o botão volte a dizer Apoiar quando o apoio for retirado:
R: if (apoiado === false) {
botao.textContent = "Apoiado";
} else {
botao.textContent = apoiado;
}

5. No seu index.html, acrescente ao Radar um quarto cartão, com um problema real da sua escola,
e faça o botão dele funcionar igual aos outros. Você não precisa escrever JavaScript novo: se o cartão
estiver montado do jeito certo, o código que já existe cuida dele:
R: <div class="cartao">
  <h3>Bebedouros do 2º andar quebrados</h3>
  <p>Estudantes precisam descer até o térreo durante o intervalo.</p>
  <button class="apoiar">Apoiar</button>
</div>

6. Um cartão precisa nascer já apoiado: contagem em 1 e botão escrito Apoiado. O que você mudaria
no JavaScript para ele funcionar direito desde o primeiro clique? Explique por que a solução que você
deu não serve para os outros cartões:
R: Definir o estado inicial daquele botão específico como let apoiado = true; (ou ler um atributo no HTML como data-apoiado="true").
Se você mudar essa variável para todos os cartões de uma vez, vai acabar atrapalhando o funcionamento dos outros. Como a maioria deles começa sem apoio, definir true desde o início faz o sistema entender que o seu primeiro clique serve para tirar o apoio, em vez de adicionar.