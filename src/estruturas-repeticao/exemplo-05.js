/** Capitulo 05 - estruturas de repetição: Exemplo 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let numTermos = scanner.questionInt("Digite o numero de termos da sequencia: ");
let valorX = scanner.questionInt("Digite o valor de X: ");

let denominador = 1;
let soma = 0;
let den;

for (let i = 1; i <= numTermos; i++) {
    let fim = denominador;
    let fatorial = 1;

    for (let j = 1; j < fim; j++) {
        fatorial = fatorial * j;
    }

    let expoente = i + 1;

    if (expoente % 2 === 0) {
        soma -= Math.pow(valorX, expoente) / fatorial;
    } else {
        soma += Math.pow(valorX, expoente) / fatorial;
    }

    if (denominador === 4) {
        den = -1;
    }

    if (denominador === 1) {
        den = 1;
    }

    if (den === 1) {
        denominador++;
    } else {
        denominador--;
    }
}

console.log("Soma: " + soma.toFixed(2));