/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let resposta;
let lucroTotal = 0;
let qtd1 = 0;
let qtd2 = 0;

do {
  resposta = scanner.questionInt(
    "Deseja cadastrar uma ação na bolsa de valores (1 - Sim; 2 - Não)? "
  );

  if (resposta === 1) {
    let acao = scanner.question("Tipo de Ação: ");
    let precoCompra = scanner.questionFloat("Preço de compra da Ação: ");
    let precoVenda = scanner.questionFloat("Preço de venda da ação: ");

    let lucro = precoVenda - precoCompra;

    if (lucro > 1000) {
      qtd1++;
    }

    if (lucro < 200) {
      qtd2++;
    }

    lucroTotal += lucro;

    console.log("Ação".padEnd(50, ".") + ": " + acao);
    console.log(
      "Preço de Compra".padEnd(50, ".") + ": R$" + precoCompra.toFixed(2)
    );
    console.log(
      "Preço de Venda".padEnd(50, ".") + ": R$" + precoVenda.toFixed(2)
    );
    console.log("Lucro".padEnd(50, ".") + ": R$" + lucro.toFixed(2));
  } else {
    console.log("Encerrando Aplicação!");
  }
} while (resposta !== 2);

console.clear();

console.log("Lucro total da Empresa: R$" + lucroTotal.toFixed(2));
console.log("Quantidade de ações com lucro superior a R$ 1000.00: " + qtd1);
console.log("Quantidade de ações com lucro inferior a R$ 200.00: " + qtd2);
