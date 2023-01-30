/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 21
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function trocarPalavras(texto) {
    let palavras = texto.split(" ");
    let textoCriptografado = "";
    let primeira = palavras[0];
    let ultima = palavras[palavras.length - 1];

    for (let i = 0; i < palavras.length; i++) {

        if (i === 0) {
            textoCriptografado += ultima + " ";
        } else if (i === palavras.length - 1) {
            textoCriptografado += primeira + " ";
        } else {
            textoCriptografado += palavras[i] + " ";
        }
    }

    return textoCriptografado;
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

console.log("Mensagem digitada: " + texto);
let textoCriptografado = trocarPalavras(texto);
console.log("Mensagem Criptografada: " + textoCriptografado);
