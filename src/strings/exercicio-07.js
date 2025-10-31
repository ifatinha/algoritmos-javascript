/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contadorLetra(letra, frase) {

    let pattern = new RegExp(letra, 'g');
    let contador = frase.match(pattern);

    return contador.length;
}

function contarLetras(frase) {
    let palavras = frase.split(" ");
    const naoRepetidas = [];

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];

        for (let j = 0; j < palavra.length; j++) {
            let qtd = contadorLetra(palavra.charAt(j), frase);

            if (qtd === 1) {
                naoRepetidas.push(palavra.charAt(j));
            }
        }
    }

    return naoRepetidas;
}

let frase = scanner.question("Digite uma frase ");
console.clear();

console.log("Frase digitada: " + frase);
let qtdLetras = contarLetras(frase);
console.log("A frase digitada possui " + qtdLetras.length + " que não se repetem\n" + qtdLetras.join(", "));