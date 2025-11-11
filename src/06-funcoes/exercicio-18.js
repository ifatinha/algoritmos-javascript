/** Capitulo 08 - sub-rotinas: Exercicio 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function primos() {
  let contador = 0;
  let numero = 100;

  while (contador < 5) {
    let qtdDivisores = 0;

    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        qtdDivisores++;
      }
    }

    if (qtdDivisores === 2) {
      console.log(numero + " é primo.");
      contador++;
    }

    numero++;
  }
}

primos();
