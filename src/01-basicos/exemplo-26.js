/**Faça um programa que receba o custo de um espetáculo teatral e o preço do convite
 * desse espetáculo. Esse programa deverá calcular e mostrar a quantidade de convites
 * que devem ser vendidos para que, pelo menos, o custo do espetáculo seja alcançado.
 */

import scanner from "readline-sync";

let custoTotal = parseFloat(scanner.question("Custo total da peça: "));
let precoEntrada = parseFloat(scanner.question("Valor do ingresso: "));

let qtdVendidos = custoTotal / precoEntrada;

console.log(
  "Custo total da peça".padEnd(50, ".") + ": " + custoTotal.toFixed(2) + "R$"
);
console.log(
  "Valor do ingresso".padEnd(50, ".") + ": " + precoEntrada.toFixed(2) + "R$"
);
console.log(
  "Quantidade de ingressos que devem ser vendidos".padEnd(50, ".") +
    ": " +
    Math.round(qtdVendidos)
);
