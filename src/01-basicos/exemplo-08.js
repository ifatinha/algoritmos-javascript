/** Faça um programa que receba o salário de um funcionário, calcule e mostre o novo salário,
 * sabendo-se que este sofreu um aumento de 25%. */

import scanner from "readline-sync";

let salario = parseFloat(scanner.question("Salário: "));

let aumento = (salario * 25) / 100;

let novoSalario = aumento + salario;

console.log(
  "Salário antigo".padEnd(20, ".") + ": " + salario.toFixed(2) + ",00 R$"
);
console.log("Aumento".padEnd(20, ".") + ": " + aumento.toFixed(2) + ",00 R$");
console.log(
  "Novo salário".padEnd(20, ".") + ": " + novoSalario.toFixed(2) + ",00 R$"
);
