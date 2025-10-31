/** Capitulo 08 - sub-rotinas: Exercicio 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function somar(num) {
    let soma = 0;

    for (let i = 1; i <= num; i++) {
        soma += i;
    }

    return soma;
}

let numero = scanner.questionInt("Digite um numero positivo: ");

while (numero <= 0) {
    numero = scanner.questionInt("Numero inválido! Digite um numero positivo: ");
}

let soma = somar(numero);
console.log("A soma dos números entre 1 e " + numero + ": " + soma);