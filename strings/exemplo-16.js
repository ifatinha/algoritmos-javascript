/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function verificarPalidromo(palavra) {
    let palavraInvertida = "";
    let ePalidromo = false;

    for (let i = palavra.length; i >= 0; i--) {
        palavraInvertida += palavra.charAt(i);
    }

    if (palavraInvertida === palavra) {
        ePalidromo = true;
    }

    return ePalidromo;
}

let palavra = scanner.question("Digite uma palavra: ");
console.clear();

let palidromo = verificarPalidromo(palavra);

if (palidromo === true) {
    console.log(palavra + " é palidromo.");
} else {
    console.log(palavra + " não é palidromo.");
}