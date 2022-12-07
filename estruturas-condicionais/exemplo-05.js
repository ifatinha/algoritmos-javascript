/** Faça um programa que receba três números obrigatoriamente em ordem crescente 
 * e um quarto número que não siga essa regra. Mostre, em seguida, os quatro números 
 * em ordem decrescente. Suponha que o usuário digitará quatro números diferentes. */

import scanner from 'readline-sync'

console.log("Digite 3 números em ordem crescente");

let a = scanner.questionInt("Numero 01: ");
let b = scanner.questionInt("Numero 02: ");
let c = scanner.questionInt("Numero 03: ");
let d = scanner.questionInt("Agora, digite um numero fora da ordem: ");

if (d < a) {
    console.log("A ordem decrescente dos números é: " + c + ", " + b + ", " + a + ", " + d);
} else if (d < b) {
    console.log("A ordem decrescente dos números é: " + c + ", " + b + ", " + d + ", " + a);
} else if (d < c) {
    console.log("A ordem decrescente dos números é: " + c + ", " + d + ", " + b + ", " + a);
} else {
    console.log("A ordem decrescente dos números é: " + d + ", " + c + ", " + b + ", " + a);
}

