/**. Faça um programa que receba um número positivo e maior que zero, calcule e mostre:
a) o número digitado ao quadrado;
b) o número digitado ao cubo;
c) a raiz quadrada do número digitado;
d) a raiz cúbica do número digitado. 
 */

import scanner from "readline-sync";

let numero = parseInt(
  scanner.question("Digite um numero inteiro maior que 0: ")
);

let quadrado = Math.pow(numero, 2);
let cubo = Math.pow(numero, 3);
let raizQuadrada = Math.sqrt(numero);
let raizCubica = Math.cbrt(numero);

console.log("Quadrado".padEnd(30, ".") + ": " + quadrado);
console.log("Cubo".padEnd(30, ".") + ": " + cubo);
console.log("Raiz Quadrada".padEnd(30, ".") + ": " + raizQuadrada.toFixed(2));
console.log("Raiz Cúbica".padEnd(30, ".") + ": " + raizCubica.toFixed(2));
