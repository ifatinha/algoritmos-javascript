/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 10
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function substituirPalavra(frase, palavra1, palavra2) {
    let novaFrase = frase.replace(palavra1, "Estudante");
    novaFrase = novaFrase.replace(palavra2, "Universidade");

    return novaFrase;
}

let frase = scanner.question("Digite uma frase: ");
let palavra1 = scanner.question("Digite a primeira palavra que voce gostaria de substituir: ");
let palavra2 = scanner.question("Digite a segunda palavra que voce gostaria de substituir: ");
console.clear();

console.log("Frase digitada: " + frase);
let fraseAtualizada = substituirPalavra(frase, palavra1, palavra2);
console.log("Frase Atualizada: " + fraseAtualizada);
