/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 11
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let valorCarro = scanner.questionFloat("Informe o valor do carro: ");
let precoFinal = 0.0;
let parcela = 6;
let juros = 3;

precoFinal = valorCarro - ((valorCarro * 20) / 100);
console.log("Preço de à vista: R$" + precoFinal.toFixed(2) + "\n");
precoFinal = valorCarro;

for (let i = 1; i <= 10; i++) {

    let valorJuros = (precoFinal * juros) / 100;
    precoFinal = valorCarro + valorJuros;
    let valorParcela = precoFinal / parcela;

    console.log("Valor do Carro".padEnd(50, ".") + ": R$" + valorCarro.toFixed(2));
    console.log("Percentual Juros".padEnd(50, ".") + ": " + juros + "%");
    console.log("Valor Juros".padEnd(50, ".") + ": R$" + valorJuros.toFixed(2));
    console.log("Quantidade de parcelas".padEnd(50, ".") + ": " + parcela + "x");
    console.log("Valor da parcela".padEnd(50, ".") + ": " + valorParcela.toFixed(2));
    console.log("Preço Final".padEnd(50, ".") + ": R$" + precoFinal.toFixed(2) + "\n");

    parcela += 6;
    juros += 3;
}