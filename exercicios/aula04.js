<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu primeiro React</title>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function Cabecalho() {
      return (
        <header>
          <h1>[Nome do teu projeto aqui]</h1>
          <p>[A tua proposta de valor aqui]</p>
        </header>
      );
    }

    function Cartao() {
      return (
        <div>
          <h3>Título do item</h3>
          <p>Descrição curta do item.</p>
        </div>
      );
    }

    function Lista() {
      const tarefas = [
        { id: 1, texto: "Estudar React" },
        { id: 2, texto: "Levar o cachorro" }
      ];
      return (
        <ul>
          {tarefas.map((t) => <li key={t.id}>{t.texto}</li>)}
        </ul>
      );
    }

    function App() {
      return (
        <div>
          <Cabecalho />
          <Cartao />
          <Cartao />
          <Cartao />
          <Lista />
        </div>
      );
    }

    const raiz = ReactDOM.createRoot(document.getElementById("root"));
    raiz.render(<App />);
  </script>
</body>
</html>


 Trocar Cartao por cartao: O ecrã fica totalmente branco porque o React trata nomes com letras minúsculas como etiquetas HTML comuns.   Apagar type="text/babel": A consola apresenta o erro "Unexpected token", pois o aviso para o Babel traduzir o código desaparece e o navegador não consegue ler a sintaxe JSX.   Apagar o parêntese depois de um return: Apenas a primeira linha do conteúdo aparece no ecrã, porque o JavaScript encerra automaticamente a instrução do return na primeira linha e devolve um valor vazio.


 Comparação do tamanho do código: A lista em React tem muito menos linhas porque a estrutura dos itens é montada de forma dinâmica com o método map no vetor. Em JavaScript puro, seriam necessários três blocos de código com createElement e appendChild, ou a repetição de strings através de innerHTML.   Mostrar dez tarefas: Na versão em React, basta inserir mais objetos dentro do vetor tarefas. Na versão em JavaScript puro, seria obrigatório repetir as instruções de criação e inserção de elementos no DOM para cada tarefa nova.   


 1. O ficheiro HTML deve ser guardado no caminho estudos/aula04-SEUNOME/index.html dentro do repositório do grupo, efetuando o commit na sua própria conta de utilizador.
2. Deve olhar para as 3 telas do recorte no Figma e anotar no ficheiro README quais os componentes que acha que existem em cada ecrã, correspondendo isto ao Checkpoint 1.