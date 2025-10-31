/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function compararPalavras(palavra1, palavra2) {
    let contador = 0;
    let permuta = false;

    for (let i = 0; i < palavra1.length; i++) {
        if (palavra2.includes(palavra1.charAt(i))) {
            contador++;
        }
    }

    if (contador === palavra1.length) {
        permuta = true;
    }

    return permuta;
}

let palavra1 = scanner.question("Digite a primeira palavra: ");
let palavra2 = scanner.question("Digite a segunda palavra: ");

let comparacao = compararPalavras(palavra1, palavra2);

if (comparacao === true) {
    console.log(palavra1 + " é uma permutação da palavra " + palavra2);
} else {
    console.log(palavra1 + " não é uma permuta da palavra " + palavra2);
}

