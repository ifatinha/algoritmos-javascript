/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let qtdDivisores;
let qtdPrimos = 0;

for (let i = 1; i <= 10; i++) {
  let numero = scanner.questionInt("Digite um numero: ");
  qtdDivisores = 0;

  for (let j = 1; j <= numero; j++) {
    if (numero % j === 0) {
      qtdDivisores++;
    }
  }

  if (qtdDivisores === 2) {
    qtdPrimos++;
  }
}

console.log(
  "Quantidade de numeros primos dentre os numeros digitados: " + qtdPrimos
);
