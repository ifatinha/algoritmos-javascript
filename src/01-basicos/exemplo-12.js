/**Faça um programa que receba o valor de um depósito e o valor da taxa de juros,
 * calcule e mostre o valor do rendimento e o valor total depois do rendimento. */

import scanner from "readline-sync";

let deposito = parseFloat(scanner.question("Valor de deposito: "));
let valorJuros = parseFloat(scanner.question("Valor do juro: "));

let valorRendimento = (deposito * valorJuros) / 100;
let valorTotal = deposito + valorRendimento;

console.log(
  "Valor depositado".padEnd(50, ".") + ": " + deposito.toFixed(2) + ",00R$"
);
console.log(
  "Valor rendimento".padEnd(50, ".") +
    ": " +
    valorRendimento.toFixed(2) +
    ",00R$"
);
console.log(
  "Valor Total".padEnd(50, ".") + ": " + valorTotal.toFixed(2) + ",00R$"
);
