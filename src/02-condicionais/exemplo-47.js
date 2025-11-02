/** Exercicio Proposto 24, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let precoProduto = scanner.questionFloat("Preco Produto: ");
console.log("Categoria");
console.log("1 - Limpeza");
console.log("2 - Alimentação");
console.log("3 - Vestuário");
let categoria = scanner.question("Informe a Categoria: ");
console.log("Situação");
console.log("R - Refrigerado");
console.log("N - Não Refrigerado");
let situacao = scanner.question("Escolha a situacao: ");

let valorAumento = 0.0;

if (precoProduto <= 25) {
  switch (categoria) {
    case 1:
      valorAumento = (precoProduto * 5) / 100;
      break;
    case 2:
      valorAumento = (precoProduto * 8) / 100;
      break;
    case 3:
      valorAumento = (precoProduto * 10) / 100;
      break;
    default:
      console.log("Categoria inválida!");
      break;
  }
} else {
  switch (categoria) {
    case 1:
      valorAumento = (precoProduto * 12) / 100;
      break;
    case 2:
      valorAumento = (precoProduto * 15) / 100;
      break;
    case 3:
      valorAumento = (precoProduto * 18) / 100;
      break;
    default:
      console.log("Categoria inválida!");
      break;
  }
}

let valorImposto = 0.0;

if (categoria == 2 || situacao == "R") {
  valorImposto = (precoProduto * 5) / 100;
} else {
  valorImposto = (precoProduto * 8) / 100;
}

let precoFinal = precoProduto + valorAumento + valorImposto;
let classificao = "";

if (precoFinal <= 50) {
  classificao = "Barato";
} else if (precoFinal > 50 && precoFinal < 120) {
  classificao = "Normal";
} else {
  classificao = "Caro";
}
console.log("Preço Produto".padEnd(50, ".") + ": " + precoProduto.toFixed(2));
console.log("Categoria".padEnd(50, ".") + ": " + categoria);
console.log("Situação".padEnd(50, ".") + ": " + situacao);
console.log("Valor Aumento".padEnd(50, ".") + ": R$" + valorAumento.toFixed(2));
console.log("Valor Imposto".padEnd(50, ".") + ": R$" + valorImposto.toFixed(2));
console.log("Preço Final".padEnd(50, ".") + ": R$" + precoFinal.toFixed(2));
console.log("Classificação".padEnd(50, ".") + ": " + classificao);
