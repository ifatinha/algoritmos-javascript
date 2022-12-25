/** Capitulo 06 - Vetores: Exercicios Propostos 09
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const produtos = [];
const codigos = [];
const precos = [];

for (let i = 0; i < 10; i++) {
    produtos.push(scanner.question("Produto: "));
    codigos.push(i + 1);
    precos.push(Math.floor((Math.random() * 9999) + 1));
}

console.clear();
console.log("Relatório");
for (let i = 0; i < 10; i++) {
    console.log("Produto".padEnd(30, ".") + ": " + produtos[i]);
    console.log("Codigo".padEnd(30, ".") + ": " + codigos[i]);
    console.log("Preço Unitário".padEnd(30, ".") + ": R$ " + precos[i].toFixed(2));
    let valorAumento = 0;

    if (codigos[i] % 2 === 0 && precos[i] > 1000) {
        valorAumento = (precos[i] * 20) / 100;
    } else if (codigos[i] % 2 === 0) {
        valorAumento = (precos[i] * 15) / 100;
    } else if (precos[i] > 1000) {
        valorAumento = (precos[i] * 10) / 100;
    }

    let novoPreco = precos[i] + valorAumento;
    console.log("Aumento".padEnd(30, ".") + ": R$ " + valorAumento.toFixed(2));
    console.log("Novo preço".padEnd(30, ".") + ": R$ " + novoPreco.toFixed(2) + "\n");
}