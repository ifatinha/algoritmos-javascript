/**Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
 * a) a idade dessa pessoa;
 * b) quantos anos ela terá em 2050.
 * */

import scanner from "readline-sync";

let anoNascimento = parseInt(
  scanner.question("Digite seu ano de nascimento: ")
);

let idade = 2022 - anoNascimento;
let idadeFutura = 2050 - anoNascimento;

console.log("Em 2022 você tem " + idade + " anos.");
console.log("Em 2050 você terá " + idadeFutura + " anos.");
