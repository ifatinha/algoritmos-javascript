/** Capitulo 06 - Vetores: Exercicios Propostos 15
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const clientes = [];
const locacoes = [];

for (let i = 0; i < 10; i++) {
    clientes.push("Cliente " + (i + 1));
    locacoes.push(Math.floor((Math.random() * 99) + 1));
}

console.log("Relatorio de Locações do ano de 2022");
for (let i = 0; i < 10; i++) {
    let qtd = locacoes[i] / 10;

    console.log("Cliente".padEnd(50, ".") + ": " + clientes[i]);
    console.log("Locações".padEnd(50, ".") + ": " + locacoes[i]);
    console.log("Locações Grátis".padEnd(50, ".") + ": " + Math.floor(qtd) + "\n");
}