/** Capitulo 08 - sub-rotinas: Exemplo 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync';

function substituicao(vetor) {
    const vet = [];
    for (let i = 0; i < 25; i++) {
        if (vetor[i] < 0) {
            vet.push(0);
        } else {
            vet.push(vetor[i]);
        }
    }

    return vet;
}

function principal() {
    const numeros = [];

    for (let i = 0; i < 25; i++) {
        numeros.push(scanner.questionInt("Numero " + (i + 1) + ": "));
    }

    console.clear();
    const novoVetor = substituicao(numeros);
    console.log(novoVetor.join(", "));
}

principal();
