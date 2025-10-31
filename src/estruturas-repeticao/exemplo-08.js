/** Capitulo 05 - estruturas de repetição: Exemplo 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let numTermos = scanner.questionInt(
  "Informe o numero de termos da sequencia: "
);
let termo1 = 2;
let termo2 = 7;
let termo3 = 3;
let contador = 4;

console.log(termo1);
console.log(termo2);
console.log(termo3);

for (let i = 4; i < numTermos; i++) {
  termo1 = termo1 * 2;
  console.log(termo1);

  termo2 = termo2 * 3;
  console.log(termo2);

  termo3 = termo3 * 4;
  console.log(termo3);
}
