/** Exercicio Proposto 01, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let nota1 = scanner.questionFloat("Nota 01: ");
let nota2 = scanner.questionFloat("Nota 02: ");
let nota3 = scanner.questionFloat("Nota 03: ");
let nota4 = scanner.questionFloat("Nota 04: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Média: " + media.toFixed(2));

if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}