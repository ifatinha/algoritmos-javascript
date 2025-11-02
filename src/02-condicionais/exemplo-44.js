/** Exercicio Proposto 21, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

console.log("Informe os dados do produto");

let codigo = scanner.questionInt("Codigo: ");
let preco = scanner.questionFloat("Preco: ");

if (codigo === 1) {
  console.log("Região Sul");
} else if (codigo === 2) {
  console.log("Região Norte");
} else if (codigo === 3) {
  console.log("Região Leste");
} else if (codigo === 4) {
  console.log("Região Oeste");
} else if (codigo === 5 || codigo === 6 || (codigo >= 21 && codigo <= 30)) {
  console.log("Região Nordeste");
} else if (codigo === 7 || codigo === 8 || codigo === 9) {
  console.log("Região Sudeste");
} else if (codigo >= 10 && codigo <= 20) {
  console.log("Região Centro-Oeste");
}
