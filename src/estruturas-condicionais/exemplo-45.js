/** Exercicio Proposto 22, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let idade = scanner.questionInt("Idade: ");
let peso = scanner.questionFloat("Peso: ");

if (idade < 20) {
  if (peso <= 60) {
    console.log("Categoria 9");
  } else if (peso > 60 && peso <= 90) {
    console.log("Categoria 8");
  } else {
    console.log("Categoria 7");
  }
} else if (idade > 20 && idade < 50) {
  if (peso <= 60) {
    console.log("Categoria 6");
  } else if (peso > 60 && peso <= 90) {
    console.log("Categoria 5");
  } else {
    console.log("Categoria 4");
  }
} else {
  if (peso <= 60) {
    console.log("Categoria 3");
  } else if (peso > 60 && peso <= 90) {
    console.log("Categoria 2");
  } else {
    console.log("Categoria 1");
  }
}
