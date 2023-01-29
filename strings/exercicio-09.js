/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contador(frase, letra) {

    let pattern = new RegExp(letra, 'g');
    let posicao = frase.search(pattern);

    return posicao;
}

let frase = scanner.question("Digite uma frase: ");
let letra = scanner.question("Digite a letra que você deseja pesquisar na frase: ");
console.clear();

console.log("Frase digitada: " + frase);
let posicao = contador(frase, letra);

if (posicao !== -1) {
    console.log("A posição da primeira aparição da letra " + letra + " na frase digitada é " + posicao);
} else {
    console.log("A letra " + letra + " não aparece nenhuma vez na frase digitada.");
}