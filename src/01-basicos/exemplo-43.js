/**Faça um programa que receba o número de horas trabalhadas, o valor do salário mínimo e o número
de horas extras trabalhadas, calcule e mostre o salário a receber, de acordo com as regras a seguir:
a) a hora trabalhada vale 1/8 do salário mínimo;
b) a hora extra vale 1/4 do salário mínimo;
c) o salário bruto equivale ao número de horas trabalhadas multiplicado pelo valor da hora trabalhada;
d) a quantia a receber pelas horas extras equivale ao número de horas extras trabalhadas multiplicado 
pelo valor da hora extra;
e) o salário a receber equivale ao salário bruto mais a quantia a receber pelas horas extras. */

import scanner from "readline-sync";

let salarioMinimo = scanner.questionFloat("Sálario Minimo: ");
let qtdHorasTrab = scanner.questionInt("Quantidade de horas trabalhadas: ");
let qtdHorasExtras = scanner.questionInt("Quantidade de horas extras trabalhadas: ");

let valorHoraTrab = 0.125 * salarioMinimo;
let valorHoraExtra = 0.25 * salarioMinimo;

let salarioBruto = qtdHorasTrab * valorHoraTrab;
let totalHoraExtra = qtdHorasExtras * valorHoraExtra;
let salarioReceber = salarioBruto + totalHoraExtra;

console.log("Sálario mínimo".padEnd(50, ".") + ": " + salarioMinimo + "R$");
console.log("Valor da Hora Trabalhada".padEnd(50, ".") + ": " + valorHoraTrab + "R$");
console.log("Valor da Hora Extra".padEnd(50, ".") + ": " + valorHoraExtra + "R$");
console.log("Quantidade Horas Trabalhadas".padEnd(50, ".") + ": " + qtdHorasTrab);
console.log("Quantidade Horas Extras Trabalhadas".padEnd(50, ".") + ": " + qtdHorasExtras);
console.log("Sálario Bruto".padEnd(50, ".") + ": " + salarioBruto + "R$");
console.log("Total de Horas Extras".padEnd(50, ".") + ": " + totalHoraExtra + "R$");
console.log("Sálario a Receber".padEnd(50, ".") + ": " + salarioReceber + "R$");