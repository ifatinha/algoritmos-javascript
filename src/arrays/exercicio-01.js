/** Capitulo 06 - Vetores: Exercicios Propostos 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor((Math.random() * 99) + 1));
}

console.log("Vetor Números: " + numeros.join(" - ")+"\n");

const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

console.log("Números pares::::::: " + pares.join(" - "));
console.log("Quantidade de pares: " + pares.length);

const impares = numeros.filter(function (numero) {
    return numero % 2 !== 0;
});

console.log("\nNúmeros impares::::::: " + impares.join(" - "));
console.log("Quantidade de Impares: " + impares.length);