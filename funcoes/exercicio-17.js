/** Capitulo 08 - sub-rotinas: Exercicio 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function calcularMDC(num1, num2) {
    let resto;

    do {

        resto = num1 % num2;
        num1 = num2;
        num2 = resto;

    } while (resto !== 0);

    return num1;
}

console.log("Cálculo do Máximo Divisor Comum");
let num1 = scanner.questionInt("Digite o primeiro numero: ");
let num2 = scanner.questionInt("Digite o segundo numero: ");

let mdc = calcularMDC(num1, num2);
console.log("O MDC de " + num1 + " e " + num2 + " = " + mdc);