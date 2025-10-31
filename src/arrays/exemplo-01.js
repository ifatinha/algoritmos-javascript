/** Capitulo 06 - Vetores: Exemplo 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const numeros = [];

for (let i = 0; i <= 10; i++) {
  let numero = scanner.questionInt("Digite o " + i + "º número: ");
  numeros.push(numero);
}

console.clear();

for (let i = 0; i < 10; i++) {
  let qtdDivisores = 0;

  for (let j = 1; j <= numeros[i]; j++) {
    qtdDivisores += numeros[i] % j == 0 ? 1 : 0;
  }

  if (qtdDivisores == 2) {
    console.log(numeros[i] + "é primo e está na posição " + i);
  }
}
