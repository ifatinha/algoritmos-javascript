/** Faça um programa que receba dois números, calcule e mostre a subtração do primeiro número pelo
segundo. */

import scanner from "readline-sync"

let numero1 = scanner.questionInt("Digite o primeiro numero: ");
let numero2 = scanner.questionInt("Digite o segundo numero: ");

let diferenca = numero1 - numero2;

console.log(numero1 + " - " + numero2 + " = " + diferenca);