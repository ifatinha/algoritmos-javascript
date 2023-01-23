/** Capitulo 08 - sub-rotinas: Exercicio 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function lerDados() {
    const matrix = [];

    for (let i = 0; i < 10; i++) {
        const vet = [];
        for (let j = 0; j < 10; j++) {
            vet.push(Math.floor((Math.random() * 99) + 1));
        }

        matrix.push(vet);
    }

    return matrix;
}

function diagonalPrincipal(matriz){
    
}

const matrix = lerDados();
console.log("Matriz de Elementos\n" + matrix.join("\n"));