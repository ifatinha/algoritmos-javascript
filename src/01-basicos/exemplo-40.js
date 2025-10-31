/**João recebeu seu salário e precisa pagar duas contas atrasadas. Em razão do atraso, 
 * ele deverá pagar multa de 2% sobre cada conta. Faça um programa que calcule e mostre 
 * quanto restará do salário de João. */

import scanner from "readline-sync";

let salario = scanner.questionFloat("Salario: ");
let conta1 = scanner.questionFloat("Valor da primeira conta: ");
let conta2 = scanner.questionFloat("Valor da segunda conta: ");

let valorMulta1 = (conta1 * 2) / 100;
let valorMulta2 = (conta2 * 2) / 100;

let totalMultas = valorMulta1 + valorMulta2;
let totalPagar = conta1 + conta2 + totalMultas;
let salarioRestante = salario - totalPagar;

console.log("Seu sálario".padEnd(50, ".") + ": " + salario.toFixed(2) + "R$");
console.log("Valor conta 1".padEnd(50, ".") + ": " + conta1.toFixed(2) + "R$");
console.log("Valor conta 2".padEnd(50, ".") + ": " + conta2.toFixed(2) + "R$");
console.log("Valor Multa 1".padEnd(50, ".") + ": " + valorMulta1.toFixed(2) + "R$");
console.log("Valor Multa 2".padEnd(50, ".") + ": " + valorMulta2.toFixed(2) + "R$");
console.log("Total Multas".padEnd(50, ".") + ": " + totalMultas.toFixed(2) + "R$");
console.log("Total pagar".padEnd(50, ".") + ": " + totalPagar.toFixed(2) + "R$");
console.log("Sálario restante".padEnd(50, ".") + ": " + salarioRestante.toFixed(2) + "R$");