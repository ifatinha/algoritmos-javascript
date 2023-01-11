/** Capitulo 06 - sub-rotinas: Exemplo 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function maior(n1, n2, n3, n4, n5) {
    return Math.max(n1, n2, n3, n4, n5);
}

function menor(n1, n2, n3, n4, n5) {
    return Math.min(n1, n2, n3, n4, n5);
}

function verificarNumeros() {
    let num1 = scanner.questionInt("Numero 01: ");
    let num2 = scanner.questionInt("Numero 02: ");
    let num3 = scanner.questionInt("Numero 03: ");
    let num4 = scanner.questionInt("Numero 04: ");
    let num5 = scanner.questionInt("Numero 05: ");

    console.clear();
    console.log("Números lidos: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5);
    console.log("O maior número lido foi " + maior(num1, num2, num3, num4, num5));
    console.log("O menor número lido foi " + menor(num1, num2, num3, num4, num5));
}

verificarNumeros();