/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function verificarVogal(codigo) {
    let vogal = false;

    if (codigo === 65 || codigo === 69 || codigo === 73 || codigo === 79 || codigo === 85 ||
        codigo === 97 || codigo === 101 || codigo === 105 || codigo === 111 || codigo === 117) {
        vogal = true;
    }

    return vogal;
}

function criptografar(frase) {
    let texto = "";

    for (let i = 0; i < frase.length; i++) {

        let codigo = frase.charCodeAt(i);
        let letra = frase.charAt(i);
        let vogal = verificarVogal(codigo);

        if (vogal) {
            texto += "*";
        } else {
            texto += letra;
        }
    }

    return texto;
}

let frase = scanner.question("Digite a mensagem que deseja criptografar: ");
console.clear();
console.log("Frase: " + frase);

let fraseCriptografada = criptografar(frase);
console.log("Frase Criptografada: " + fraseCriptografada);
