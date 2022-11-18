/** Faça um programa que receba quatro números inteiros, calcule e mostre a soma desses números. */

import scanner from "readline-sync"

let num1 = parseFloat(scanner.question("Número 1: "));
let num2 = parseFloat(scanner.question("Número 2: "));
let num3 = parseFloat(scanner.question("Número 3: "));
let num4 = parseFloat(scanner.question("Número 4: "));

let soma = num1 + num2 + num3 + num4;

console.clear();

console.log(num1 + " + " + num2 + " + " + num3 + " + " + num4 + " = " + soma.toFixed(2));