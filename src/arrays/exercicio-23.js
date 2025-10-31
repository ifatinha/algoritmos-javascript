/** Capitulo 06 - Vetores: Exercicios Propostos 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros1 = [];
const numeros2 = [];
const subtracao = [];

for (let i = 0; i < 5; i++) {
  numeros1.push(Math.floor(Math.random() * 99 + 1));
  numeros2.push(Math.floor(Math.random() * 99 + 1));
}

let contador = 4;
for (let i = 0; i < 5; i++) {
  subtracao.push(numeros1[i] - numeros2[contador]);
  contador--;
}

console.log("Vetor 1 \n" + numeros1.join(", "));
console.log("\nVetor 2 \n" + numeros2.join(", ") + "\n");

contador = 4;
console.log("Subtração dos elementos dos vetores");
for (let i = 0; i < 5; i++) {
  console.log(numeros1[i] + " - " + numeros2[contador] + " = " + subtracao[i]);
  contador--;
}
