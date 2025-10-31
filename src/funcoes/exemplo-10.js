/** Capitulo 08 - sub-rotinas: Exemplo 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function fatorial(numero) {
    if (numero === 1 || numero === 0) {
        return 1;
    } else {
        return (numero * fatorial(numero - 1));
    }
}

function sequencia(numero) {
    let soma = 1;

    for (let i = 1; i <= numero; i++) {
        soma += 1 / fatorial(i);
    }

    return soma;
}

let numero = scanner.questionInt("Digite um número: ");

console.log(sequencia(numero));