/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function tirarEspacos(frase) {
    let palavras = frase.split(" ");
    let novaFrase = "";

    for (let i = 0; i < palavras.length; i++) {
        novaFrase += palavras[i];
    }

    return novaFrase;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();
console.log("Frase Digitada: " + frase);

let fraseSemEspacos = tirarEspacos(frase.trim());
console.log("Frase sem espaço: " + fraseSemEspacos);