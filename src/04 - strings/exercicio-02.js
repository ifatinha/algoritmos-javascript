/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function mostrarPalavras(frase) {
  let palavras = frase.split(" ");

  for (let i = 0; i < palavras.length; i++) {
    console.log(palavras[i]);
  }
}

let frase = scanner.question("Digite uma frase: ");
console.clear();
console.log("Frase Digitada: " + frase);

mostrarPalavras(frase);
