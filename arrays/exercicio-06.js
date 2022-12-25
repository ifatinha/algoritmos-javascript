/** Capitulo 06 - Vetores: Exercicios Propostos 06
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const vendedores = [];
const vendas = [];
const valorComissao = 0.15;
const comissao = [];
let totalVendas = 0;
let maiorVenda = 0;
let vendedorMaiorValor = "";
let menorVenda = 0;
let vendendorMenorValor = "";

for (let i = 0; i < 5; i++) {
    vendedores.push(scanner.question("Vendendor: "));
    vendas.push(Math.floor((Math.random() * 9999) + 1));
    comissao.push(vendas[i] * valorComissao);
}

console.clear();
for (let i = 0; i < 5; i++) {

    let total = vendas[i] + comissao[i];

    if (i === 0) {
        maiorVenda = total;
        vendedorMaiorValor = vendedores[i];
        menorVenda = total;
        vendendorMenorValor = vendedores[i];
    }

    if (maiorVenda < total) {
        maiorVenda = total;
        vendedorMaiorValor = vendedores[i];
    }

    if (menorVenda > total) {
        menorVenda = total;
        vendendorMenorValor = vendedores[i];
    }
}

console.log("Relatório Mensal de Vendas");
for (let i = 0; i < 5; i++) {
    let total = vendas[i] + comissao[i];
    console.log("Vendendor".padEnd(54, ".") + ": " + vendedores[i]);
    console.log("Vendas".padEnd(50, ".") + ": +R$ " + vendas[i].toFixed(2));
    console.log("Comissão".padEnd(50, ".") + ": +R$ " + comissao[i].toFixed(2));
    console.log("Total".padEnd(50, ".") + ": =R$ " + total.toFixed(2) + "\n");
    totalVendas += total;
}

console.log("\nTotal de Vendas de todos os vendedores: " + totalVendas.toFixed(2));
console.log("O vendendor com maior vendas efetuadas foi " + vendedorMaiorValor +
    ", que vendeu R$ " + maiorVenda.toFixed(2));
console.log("O vendendor com menor vendas efetuadas foi " + vendendorMenorValor +
    ", que vendeu R$ " + menorVenda.toFixed(2));