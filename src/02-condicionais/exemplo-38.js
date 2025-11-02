/** Exercicio Proposto 15, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let valorInvestir = scanner.questionFloat("Quanto voce deseja investir? ");
console.log("Tipos de Investimentos disponiveis");
console.log("1 - Poupança");
console.log("2 - Fundo de Renda Fixa");
let opcao = scanner.questionInt("Sua Opcao: ");
let rendimentoMensal = 0.0;

switch (opcao) {
  case 1:
    rendimentoMensal = (valorInvestir * 3) / 100;
    break;

  case 2:
    rendimentoMensal = (valorInvestir * 4) / 100;
    break;

  default:
    console.log("Opção Inválida!");
    break;
}

let valorFinal = valorInvestir + rendimentoMensal;

console.log(
  "Valor Investido".padEnd(50, ".") + ": R$" + valorInvestir.toFixed(2)
);
console.log(
  "Rendimento Mensal".padEnd(50, ".") + ": R$" + rendimentoMensal.toFixed(2)
);
console.log(
  "Valor atualizado".padEnd(50, ".") + ": R$" + valorFinal.toFixed(2)
);
