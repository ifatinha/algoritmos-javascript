/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function criptografar(texto){
    let textoCriptografado = [];

    for(let i = 0; i < texto.length; i++){
        textoCriptografado.push(texto.charCodeAt(i));
    }

    return textoCriptografado;
}

function descriptografar(texto){
    let textoCriptografado = "";

    for(let i = 0; i < texto.length; i++){
        let codigo = parseInt(texto[i]);
        textoCriptografado += String.fromCharCode(codigo);
    }

    return textoCriptografado;
}

let texto = scanner.question("Digite uma mensagem: ");
console.clear();

let textoCriptografado = criptografar(texto);
console.log("Mensagem Criptografada: " + textoCriptografado.join(" "));

let textoDescriptografado = descriptografar(textoCriptografado);
console.log("Mensagem Descriptografada: " + textoDescriptografado);