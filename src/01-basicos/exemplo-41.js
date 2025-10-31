/**Faça um programa que receba o valor dos catetos de um triângulo, 
 * calcule e mostre o valor da hipotenusa.*/

import scanner from "readline-sync";

console.log("Calculo da hipotenusa");

let cateto1 = scanner.questionInt("Valor da cateto a: ");
let cateto2 = scanner.questionInt("Valor do cateto b: ");

let hipotenusa = Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));

console.log("Valor do Cateto a".padEnd(30, ".") + ": " + cateto1);
console.log("Valor do Cateto b".padEnd(30, ".") + ": " + cateto2);
console.log("Valor da hipotenusa".padEnd(30, ".") + ": " + hipotenusa);
