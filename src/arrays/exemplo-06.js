/** Capitulo 06 - Vetores: Exemplo 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor((Math.random() * 99) + 1));
}

console.log("Vetor desordenado.");
console.log(numeros.join(", "));

numeros.sort(function(a, b){
    return b - a;
})

console.log("Vetor ordenado.");
console.log(numeros.join(", "));