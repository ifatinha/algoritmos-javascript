/** Capitulo 05 - estruturas de repetição: Exemplo 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";
let contador = 1;
let mediaImpostos = 0.0;
let mediaEstocagem = 0.0;
let mediaValoresAdicionais = 0.0;
let maiorPreco = 0.0;
let menorPreco = 0.0;
let totalImpostos = 0.0;
let qtdBaratos = 0;
let qtdNormal = 0;
let qtdCaro = 0;

do {
  let custoEstocagem = 0.0;
  let imposto = 0.0;
  let precoFinal = 0.0;
  let classificao = "";
  let nome = scanner.question("Informe o nome do " + contador + "º produto: ");
  let preco = scanner.questionFloat(
    "Informe o preco do " + contador + "º produto: "
  );
  let refrigeracao = scanner.question("O produto refrigerado (S ou N)? ");

  while (refrigeracao !== "S" && refrigeracao !== "N") {
    console.log("Opção inválida!");
    refrigeracao = scanner.question("O produto refrigerado (S ou N)? ");
  }

  let categoria = scanner.question(
    "Categoria do Produto (A - Alimentacao; L - Limpeza; V - Vestuario): "
  );

  while (categoria !== "A" && categoria !== "L" && categoria !== "V") {
    console.log("Opção inválida!");
    categoria = scanner.question(
      "Categoria do Produto (A - Alimentacao; L - Limpeza; V - Vestuario): "
    );
  }

  if (preco < 20) {
    switch (categoria) {
      case "A":
        custoEstocagem = 2.0;
        break;
      case "L":
        custoEstocagem = 3.0;
        break;
      case "V":
        custoEstocagem = 4.0;
        break;
      default:
        console.log("Opção inválida!");
        break;
    }
  } else if (preco > 20 && preco <= 50) {
    if (refrigeracao === "S") {
      custoEstocagem = 6.0;
    } else {
      custoEstocagem = 0.0;
    }
  } else {
    if (refrigeracao === "S") {
      switch (categoria) {
        case "A":
          custoEstocagem = 5.0;
          break;
        case "L":
          custoEstocagem = 2.0;
          break;
        case "V":
          custoEstocagem = 4.0;
          break;
        default:
          console.log("Opção inválida!");
          break;
      }
    } else {
      if (categoria === "A" || categoria === "V") {
        custoEstocagem = 0.0;
      } else {
        custoEstocagem = 1.0;
      }
    }
  }

  if (categoria !== "A" && refrigeracao !== "S") {
    imposto = (preco * 2) / 100;
  } else {
    imposto = (preco * 4) / 100;
  }

  precoFinal = preco + custoEstocagem + imposto;

  if (precoFinal <= 20) {
    classificao = "Barato";
    qtdBaratos++;
  } else if (precoFinal > 20 && precoFinal <= 100) {
    classificao = "Normal";
    qtdNormal++;
  } else {
    classificao = "Caro";
    qtdCaro++;
  }

  if (contador === 1) {
    maiorPreco = precoFinal;
    menorPreco = precoFinal;
  } else {
    if (maiorPreco < precoFinal) {
      maiorPreco = precoFinal;
    }

    if (menorPreco > precoFinal) {
      menorPreco = precoFinal;
    }
  }

  mediaEstocagem += custoEstocagem;
  mediaImpostos += imposto;
  totalImpostos += imposto;

  contador++;
} while (contador <= 12);

mediaEstocagem = mediaEstocagem / 12;
mediaImpostos = mediaImpostos / 12;
mediaValoresAdicionais = mediaEstocagem + mediaImpostos;

console.clear();
console.log(
  "Média Valores Adicionais".padEnd(50, ".") +
    ": R$" +
    mediaValoresAdicionais.toFixed(2)
);
console.log(
  "Produto com maior preço final".padEnd(50, ".") +
    ": R$" +
    maiorPreco.toFixed(2)
);
console.log(
  "Produto com menor preço final".padEnd(50, ".") +
    ": R$" +
    menorPreco.toFixed(2)
);
console.log(
  "Total Imposto de todos os produtos".padEnd(50, ".") +
    ": R$" +
    totalImpostos.toFixed(2)
);
console.log("Total Produtos Baratos".padEnd(50, ".") + ": " + qtdBaratos);
console.log("Total Produtos Normal".padEnd(50, ".") + ": " + qtdNormal);
console.log("Total Produtos Caros".padEnd(50, ".") + ": " + qtdCaro);
