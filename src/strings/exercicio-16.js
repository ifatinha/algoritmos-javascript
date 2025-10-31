/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function contarCaracteres(texto) {

    let letras;
    let numeros;
    let espacos;

    for (let i = 0; i < texto.length; i++) {
        
        letras = texto.match(/[a-zA-Z]/gi);
        numeros = texto.match(/[0-9]/gi);
        espacos = texto.match(/[" "]/gi);
    }

    console.log("Quantidade de Letras: " + letras.length);
    console.log("Quantidade de Numeros: " + numeros.length);
    console.log("Quantidade de Espaços: " + espacos.length);
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

console.log("Texto Digitado: " + texto);
contarCaracteres(texto);