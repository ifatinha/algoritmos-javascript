/** Capitulo 08 - sub-rotinas: Exercicio 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

let verificaNumero = (numero) => {
    return numero > 0 ? "Positivo" : "Negativo";
}

let numero = scanner.questionInt("Digite um número: ");

console.log(numero + " é " + verificaNumero(numero));