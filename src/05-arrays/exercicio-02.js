/** Capitulo 06 - Vetores: Exercicios Propostos 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 99 + 1));
}

console.log("Vetor Numeros: " + numeros.join(" - "));

const multiplos2 = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

console.log("\nMúltiplos de 2: " + multiplos2.join(" - "));

const multiplos3 = numeros.filter(function (numero) {
  return numero % 3 === 0;
});

console.log("\nMúltiplos de 3: " + multiplos3.join(" - "));

const multiplos = numeros.filter(function (numero) {
  return numero % 2 === 0 && numero % 3 === 0;
});

console.log("\nMultiplos de 2 e 3: " + multiplos.join(" - "));
