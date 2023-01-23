/** Capitulo 08 - sub-rotinas: Exercicio 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function verificarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        return true;
    } else {
        return false;
    }
}

let lado1 = scanner.questionFloat("Lado 01: ");
let lado2 = scanner.questionFloat("Lado 02: ");
let lado3 = scanner.questionFloat("Lado 03: ");

let eTriangulo = verificarTriangulo(lado1, lado2, lado3);

if (eTriangulo) {
    console.log("As medidas formam um triângulo...");
} else {
    console.log("As medidas não formam triângulo...");
}