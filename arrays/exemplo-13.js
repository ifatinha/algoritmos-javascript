/** Capitulo 06 - Vetores: Exemplo 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor((Math.random() * 99) + 1));
}

console.log(numeros.join(" - "));

let qtd = numeros.find(function (numero) {
    return numero > 50;
});

if (qtd !== undefined) {
    for (let i = 0; i < 10; i++) {
        if (numeros[i] > 50) {
            console.log(numeros[i] + " - posição: " + i);
        }
    }
} else {
    console.log("Não existe nenhum número > 50 na matriz de elementos.");
}
