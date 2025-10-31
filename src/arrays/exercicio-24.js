/** Capitulo 06 - Vetores: Exercicios Propostos 24
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];
const primos = [];

for (let i = 0; i < 15; i++) {
    numeros.push(Math.floor((Math.random() * 999) + 1));
}

for (let i = 0; i < 15; i++) {
    let divisores = 0;

    for (let j = 1; j <= numeros[i]; j++) {
        if (numeros[i] % j == 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        primos.push(numeros[i]);
    }
}

console.log("Numeros \n" + numeros.join(", "));

if (primos.length > 0) {
    console.log("\nPrimos \n" + primos.join(", "));
} else {
    console.log("\nNenhum número primo foi digitado.");
}