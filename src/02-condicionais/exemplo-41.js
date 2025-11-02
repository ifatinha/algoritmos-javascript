/** Exercicio Proposto 18, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";
let idade = scanner.questionInt("Informe sua idade: ");

if (idade >= 18) {
  console.log("Maior de Idade!");
} else {
  console.log("Menor de Idade!");
}
