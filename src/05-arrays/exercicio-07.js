/** Capitulo 06 - Vetores: Exercicios Propostos 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i < 10; i++) {
  numeros.push(scanner.questionInt("Digite um numero: "));
}

const negativos = numeros.filter(function (numero) {
  return numero < 0;
});

const positivos = numeros.filter(function (numero) {
  return numero > 0;
});

const somaPositivos = positivos.reduce(function (total, numero) {
  return total + numero;
});

console.clear();
console.log("Vetor Números: " + numeros.join(", "));
console.log("\nNegativos: " + negativos.join(", "));
console.log("Quantidade: " + negativos.length);
console.log("\nSoma dos Positivos: " + somaPositivos);
