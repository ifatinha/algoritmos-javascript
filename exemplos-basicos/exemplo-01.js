/** Faça um algoritmo para mostrar o resultado da multiplicação de dois números. */

import scanner from "readline-sync"

let numero1 = scanner.question("Primeiro número: ");
let numero2 = scanner.question("Segundo número: ");

let produto = numero1 * numero2;

console.log(numero1 + " * " + numero2 + " = " + produto);