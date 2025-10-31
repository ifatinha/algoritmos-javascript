/** Capitulo 06 - Vetores: Exercicios Propostos 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];
const novoVetor = [];

for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor((Math.random() * 9) + 0));
}

for (let i = 0; i < 20; i++) {
    if (numeros[i] === 0) {
        novoVetor.push("X");
    } else {
        novoVetor.push(numeros[i]);
    }
}

console.log("Vetor \n" + numeros.join(" - "));
console.log("\nNovo Vetor \n" + novoVetor.join(" - "));