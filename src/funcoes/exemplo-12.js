/** Capitulo 08 - sub-rotinas: Exemplo 12
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

function somaDivisores(numero) {
  let somaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      somaDivisores += i;
    }
  }

  return somaDivisores;
}

function verificaPerfeito(numero, somaDivisores) {
  if (numero === somaDivisores) {
    return true;
  }
}

function principal() {
  let contador = 0;
  let numero = 1;
  let numPerfeitos = [];

  while (contador < 3) {
    let soma = somaDivisores(numero);
    let perfeito = verificaPerfeito(numero, soma);

    if (perfeito === true) {
      numPerfeitos.push(numero);
      contador++;
    }

    numero++;
  }

  return numPerfeitos;
}

const perfeitos = principal();
console.log("Os 3 primeiros números perfeitos são: " + perfeitos.join(" - "));
