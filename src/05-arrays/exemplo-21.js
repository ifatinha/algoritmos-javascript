/** Capitulo 06 - Vetores: Exemplo 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 99 + 1));
}

const pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

const impares = numeros.filter(function (numero) {
  return numero % 2 !== 0;
});

console.log("Vetor Inicial: " + numeros.join(" - "));
console.log("Pares: " + pares.join(" - "));
console.log("Impares: " + impares.join(" - "));
