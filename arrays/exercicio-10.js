/** Capitulo 06 - Vetores: Exercicios Propostos 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const vet1 = [];
const vet2 = [];

for (let i = 0; i < 10; i++) {
    vet1.push(Math.floor((Math.random() * 99999) + 1));
}

for (let i = 0; i < 5; i++) {
    vet2.push(Math.floor((Math.random() * 999) + 1));
}

/** soma dos elementos pares */
const pares = vet1.filter(function (numero) {
    return numero % 2 === 0;
});

const somaPares = [];
for (let i = 0; i < pares.length; i++) {
    let soma = vet2.reduce(function (total, num) {
        return total + num;
    });

    somaPares.push(soma + pares[i]);
}
/***************************** */

/**divisores elementos impares*/
const impares = vet1.filter(function (numero) {
    return numero % 2 !== 0;
});

const divisores = [];

for (let i = 0; i < impares.length; i++) {
    let qtdDivisores = 0;
    for (let j = 0; j < vet2.length; j++) {
        if (impares[i] % vet2[j] === 0) {
            qtdDivisores++;
        }
    }

    divisores.push(qtdDivisores);
};

console.log("Vet1: " + vet1.join(" - "));
console.log("Vet2: " + vet2.join(" - "));
console.log("Vetor Soma: " + somaPares.join(" - ")+"\n");

for (let i = 0; i < impares.length; i++) {
    console.log("O número " + impares[i] + " possui " + divisores[i] +
        " divisores no vet2.");
};