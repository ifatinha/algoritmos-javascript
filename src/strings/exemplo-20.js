/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function abreviarNome(nome) {
    let nomes = nome.split(" ");
    let nomeAbreviado = nomes[0]+" ";

    for (let i = 1; i < nomes.length; i++) {
        if (i === nomes.length - 1) {
            nomeAbreviado += nomes[i] + " ";
        } else {
            nomeAbreviado += nomes[i].charAt(0) + ". ";
        }
    }

    return nomeAbreviado;
}

let nomeCompleto = scanner.question("Digite seu nome completo: ");
console.clear();

console.log("Nome Completo: " + nomeCompleto);
let nomeAbreviado = abreviarNome(nomeCompleto);
console.log("Nome Abreviado: " + nomeAbreviado);