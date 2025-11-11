/** Capitulo 08 - sub-rotinas: Exercicio 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function pesoIdeal(altura, sexo) {
  let peso = 0.0;

  if (sexo.toLowerCase() === "m") {
    peso = 72.7 * altura - 58;
  } else {
    peso = 62.1 * altura - 44.7;
  }

  return peso;
}

let altura = scanner.questionFloat("Informe sua altura: ");
let sexo = scanner.question("Sexo (m - masculino; f - feminino): ");

while (sexo.toLowerCase() !== "m" && sexo.toLowerCase() !== "f") {
  sexo = scanner.question(
    "Opção inválida! Informe seu sexo (m - masculino; f - feminino): "
  );
}

let peso = pesoIdeal(altura, sexo);

console.log("Seu peso ideal é: " + peso.toFixed(2));
