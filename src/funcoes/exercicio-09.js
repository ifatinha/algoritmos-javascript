/** Capitulo 08 - sub-rotinas: Exercicio 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function somaDivisores(numero) {
  let soma = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      soma += i;
    }
  }

  return soma;
}

let numero = scanner.questionInt("Digite um numero: ");
let soma = somaDivisores(numero);

console.log("A soma dos divisores de " + numero + " = " + soma);
