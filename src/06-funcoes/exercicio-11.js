/** Capitulo 08 - sub-rotinas: Exercicio 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function sequencia(numero) {
  let soma = 0;
  for (let i = 1; i <= numero; i++) {
    soma += (Math.pow(i, 2) + 1) / (i + 3);
  }

  return soma;
}

let numero = scanner.questionInt(
  "Digite a quantidade de termos da sequencia: "
);
let soma = sequencia(numero);

console.log("Soma: " + soma);
