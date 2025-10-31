/** Exercicio Proposto 13, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let precoProduto = scanner.questionFloat("Preco do produto: ");
let novoPreco = 0.0;
let classificacao = "";
let percAumento = 0.0;

if (precoProduto <= 50) {
    percAumento = (precoProduto * 5) / 100;
} else if (precoProduto > 50 && precoProduto < 100) {
    percAumento = (precoProduto * 10) / 100;
} else {
    percAumento = (precoProduto * 15) / 100;
}

novoPreco = precoProduto + percAumento;

if (novoPreco <= 80) {
    classificacao = "Barato";
} else if (novoPreco > 80 && novoPreco <= 120) {
    classificacao = "Normal";
} else if (novoPreco > 120 && novoPreco <= 200) {
    classificacao = "Caro";
} else {
    classificacao = "Muito Caro";
}

console.log("Preço Produto".padEnd(50, ".") + ": R$" + precoProduto.toFixed(2));
console.log("Valor Aumento".padEnd(50, ".") + ": R$" + percAumento.toFixed(2));
console.log("Preço com Aumento".padEnd(50, ".") + ": R$" + novoPreco.toFixed(2));
console.log("Classificação".padEnd(50, ".") + ": " + classificacao);