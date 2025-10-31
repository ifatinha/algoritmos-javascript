/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let idade;
let mediaIdade = 0.0;
let qtdIdades = 0;

do {
  console.log("Bem-vindo!! Para encerrar a aplicação digite 0.");
  idade = scanner.questionInt("Idade: ");

  mediaIdade += idade;
  qtdIdades++;
} while (idade !== 0);

mediaIdade = mediaIdade / qtdIdades;

console.clear();
console.log("Média das idades informadas: " + mediaIdade.toFixed(2));
