/** Capitulo 06 - Vetores: Exemplo 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];
const divisores = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor((Math.random() * 999) + 1));
}

while (contador < 5) {
    let numero = Math.floor(Math.random() * 99) + 1;
    let existe = divisores.includes(numero);
    if (existe === false) {
        divisores.push(numero);
        contador++;
    }
}

console.log("Elementos do vetor números: " + numeros.join(" - "));
console.log("Elementos do vetor divisores: " + divisores.join(" - "));

for (let i = 0; i < 10; i++) {
    console.log("Número " + numeros[i]);
    let achou = false;

    for (let j = 0; j < 5; j++) {
        if (numeros[i] % divisores[j] === 0) {
            console.log("Divisivel por " + [divisores[j]] + " na posição " + (j + 1));
            achou = true;
        }
    }

    if (achou === false) {
        console.log("Não possui divisores no vetor 2");
    }

    console.log();
}