/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function adicionarPalavra(frase) {
  let palavras = frase.split(" ");
  let novaFrase = "";

  for (let i = 0; i < palavras.length; i++) {
    novaFrase += " " + palavras[i];

    if (palavras[i].toLowerCase().includes("teclado")) {
      novaFrase += " ou mouse";
    }
  }

  return novaFrase;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();

console.log("Frase digitada: " + frase);

let fraseAtualizada = adicionarPalavra(frase);
console.log("Frase Atualizada: " + fraseAtualizada);
