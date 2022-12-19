/** Capitulo 06 - Vetores: Exemplo 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let numeros = [];
let positivos = [];
let negativos = [];

for (let i = 0; i < 10; i++) {
    numeros.push(scanner.questionInt("Digite um número: "));
}

for (let numero of numeros) {
    if (numero > 0) {
        positivos.push(numero);
    } else {
        negativos.push(numero);
    }
}

console.clear();

console.log("Array de elementos");
console.log(numeros);

if (positivos.length > 0) {
    console.log("Array com os elementos positivos.");
    console.log(positivos);
} else {
    console.log("Não foi informado nenhum elemento positivo.");
}

if (negativos.length > 0) {
    console.log("Array com os elementos negativos.");
    console.log(negativos);
} else {
    console.log("Não foi informado nenhum elemento negativo.");
}