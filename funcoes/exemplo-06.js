/** Capitulo 08 - sub-rotinas: Exemplo 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function tabelaMultiplicacao(numero) {
    let txt = "";
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            let resultado = i * j;
            txt += resultado + "  ";
        }
        txt += "\n";
    }
    console.log(txt);
}

let numero = scanner.questionInt("Digite um número para ver sua tabuada: ");
tabelaMultiplicacao(numero);