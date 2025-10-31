/** Exercicio Proposto 17, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let senhaAcesso = "12345";
let senhaInformada = scanner.question("Sua senha de acesso: ");

if (senhaInformada === senhaAcesso) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso Negado!");
}
