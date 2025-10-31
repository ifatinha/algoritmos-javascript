/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function trocarPalavra(frase, palavra) {
  let palavras = frase.split(" ");
  let novaFrase = "";

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].toLowerCase().includes("escola")) {
      novaFrase += " " + palavra;
    } else {
      novaFrase += " " + palavras[i];
    }
  }

  return novaFrase;
}

let frase = scanner.question("Digite uma frase: ");
let palavra = scanner.question(
  "Digite a palavra que voce deseja adicionar na frase: "
);
console.clear();

console.log("Frase digitada: " + frase);

let fraseAtualizada = trocarPalavra(frase, palavra);
console.log("Frase Atualizada: " + fraseAtualizada);
