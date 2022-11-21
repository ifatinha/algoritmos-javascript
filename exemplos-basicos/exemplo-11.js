/**Faça um programa que receba o salário base de um funcionário, calcule e mostre seu salário
 * a receber, sabendo-se que o funcionário tem gratificação de R$ 50 e paga imposto de 10% 
 * sobre o salário base. */

import scanner from "readline-sync";

const GRATIFICACAO = 50;

let salarioBase = parseFloat(scanner.question("Salario: "));

let imposto = (salarioBase * 10) / 100;
let novoSalario = (salarioBase + GRATIFICACAO) - imposto;

console.log("Salário base".padEnd(50, ".") + ": " + salarioBase.toFixed(2) + ",00R$");
console.log("Imposto".padEnd(50, ".") + ": " + imposto.toFixed(2) + ",00R$");
console.log("Novo Salário".padEnd(50, ".") + ": " + novoSalario.toFixed(2) + ",00R$");