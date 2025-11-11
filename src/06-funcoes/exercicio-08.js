/** Capitulo 08 - sub-rotinas: Exercicio 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function fatorial(numero) {
  if (numero === 1 || numero === 0) {
    return 1;
  } else {
    return fatorial(numero - 1) * numero;
  }
}

let numero = scanner.questionInt("Digite um número: ");

console.log(numero + "! = " + fatorial(numero));
