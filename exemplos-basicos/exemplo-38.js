/**Faça um programa que receba o valor do salário mínimo e o valor do salário de um funcionário, 
 * calcule e mostre a quantidade de salários mínimos que esse funcionário ganha. */

import scanner from "readline-sync";

let salarioMinimo = scanner.questionFloat("Valor do salario minimo: ");
let salarioFuncionario = scanner.questionFloat("Valor do seu salario: ");

let qtdSalario = salarioFuncionario / salarioMinimo;

console.log("Salário mínimo".padEnd(50, ".") + ": " + salarioMinimo.toFixed(2) + "R$");
console.log("Seu Salário".padEnd(50, ".") + ": " + salarioFuncionario.toFixed(2) + "R$");
console.log("Você recebe " + qtdSalario.toFixed(1) + " sálarios mínimos");