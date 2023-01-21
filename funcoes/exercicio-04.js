/** Capitulo 08 - sub-rotinas: Exercicio 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function volumeEsfera(raio) {
    let volume = (4 / 3) * Math.pow(raio, 3);
    return volume;
}

let raio = scanner.questionFloat("Informe o raio da esfera: ");
let volume = volumeEsfera(raio);

console.log("O volume da esfera com raio de " + raio + " é de: " + volume.toFixed(2));