/** Faça um programa que receba três notas, calcule e mostre a média aritmética.  */

import scanner from "readline-sync";

let nota1 = parseFloat(scanner.question("Nota 1: "));
let nota2 = parseFloat(scanner.question("Nota 2: "));
let nota3 = parseFloat(scanner.question("Nota 3: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média Aritmética: " + media.toFixed(2));
