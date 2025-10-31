/**Faça um programa que receba o número de horas trabalhadas e o valor do salário mínimo, 
 * calcule e mostre o salário a receber, seguindo estas regras:
 * a) a hora trabalhada vale a metade do salário mínimo.
 * b) o salário bruto equivale ao número de horas trabalhadas multiplicado pelo valor da hora 
 * trabalhada.
 * c) o imposto equivale a 3% do salário bruto.
 * d) o salário a receber equivale ao salário bruto menos o imposto. */

import scanner from "readline-sync"

let horasTrabalhadas = parseInt(scanner.question("Horas trabalhadas: "));
let salarioMinino = parseFloat(scanner.question("Valor do Salario Minimo: "));

let valorHoraTrabalhada = salarioMinino / 2;
let salarioBruto = horasTrabalhadas * valorHoraTrabalhada;
let imposto = (salarioBruto * 3) / 100;
let salarioReceber = salarioBruto - imposto;

console.log("Salario Minimo".padEnd(50, ".") + ": " + salarioMinino.toFixed(2) + "R$");
console.log("Valor da hora trabalhada".padEnd(50, ".") + ": " + valorHoraTrabalhada.toFixed(2) + "R$");
console.log("Horas Trabalhadas".padEnd(50, ".") + ": " + horasTrabalhadas);
console.log("Salario Bruto".padEnd(50, ".") + ": " + salarioBruto.toFixed(2) + "R$");
console.log("Valor do imposto".padEnd(50, ".") + ": " + imposto + "%");
console.log("Salario á Receber".padEnd(50, ".") + ": " + salarioReceber.toFixed(2) + "R$");