/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function pesquisarPalavra(frase, palavra) {
  let regex = new RegExp(palavra, "gi");
  let qtd = frase.match(regex);

  return qtd;
}

let frase = scanner.question("Digite uma frase: ");
let palavra = scanner.question("Digite uma palavra: ");
console.clear();

console.log("Frase digitada: " + frase);
let qtd = pesquisarPalavra(frase, palavra);
console.log(
  "A palavra " + palavra + " aparece " + qtd.length + " na frase digitada."
);
