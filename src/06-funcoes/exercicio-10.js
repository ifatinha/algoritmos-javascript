/** Capitulo 08 - sub-rotinas: Exercicio 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function sequencia(numero) {
  let soma = 1;

  for (let i = 1; i <= numero; i++) {
    soma += 1 / numero;
  }

  return soma;
}

let numero = scanner.questionInt("Digite um numero inteiro >= 1: ");

while (numero < 1) {
  numero = scanner.questionInt("Digite um numero inteiro >= 1: ");
}

let soma = sequencia(numero);
console.log("Soma da sequencia: " + soma.toFixed(5));
