/** Capitulo 08 - sub-rotinas: Exercicio 19
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

const vet1 = [];
const vet2 = [];

function lerDados() {
  for (let i = 0; i < 10; i++) {
    vet1.push(Math.floor(Math.random() * 99 + 1));
    vet2.push(Math.floor(Math.random() * 99 + 1));
  }
}

function vetorIntersecao(a, b) {
  const intersecao = [];
  let existe;
  for (let i = 0; i < 10; i++) {
    if (a.includes(b[i])) {
      existe = intersecao.includes(b[i]);
      if (existe === false) {
        intersecao.push(b[i]);
      }
    }
  }

  return intersecao;
}

lerDados();
console.log("vet 01: " + vet1.join(" - "));
console.log("vet 02: " + vet2.join(" - "));

const vet3 = vetorIntersecao(vet1, vet2);
console.log("vet 03: " + vet3.join(" - "));
