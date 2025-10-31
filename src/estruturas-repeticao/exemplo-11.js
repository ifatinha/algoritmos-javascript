/** Capitulo 05 - estruturas de repetição: Exemplo 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let numero = scanner.questionInt("Digite um numero inteiro maior que 1: ");
let qtdDivisores = 0;

while (numero < 1) {
  console.log("Número inválido!");
  numero = scanner.questionInt("Digite um numero inteiro maior que 1: ");
}

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    qtdDivisores++;
  }
}

if (qtdDivisores === 2) {
  console.log(numero + " é primo.");
} else {
  console.log(numero + " não é primo.");
}
