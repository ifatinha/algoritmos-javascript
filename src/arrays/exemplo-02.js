/** Capitulo 06 - Vetores: Exemplo 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const produtos = [];
const valorProdutos = [];
const qtdVendida = [];
let salario = 545.0;
let totalVendas = 0.0;
let porcentagem = 0.05;
let comissao = 0.0;

for (let i = 0; i < 10; i++) {
  valorProdutos.push(Math.floor(Math.random() * 999 + 1));
  qtdVendida.push(Math.floor(Math.random() * 9 + 1));
}

console.clear();

let ValorMaisVendido = valorProdutos[0];
let posicaoMaisVendido = 0;

for (let i = 0; i < 10; i++) {
  let valorVendido = valorProdutos[i] * qtdVendida[i];
  totalVendas += valorVendido;

  console.log(
    "Valor Unitário".padEnd(50, ".") + ": R$" + valorProdutos[i].toFixed(2)
  );
  console.log("Quantidade vendida".padEnd(50, ".") + ": " + qtdVendida[i]);
  console.log(
    "Total Vendido".padEnd(50, ".") + ": R$" + valorVendido.toFixed(2) + "\n"
  );

  if (ValorMaisVendido < valorProdutos[i]) {
    ValorMaisVendido = valorProdutos[i];
    posicaoMaisVendido = i;
  }
}

comissao = totalVendas * porcentagem;

console.log("Valor Total das Vendas: R$" + totalVendas.toFixed(2));
console.log("Valor da comissão: R$" + comissao.toFixed(2));
console.log(
  "O valor do produto mais vendido foi de R$" +
    ValorMaisVendido.toFixed(2) +
    " e ele está na posicão " +
    posicaoMaisVendido
);
