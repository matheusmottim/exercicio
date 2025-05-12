// Exercícios Práticos - Arrays em JavaScript
// -------------------------------------------
// Objetivo: Praticar os métodos push, pop, shift, unshift, length e splice

// EXERCÍCIO 01 - Criando e exibindo um array
// Crie um array com três nomes e exiba o array e seu tamanho no console.
// Método sugerido: length
let nomes = ['Eliane', 'Ana', 'Maria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);



// EXERCÍCIO 02 - Adicionando elementos ao final
// Adicione dois nomes ao final do array criado anteriormente.
// Método sugerido: push
nomes.push('roberto', 'erica');

// EXERCÍCIO 03 - Inserindo no início
// Adicione um nome no início do array.
// Método sugerido: unshiftC
nomes.unshift('roberto');
// EXERCÍCIO 04 - Removendo o último
// Remova o último nome do array e exiba o nome removido e o array restante.
// Método sugerido: pop
nomes.pop();
console.log(nomes);

// EXERCÍCIO 05 - Removendo o primeiro
// Remova o primeiro nome do array e exiba o nome removido e o array restante.
// Método sugerido: shift
nomes.shift();
console.log(nomes);

// EXERCÍCIO 06 - Removendo e adicionando elementos
// Crie um array com cinco frutas. Remova duas frutas a partir da segunda posição e adicione duas novas frutas no lugar.
// Método sugerido: splice
let frutas=['pera', 'banana' , 'laranja', 'morango', 'melancia'];
nomes.splice(1, 2,'uva', 'maça');
// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
// Método sugerido: length
console.log(frutas.length);
 
console.log(frutas)
// EXERCÍCIO 08 - Criando um histórico de páginas
// Crie um array chamado historico e simule acessos às páginas "home", "sobre" e "contato".
// Método sugerido: push
let historico = ['home', 'sobre', 'contato',]
historico.push
// EXERCÍCIO 09 - Removendo o último acesso do histórico
// Remova o último acesso do histórico e exiba "Saída da página: contato".
// Método sugerido: pop

// EXERCÍCIO 10 - Alterando elementos
// Crie um array de quatro cores e troque a terceira cor por "azul-marinho".
// Método sugerido: splice
