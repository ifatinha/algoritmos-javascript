/** Capitulo 06 - Vetores: Exercicios Propostos 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros1 = [];
const numeros2 = [];

for (let i = 0; i < 10; i++) {
  numeros1.push(Math.floor(Math.random() * 99 + 1));
  numeros2.push(Math.floor(Math.random() * 99 + 1));
}

const ordenado = numeros1.concat(numeros2);

console.log("vet 01: \n" + numeros1.join(" - "));
console.log("\nvet 02: \n" + numeros2.join(" - "));
console.log("\nvet 03: \n" + ordenado.join(" - "));

console.log("\nvet 03 ordenado de maneira decrescente");
console.log(
  ordenado
    .sort(function (a, b) {
      return b - a;
    })
    .join(" - ")
);
