/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exemplo 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function retornarMes(nome) {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro",
        "outubro", "novembro", "dezembro"];

    let mes = 0;

    for (let i = 0; i < meses.length; i++) {
        if (nome.toLowerCase() === meses[i]) {
            mes = (i + 1);
        }
    }

    return mes;
}

function trocarMes(frase) {
    let palavras = frase.split(" ");
    let novaFrase = "";

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === "de") {
            novaFrase += "";
        } else {
            let codigo = retornarMes(palavras[i]);
            if (codigo !== 0) {
                novaFrase += "0" + codigo + " ";
            } else {
                novaFrase += palavras[i] + " ";
            }
        }
    }

    return novaFrase;
}

let frase = scanner.question("Digite uma frase: ");
console.clear();

console.log("Frase digitada: " + frase);

let novaFrase = trocarMes(frase);
console.log("Frase atualizada: " + novaFrase);