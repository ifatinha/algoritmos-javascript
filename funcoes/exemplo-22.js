/** Capitulo 06 - sub-rotinas: Exemplo 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(scanner.questionInt((i + 1) + "º número: "));
}

function NumPositivos(vet) {
    const aux = [];
    for (let i = 0; i < 10; i++) {
        if (vet[i] > 0) {
            aux.push(vet[i]);
        }
    }
    return aux;
}

function numNegativos(vet) {
    const aux = [];
    for (let i = 0; i < 10; i++) {
        if (vet[i] < 0) {
            aux.push(vet[i]);
        }
    }
    return aux;
}

console.log("Vetor Numeros: " + numeros.join(", "));

const positivos = NumPositivos(numeros);
if (positivos.length > 0) {
    console.log("Positivos: " + positivos.join(", "));
} else {
    console.log("Nenhum número positivo foi digitado!");
}

const negativos = numNegativos(numeros);
if (negativos.length > 0) {
    console.log("Negativos: " + negativos.join(", "));
} else {
    console.log("Nenhum número negativo foi digitado!");
}

