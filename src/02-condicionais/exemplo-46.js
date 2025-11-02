/** Exercicio Proposto 23, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let codProduto = scanner.questionInt("Codigo do produto 1 - 40: ");
let qtdComprado = scanner.questionInt("Quantidade de produto comprada: ");
let precoUnitario = 0.0;

if (codProduto >= 1 && codProduto <= 10) {
  precoUnitario = 10.0;
} else if (codProduto >= 11 && codProduto <= 20) {
  precoUnitario = 15.0;
} else if (codProduto >= 21 && codProduto <= 30) {
  precoUnitario = 20.0;
} else if (codProduto >= 31 && codProduto <= 40) {
  precoUnitario = 30.0;
}

let precoTotalNota = precoUnitario * qtdComprado;
let desconto = 0.0;

if (precoTotalNota <= 250) {
  desconto = (precoTotalNota * 5) / 100;
} else if (precoTotalNota > 250 && precoTotalNota <= 500) {
  desconto = (precoTotalNota * 10) / 100;
} else {
  desconto = (precoTotalNota * 15) / 100;
}

let precoNotaDesconto = precoTotalNota - desconto;

console.log("Codigo Produto".padEnd(50, ".") + ": " + codProduto);
console.log("Quantidade Comprada".padEnd(50, ".") + ": " + qtdComprado);
console.log("Preço Unitário".padEnd(50, ".") + ": R$" + precoUnitario);
console.log(
  "Preço Total Nota".padEnd(50, ".") + ": R$" + precoTotalNota.toFixed(2)
);
console.log("Valor Desconto".padEnd(50, ".") + ": R$" + desconto.toFixed(2));
console.log(
  "Preço Nota Desconto".padEnd(50, ".") + ": R$" + precoNotaDesconto.toFixed(2)
);
