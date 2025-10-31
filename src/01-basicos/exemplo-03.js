/** Faça um algoritmo para calcular a média aritmética entre três notas de um aluno e 
 * mostrar sua situação, que pode ser aprovado ou reprovado. */

import scanner from "readline-sync";

let nota1 = scanner.question("Nota 1: ");
let nota2 = scanner.question("Nota 2: ");
let nota3 = scanner.question("Nota 3: ");

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

console.log("Média: " + media.toFixed(2));

if (media > 7.0) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}