/** Capitulo 06 - Vetores: Exemplo 08
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from 'readline-sync'

const vet1 = [];
const vet2 = [];

for (let i = 0; i < 5; i++) {
    vet1.push(Math.floor((Math.random() * 99) + 1));
    vet2.push(Math.floor((Math.random() * 99) + 1));
}

console.log("Elementos de vet1");
console.log(vet1.join(" - "));

console.log("Elementos de vet2");
console.log(vet2.join(" - "));

/** ordenando os vetores inicias */
console.log("\nvet1 e vet2 ordenados de maneira crescente");
vet1.sort(function (a, b) { return a - b });
console.log(vet1.join(" - "));

vet2.sort(function (a, b) { return a - b });
console.log(vet2.join(" - "));

/** vet3 com os elementos de vet1 e vet2 */
const vet3 = vet1.concat(vet2);
vet3.sort(function (a, b) { return a - b });
console.log("\nvet3 criado da junção de vet1 e vet2 e ordenado de maneira crescente.");
console.log(vet3.join(" - "));