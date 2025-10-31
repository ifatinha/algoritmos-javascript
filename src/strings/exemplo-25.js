/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 25
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contarVerbos(verbo) {
    let palavras = verbo.split(" ");
    let contador = 0;

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];

        if (palavra.endsWith("r") || palavra.endsWith("R")) {
            contador++;
        }
    }

    return contador;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();

console.log("Frase Digitada: " + frase);
let qtdVerbos = contarVerbos(frase);

if (qtdVerbos === 0) {
    console.log("A frase digita não possui verbos.");
} else {
    console.log("A frase digitada possui " + qtdVerbos + " verbos.");
}