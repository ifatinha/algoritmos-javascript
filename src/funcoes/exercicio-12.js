/** Capitulo 08 - sub-rotinas: Exercicio 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function calcularPotencia(base, expoente) {
  let potencia = 1;
  for (let i = 0; i < expoente; i++) {
    potencia *= base;
  }

  return potencia;
}

console.log("Calcular Potencia");
let base = scanner.questionInt("Base: ");
let expoente = scanner.questionInt("Expoente: ");
let potencia = calcularPotencia(base, expoente);

console.log(base + "^" + expoente + " = " + potencia);
