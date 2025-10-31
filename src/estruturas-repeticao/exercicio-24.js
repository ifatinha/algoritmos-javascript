/** Capitulo 05 - estruturas de repetição: Exercicio Proposto 24
 *  Livro Fundamentos da Programação de Computadores - Algoritmos em Pascal, C e C++ */

import scanner from "readline-sync";

let maior;
let menor;
let numero;
let contador = 0;

do {
  console.log("Bem-vindo! Para encerrar a aplicação digite 0.");
  numero = scanner.questionInt("Digite um número: ");

  if (numero > 0) {
    contador++;

    if (contador === 1) {
      maior = numero;
      menor = numero;
    }

    if (maior < numero) {
      maior = numero;
    }

    if (menor > numero) {
      menor = numero;
    }
  } else if (numero <= 0) {
    console.log("Número inválido! Digite um número maior ou igual a 0.");
  }
} while (numero !== 0);

console.log("Maior número informado: " + maior);
console.log("Menor número informado: " + menor);
