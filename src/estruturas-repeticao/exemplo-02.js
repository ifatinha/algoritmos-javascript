/** Capitulo 05 - estruturas de repetição: Exemplo 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let numero = scanner.questionInt("Digite um numero: ");

let e = 1;
let contador = 1;

while (contador <= numero) {
  let fatorial = 1;

  for (let i = 1; i <= contador; i++) {
    fatorial = fatorial * i;
  }

  e = e + 1 / fatorial;

  contador++;
}

console.log("E = " + e.toFixed(5));
