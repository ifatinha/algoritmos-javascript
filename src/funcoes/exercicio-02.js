/** Capitulo 08 - sub-rotinas: Exercicio 02
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function converterSegundos(h, m, s) {
    let minutos = (h * 60) + m;
    let segundos = (minutos * 60) + s;
    return segundos;
}

let hora = scanner.questionInt("Hora: ");
let minutos = scanner.questionInt("Minutos: ");
let segundos = scanner.questionInt("Segundos: ");

console.clear();
let s = converterSegundos(hora, minutos, segundos);

console.log(hora + "h, " + minutos + "min e " + segundos + "s correspondem a " + s + " segundos.");