/**Faça um programa que calcule e mostre a área de um losango. 
 * Sabe-se que: A = (diagonal maior * diagonal menor)/2.*/

import scanner from "readline-sync";

console.log("Calculo da área do losango");

let diagonalMenor = scanner.questionFloat("Diagonal maior: ");
let diagonalMaior = scanner.questionFloat("Diagonal menor: ");

let area = (diagonalMaior * diagonalMenor) / 2;

console.log("Área do losango: " + area.toFixed(2));