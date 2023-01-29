/** Capitulo 09 - Manipulando Cadeias de Caracteres: Exercicio 13
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function repetirString(texto, qtd) {
    let textoRepetido = "";

    for (let i = 0; i < qtd; i++) {
        textoRepetido += texto + " ";
    }

    return textoRepetido;
}

let texto = scanner.question("Digite o texto que deseja repetir: ");
let qtd = scanner.questionInt("Quantas vezes você quer repetir o texto informado: ");

let textoRepetido = repetirString(texto, qtd);
console.log("Texto Repedito: " + textoRepetido);