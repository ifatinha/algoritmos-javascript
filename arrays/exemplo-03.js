/** Capitulo 06 - Vetores: Exemplo 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let numeros1 = [];
let numeros2 = [];

for (let i = 0; i < 10; i++) {
    numeros1.push(Math.floor((Math.random() * 99) + 1));
    numeros2.push(Math.floor((Math.random() * 99) + 1));
}

console.log(numeros1.toString());
console.log(numeros2.toString());