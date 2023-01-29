/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 17
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function trocarLetras(palavra1, palavra2) {
    let palavra = "";
    
    if (palavra2 !== undefined) {
        let tamanho1 = 0;
        let tamanho2 = palavra2.length - 1;

        while (tamanho1 < palavra1.length || tamanho2 >= 0) {
            if (tamanho1 < palavra1.length) {
                palavra += palavra1.charAt(tamanho1);
                tamanho1++;
            }

            if (tamanho2 >= 0) {
                palavra += palavra2.charAt(tamanho2);
                tamanho2--;
            }
        }
    }else{
        for(let i = palavra1.length - 1; i >= 0; i--){
            palavra += palavra1.charAt(i);
        }
    }

    return palavra;
}

function criptografar(texto) {
    let novoTexto = "";
    let palavras = texto.split(" ");
    let contador = 0;

    while (contador < palavras.length) {
        novoTexto += trocarLetras(palavras[contador], palavras[contador + 1]) + " ";
        contador += 2;
    }

    return novoTexto;
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

console.log("Texto Digitado: " + texto);
let textoCriptografado = criptografar(texto);
console.log("Mensagem Criptografada: " + textoCriptografado);