/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function substituir(frase) {
    let novaFrase = frase.replace(palavra1, "Estudante");

    return novaFrase;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();

console.log("Frase digitada: " + frase);
let fraseAtualizada = pesquisarPalavra(frase);
console.log("Frase Atualizada: " + fraseAtualizada);
