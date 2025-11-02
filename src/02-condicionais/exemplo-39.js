/** Exercicio Proposto 16, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let precoAtual = scanner.questionFloat("Preco Atual do Produto: ");
let codProduto = scanner.questionInt("Codigo do Produto: ");
let desconto = 0.0;

if (precoAtual <= 30) {
  desconto = (precoAtual * 5) / 100;
} else if (precoAtual > 30 && precoAtual < 100) {
  desconto = (precoAtual * 10) / 100;
} else {
  desconto = (precoAtual * 15) / 100;
}

let precoComDesconto = precoAtual - desconto;

console.log(
  "Preço sem desconto".padEnd(50, ".") + ": R$" + precoAtual.toFixed(2)
);
console.log("Valor desconto".padEnd(50, ".") + ": R$" + desconto.toFixed(2));
console.log(
  "Preço com desconto".padEnd(50, ".") + ": R$" + precoComDesconto.toFixed(2)
);
