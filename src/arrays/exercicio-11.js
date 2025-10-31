/** Capitulo 06 - Vetores: Exercicios Propostos 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 10; i++) {
  numeros.push(Math.floor(Math.random() * 99 + 1));
}

const impares = numeros.filter(function (numero) {
  return numero % 2 !== 0;
});

const pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

console.log("Vetor Números: " + numeros.join(" - "));
console.log("Vetor Impares: " + impares.join(" - "));
console.log("Vetor Pares::: " + pares.join(" - "));
