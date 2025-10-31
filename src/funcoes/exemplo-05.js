/** Capitulo 08 - sub-rotinas: Exemplo 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

function percentualAumento(precoAntigo, precoNovo) {
    let valorAumento = precoNovo - precoAntigo;
    let percentualAumento = (valorAumento * 100) / precoAntigo;
    return percentualAumento;
}

let precoAntigo = scanner.questionFloat("Digite o valor do antigo preco do produto: ");
let precoNovo = scanner.questionFloat("Digite o valor do novo preco do produto: ");

console.log("Percentual de aumento: " + percentualAumento(precoAntigo, precoNovo) + "%");