/** Capitulo 06 - Vetores: Exemplo 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];
let somaPares = 0;
let somaImpares = 0;

for (let i = 0; i < 6; i++) {
    numeros.push(Math.floor((Math.random() * 99) + 1));
}

console.log("Relatório\n");
for (let i = 0; i < 6; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
        console.log("Número " + numeros[i] + " na posição " + i);
    }
}

if (somaPares !== 0) {
    console.log("Soma dos pares = " + somaPares);
} else {
    console.log("Nenhum número par foi digitado.");
}

console.log();

for (let i = 0; i < 6; i++) {
    if (numeros[i] % 2 !== 0) {
        somaImpares += numeros[i];
        console.log("Número " + numeros[i] + " na posição " + i);
    }
}

if (somaImpares !== 0) {
    console.log("Soma dos impares = " + somaImpares);
} else {
    console.log("Nenhum número impar foi digitado.");
}

