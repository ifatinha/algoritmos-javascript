/** Capitulo 06 - sub-rotinas: Exemplo 01
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let numero = scanner.questionInt("Digite um número: ");

let resultado = (num) => num >= 0 ? 1 : 0;

console.log(resultado(numero));