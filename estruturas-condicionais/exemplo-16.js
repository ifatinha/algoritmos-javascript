/**Um supermercado deseja reajustar os preços de seus produtos usando o seguinte critério: o produto
poderá ter seu preço aumentado ou diminuído. Para o preço ser alterado, o produto deve preencher
pelo menos um dos requisitos a seguir:
VENdA MédiA MENsAL           PrEço ATuAL               % dE AuMENTo             % dE diMiNuição
< 500                        < R$ 30,00                    10                          –
>= 500 e < 1.200             >= R$ 30,00 e < R$ 80,00      15                          –
>= 1.200                     >= R$ 80,00                   –                          20
Faça um programa que receba o preço atual e a venda média mensal do produto, calcule e mostre o
novo preço. */

import scanner from 'readline-sync'

let precoProduto = scanner.questionFloat("Preco atual do produto: ");
let vendaMedia = scanner.questionFloat("Media de venda mensal do produto: ");
let aumento = 0.0;
let desconto = 0.0;
let novoPreco = 0.0;

if (vendaMedia < 500 || precoProduto < 30) {
    aumento = (precoProduto * 10) / 100;
    novoPreco = precoProduto + aumento;
} else if ((vendaMedia >= 500 && vendaMedia < 1200) || (precoProduto >= 30 && precoProduto < 80)) {
    aumento = (precoProduto * 15) / 100;
    novoPreco = precoProduto + aumento
} else {
    desconto = (precoProduto * 20) / 100;
    novoPreco = precoProduto - desconto;
}

console.log("Preço atual".padEnd(50, ".") + ": R$ " + vendaMedia);
console.log("Preço atual".padEnd(50, ".") + ": R$ " + precoProduto);
console.log("Desconto".padEnd(50, ".") + ": R$ " + desconto);
console.log("Aumento".padEnd(50, ".") + ": R$ " + aumento);
console.log("Preço final".padEnd(50, ".") + ": R$ " + novoPreco);