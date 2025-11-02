/** Exercicio Proposto 20, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let idade = scanner.questionInt("Sua idade: ");

if (idade > 5 && idade <= 7) {
  console.log("Categoria Infantil!");
} else if (idade > 7 && idade <= 10) {
  console.log("Categorial Juvenil!");
} else if (idade > 10 && idade <= 15) {
  console.log("Categoria Adolescente!");
} else if (idade > 15 && idade <= 30) {
  console.log("Categoria Adulto!");
} else {
  console.log("Categoria Sênior!");
}
