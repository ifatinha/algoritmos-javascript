/** Capitulo 06 - Vetores: Exemplo 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const primos = [];
let divisores = 0;
let contador = 0;
let numero = 101;

while (contador < 10) {
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores++;
    }
  }

  if (divisores === 2) {
    primos.push(numero);
    contador++;
  }

  divisores = 0;
  numero++;
}

console.log(
  "Os 10 primeiros números primos acima de 100 são: " + primos.join(" - ")
);
