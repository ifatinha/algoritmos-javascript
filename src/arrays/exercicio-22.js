/** Capitulo 06 - Vetores: Exercicios Propostos 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(scanner.questionInt("Digite o " + (i + 1) + "º número: "));
};

const novoVetor = numeros.filter(function (numero) {
    return (numero === 0 || numero < 0);
});

console.clear();

console.log("Vetor com todos os elementos \n" +
    numeros.join(", "));
console.log("\nVetor com os elementos nulos e negativos \n" +
    novoVetor.join(", "));