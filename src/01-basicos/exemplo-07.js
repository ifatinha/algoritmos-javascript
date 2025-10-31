/** Faça um programa que receba três notas e seus respectivos pesos, calcule e mostre a média ponderada. */
import scanner from "readline-sync";

let nota1 = parseFloat(scanner.question("Primeira Nota: "));
let peso1 = parseFloat(scanner.question("Peso: "));

let nota2 = parseFloat(scanner.question("Segunda Nota: "));
let peso2 = parseFloat(scanner.question("Peso: "));

let nota3 = parseFloat(scanner.question("Segunda Nota: "));
let peso3 = parseFloat(scanner.question("Peso: "));

let mediaPonderada =
  (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log("Média ponderada: " + mediaPonderada.toFixed(2));
