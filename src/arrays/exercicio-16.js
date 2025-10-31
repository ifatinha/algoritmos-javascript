/** Capitulo 06 - Vetores: Exercicios Propostos 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const produtos = [];
const precos = [];

for (let i = 0; i < 10; i++) {
  produtos.push("Produto " + (i + 1));
  precos.push(Math.floor(Math.random() * 999 + 1));
}

console.log("Relatório Mensal");
for (let i = 0; i < 10; i++) {
  console.log("Produto".padEnd(50, ".") + ": " + produtos[i]);
  console.log("Preço".padEnd(50, ".") + ": R$" + precos[i].toFixed(2) + "\n");
}

/** calculando a quantidade de produtos com preço < R$ 50.00 */
const qtd = precos.filter(function (preco) {
  return preco < 50;
});

if (qtd.length > 0) {
  console.log("\nQuantidade de Produtos com preço < R$ 50.00: " + qtd.length);
} else {
  console.log("\nNenhum produto com preço < R$ 50.00");
}

/****************************** */
/** nome dos produtos com preço > R$ 50.00 e preco < R$ 100.00 */
console.log("\nProdutos com preço > R$ 50.00 && preço < R$ 100.00");
let existe = false;

for (let i = 0; i < 10; i++) {
  if (precos[i] > 50 && precos[i] < 100) {
    console.log("Produto".padEnd(50, ".") + ": " + produtos[i]);
    console.log("Preço".padEnd(50, ".") + ": R$" + precos[i].toFixed(2) + "\n");
    existe = true;
  }
}

if (existe === false) {
  console.log("Nenhum produto nessa faixa de preço.");
}

/*************************** */

/** media de preço dos produtos que custam acima de R$ 100.00 */
const aux = precos.filter(function (preco) {
  return preco > 100;
});

if (aux.length > 0) {
  let media = aux.reduce(function (total, preco) {
    return total + preco;
  });

  media = media / aux.length;
  console.log(
    "\nMédia dos produtos que custam mais de R$ 100.00: " + media.toFixed(2)
  );
} else {
  console.log("\nNenhum produto que custa acima de R$ 100.00");
}
