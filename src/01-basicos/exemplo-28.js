/** Faça um programa que receba três números, calcule e mostre a multiplicação desses números.*/

import scanner from "readline-sync";

let a = scanner.questionInt("Valor de a: ");
let b = scanner.questionInt("Valor de b: ");
let c = scanner.questionInt("Valor de c: ");

let produto = a * b * c;

console.log(a + " * " + b + " * " + c + " = " + produto);