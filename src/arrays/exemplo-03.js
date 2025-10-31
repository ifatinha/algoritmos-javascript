/** Capitulo 06 - Vetores: Exemplo 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros1 = [];
const numeros2 = [];
const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros1.push(Math.floor((Math.random() * 99) + 1));
    numeros.push(numeros1[i]);

    numeros2.push(Math.floor((Math.random() * 99) + 1));
    numeros.push(numeros2[i]);
}

console.log("Elementos do primeiro vetor.");
console.log(numeros1);

console.log("Elementos do segundo vetor.");
console.log(numeros2);

console.log("Intercalação dos vetores");
console.log(numeros);
