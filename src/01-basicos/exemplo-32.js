/** Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um programa
que receba o salário fixo do funcionário e o valor de suas vendas, calcule e mostre a comissão 
e seu salário final. */

import scanner from "readline-sync";

const COMISSAO = 0.04;

let salario = scanner.questionFloat("Sálario atual: ");
let valorVendas = scanner.questionFloat("Total Vendas: ");

let valorComissao = valorVendas * COMISSAO;
let novoSalario = salario + valorComissao;

console.log("Salário Fixo".padEnd(50, ".") + ": " + salario.toFixed(2) + "R$");
console.log(
  "Total Vendas".padEnd(50, ".") + ": " + valorVendas.toFixed(2) + "R$"
);
console.log(
  "Valor Comissão".padEnd(50, ".") + ": " + valorComissao.toFixed(2) + "R$"
);
console.log(
  "Salário com comissão".padEnd(50, ".") + ": " + novoSalario.toFixed(2) + "R$"
);
