/** Exercicio Proposto 04, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let num1 = scanner.questionInt("Numero 01: ");
let num2 = scanner.questionInt("Numero 02: ");
let num3 = scanner.questionInt("Numero 03: ");

if (num1 > num2 && num2 > num3) {
    console.log(num1 + " é maior que " + num2 + " e " + num3);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " é maior que " + num1 + " e " + num3);
} else {
    console.log(num3 + " é maior que " + num1 + " e " + num2);
}