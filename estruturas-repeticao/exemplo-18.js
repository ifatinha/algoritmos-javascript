/** Capitulo 05 - estruturas de repetição: Exemplo 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'
let numero;

do {
    numero = scanner.questionInt("Digite um numero: ");

    if (numero > 0) {
        console.log("Numero Digitado".padEnd(52, ".") + ": " + numero);
        console.log(numero + "^2".padEnd(50, ".") + ": " + Math.pow(numero, 2));
        console.log(numero + "^3".padEnd(50, ".") + ": " + Math.pow(numero, 3));
        console.log("Raiz Quadrade de " + numero + "".padEnd(33, ".") + ": " + Math.sqrt(numero).toFixed(2));
    }

} while (numero > 0)