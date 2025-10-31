/** Exercicio Proposto 19, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let sexo = scanner.question("Informe seu sexo: M (masculino) / F (feminino): ");
let altura = scanner.questionFloat("Sua altura: ");
let pesoIdeal = 0.0;

if (sexo === "M") {
  pesoIdeal = 72.7 * altura - 58;
} else if (sexo === "F") {
  pesoIdeal = 62.1 * altura - 44.7;
}

console.log("Seu peso ideal é: " + pesoIdeal.toFixed(2));
