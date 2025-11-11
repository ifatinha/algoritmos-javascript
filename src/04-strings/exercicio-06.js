/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function duplicarLetras(palavra) {
  let novaPalavra = "";

  for (let i = 0; i < palavra.length; i++) {
    novaPalavra += palavra.charAt(i) + palavra.charAt(i);
  }

  return novaPalavra;
}

function duplicarPalavras(frase) {
  let palavras = frase.split(" ");
  let novaFrase = "";

  for (let i = 0; i < palavras.length; i++) {
    novaFrase += duplicarLetras(palavras[i]) + " ";
  }

  return novaFrase;
}

let frase = scanner.question("Digite uma frase ");
console.clear();

console.log("Frase digitada: " + frase);

let novaFrase = duplicarPalavras(frase);
console.log("Nova frase: " + novaFrase);
