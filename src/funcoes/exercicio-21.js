/** Capitulo 08 - sub-rotinas: Exercicio 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function lerDados() {
    const matrix = [];

    for (let i = 0; i < 10; i++) {
        const vet = [];
        for (let j = 0; j < 10; j++) {
            vet.push(Math.floor((Math.random() * 9999) + 1));
        }

        matrix.push(vet);
    }

    return matrix;
}

function diagonalPrincipal(matriz) {
    const mat = [];
    let contador = 0;

    for (let i = 0; i < 10; i++) {
        let vet = matriz[i];
        let aux = []
        for (let j = contador; j < 10; j++) {
            aux.push(vet[j]);
        }

        contador++;
        mat.push(aux);
    }

    return mat;
}

function maiorElemento(mat) {
    let maior;

    for (let i = 0; i < 10; i++) {
        let vet = mat[i];

        if (i === 0) {
            maior = vet[0];
        }

        for (let j = 0; j < vet.length; j++) {
            if (maior < vet[j]) {
                maior = vet[j];
            }
        }
    }

    return maior;
}

const matriz = lerDados();
console.log("Matriz de Elementos\n" + matriz.join("\n"));

const diagonalP = diagonalPrincipal(matriz);
/*console.log("\nDiagonal Principal\n" + diagonalP.join(" \n "));*/

const maior = maiorElemento(diagonalP);
console.log("O maior elemento acima da diagonal principal é: " + maior);