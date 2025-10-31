/**Faça um programa que receba o salário de um funcionário e o percentual de aumento,
 * calcule e mostre o valor do aumento e o novo salário. */

import scanner from "readline-sync";

let salario = parseFloat(scanner.question("Salario: "));
let percAumento = parseFloat(scanner.question("Perceuntual de aumento: "));

let aumento = (salario * percAumento) / 100;
let novoSalario = salario + aumento;

console.log("Salário".padEnd(50, ".") + ": " + salario.toFixed(2) + ",00 R$");
console.log("Percentual de aumento".padEnd(50, ".") + ": " + percAumento + "%");
console.log("Valor do aumento".padEnd(50, ".") + ": " + aumento + ",00 R%");
console.log(
  "Novo salário: ".padEnd(50, ".") + ": " + novoSalario.toFixed(2) + ",00 R$"
);
