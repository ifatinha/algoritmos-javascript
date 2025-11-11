/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function ordenarFrase(frase) {
  let palavras = frase.split(" ");
  return palavras.sort();
}

function retornarFrase(frase, palavra) {
  return (frase += " " + palavra);
}

let frase = scanner.question("Digite uma frase: ");
console.clear();

console.log("Frase não ordenada: " + frase);

let fraseOrdenada = ordenarFrase(frase);
console.log("Frase Ordenada: " + fraseOrdenada.reduce(retornarFrase));
