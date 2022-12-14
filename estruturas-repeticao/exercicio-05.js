/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

for (let i = 1; i <= 10; i++) {

    console.log("Tabuada do " + i);
    for (let j = 0; j <= 10; j++) {
        let resultado = i * j;
        console.log(i + " X " + j + " = " + resultado);
    }

    console.log("\n");
}