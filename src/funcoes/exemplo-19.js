/** Capitulo 08 - sub-rotinas: Exemplo 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

function lerDados() {
    const numeros = [];
    for (let i = 0; i < 6; i++) {
        const vet = [];
        for (let j = 0; j < 6; j++) {
            vet.push(Math.floor((Math.random() * 99) + 1));
        }
        numeros.push(vet);
    }

    return numeros;
}

function pegarElemento(arr, posicao) {
    return arr[posicao];
}

function diagonalPrincipal(mat) {
    const vet = [];
    let contador = 0;
    for (let i = 0; i < 6; i++) {
        const aux = mat[i];
        vet.push(pegarElemento(aux, contador));
        contador++;
    }

    return vet;
}

function multiplicarElementos(mat, dp) {
    const produto = [];
    for (let i = 0; i < 6; i++) {
        const aux = mat[i];
        const mult = [];
        for (let j = 0; j < 6; j++) {
            mult.push(aux[j] * dp[i]);
        }

        produto.push(mult);
    }

    return produto;
}

const matriz = lerDados();
console.log("Matriz de Elementos\n" + matriz.join(" \n"));

const diagonal = diagonalPrincipal(matriz);
console.log("\nDiagonal Principal: " + diagonal.join(", "));

console.log("\nMatriz Produto\n" + multiplicarElementos(matriz, diagonal).join("\n"));
