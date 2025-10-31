/** Faça um programa que receba:
■■ O código de um produto comprado, supondo que a digitação do código do produto seja sempre
válida, isto é, um número inteiro entre 1 e 10.
■■ O peso do produto em quilos.
■■ O código do país de origem, supondo que a digitação do código seja sempre válida, isto é, um número inteiro entre 1 e 3.
Tabelas:
Código do PAís dE origEM         iMPosTo
        1                           0%
        2                          15%
        3                          25%

Código do ProduTo              PrEço Por grAMA
     1 a 4                          10
     5 a 7                          25
     8 a 10                         35
Calcule e mostre:
■■ o peso do produto convertido em gramas;
■■ o preço total do produto comprado;
■■ o valor do imposto, sabendo que ele é cobrado sobre o preço total do produto comprado e depende
do país de origem;
■■ o valor total, preço total do produto mais imposto.  */

import scanner from "readline-sync";

let codProduto = scanner.questionInt("Codigo do produto (1 - 10): ");

if (codProduto > 0 && codProduto <= 10) {
  let pesoProduto = scanner.questionFloat("Peso do produto em Kg: ");
  let codPais = scanner.questionInt("Codigo do Pais (1 - 3): ");

  if (codPais > 0 && codPais <= 3) {
    let pesoGrama = pesoProduto * 1000;
    let imposto = 0.0;
    let valorGrama = 0.0;

    switch (codPais) {
      case 1:
        imposto = 0.0;
        break;
      case 2:
        imposto = 15 / 100;
        break;
      case 3:
        imposto = 25 / 100;
        break;
    }

    if (
      codProduto === 1 ||
      codProduto === 2 ||
      codProduto === 3 ||
      codProduto === 4
    ) {
      valorGrama = 10.0;
    } else if (codProduto === 5 || codProduto === 6 || codProduto === 7) {
      valorGrama = 25.0;
    } else if (codProduto === 8 || codProduto === 9 || codProduto === 10) {
      valorGrama = 35.0;
    }

    let precoProduto = pesoGrama * valorGrama;
    let valorImposto = precoProduto * imposto;
    let valorTotal = precoProduto + valorImposto;

    console.log("Codigo do Produto: ".padEnd(50, ".") + ": " + codProduto);
    console.log(
      "Peso em Kg: ".padEnd(50, ".") + ": " + pesoProduto + " quilos"
    );
    console.log(
      "Peso em Gramas: ".padEnd(50, ".") + ": " + pesoGrama + " gramas"
    );
    console.log("Codigo do País: ".padEnd(50, ".") + ": " + codPais);
    console.log("Imposto do País: ".padEnd(50, ".") + ": R$ " + imposto);
    console.log("Valor da Grama: ".padEnd(50, ".") + ": R$ " + valorGrama);
    console.log("Preço do Produto: ".padEnd(50, ".") + ": R$ " + precoProduto);
    console.log("Valor Imposto: ".padEnd(50, ".") + ": R$ " + valorImposto);
    console.log(
      "Valor Total do Produto: ".padEnd(50, ".") + ": R$ " + valorTotal
    );
  } else {
    console.log("Código do pais inválido!");
  }
} else {
  console.log("Código inválido!");
}
