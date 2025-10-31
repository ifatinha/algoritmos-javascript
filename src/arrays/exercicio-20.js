/** Capitulo 06 - Vetores: Exercicios Propostos 20
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const vet1 = [];

for (let i = 0; i < 10; i++) {
  vet1.push(scanner.questionInt("Digite o " + (i + 1) + "º número: "));
}

const positivos = vet1.filter(function (numero) {
  return numero > 0;
});

console.clear();
console.log("Elementos do vetor \n" + vet1.join(", "));
console.log("\nPositivos \n" + positivos.join(", "));
