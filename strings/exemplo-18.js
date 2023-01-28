/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 18
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function gerarVirus(frase) {
    let palavras = frase.split(" ");
    let virus = "";

    for (let i = 0; i < palavras.length; i++) {
        virus += " " + palavras[i] + " " + palavras[i];
    }

    return virus;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();

console.log("Frase digitada: " + frase);

let virus = gerarVirus(frase);
console.log("Virus: " + virus);
