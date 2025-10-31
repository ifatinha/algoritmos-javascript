/**Faça um programa que calcule e mostre a área de um triângulo.
 * Sabe-se que: Área = (base * altura)/2 */

import scanner from "readline-sync";

console.log("Para calcular a base do triângulo informe os dados abaixo");
let base = parseFloat(scanner.question("Base: "));
let altura = parseFloat(scanner.question("Altura: "));

let area = (base * altura) / 2;

console.log("Valor da area do triângulo é " + area.toFixed(1));
