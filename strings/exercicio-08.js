/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contador(frase, letra) {

    let pattern = new RegExp(letra, 'g');
    let contador = frase.match(pattern);

    return contador;
}

let frase = scanner.question("Digite uma frase: ");
let letra = scanner.question("Digite a letra que você deseja pesquisar na frase: ");
console.clear();

console.log("Frase digitada: " + frase);
let qtd = contador(frase, letra);

if (qtd !== null) {
    console.log("A letra " + letra + " aparece " + qtd.length + " vezes na frase.");
} else {
    console.log("A letra " + letra + " não aparece nenhuma vez na frase digitada.");
}