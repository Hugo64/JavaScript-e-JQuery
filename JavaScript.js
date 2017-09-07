

/* -------------- WINDOW --------------

 Window, elemento base para todas as funções javaScript
 Exemplo 1 : window.alert("Ola");


 -------------- EVENTOS DO MOUSE -------------- 

 onclick --> Quando há um clique com o mouse sobre algo, aciona um evento programado. 
 {
  onclick="alert('Olá')";
 }

 onmouserover --> Quando passa o mouse sobe algo que aciona um evento programado.
 {
  onmouserover="alert('Olá')";
 }

 onload --> Aciona um evento automaticamente quando colocado sobre algo. 
 {
  Por exemplo colocando sobre a teg "Body" --> <body onload="alert('Olá');"
  Assim que carregasse o Body, ele acionaria o alerta.
 }

  Obs: Dentro dos eventos pode se colocar o que quiser, inclusive funções.
  Exemplo: onlick="Aberto()";

  ------------------ ELEMENTOS -----------------

  Através dos id é possivel recuperar ou alterar dados ou resultados do elemento.
  Exemplo:
  - Colocaremos um código HTML onde aparece uma imagem. Ao clicar na imagem aparecerá outra no lugar:

  <body>
    <img id="Demo" onclick='Ligar()' src="img/xlamp_off.png" />
  </body>

  - Agora criaremos a função "Ligar()" que será responsável pela alteração da imagem.

   function Ligar() {
      window.document.getElementById("loading").src = "img/xlamp_on.png"
   }

   - Quando clicarem na imagem dentro da teg <img> automaticamente acionará a função
     que alterará a imagem pela que foi colocada na função ".src", além da src, existem
     muitas outras opções (atributos). Que será vista provavelmente mais para frente.

   ------------------ VARIÁVEIS -> SINTAXE, TIPOS PRIMITIVOS - NOMECLATURA -----------------

   - Existem 3 tipos primitivos no javaScript: string (Texto), number (Numero), boolean (Lógico).
   - Automaticamente a variável identifica o tipo de dado inserido nela.

   - Para declarar uma varável:
    Exemplo 1:  

      var nome = "Hugo Cruz";
      var idade = 21;

      - Podendo declarar da seguinte forma:

        var nome = "Hugo Cruz", Idade = 21;

    - Colocando aspas dentro de uma string:
      
      var nome = "Hugo \"Cruz"; --> É preciso do caracter de scape "\".

    - Colocando barra:

      var nome = "Hugo \\Cruz"; --> Colocando duas aparecerá uma.

      * Valores das varáveis * - undefined, null, NaN e infinity, constantes.

      - undefined, quando a varável é declarada, porém não é atribuido nenhum valor.
      - null, quando é atribuido um valor nulo a uma variável.
      - NaN (não é um numero), quando o valor dado a uma variável não é um numero.
      {
          var valor = 3 * "pessoas"; --> NaN.
      }
      - infinity, quando ultrapassa um valor do tipo da variável.
      - Constantes são varáveis que não possa mudar seu valor.
      {
          const valor = 10; --> O valor desta variável jamais poderá ser alterada.
      }


   ---------------------- OPERADORES DE BITS (BITWISE) -------------------------

   ?:           Operador ternário
   delete       Apaga operando (atributo) de um objeto
   in           Indica se existe a propriedade especificada
   instanceof   Indica se o objeto é do tipo especificado
   new          Cria nova instancia de objeto !
   this         Referência ao objeto atual !
   typeof       Retorna o tipo do operando
   ()           Chama uma função !

      - Exemplos:

      var Idade = idade >= 18 ? "Maior de idade" : "Menor de idade";

      Pessoa = {
         nome : "Fulano"
      }

      delete Pessoa.nome; --> Deletando o valor que está dentro do nome. O resultado ficara undefined.

      alert("nome" in Pessoa); --> Verificando se há uma atributo "nome" dentro do objeto Pessoa.

      alert(idade instanceof String) --> Verifica se "idade" é uma instancia de String. Neste caso será true.

      alert(typeof(5)); --> informará que o tipo de dado é number.
      alert(typeof(function(){})) --> informará que o tipo é function.


   ---------------------- PRÁTICA -------------------------------

   var newFormulario = window.document.getElementById("formulario"); -> "("formulario") aqui estamos pegando o Id chamado "formulario" que se encontra em um form".

   var Nome = newFormulario.nome.value; --> Aqui estamos pegando o valor inserido dentro do input que contém "nome" dentro do atributo name.
   var Idade = newFormulario.idade.value;
   var altura = newFormulario.altura.value;

   Obs: Se caso algum input for number é preciso convertê-lo caso queira fazer algum calculo etc. Neste caso utilize a função parseInt();
   Exemplo:   var Idade = parseInt(newFormulario.idade.value);

   - Para inserir um valor a um input como resultado faça:
   Exemplo: formulario.resultado.value = Idade;
   
   - Com a função toFixed();. Você pode definir quantas casas decimais estarão no resultado.
   Exemplo:

   var Numero = 10.872634;
   var segundoNumero = Numero.toFixed(2);

   alert(segundoNumero); --> Resultado será: 10.87.


   ------------------- ARRAY INDEXADO ------------------

   Array = Coleção de dados indexados.

   var paises = new Array(); --> Podemos declarar deste jeito um array, ou já inserindo dados dentro do contrutor = var paises = new Array("Brasil", "Argentina","Holanda","Brasil");

   Funções:

   alert(paises.indexOf("Brasil")); --> Exibe o index onde o "Brasil" está inserido, neste caso paises[0]. Obs. Exibe a primeira ocorrência.
   alert(paises.lastIndexOf("Brasil")); --> Exibe a ultima ocorrência, ou seja, neste caso paises[3].

   Ou pode declarar um array desta forma:

   var paises = new Array();
   paises[0] = "Brasil";
   paises[1] = "Argentina";

   alert(paises.sort());  --> Exibe todos os dados dentro do array em ordem alfabetica.
   alert(paises.join(,)) --> Exibe todos os dados e entre um e outro coloca uma "," para separar na exibição dos dados.

   Exemplos e funções:

   var pessoas = ["Ricardo", "Sandra", "Beatriz", "Lawrence"];

   alert(pessoas.unshift("Ialle")); --> Adiciona no inicio da fila;
   alert(pessoas.push("Janaina")); --> Adiciona ao fim da fila;
   alert(pessoas.shift()); --> Remove o primeiro elemento da fila;
   alert(pessoas.pop()); --> Remove o ultimo elemento da fila;

   ------------------- ARRAY AVANÇADO ------------------

   var pessoas = new Array();

   pessoas[0] = "Ricardo"; --> Inserindo de forma normal um dado dentro do array.
   
   - Agora vamos inserir um array dentro de outro array, sendo assim um array multidimensional[][].

   pessoas[0] = new Array("Ricardo", "M");

   - Agora para acessar um dado de um array dentro de outro array fazemos:
   Exemplo:

   pessoas[0][0]; -- Aparecerá "Ricardo";
   pessoas[0][1]; -- Aparecerá "M";

   - Outros exemplos:

   var carros = [["Hilux", "2.0"], ["Siena", "3.0"], L200]; --> Veja que a posição [0] do array carro possui outro array. e no final da fila tem o L200 que ocupa normal a posição [2].
   
   - Como acessar as posições:
   Exemplo:
   
   carros[0][0]; --> Exibe "Hilux";
   carros[0][1]; --> Exibe "2.0";

   carros[1][0] --> Exibe "Siena";
   carros[1][1] --> Exibe "3.0";

   carros[2] --> Exibe "L200";

   - Outros exemplos:

   var jogos = [["Far Cry 1",["Piter", "João"]],["Far Cry 2",["Matheus", "Joana"]],["Far Cry 3", ["Hugo", "Anny"]]];

   - Como acessar as posições:
   Exemplos:

   jogos[0][0]; --> Exibe "Far Cry 1";
   jogos[0][1][0] -- Exibe "Piter";
   ... E assim sucessivamente.

   ---------------

   Para adicionar um novo dado dentro do Array necessáriamente não precisa fazer um for para inserção... Com o push você consegue alocar mais dados dentro do array. Exemplo:

   var carros = [];

   carros.push("Gol");    carros[0]
   carros.push("Palio");  carros[1]
   carros.puch("Ford");   carros[2]

   ... E assim sucessivamente ele vai encrementando os dados que for colocando no push para o array. Mas neste caso adiciona no final da fina... Se quiser colocar como primeiro utiliza o unshift.


   --------------

   Para esxcluir um dado do array, pode-se utilizar o splice onde será necessario inserir o index que você pode buscar com o indexOf (caso não saiba a posição do elemento) e
   depois inserir no splice... Exemplo:

   carros.indexOf("Ford"); // = 2
   carros.splice(2,1);  // Primeiro parametro vocês passa a localização do elemento e a segunda quantos elementos quer apagar do array. No caso apenas 1;

   Podemos utiliza-lo para substituir dados no array:

   carros.splice(2,1,"Hilux"); // Primeiro parametro vocês passa a localização do elemento e a segunda quantos elementos quer apagar do array e o terceiro ele coloca um novo
   elemento no lugar do que foi excluido.

   ------------------

   foreach com array:

   carros.forEach(function(elemento)) {
         console.log(elemento);
   });


   * Utilizando lógica com array e foreach:

   O foco dessa lógica é, passar todos os carros que tem a marca ford para um novo array chamado: var carrosFord = [];

   Para isso vamos criar um array de carros com marcas:

   var carros = [{marca: "Ford", modelo: "78"}, {marca: "Onix", modelo: "2010"}, {marca: "Fox", modelo: "2015"}];

   carros.forEach(function(elemento) {
        if(elemento.marca === "Ford") {
            carrosFord.push(elemento);
        }
   });

   ou...

   var carrosFord = carros.filter(function(elemento) {
             return elemento.marca === "Ford";
   });


   --------------------
   utilizando a função every e some:

   A every vai verificar se todos os dados do array é igual a "Ford" e some, se existe algum dado no array com a marca "Ford". Ambas funções retornam apenas false ou true. Exemplo:

   carros.every(function(elemento) {
        return elemento.marca === "Ford";
   });

   carro.some(function(elemento) {
        return elemento.marca === "Ford";
   });

   E se caso pretende pegar apenas as marcas de todos os carros? Ou o modelo? Hum... Faça o seguinte:

   var marcasDeCarros = [];

   marcasDeCarros = carro.map(function(elemento) {
        return elemento.marca;
   });

   E se caso precisarmos calcular os valores, por exemplo, supondo que os carros agora tenham preços... Podemos calcular todos os preços desses carros com a função reduce. Exemplo:

   carros.reduce(function(prev, cur) {
        return elemento.preco;
   }, 0);

   E se caso precisarmos organizar em ordem crescente ou descendente os dados para exibir por maior valor ou menor? Vamos alocar esses dados em um outro array. Exemplo:

   var maioresPrecos = [];

   //Retornando dados iniciando com menor para maior:
   carros.reduce(function(a, b) {
        return a.preco - b.preco;
   });


   //Retornando dados do maior para menor:
     carros.reduce(function(a, b) {
        return b.preco - a.preco;
   });

   ------------------

   Organizando os dados com Join():

   carros.join(";");  // = "Onix;Fox;Ford"
   carros.join(",");  // = "Onix,Fox,Ford"
   carros.join(" ");  // = "Onix Fox Ford"

   ... E assim sucessivamente.

   ------------------ ARRAYS ASSOCIATIVOS --------------

   var pessoa = {
    nome: "Beatriz",
    cidade: "Brasília"
   };

   alert(pessoa.nome); ou alert(pessoa["nome"]);


   ------------------- OBJETO DATE ----------------------

   1º - var data = new Date(); --> Criando um objeto data que exibe a data e hora atual; 
   2º - var data = new Date("Jul/20/2011 02:30:35"); --> Criando objeto date apartir da string;
   3º - var data = new Date(2011,2,22,4,35,30,1234); --> Definindo parametros para data... ano, mês,dia,hora,minutos,segundos,milessegundos.

   Mais exemplos:

   var data = new Date();

   data.getMilliseconds(); --> Retorna os milessegundos;
   data.getFullYear(); --> Retorna o ano;
   data.getSeconds(); --> Retorna os segundos;
   data.getHours(); --> Retorna a apenas a hora;
   data.getMouth(); -- Mês;
   data.getDate(); --> Dia do mês;
   data.getDay(); --> Dia da semana;
   data.toLocaleDateString(); Trás tudo! E com formato string pt-br.

   - Apesar de recuperarmos os dados através destas funções, podemos também alterar o valor através delas...
   Exemplo:

   data.setFullYear(2017); --> Estamos alterando apenas o ano da data atual... Assim como essa função, podemos fazer com as outras, trocando o get pelo set.
   alert(data); --> Exibindo data e hora completo, porém com o ano 2017, no qual foi alterado.

   ----------------- Objeto Math -------------------

   alert(Math.max(1,2,3,4,5,-6,7)); --> Exibe o maior numero da lista.
   alert(Math,min(1,2,3,4,5,-6,7)); --> Exibe o menor numero da lista.
   alert(Math.round(3.3)); --> Arredonda para o mais próximo... Neste caso será para 3.0 pois ta mais próximo.
   alert(Math.floor(3.3)); --> Este arredonda para baixo, ou seja, neste caso será 3.0.
   alert(Math.ceil(3.3)); --> Este arredonda para cima, ou seja, neste caso será 4.0.
   alert(Math.ceil(2,6)); --> Eleva o numero a uma determinada potência... Neste caso vai dar 2 elevado a 6 = 64.
   alert(Math.sqrt(4)); --> Faz o calculo da raiz quadrada... Raiz Quadrada de 4 = 2.
   alert(Math.random()); --> Retorna um numero randomico, ou seja ele gera numeros aleatorios até uma quantidade definida por você. {
   
   Exemplo:

   var numero = Math.floor(Math.random()*10); --> Estamos utilizando o floor para arrendondar o numero, para não ficar tão grande no alerta.
   alert(numero); --> Ele vai estar alertando vários numeros entre 0 e 9 (10) diferentes.

}

  ------------------ RegExp e Espressões Regulares ----------------

   var regex = new regExp("JavaScript");
   
   funções: test(), exec(), str.match(), str.replace().
   Modificadores: i, g, m.
   Metacaracteres: -,\w, \s, \d, ^, $.
   Quantificadores: *, +, ?, {}.
   Agrupadores: [0-9], [a-z].

   Utilizando a função test():

   alert(regex.test("JavaScript")); --> Verifica se exite essa palavra dentro do regex. Obs: há diferença em letras minusculas para maiusculas para fazer a busca.
   para que isso não aconteça utilizamos os modificador: i.

   var regex = /Javascript/i;
   ou
   alert(regex.test("JavaScript","i"));
   ou
   alert(/javascript/i.test("javascript"));

   utilizando a função exec():

   alert(regex.exec("Aprendendo javaScript no curso a distância de javascript.")); --> Verificará na frase se existe a primeira ocorrencia de conteudo existente na frase, ou seja, o "JavaScript".

   Se quer buscar todos, utilizamos o modificador g:

   var str = "Aprendendo javaScript no curso a distância.";
   alert(str.match(/javascript/ig)); --> Exibirá todos o JavaScript dentro da frase;

   / METACARACTERES /

   O metacaracter "\w" procura letras entre A a Z e numeros de 0 a 9 e anderline

   Exemplo:
     
      alert(/\w/.test("Pier21")); --> Retornará true porque existe letras e numeros.

   O metacaracter "\s" procura por espaços.
    Exemplo:

      alert(/\s/.test("Pier 21")); --> Retornará true.

   O metacaracter "\d" procura por numeros.

   Exemplo:

      alert(/\d/.test("Pier21")); --> Retornará true.

 
 
 ------------------- Funções --------------------
 

  - Function declarativa:
  
 function Soma (y,x) {
	 alert(y+x);
 }
 
 ou:
 
  - Anônima:
  
 var Soma = new function ("x", "y", "alert(x+y);");
 Soma(2,2);

 ou
 
  - Literal:
  
 var Soma = function (x,y) {
	 alert(x+y);
 }
   

  - Função literal:

  - Executando uma função javaScript dentro do arquivo Js sem onclick no HTML.
  
  document.getElementById("a").onclick = function() 
  {
	  alert("teste");
  }
  
  ****** Utilizando função com método declarada dentro do objeto *******

  var pessoa = {
    nome: "João",
    idade: 20,
    getIdade: function() {
        return this.idade;
    }
  }

  alert(pessoa.getIdade());

  ****** Criando uma função para criar objetos *********

  //Função Fábrica:

  var criarPessoa = function(nome, idade) {
    return {
      nome: nome,
      idade: idade
    };
  };

  var Hugo = criarPessoa("Hugo", 22);

  alert(Hugo);


  //Função Contrutora:

  var Pessoa = function (nome, idade) {
    this.nome = nome,
    this.idade = idade,
  };

  var Hugo = new Pessoa("Hugo", 22);

  alert(Hugo);

  //Utilizando o Call para criar objetos junto com a função Pessoa.

  var Pessoa1 = {};

  Pessoa.call(Pessoa1, "Hugo", 22);
  alert(Pessoa1);


  ******** Emcapsulando dados com funções ***********

  var counter = (function () {
    var _value = 0;                 //Atributo

    var _add = function () {
        return ++value;             //Função para incremento
    };

    var _reset = function () {
        _value = 0;                 //Função para resetar no encremento
    };

    return {
        add: _add, reset: _reset
    };

  })();

  console.log(counter.value); // Valor será undefined porque este atributo não tem valor nenhum. E nem adianta setar um valor, porque ele se perdera quando for chamada a função. Ou seja, ele só retorna valores.
  console.log(counter.add()); //Chamando a função add dentro da função.
  console.log(counter.reset());

  Ps: é como um namespace, onde você coloca todas suas funções para organizar seus códigos, igual no C# em classes. ;)



  .........
  * Só há um problema... O arquivo javaScript quando colocado dentro do head carrega primeiramente antes da "visualização do id"... 
  Neste caso, faremos o seguinte:

  Dessa forma, evitamos problemas com o id, além do mais, evitando fica utilizando a funcão onclick="" diretamente no HTML.  

  window.onload = function() 
  {
	  document.getElementById("a").onclick = function()  -> Método feito em DOM 0 --> Maneira antiga do javaScript...
  	  {
	  	alert("teste");
  	  } 

	  Maneira DOM 2 versão atual javaScript:
          
	  var btn = document.getElementById("a");
	  btn.addEventListener("click", um, false);

          function um () 
          { 
              alert("teste");
          }
 
  }

Atrelando dois ou mais enventos(funções) em apenas um click, apenas um botão com DOM 2:

   window.onload = function() 
  { 
	  var btn = document.getElementById("a");
	  btn.addEventListener("click", um, false);
	  btn.addEventListener("click", dois, false);

          function um () 
          { 
              alert("teste");
          }

	  function dois () 
          { 
              alert("teste");
          }

  }

BOM:

  confirm("Você quer ir para porto seguro?"); -> Exibe uma mensagem e a pessoa clica em OK ou CANCELAR.
  propmt("Qual a tecnologia que você mais gosta?"); -> Exibe uma mensagem e um input para você digitar algo.
  windows.open("https://www.google.com", "Google", "width:300, height:500,toobar=no,location=no"); --> Abrindo uma janela pop
  windows.resizeTo(300,300);
  windows.moveTo(300,300);
 
TEMPORIZADORES:
  Colocando temporizadores (time) paraexecutar ações em um determinado tempo: AULA 38 curso: JavaScript

Criando dinamicamente HTML com JavaScript no cliente! AULA 44 curso: JavaScript (Se caso tiver duvidas, assista a aula 43)


 ------------------- OBJECT --------------------

 var pessoa = {
  nome: "Hugo Vidal",
  idade: 22
  };

  para fazer alterações em um objeto pode utiliza duas formas:

  pessoa.nome = "Outro";
  ou
  pessoa["nome"] = "Outro"

  Ps: Só quem em casos que browser não aceita o atual: pessoa.nome e acontece que será necessário utilizar a segunda opção.

  Se quiser inserir uma nova propriedade faça: Supondo que precisamos colocar uma entidade endereços:

  pessoa.endereco = {};
  pessoa.endereco.rua = "Rua Antonio";
  pessoa.endereco.numero = "55";

  para deletar um atributo ou entidade faça:

  delete pessoa.nome;
  delete pessoa.endereco;
  ou
  delete pessoa.endereco.numero;
  Ps: ou podemos utilizar outro metodo também: delete pessoa[nome];

*/