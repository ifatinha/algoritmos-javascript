/** Capitulo 06 - Vetores: Exemplo 16
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const vet1 = [];
const vet2 = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
  vet1.push(Math.floor(Math.random() * 99 + 1));
}

while (contador < 5) {
  let numero = Math.floor(Math.random() * 9 + 1);
  let existe = vet2.includes(numero);

  if (existe === false) {
    vet2.push(numero);
    contador++;
  }
}

const pares = [];
const impares = [];

for (let i = 0; i < 10; i++) {
  let soma = vet1[i];

  for (let j = 0; j < 5; j++) {
    soma += vet2[j];
  }

  if (soma % 2 === 0) {
    pares.push(soma);
  } else {
    impares.push(soma);
  }
}

console.log("vet 01: " + vet1.join(" - "));
console.log("vet 02: " + vet2.join(" - "));
console.log("Números Pares: " + pares.join(" - "));
console.log("Números Impares: " + impares.join(" - "));
