/**Sabe-se que o quilowatt de energia custa um quinto do salário mínimo. Faça um programa que
 * receba o valor do salário mínimo e a quantidade de quilowatts consumida por uma residência.
 * Calcule e mostre:
 * a) o valor de cada quilowatt;
 * b) o valor a ser pago por essa residência;
 * c) o valor a ser pago com desconto de 15%. */

import scanner from "readline-sync";

let salarioMinimo = parseFloat(scanner.question("Salario minimo: "));
let qtdKW = parseFloat(scanner.question("Quantidade quilowatts: "));

let valowKW = salarioMinimo * 0.2;
let KWGastos = valowKW * qtdKW;
let valorDesconto = (KWGastos * 15) / 100;
let valorComDesconto = KWGastos - valorDesconto;

console.log("Salario minimo".padEnd(50, ".") + ": " + salarioMinimo + "R$");
console.log("Valor do KW".padEnd(50, ".") + ": " + valowKW + "R$");
console.log("Quantidade de KWs gasta".padEnd(50, ".") + ": " + qtdKW + "Kw");
console.log("Valor total".padEnd(50, ".") + ": " + KWGastos + "R$");
console.log("Valor Desconto".padEnd(50, ".") + ": " + valorDesconto + "R$");
console.log("Valor A Pagar".padEnd(50, ".") + ": " + valorComDesconto + "R$");
