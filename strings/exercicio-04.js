/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function tirarEspacos(frase) {
    let palavras = frase.split(" ");
    let qtd = 0;

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] != "") {
            qtd++;
        }
    }

    return qtd;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();
console.log("Frase Digitada: " + frase);

let qtdPalavras = tirarEspacos(frase.trim());
console.log("A frase possui " + qtdPalavras + " palavras.");