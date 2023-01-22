/** Capitulo 08 - sub-rotinas: Exercicio 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function calcularMDC(num1, num2) {
    let mdc = 1;
    let divisores = [];

    if (num1 % num2 === 0) {
        mdc = num2;
    } else if (num2 % num1 === 0) {
        mdc = num1;
    } else if ((num1 + 1 === num2) || (num1 - 1 === num2)) {
        mdc = 1;
    } else {
        let divisor = 2;
        console.log("Divisores");
        while (num1 !== 1 || num2 !== 1) {

            if (num1 % divisor === 0 && num2 % divisor === 0) {
                mdc *= divisor;
            }

            while (num1 % divisor === 0) {
                num1 = num1 / divisor;
            }

            while (num2 % divisor === 0) {
                num2 = num2 / divisor;
            }

            divisor++;
        }
    }

    return mdc;
}

console.log("Cálculo do Máximo Divisor Comum");
let num1 = scanner.questionInt("Digite o primeiro numero: ");
let num2 = scanner.questionInt("Digite o segundo numero: ");

let divisor = calcularMDC(num1, num2);
console.log("O MDC de " + num1 + " e " + num2 + " = " + divisor);