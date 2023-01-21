/** Capitulo 08 - sub-rotinas: Exercicio 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function mediaArimetica() {
    let soma = 0;
    let qtdNumeros = 0;
    let numero;

    do {
        numero = scanner.questionInt("Digite um numero: ");
        //numero = Math.floor((Math.random() * 99) + 0);
        if (numero !== 0) {
            soma += numero;
            qtdNumeros++;
        }

    } while (numero != 0);

    let media = soma / qtdNumeros;
    return media;
}

let media = mediaArimetica();

console.log("A média aritmética dos números lidos é: " + media.toFixed(2));