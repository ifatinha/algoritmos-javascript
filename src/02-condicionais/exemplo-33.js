/** Exercicio Proposto 10, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let precoFabrica = scanner.questionFloat("Preco de fabrica: ");
let precoVenda = 0.0;
let impostoDistribuidor = 0.0;
let impostoVenda = 0.0;

if (precoFabrica <= 15000) {
  impostoDistribuidor = (precoFabrica * 5) / 100;
  impostoVenda = 0.0;
} else if (precoFabrica > 15000 && precoFabrica < 30000) {
  impostoDistribuidor = (precoFabrica * 10) / 100;
  impostoVenda = (precoFabrica * 15) / 100;
} else {
  impostoDistribuidor = (precoFabrica * 15) / 100;
  impostoVenda = (precoFabrica * 20) / 100;
}

precoVenda = precoFabrica + impostoDistribuidor + impostoVenda;

console.log(
  "Preço de fábrica".padEnd(50, ".") + ": R$" + precoFabrica.toFixed(2)
);
console.log(
  "Imposto Distribuidor".padEnd(50, ".") +
    ": R$" +
    impostoDistribuidor.toFixed(2)
);
console.log("Imposto Venda".padEnd(50, ".") + ": R$" + impostoVenda.toFixed(2));
console.log("Preço de Venda".padEnd(50, ".") + ": R$" + precoVenda.toFixed(2));
