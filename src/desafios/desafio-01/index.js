/** Capitulo 13 - Desafios: Desafio 04
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */


import scanner from 'readline-sync'

let numero = scanner.questionInt("Digite o numero que voce quer converter para binario: ");

let stringBinaria = stringBinario(numero);
let binario = reverseString(stringBinaria);

console.log(numero + " (dec) = " + binario + " (bin)");

function stringBinario(numero) {
    let stringBinaria = "";

    if (numero !== 1) {
        let resto;

        do {
            resto = Math.trunc(numero % 2);
            numero = Math.trunc(numero / 2);
            stringBinaria += resto;

            if (numero === 1) {
                stringBinaria += numero;
            }

        } while (numero !== 1);
    } else {
        stringBinaria = "1";
    }

    return stringBinaria;

}

function reverseString(txt) {
    let string = "";

    for (let i = txt.length; i >= 0; i--) {
        string += txt.charAt(i);
    }

    return string;
}