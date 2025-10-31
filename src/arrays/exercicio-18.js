/** Capitulo 06 - Vetores: Exercicios Propostos 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 15; i++) {
  numeros.push(Math.floor(Math.random() * 99 + 1));
}

console.log("Elementos do vetor \n" + numeros.join(" - "));

let maior = numeros[0];
let indexMaior = 0;
let menor = numeros[0];
let indexMenor = 0;

numeros.forEach(function (item, index) {
  if (item > maior) {
    maior = item;
    indexMaior = index;
  }

  if (item < menor) {
    menor = item;
    indexMenor = index;
  }
});

console.log(
  "O maior número do array é " + maior + " e está na posição " + indexMaior
);
console.log(
  "O menor número do array é " + menor + " e está na posição " + indexMenor
);
