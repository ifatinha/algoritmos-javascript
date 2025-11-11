/** Capitulo 06 - Vetores: Exemplo 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const vet1 = [];
const vet2 = [];
let contador = 19;

for (let i = 0; i < 20; i++) {
  vet1.push(scanner.question("Digite um elemento para VET1: "));
  vet2.push(scanner.question("Digite um elemento para VET2: "));
}

console.clear();
console.log("Vetores antes da troca");
console.log(vet1.join(" - "));
console.log(vet2.join(" - "));

for (let i = 0; i < 20; i++) {
  let aux = vet1[i];
  vet1[i] = vet2[contador];
  vet2[contador] = aux;
  contador--;
}

console.log("\nVetores depois da troca");
console.log(vet1.join(" - "));
console.log(vet2.join(" - "));
