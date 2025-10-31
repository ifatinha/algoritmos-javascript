/** Faça um programa que receba duas notas, calcule e mostre a média ponderada dessas notas,
 * considerando peso 2 para a primeira e peso 3 para a segunda.  */

import scanner from "readline-sync";

let nota1 = scanner.questionFloat("Nota 1: ");
let peso1 = scanner.questionInt("Peso 1: ");
let nota2 = scanner.questionFloat("Nota 2: ");
let peso2 = scanner.questionInt("Peso 2: ");

let media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);

console.log("Média ponderada: " + media.toFixed(2));
