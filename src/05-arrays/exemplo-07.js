/** Capitulo 06 - Vetores: Exemplo 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 99 + 1));
  numeros.sort(function (a, b) {
    return a - b;
  });
}

console.log("Vetor Ordenado");
console.log(numeros.join(" - "));
