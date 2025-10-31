/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let preco = 5.0;
let qtd = 120;
let despesas = 200;

while (preco > 0) {
  let totalVendas = preco * qtd;
  let lucro = totalVendas - despesas;

  console.log("Preço Ingresso".padEnd(50, ".") + ": R$" + preco.toFixed(2));
  console.log("Quantidade Vendida".padEnd(50, ".") + ": " + qtd);
  console.log("Total Vendas".padEnd(50, ".") + ": R$" + totalVendas.toFixed(2));
  console.log("Despesas".padEnd(50, ".") + ": R$" + despesas.toFixed(2));
  console.log(
    "Lucro Esperado".padEnd(50, ".") + ": R$" + lucro.toFixed(2) + "\n"
  );

  preco = preco - 0.5;
  qtd = qtd + 26;
}
