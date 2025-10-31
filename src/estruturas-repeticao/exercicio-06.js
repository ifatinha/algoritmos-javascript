/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

let totalVista = 0.0;
let totalPrazo = 0.0;

for (let i = 1; i <= 15; i++) {
    let codigo = scanner.question("Codigo da transacao " + i + "º (V - A vista; P - A prazo): ");
    while (codigo !== "V" && codigo !== "v" && codigo !== "P" && codigo !== "p") {
        codigo = scanner.question("Codigo Inválido! Informe uma das opcoes: V - A vista; P - A prazo: "); F
    }

    let valor = scanner.questionFloat("Valor da Transacao: ");

    if (codigo === "v" || codigo === "V") {
        totalVista += valor;
    } else {
        totalPrazo += valor;
    }
}

let valorTotal = totalVista + totalPrazo;
let valorPrestaoPrazo = totalPrazo / 3;

console.log("Total de compras à Vista".padEnd(30, ".") + ": +R$" + totalVista.toFixed(2));
console.log("Total de compras a Prazo".padEnd(30, ".") + ": +R$" + totalPrazo.toFixed(2));
console.log("Valor total de compras".padEnd(30, ".") + ": =R$" + valorTotal.toFixed(2));
console.log("Valor da prestação deas compras a prazo".padEnd(30, ".") + ": R$" + valorPrestaoPrazo.toFixed(2));