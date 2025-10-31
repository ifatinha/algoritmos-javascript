/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let somaPares = 0;
let somaImpares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = scanner.questionInt("Digite o " + i + "º número: ");

    if (numero % 2 == 0) {
        somaPares += numero;
    } else {
        somaImpares += numero;
    }
}

console.log("Soma dos números pares: " + somaPares);
console.log("Soma dos números impares: " + somaImpares);