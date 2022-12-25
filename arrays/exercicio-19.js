/** Capitulo 06 - Vetores: Exercicios Propostos 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

const vet1 = [];
const vet2 = [];
const vet3 = [];

for (let i = 0; i < 10; i++) {
    vet1.push(Math.floor((Math.random() * 99) + 1));
    vet2.push(Math.floor((Math.random() * 99) + 1));
    vet3.push(vet1[i] * vet2[i]);
}

console.log("vet1 \n" + vet1.join(" - "));
console.log("\nvet2 \n" + vet2.join(" - "));
console.log("\nvet3 \n" + vet3.join(" - "));