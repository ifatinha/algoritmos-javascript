/** Capitulo 06 - Vetores: Exemplo 24
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];
const repetidos = [];
const vezes = [];

for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor((Math.random() * 99) + 1));
}

console.log(numeros.join(" - "));

for (let i = 0; i < 20; i++) {

    let numRepetidos = numeros.filter(function (numero) {
        return numero === numeros[i];
    });

    if (numRepetidos.length > 1) {
        let existe = repetidos.includes(numeros[i]);

        if (existe === false) {
            repetidos.push(numeros[i]);
            vezes.push(numRepetidos.length);
        }
    }
}

if (repetidos.length > 0) {
    for (let i = 0; i < repetidos.length; i++) {
        console.log("O número " + repetidos[i] + " aparece " + vezes[i] + " vezes.");
    }
} else {
    console.log("Não foi digitado nenhum número repetido.");
}