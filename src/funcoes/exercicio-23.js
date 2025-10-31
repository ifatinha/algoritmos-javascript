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

function tipoTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "equilátero";
    } else if (a === b || b === c || a === c) {
        return "escaleno";
    } else {
        return "isósceles";
    }
}

let lado1 = scanner.questionFloat("Lado 01: ");
while (lado1 <= 0) {
    lado1 = scanner.questionFloat("Valor inválido! Dgite um valor positivo para o lado 01: ");
}

let lado2 = scanner.questionFloat("Lado 02: ");
while (lado2 <= 0) {
    lado2 = scanner.questionFloat("Valor inválido! Dgite um valor positivo para o lado 02: ");
}

let lado3 = scanner.questionFloat("Lado 03: ");
while (lado3 <= 0) {
    lado3 = scanner.questionFloat("Valor inválido! Dgite um valor positivo para o lado 03: ");
}

let eTriangulo = verificarTriangulo(lado1, lado2, lado3);

if (eTriangulo) {
    console.log("As medidas formam um triângulo " + tipoTriangulo(lado1, lado2, lado3));
} else {
    console.log("As medidas não formam triângulo...");
}