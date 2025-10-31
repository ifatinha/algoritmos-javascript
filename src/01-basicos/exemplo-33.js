/**Faça um programa que receba o peso de uma pessoa, calcule e mostre:
a) o novo peso, se a pessoa engordar 15% sobre o peso digitado;
b) o novo peso, se a pessoa emagrecer 20% sobre o peso digitado. */

import scanner from "readline-sync";

let peso = scanner.questionFloat("Peso: ");

let pesoAumentado = peso + (peso * 15) / 100;
let pesoDimiuido = peso - (peso * 20) / 100;

console.log("Peso atual".padEnd(50, ".") + ": " + peso + "Kg");
console.log(
  "Novo peso com aumento de 15%".padEnd(50, ".") + ": " + pesoAumentado + "Kg"
);
console.log(
  "Novo peso com perca de 20%".padEnd(50, ".") + ": " + pesoDimiuido + "Kg"
);
