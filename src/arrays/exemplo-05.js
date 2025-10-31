/** Capitulo 06 - Vetores: Exemplo 05
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const x = [];
const y = [];;
let existe;

for (let i = 0; i < 10; i++) {
    x.push(Math.floor((Math.random() * 9) + 1));
    y.push(Math.floor((Math.random() * 9) + 1));
}

console.log("Elementos do vetor X.");
console.log(x.join(", "));

console.log("\nElementos do vetor Y.");
console.log(y.join(", "));

/** vetor união */
const uniao = [];

for (let i = 0; i < 10; i++) {

    /** includes() retorna true se um determinado elemento existe na matriz */
    existe = uniao.includes(x[i]);

    if (existe !== true) {
        uniao.push(x[i]);
    }

    existe = uniao.includes(y[i]);
    if (existe !== true) {
        uniao.push(y[i]);
    }
}

console.log("\nVetor União");
console.log(uniao.join(", "));

/** vetor diferença */
const diferenca = [];

for (let i = 0; i < 10; i++) {
    existe = y.includes(x[i]);

    if (existe !== true) {
        diferenca.push(x[i]);
    }
}

console.log("\nVetor diferença - Os elementos que existem em X mas que não existem em Y");
console.log(diferenca.join(", "));

/** vetor soma */
const soma = [];
for (let i = 0; i < 10; i++) {
    soma.push(x[i] + y[i]);
}

console.log("\nVetor Soma");
console.log(soma.join(", "));

/** vetor produto */
const produto = [];
for (let i = 0; i < 10; i++) {
    produto.push(x[i] * y[i]);
}

console.log("\nVetor Produto");
console.log(produto.join(", "));

/** vetor interseção */
const intersecao = [];
for (let i = 0; i < 10; i++) {
    existe = x.includes(y[i]);

    if (existe === true) {
        existe = intersecao.includes(y[i]);
        if (existe !== true) {
            intersecao.push(y[i]);
        }
    }
}

console.log("\nVetor Interseção");
console.log(intersecao.join(", "));