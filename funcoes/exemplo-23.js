/** Capitulo 06 - sub-rotinas: Exemplo 23
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

function lerDados() {
    const matriz = [];
    for (let i = 0; i < 3; i++) {
        const linha = [];
        for (let j = 0; j < 4; j++) {
            linha.push(Math.floor((Math.random() * 9) + 1));
        }
        matriz.push(linha);
    }

    return matriz;
}

function vetorNumeros(mat) {
    const vet = [];
    for (let i = 0; i < 3; i++) {
        const aux = mat[i];
        for (let j = 0; j < 4; j++) {
            vet.push(aux[j]);
        }
    }

    return vet;
}

const matriz = lerDados();
console.log("Matriz \n" + matriz.join("\n"));

const vetor = vetorNumeros(matriz);
console.log("Vetor: " + vetor.join(", "));
