/**Faça um programa que calcule e mostre a área de um trapézio.
 * Sabe-se que: A = ((base maior + base menor) * altura)/2 */

import scanner from "readline-sync";

console.log("Calculo da área do trapézio");
let altura = scanner.questionFloat("Valor da altura: ");
let baseMaior = scanner.questionFloat("Valor base maior: ");
let baseMenor = scanner.questionFloat("Valor base menor: ");

let area = ((baseMaior + baseMenor) * altura) / 2;

console.log("Área do trapézio: "+area.toFixed(2))
