/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let opcao;
let media;

do {
  console.log("Bem-vindo! Escolha uma das opções abaixo.");
  console.log("1 - Média Aritmética.");
  console.log("2 - Média Ponderada.");
  console.log("0 - Sair");
  opcao = scanner.questionInt("Sua opcao: ");

  switch (opcao) {
    case 1:
      let nota1 = scanner.questionFloat("Primeira Nota: ");
      let nota2 = scanner.questionFloat("Segunda Nota: ");
      media = (nota1 + nota2) / 2;

      console.log("A média aritmética é " + media.toFixed(2));
      break;

    case 2:
      let n1 = scanner.questionFloat("Primeira Nota: ");
      let p1 = scanner.questionFloat("Peso 01: ");

      let n2 = scanner.questionFloat("Segunda Nota: ");
      let p2 = scanner.questionFloat("Peso 02: ");

      let n3 = scanner.questionFloat("Terceira Nota: ");
      let p3 = scanner.questionFloat("Peso 03: ");

      media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);
      console.log("Média Ponderada: " + media.toFixed(2));
      break;

    case 0:
      console.log("Encerrando Aplicação!");
      break;

    default:
      console.log("Opção Inválida! Tente novamente.");
      break;
  }
} while (opcao !== 0);
