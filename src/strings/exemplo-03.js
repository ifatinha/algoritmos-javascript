/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 03
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contarPalavras(frase) {
    const palavras = frase.split(" ");
    return palavras.length;
}

let frase = scanner.question("Digite uma frase qualquer: ");
console.clear();

console.log("Frase digitada: " + frase);
let qtdPalavras = contarPalavras(frase);
console.log("A quantidade de palavras que existem na frase digitada é " + qtdPalavras);