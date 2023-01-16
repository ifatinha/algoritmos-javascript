/** Capitulo 06 - sub-rotinas: Exemplo 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

function lerDados() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const vet = [];
        for (let j = 0; j < 5; j++) {
            vet.push(Math.floor((Math.random() * 999) + 1));
        }
        numeros.push(vet);
    }

    return numeros;
}

function somarElementos(total, num) {
    return total + num;
}

function somarMatriz(mat) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += mat[i].reduce(somarElementos);
    }

    return soma;
}

const matriz = lerDados();
console.log("Matriz de elementos: \n" + matriz.join("\n"));
let soma = somarMatriz(matriz);
console.log("\nSoma dos elementos da matriz: " + soma);