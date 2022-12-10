/** Exercicio Proposto 03, estruturas condicionais -
 *  do livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let num1 = scanner.questionInt("Primeiro numero: ");
let num2 = scanner.questionInt("Segundo numero: ");

if (num1 > num2) {
    console.log(num1 + " é maior que " + num2);
} else {
    console.log(num2 + " é maior que " + num1);
}