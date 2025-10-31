/** Capitulo 06 - Vetores: Exercicios Propostos 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 99 * 1));
}

console.log("Vetor números: " + numeros.join(" - "));
let existe = false;

for (let i = 0; i < 50; i++) {
  if (numeros[i] > 30) {
    console.log("Número " + numeros[i] + " na posição " + i);
    existe = true;
  }
}

if (existe === false) {
  console.log("Não existe nenhum número > 30.");
}
