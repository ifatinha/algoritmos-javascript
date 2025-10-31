/** Capitulo 08 - sub-rotinas: Exercicio 14
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

const numeros = [];
const pares = [];
const impares = [];

function lerDados() {
    for (let i = 0; i < 30; i++) {
        numeros.push(Math.floor((Math.random() * 999) + 1));
    }
}

function imparOuPar(numeros) {
    for (let i = 0; i < 30; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
}

lerDados();
imparOuPar(numeros);
console.log("Números\n" + numeros.join(", "));
console.log("Pares\n" + pares.join(", "));
console.log("Impares\n" + impares.join(" - "));