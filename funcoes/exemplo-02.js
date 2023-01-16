/** Capitulo 06 - sub-rotinas: Exemplo 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let num1 = scanner.questionInt("Primeiro número: ");
let num2 = scanner.questionInt("Segundo número: ");

//functions
let positivo = (num) => num > 0 ? true : false;

function somaIntervalo(num1, num2) {
    if (!positivo(num1) || !positivo(num2)) {
        return "Os números devem ser positivos!";
    } else {
        let soma = 0;
        if (num1 > num2) {
            return "O primeiro número deve ser menor que o segundo.";
        } else {
            for (let i = num1; i <= num2; i++) {
                soma += i;
            }
            return soma;
        }
    }
}

console.log(somaIntervalo(num1, num2));