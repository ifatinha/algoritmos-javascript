/** Capitulo 08 - sub-rotinas: Exemplo 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

function lerDados() {
    const numeros = [];
    for (let i = 0; i < 6; i++) {
        const vet = [];
        for (let j = 0; j < 6; j++) {
            vet.push(Math.floor((Math.random() * 999) + 1));
        }
        numeros.push(vet);
    }

    return numeros;
}

function pegarElemento(arr, posicao) {
    return arr[posicao];
}

function menorElemento(vet) {
    let aux = vet[0];
    for (let i = 1; i < 6; i++) {
        if (vet[i] < aux) {
            aux = vet[i];
        }
    }

    return aux;
}

function elementosDiagonalSecundaria(mat) {
    const vet = [];
    let contador = 5;
    for (let i = 0; i < 6; i++) {
        const aux = mat[i];
        vet.push(pegarElemento(aux, contador));
        contador--;
    }

    return vet;
}

const matriz = lerDados();
console.log("Matriz de Elementos\n" + matriz.join(" \n"));

const diagonal = elementosDiagonalSecundaria(matriz);
console.log("\nElementos da Diagonal Secundária: " + diagonal.join(", "));

let menorNumero = menorElemento(diagonal);
console.log("O menor elemento da diagonal secundária é " + menorNumero);