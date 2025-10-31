/** Faça um programa que receba o salário base de um funcionário, calcule e mostre 
 * o salário a receber, sabendo-se que o funcionário tem gratificação de 5% sobre o 
 * salário base e paga imposto de 7% também sobre o salário base.
 */

import scanner from "readline-sync"

let salario = parseFloat(scanner.question("Salario base: "));

let gratificacao = (salario * 5) / 100;
let imposto = (salario * 7) / 100;
let novoSalario = (salario + gratificacao) - imposto;

console.log("Salário".padEnd(50, ".") + ": " + salario.toFixed(2) + ",00R$");
console.log("Gratificação".padEnd(50, ".") + ": " + gratificacao.toFixed(2) + ",00R$");
console.log("Imposto".padEnd(50, ".") + ": " + imposto.toFixed(2) + ",00R$");
console.log("Novo salário".padEnd(50, ".") + ": " + novoSalario.toFixed(2) + ",00R$");