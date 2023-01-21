/** Capitulo 08 - sub-rotinas: Exemplo 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function fatorial(numero) {
    if (numero === 1 || numero === 0) {
        return numero;
    } else {
        return numero * fatorial(numero - 1);
    }
}

function mostrarFatorial(vetor) {
    const fatoriais = [];
    for (let i = 0; i < 10; i++) {
        fatoriais.push(fatorial(vetor[i]));
    }

    return fatoriais;
}

console.log(mostrarFatorial(numeros).join(" - "));