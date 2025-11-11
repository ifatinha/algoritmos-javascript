/** Capitulo 06 - Vetores: Exercicios Propostos 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(Math.floor(Math.random() * 99 + 1));
}

let soma = numeros.reduce(function (total, num) {
  return total + num;
});

console.log(
  "Os números digitados foram: " + numeros.join(" + ") + " = " + soma
);
