/** Capitulo 06 - sub-rotinas: Exemplo 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

function lerDados() {
    const matriz = [];
    for (let i = 0; i < 12; i++) {
        const linha = [];
        for (let j = 0; j < 12; j++) {
            linha.push(Math.floor((Math.random() * 99) + 1));
        }
        matriz.push(linha);
    }

    return matriz;
}

function diagonalPrincipal(mat) {
    const dp = [];
    let contador = 1;
    for (let i = 0; i < 12; i++) {
        const vet = mat[i];
        const aux = [];
        for (let j = 0; j < contador; j++) {
            aux.push(vet[j]);
        }
        contador++;
        dp.push(aux);
    }

    return dp;
}

function somar(total, elemento) {
    return total + elemento;
}

function somarElementos(mat) {
    let soma = 0;
    for (let i = 0; i < 12; i++) {
        soma += mat[i].reduce(somar);
    }

    return soma;
}

function totalElementos(mat) {
    let qtd = 0
    for (let i = 0; i < 12; i++) {
        qtd += mat[i].length;
    }
    return qtd;
}

const matriz = lerDados();
console.log("Matriz de Elementos\n" + matriz.join(" \n"));

const elementos = diagonalPrincipal(matriz);
console.log("\nElementos Abaixo da DP\n" + elementos.join("\n"));

let qtdElementos = totalElementos(elementos);
let media = somarElementos(elementos) / qtdElementos;

console.log("\Média dos elementos abaixo da diagonal principal: " + media.toFixed(2));
