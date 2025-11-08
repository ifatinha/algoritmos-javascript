/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let numero = scanner.questionInt(
  "Informe o numero que voce deseja ver a tabuada: "
);

for (let i = 0; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " X " + i + " = " + resultado);
}
