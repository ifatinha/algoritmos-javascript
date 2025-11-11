/** Capitulo 08 - sub-rotinas: Exercicio 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

function lerDados() {
  for (let i = 0; i < 30; i++) {
    numeros.push(Math.floor(Math.random() * 999 + 1));
  }
}

function somarElementos(numeros) {
  let soma = 0;
  for (let i = 0; i < 30; i++) {
    soma += numeros[i];
  }
  return soma;
}

lerDados();
let soma = somarElementos(numeros);
console.log("Números\n" + numeros.join(", "));
console.log("\nSoma dos elementos do vetor Números\n" + soma);
