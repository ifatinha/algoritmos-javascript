/** Capitulo 08 - sub-rotinas: Exercicio 22
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function lerDados() {
  const matrix = [];

  for (let i = 0; i < 10; i++) {
    const vet = [];
    for (let j = 0; j < 5; j++) {
      vet.push(Math.floor(Math.random() * 99 + 1));
    }

    matrix.push(vet);
  }

  return matrix;
}

function somar(total, elemento) {
  return total + elemento;
}

function somarElementos(mat) {
  let soma = 0;
  for (let i = 5; i < 10; i++) {
    const vet = mat[i];
    soma += vet.reduce(somar);
  }

  return soma;
}

const matriz = lerDados();
console.log("Matriz de Elementos\n" + matriz.join("\n"));

let soma = somarElementos(matriz);
console.log(
  "A soma dos elementos da matriz a partir da sexta linha é: " + soma
);
