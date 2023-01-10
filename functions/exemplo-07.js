/** Capitulo 06 - sub-rotinas: Exemplo 07
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

//função que calcula a media aritmética
let mediaAritmetica = (n1, n2, n3) => (n1 + n2 + n3) / 3;

//função que calcula a media ponderada
let mediaPonderada = (n1, p1, n2, p2, n3, p3) => ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

function calcularMedia(n1, n2, n3, letra) {
    switch (letra) {
        case "A":
        case "a":
            console.log("Média Arimética: " + mediaAritmetica(n1, n2, n3).toFixed(2));
            break;

        case "P":
        case "p":
            console.log("Média Ponderada: ");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }
}